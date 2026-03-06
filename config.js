// Config mặc định (fallback khi không có dữ liệu từ backend)
    window.DEFAULT_APP_CONFIG = {
        // ── Thông tin ứng dụng ──────────────────────────────────────────
        appTitle:          'Món Quà Nhỏ',
        appIcon:           'assets/images/icons/couple.png',

        // ── Passcode ────────────────────────────────────────────────────
        passcode:          '0308',
        passcodeTitle:     'Nhập mật khẩu',
        passcodeSubtitle:  'Mở món quà đặc biệt',

        // ── Chữ morph hạt (theo thứ tự hiển thị) ───────────────────────
        morphTexts: ['happy', "women's day", 'em iu'],

        // ── Ảnh morph thành hạt ─────────────────────────────────────────
        particleImage:     'assets/pngegg.png',

        // ── Ảnh quả cầu sphere ──────────────────────────────────────────
        sphereImages: [],

        // ── Nội dung lá thư ─────────────────────────────────────────────
        letter: {
            text: "Happy Women's Day!\n\nEm iu, chúc em luôn xinh đẹp và hạnh phúc.",
            image: '',
            caption: '♥'
        },

        // ── Nhạc nền ────────────────────────────────────────────────────
        bgMusic:  'assets/music/bgmucsic.mp3',
        bgVolume: 0.55
    };

    // Chuẩn hóa luồng lấy config:
    // - preview=1  -> lấy từ localStorage (editor)
    // - ?<websiteId> -> gọi API womenday
    // - không gì cả -> dùng DEFAULT_APP_CONFIG
    (function() {
        const params = new URLSearchParams(location.search);
        const preview = params.get('preview');

        // Preview từ editor
        if (preview === '1') {
            try {
                var s = localStorage.getItem('TEST2_CONFIG');
                if (s) {
                    var cfg = JSON.parse(s);
                    window.APP_CONFIG = cfg;
                    window.APP_CONFIG_PROMISE = Promise.resolve(cfg);
                    return;
                }
            } catch(e) {
                console.error('Không đọc được TEST2_CONFIG từ localStorage:', e);
            }
        }

        // Website thật: query dạng ?<websiteId> (chỉ lấy segment đầu, bỏ phần Zalo/UTM phía sau)
        var rawSearch = window.location.search || '';
        var websiteId = '';
        if (rawSearch && rawSearch !== '?preview=1') {
            websiteId = rawSearch.replace(/^\?/, '').trim().split('&')[0].trim();
        }

        if (websiteId) {
            const API_BASE_WOMENDAY = 'https://api.deargift.online/api/womenday';
            window.APP_CONFIG_PROMISE = (async () => {
                try {
                    const res = await fetch(API_BASE_WOMENDAY + '/' + encodeURIComponent(websiteId));
                    const data = await res.json();
                    if (data && data.success && data.data) {
                        window.APP_CONFIG = data.data;
                        return window.APP_CONFIG;
                    }
                    // Hết hạn hoặc không tồn tại
                    const expired = data && data.expired;
                    const msg = (data && data.message) || (expired ? 'Website đã hết hạn.' : 'Không tìm thấy website.');
                    document.body.innerHTML = '<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:2rem;font-family:system-ui;text-align:center;background:linear-gradient(135deg,#1a0a1c,#2d1b2e);box-sizing:border-box;color:#fff;">'
                        + '<div style="font-size:64px;margin-bottom:16px;">😢</div>'
                        + '<h1 style="font-size:1.6rem;margin-bottom:8px;">' + (expired ? 'Website đã hết hạn' : 'Không tìm thấy website') + '</h1>'
                        + '<p style="max-width:480px;opacity:0.85;">' + msg + '</p>'
                        + '</div>';
                    throw new Error(msg);
                } catch (err) {
                    console.error('Lỗi tải config womenday:', err);
                    // Trả về reject để module JS có thể dừng lại
                    throw err;
                }
            })();
            return;
        }

        // Trường hợp không có websiteId: dùng config mặc định
        if (!window.APP_CONFIG) {
            window.APP_CONFIG = window.DEFAULT_APP_CONFIG;
        }
        if (!window.APP_CONFIG_PROMISE) {
            window.APP_CONFIG_PROMISE = Promise.resolve(window.APP_CONFIG);
        }
    })();