/**
 * Gesture Control — MediaPipe Hands
 * Điều khiển camera 3D bằng cử chỉ tay qua camera.
 *
 * Cử chỉ:
 *   ✊ Nắm tay (0-1 ngón) → Zoom IN (lại gần tâm)
 *   🖐 Mở 5 ngón tay     → Zoom OUT (ra xa tâm)
 *   👆 Di chuyển tay      → Xoay camera (orbit) theo hướng tay
 *
 * File riêng biệt, không sửa logic trong app.js.
 * Đọc camera + controls từ window._appCamera, window._appControls.
 */
import * as THREE from 'three';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';

// ═══════════════════════════════════════════════════
// GESTURE STATE (global)
// ═══════════════════════════════════════════════════
const GESTURE = {
    active: false,
    enabled: false,
    x: 0,
    y: 0,
    landmarks: null,
    ready: false,
    fingerCount: 0
};
window.GESTURE = GESTURE;

// ── Gesture tracking state ──
let prevHandX = null;
let prevHandY = null;
let smoothHandX = 0.5;            // Smoothed hand position
let smoothHandY = 0.5;
let smoothFingerCount = 0;
const HAND_SMOOTH = 0.25;         // Tăng độ mượt vị trí tay (thấp hơn = mượt hơn)
const SMOOTH_FACTOR = 0.15;       // Mượt hóa finger count
const ORBIT_SPEED = 2.5;          // Tốc độ xoay ngang dọc (giảm lại từ 4.0 xuống 2.5 do vuốt bằng điện thoại hơi nhanh)
const ZOOM_SPEED_IN = 0.35;
const ZOOM_SPEED_OUT = 0.30;
const DEAD_ZONE = 0.008;          // Vùng chết nhỏ hơn để nhận diện chuyển động tay nhạy hơn
const MIN_DISTANCE = 3;
const MAX_DISTANCE = 50;

// ── Orbit velocity (momentum) ──
let orbitVelTheta = 0;
let orbitVelPhi = 0;
const ORBIT_DAMPING = 0.88;       // Tăng damping để trượt mượt hơn (giữ đà lâu hơn chút)
const ORBIT_ACCEL = 0.6;          // Tăng gia tốc để bắt theo tay nhanh hơn

// ── Zoom velocity (momentum) ──
let zoomVel = 0;
const ZOOM_DAMPING = 0.88;

// ── Finger transition tracking ──
let prevFingerState = 'unknown'; // 'open' | 'closed' | 'mid' | 'unknown'

// ── Stability check (chống false positive) ──
let handDetectedFrames = 0;
const MIN_STABLE_FRAMES = 5;  // Cần 5 frame liên tiếp mới kích hoạt

// ── 2-hand tracking ──
let twoHandPrevDist = null;       // Khoảng cách giữa 2 tay frame trước
const TWO_HAND_ZOOM_SPEED = 80;   // Tốc độ zoom khi dùng 2 tay

let handLandmarker = null;
let videoEl = null;
let gestureRAF = null;
let detectionRAF = null;
let lastVideoTime = -1;

// ═══════════════════════════════════════════════════
// INJECT STYLES
// ═══════════════════════════════════════════════════
function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        #gesture-toggle {
            position: fixed; top: 16px; left: 16px; z-index: 3000;
            width: 48px; height: 48px; border-radius: 50%;
            border: 2px solid rgba(255,105,180,0.5);
            background: rgba(30,10,25,0.7);
            backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
            color: #fff; font-size: 22px; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 2px 12px rgba(255,105,180,0.2);
            -webkit-tap-highlight-color: transparent;
        }
        #gesture-toggle:hover { transform: scale(1.1); border-color: #ff69b4; }
        #gesture-toggle.active {
            background: rgba(255,105,180,0.3); border-color: #ff69b4;
            box-shadow: 0 0 20px rgba(255,105,180,0.5);
        }
        #gesture-video {
            position: fixed; bottom: 16px; left: 16px; z-index: 2500;
            width: 160px; height: 120px; border-radius: 12px;
            border: 2px solid rgba(255,105,180,0.4);
            background: #000; object-fit: cover;
            display: none !important; /* Ẩn video camera đi */
            transform: scaleX(-1);
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        #gesture-cursor {
            position: fixed; z-index: 2800; pointer-events: none;
            width: 28px; height: 28px; border-radius: 50%;
            background: radial-gradient(circle, rgba(255,105,180,0.8) 0%, rgba(255,105,180,0.2) 60%, transparent 100%);
            box-shadow: 0 0 20px rgba(255,105,180,0.6), 0 0 40px rgba(255,105,180,0.3);
            transform: translate(-50%, -50%);
            display: none; transition: opacity 0.15s;
        }
        #gesture-cursor.visible { display: block; }
        #gesture-status {
            position: fixed; top: 72px; left: 16px; z-index: 3000;
            font-size: 11px; color: rgba(255,182,193,0.8);
            font-family: -apple-system, sans-serif;
            background: rgba(30,10,25,0.6); padding: 4px 10px;
            border-radius: 8px; display: none;
            backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        #gesture-status.visible { display: block; }
        #gesture-indicator {
            position: fixed; bottom: 16px; left: 190px; z-index: 2600;
            font-size: 28px; pointer-events: none;
            display: none; transition: opacity 0.2s;
            text-shadow: 0 0 12px rgba(255,105,180,0.8);
            filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
        }
        #gesture-indicator.visible { display: block; }
        @media (max-width: 767px) {
            #gesture-video { width: 120px; height: 90px; bottom: 10px; left: 10px; }
            #gesture-toggle { width: 42px; height: 42px; font-size: 18px; top: 10px; left: 10px; }
            #gesture-status { top: 58px; left: 10px; font-size: 10px; }
            #gesture-indicator { left: 140px; bottom: 10px; font-size: 24px; }
        }
    `;
    document.head.appendChild(style);
}

// ═══════════════════════════════════════════════════
// CREATE UI
// ═══════════════════════════════════════════════════
function createUI() {
    const btn = document.createElement('button');
    btn.id = 'gesture-toggle';
    btn.type = 'button';
    btn.innerHTML = '✋';
    btn.title = 'Bật/tắt điều khiển bằng tay';
    document.body.appendChild(btn);

    videoEl = document.createElement('video');
    videoEl.id = 'gesture-video';
    videoEl.autoplay = true;
    videoEl.playsInline = true;
    videoEl.muted = true;
    document.body.appendChild(videoEl);

    const cursor = document.createElement('div');
    cursor.id = 'gesture-cursor';
    document.body.appendChild(cursor);

    const status = document.createElement('div');
    status.id = 'gesture-status';
    document.body.appendChild(status);

    // Emoji indicator hiển thị cử chỉ hiện tại
    const indicator = document.createElement('div');
    indicator.id = 'gesture-indicator';
    document.body.appendChild(indicator);

    btn.addEventListener('click', toggleGesture);
}

function setStatus(text, show) {
    const el = document.getElementById('gesture-status');
    if (!el) return;
    el.textContent = text;
    el.classList.toggle('visible', !!show);
}

function setIndicator(emoji, show) {
    const el = document.getElementById('gesture-indicator');
    if (!el) return;
    el.textContent = emoji;
    el.classList.toggle('visible', !!show);
}

// ═══════════════════════════════════════════════════
// FINGER COUNTING
// ═══════════════════════════════════════════════════
function countExtendedFingers(lm) {
    let count = 0;

    // Ngón cái: so sánh X (ngón cái mở ngang), kiểm tra hướng tay
    const thumbOpen = Math.abs(lm[4].x - lm[3].x) > 0.04 && Math.abs(lm[4].x - lm[2].x) > 0.06;
    if (thumbOpen) count++;

    // Ngón trỏ: tip cao hơn PIP (y nhỏ hơn = cao hơn trên màn hình)
    if (lm[8].y < lm[6].y) count++;

    // Ngón giữa
    if (lm[12].y < lm[10].y) count++;

    // Ngón áp út
    if (lm[16].y < lm[14].y) count++;

    // Ngón út
    if (lm[20].y < lm[18].y) count++;

    return count;
}

// Lấy tâm lòng bàn tay (trung bình wrist + middle finger MCP)
function getPalmCenter(lm) {
    return {
        x: (lm[0].x + lm[9].x) / 2,
        y: (lm[0].y + lm[9].y) / 2
    };
}

// ═══════════════════════════════════════════════════
// GESTURE START / STOP
// ═══════════════════════════════════════════════════
async function toggleGesture() {
    if (GESTURE.enabled) {
        stopGesture();
    } else {
        await startGesture();
    }
}

async function startGesture() {
    const btn = document.getElementById('gesture-toggle');

    // Kiểm tra camera API
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
        if (!isLocalhost && location.protocol !== 'https:') {
            alert(
                '📷 Camera yêu cầu HTTPS!\n\n' +
                'Trình duyệt chặn camera trên HTTP.\n\n' +
                '✅ Trên PC: Truy cập https://localhost:5173\n' +
                '✅ Trên điện thoại: Truy cập https://' + location.hostname + ':5173\n' +
                '(Bấm "Tiếp tục" nếu trình duyệt cảnh báo chứng chỉ)'
            );
        } else {
            alert('📷 Trình duyệt không hỗ trợ camera.\nHãy thử dùng Chrome hoặc Safari.');
        }
        return;
    }

    setStatus('Đang tải MediaPipe Tasks Vision...', true);

    try {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (!handLandmarker) {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
            );
            handLandmarker = await HandLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
                    delegate: isMobile ? "CPU" : "GPU"
                },
                runningMode: "VIDEO",
                numHands: 2,
                minHandDetectionConfidence: isMobile ? 0.4 : 0.65,
                minHandPresenceConfidence: isMobile ? 0.4 : 0.6,
                minTrackingConfidence: isMobile ? 0.3 : 0.5
            });
        }

        setStatus('Đang mở camera...', true);

        // Mở camera
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user', width: { ideal: 320 }, height: { ideal: 240 } }
        });
        videoEl.srcObject = stream;

        // Đợi video load data xong mới play() và bắt đầu detect
        videoEl.addEventListener('loadeddata', async () => {
            try {
                await videoEl.play();

                GESTURE.enabled = true;
                prevHandX = null;
                prevHandY = null;
                lastVideoTime = -1;
                videoEl.classList.add('visible');
                if (btn) btn.classList.add('active');
                setStatus('✋ Đưa tay trước camera', true);

                // Bắt đầu detection loop
                function predictWebcam() {
                    if (!GESTURE.enabled) return;
                    if (videoEl.currentTime !== lastVideoTime) {
                        lastVideoTime = videoEl.currentTime;
                        // Nhận diện bằng HandLandmarker
                        try {
                            const results = handLandmarker.detectForVideo(videoEl, performance.now());
                            onHandResults(results);
                        } catch (e) {
                            console.error("HandLandmarker detect error:", e);
                        }
                    }
                    detectionRAF = requestAnimationFrame(predictWebcam);
                }
                predictWebcam();

                // Bắt đầu gesture control loop (xử lý logic zoop/orbit)
                startGestureLoop();

                setTimeout(() => setStatus('', false), 3000);
            } catch (playErr) {
                console.warn("Video play error:", playErr);
                setStatus('❌ Không thể phát video camera', true);
            }
        }, { once: true });

    } catch (err) {
        console.error('Gesture control error:', err);
        let msg = err.message || 'Không rõ lỗi';
        if (err.name === 'NotAllowedError') msg = 'Bạn cần cho phép truy cập camera';
        else if (err.name === 'NotFoundError') msg = 'Không tìm thấy camera trên thiết bị';
        else if (err.name === 'NotReadableError') msg = 'Camera đang được sử dụng bởi app khác';
        setStatus('❌ ' + msg, true);
        alert('📷 Lỗi camera: ' + msg);
        setTimeout(() => setStatus('', false), 5000);
    }
}

function stopGesture() {
    GESTURE.enabled = false;
    GESTURE.active = false;
    prevHandX = null;
    prevHandY = null;

    if (gestureRAF) {
        cancelAnimationFrame(gestureRAF);
        gestureRAF = null;
    }
    if (detectionRAF) {
        cancelAnimationFrame(detectionRAF);
        detectionRAF = null;
    }

    if (videoEl && videoEl.srcObject) {
        videoEl.srcObject.getTracks().forEach(t => t.stop());
        videoEl.srcObject = null;
    }

    videoEl.classList.remove('visible');
    const cursor = document.getElementById('gesture-cursor');
    if (cursor) cursor.classList.remove('visible');
    const btn = document.getElementById('gesture-toggle');
    if (btn) btn.classList.remove('active');
    setIndicator('', false);
    setStatus('', false);
}

// ═══════════════════════════════════════════════════
// HAND DETECTION CALLBACK
// ═══════════════════════════════════════════════════
function onHandResults(results) {
    if (!GESTURE.enabled) return;

    const cursor = document.getElementById('gesture-cursor');

    // Lọc bàn tay theo confidence score (chống false positive)
    let validHands = [];
    if (results.landmarks && results.landmarks.length > 0) {
        for (let i = 0; i < results.landmarks.length; i++) {
            const score = results.handednesses && results.handednesses[i] && results.handednesses[i][0]
                ? results.handednesses[i][0].score : 0;

            // Lọc các kết quả có điểm tự tin cao
            const threshold = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 0.4 : 0.65;
            if (score >= threshold) {
                validHands.push(results.landmarks[i]);
            }
        }
    }
    const handCount = validHands.length;

    if (handCount > 0) {
        const landmarks = validHands[0];

        // Tọa độ ngón trỏ (hiển thị cursor)
        const indexTip = landmarks[8];
        GESTURE.x = (1 - indexTip.x) * window.innerWidth;
        GESTURE.y = indexTip.y * window.innerHeight;
        GESTURE.active = true;
        GESTURE.landmarks = landmarks;
        GESTURE.fingerCount = countExtendedFingers(landmarks);

        // ── 2 bàn tay ──
        if (handCount >= 2) {
            const lm2 = validHands[1];
            const fingers1 = countExtendedFingers(landmarks);
            const fingers2 = countExtendedFingers(lm2);

            // Chỉ zoom 2 tay khi CẢ HAI đều mở đủ 5 ngón
            if (fingers1 >= 4 && fingers2 >= 4) {
                GESTURE.landmarks2 = lm2;
                GESTURE.twoHands = true;
                const palm1 = getPalmCenter(landmarks);
                const palm2 = getPalmCenter(lm2);
                const dx = palm1.x - palm2.x;
                const dy = palm1.y - palm2.y;
                GESTURE.twoHandDist = Math.sqrt(dx * dx + dy * dy);
            } else {
                // 1 tay nắm 1 tay mở → nhận diện tay mở (single hand)
                GESTURE.landmarks2 = null;
                GESTURE.twoHands = false;
                GESTURE.twoHandDist = 0;
                twoHandPrevDist = null;
            }
        } else {
            GESTURE.landmarks2 = null;
            GESTURE.twoHands = false;
            GESTURE.twoHandDist = 0;
            twoHandPrevDist = null;
        }

        if (cursor) {
            cursor.style.left = GESTURE.x + 'px';
            cursor.style.top = GESTURE.y + 'px';
            cursor.classList.add('visible');
        }
    } else {
        GESTURE.active = false;
        GESTURE.landmarks = null;
        GESTURE.landmarks2 = null;
        GESTURE.fingerCount = 0;
        GESTURE.twoHands = false;
        GESTURE.twoHandDist = 0;
        twoHandPrevDist = null;
        prevHandX = null;
        prevHandY = null;
        handDetectedFrames = 0;
        // Dừng momentum khi không thấy tay
        orbitVelTheta = 0;
        orbitVelPhi = 0;
        zoomVel = 0;
        if (cursor) cursor.classList.remove('visible');
        setIndicator('', false);
    }
}

// ═══════════════════════════════════════════════════
// GESTURE → CAMERA CONTROL LOOP
// ═══════════════════════════════════════════════════
function startGestureLoop() {
    function loop() {
        if (!GESTURE.enabled) return;
        gestureRAF = requestAnimationFrame(loop);

        if (!GESTURE.active || !GESTURE.landmarks) return;

        // Chống false positive: cần detect đủ số frame liên tiếp
        handDetectedFrames++;
        if (handDetectedFrames < MIN_STABLE_FRAMES) return;

        const controls = window._appControls;
        const camera = window._appCamera;
        if (!controls || !camera) return;

        const lm = GESTURE.landmarks;
        const palm = getPalmCenter(lm);

        // Mirror X vì camera selfie
        const handX = 1 - palm.x;
        const handY = palm.y;

        // ══════════════════════════════════════
        // 2 BÀN TAY — Pinch Zoom
        // ══════════════════════════════════════
        if (GESTURE.twoHands && GESTURE.twoHandDist > 0) {
            const currentDist = GESTURE.twoHandDist;
            if (twoHandPrevDist !== null) {
                const delta = currentDist - twoHandPrevDist;
                const cameraDist = camera.position.distanceTo(controls.target);
                if (Math.abs(delta) > 0.005) {
                    if (delta > 0 && cameraDist > MIN_DISTANCE) {
                        // 2 tay mở rộng → Zoom IN (lại gần)
                        const dir = new THREE.Vector3().subVectors(controls.target, camera.position).normalize();
                        camera.position.addScaledVector(dir, delta * TWO_HAND_ZOOM_SPEED);
                        controls.update();
                    } else if (delta < 0 && cameraDist < MAX_DISTANCE) {
                        // 2 tay thu hẹp → Zoom OUT (ra xa)
                        const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
                        camera.position.addScaledVector(dir, Math.abs(delta) * TWO_HAND_ZOOM_SPEED);
                        controls.update();
                    }
                }
                setIndicator('🤲 Zoom 2 tay', true);
            }
            twoHandPrevDist = currentDist;
            prevHandX = handX;
            prevHandY = handY;
            return; // 2 tay → chỉ zoom, không orbit
        }
        twoHandPrevDist = null;

        // ══════════════════════════════════════
        // 1 BÀN TAY — Zoom (transition) + Orbit
        // ══════════════════════════════════════
        const rawFingers = GESTURE.fingerCount;
        smoothFingerCount += (rawFingers - smoothFingerCount) * SMOOTH_FACTOR;

        // ── Smooth hand position (lerp) ──
        smoothHandX += (handX - smoothHandX) * HAND_SMOOTH;
        smoothHandY += (handY - smoothHandY) * HAND_SMOOTH;

        // ── Xác định trạng thái ngón tay hiện tại ──
        let currentFingerState = 'mid';
        if (smoothFingerCount >= 4.0) currentFingerState = 'open';
        else if (smoothFingerCount <= 1.2) currentFingerState = 'closed';

        // ── ZOOM: chỉ khi CHUYỂN ĐỔI trạng thái ──
        // Mở → Nắm = Zoom IN (lại gần)
        // Nắm → Mở = Zoom OUT (ra xa)
        if (prevFingerState === 'open' && currentFingerState === 'closed') {
            zoomVel += ZOOM_SPEED_IN * 0.6;
            setIndicator('✊ Zoom In', true);
        } else if (prevFingerState === 'closed' && currentFingerState === 'open') {
            zoomVel -= ZOOM_SPEED_OUT * 0.6;
            setIndicator('🖐 Zoom Out', true);
        } else {
            // Giữ nguyên trạng thái → chỉ xoay
            setIndicator('👆 Xoay', true);
        }
        prevFingerState = currentFingerState;

        // ── ORBIT — tính velocity từ chuyển động tay ──
        if (prevHandX !== null && prevHandY !== null) {
            const dx = smoothHandX - prevHandX;
            const dy = smoothHandY - prevHandY;

            // Vuốt phải (dx > 0) → xoay phải (theta tăng)
            // Vuốt trái (dx < 0) → xoay trái (theta giảm)
            // Vuốt lên (dy < 0)  → xoay lên (phi giảm)
            // Vuốt xuống (dy > 0) → xoay xuống (phi tăng)
            if (Math.abs(dx) > DEAD_ZONE) {
                orbitVelTheta += dx * ORBIT_SPEED * ORBIT_ACCEL;
            }
            if (Math.abs(dy) > DEAD_ZONE) {
                orbitVelPhi += dy * ORBIT_SPEED * ORBIT_ACCEL;
            }
        }

        prevHandX = smoothHandX;
        prevHandY = smoothHandY;
    }

    // ── Apply velocity mỗi frame (kể cả khi không có tay) ──
    function applyVelocity() {
        if (!GESTURE.enabled) return;
        requestAnimationFrame(applyVelocity);

        const controls = window._appControls;
        const camera = window._appCamera;
        if (!controls || !camera) return;

        // ── Apply zoom velocity ──
        if (Math.abs(zoomVel) > 0.001) {
            const dist = camera.position.distanceTo(controls.target);
            if (zoomVel > 0 && dist > MIN_DISTANCE) {
                const dir = new THREE.Vector3().subVectors(controls.target, camera.position).normalize();
                camera.position.addScaledVector(dir, zoomVel);
            } else if (zoomVel < 0 && dist < MAX_DISTANCE) {
                const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
                camera.position.addScaledVector(dir, Math.abs(zoomVel));
            }
            zoomVel *= ZOOM_DAMPING;
            controls.update();
        }

        // ── Apply orbit velocity ──
        if (Math.abs(orbitVelTheta) > 0.0005 || Math.abs(orbitVelPhi) > 0.0005) {
            const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
            const spherical = new THREE.Spherical().setFromVector3(offset);

            spherical.theta += orbitVelTheta;
            spherical.phi += orbitVelPhi;

            // Giới hạn phi (không cho lật camera)
            spherical.phi = Math.max(0.15, Math.min(Math.PI - 0.15, spherical.phi));

            offset.setFromSpherical(spherical);
            camera.position.copy(controls.target).add(offset);
            camera.lookAt(controls.target);
            controls.update();

            // Damping — giảm dần tạo cảm giác mượt
            orbitVelTheta *= ORBIT_DAMPING;
            orbitVelPhi *= ORBIT_DAMPING;
        }
    }

    loop();
    applyVelocity();
}

// ═══════════════════════════════════════════════════
// PARTICLE INTERACTION (giữ lại cho hạt bị đẩy nhẹ)
// ═══════════════════════════════════════════════════
const _ray = new THREE.Raycaster();
const _ndc = new THREE.Vector2();

window.applyGestureForce = function (positions, sourcePositions, count, camera) {
    if (!GESTURE.active || !GESTURE.enabled) return;

    _ndc.set(
        (GESTURE.x / window.innerWidth) * 2 - 1,
        -(GESTURE.y / window.innerHeight) * 2 + 1
    );

    _ray.setFromCamera(_ndc, camera);
    const ro = _ray.ray.origin;
    const rd = _ray.ray.direction;

    const influenceRadius = 4.0;
    const forceStrength = 3.0;
    const influenceRadiusSq = influenceRadius * influenceRadius;

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const px = positions[i3] - ro.x;
        const py = positions[i3 + 1] - ro.y;
        const pz = positions[i3 + 2] - ro.z;

        const dot = px * rd.x + py * rd.y + pz * rd.z;
        if (dot < 0) continue;

        const cx = ro.x + rd.x * dot;
        const cy = ro.y + rd.y * dot;
        const cz = ro.z + rd.z * dot;

        const dx = positions[i3] - cx;
        const dy = positions[i3 + 1] - cy;
        const dz = positions[i3 + 2] - cz;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < influenceRadiusSq && distSq > 0.001) {
            const dist = Math.sqrt(distSq);
            const force = forceStrength * Math.pow(1 - dist / influenceRadius, 2);
            const invDist = 1 / dist;
            positions[i3] += dx * invDist * force * 0.03;
            positions[i3 + 1] += dy * invDist * force * 0.03;
            positions[i3 + 2] += dz * invDist * force * 0.03;
        }
    }
};

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
function initGestureControl() {
    injectStyles();
    createUI();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGestureControl);
} else {
    initGestureControl();
}
