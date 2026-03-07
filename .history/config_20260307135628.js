// Config mặc định (fallback khi không có dữ liệu từ backend)
window.DEFAULT_APP_CONFIG = {
    // ── Thông tin Website ──────────────────────────────────────────
    appTitle: 'Món Quà Nhỏ',
    appIcon: 'assets/images/icons/couple.png',

    // ── Trí tuệ AI ─────────────────────────────────────────────────
    devBypassKey: '9ac7ec230e0e4513578f309d6d3579ad',

    // ── Màn hình Passcode ──────────────────────────────────────────
    passcodeTitle: 'Nhập Mật Khẩu',
    passcodeSubtitle: 'Nhập ngày hôm nay để mở quà nhé',
    passcode: '0803', 

    morphTexts: ['Chúc mừng', "Ngày Quốc tê Phụ nữ", 'Vĩ Cầm dễ thương'],

    particleImage: 'assets/pngegg.png',

    sphereImages: [
        'assets/circle/anh1.jpg', 'assets/circle/anh2.jpg', 'assets/circle/anh3.jpg', 'assets/circle/anh4.jpg',
        'assets/circle/anh5.jpg', 'assets/circle/anh6.jpg', 'assets/circle/anh7.jpg', 'assets/circle/anh8.jpg',
        'assets/circle/anh9.jpg', 'assets/circle/anh10.jpg', 'assets/circle/anh11.jpg', 'assets/circle/anh12.jpg',
        'assets/circle/anh13.jpg', 'assets/circle/anh14.jpg', 'assets/circle/anh15.jpg', 'assets/circle/anh16.jpg',
        'assets/circle/anh17.jpg', 'assets/circle/anh18.jpeg', 'assets/circle/anh19.jpeg', 'assets/circle/anh20.jpeg',
        'assets/circle/anh21.jpeg', 'assets/circle/anh22.jpeg', 'assets/circle/anh23.jpeg', 'assets/circle/anh24.jpeg',
        'assets/circle/anh25.jpeg', 'assets/circle/anh26.jpeg', 'assets/circle/anh27.jpeg', 'assets/circle/anh28.jpg',
        'assets/circle/anh29.jpg',
        'assets/circle/video1.mp4', 'assets/circle/video2.mp4', 'assets/circle/video3.mp4', 'assets/circle/video4.mp4', 'assets/circle/video5.mp4'
    ],

    // ── Nội dung lá thư ─────────────────────────────────────────────
    letter: {
        text: "Chúc mừng ngày 8/3 Vĩ Cầm xinh đẹp!\n\n Chúc em 3 đừng, 3 không, 3 nhớ. \n Đừng buồn vì những chuyện không vui, đừng quá khắt khe với bản thân, đừng nghĩ rằng chỉ có một mình. \n Không cảm thấy cô đơn, không áp lực quá nhiều và không một mình gánh cả thế giới. \n Nhớ luôn yêu thương bản thân, nhớ luôn giữ nụ cười trên môi và nhớ là có một người đáng yêu đang chờ em.\n",
        image: 'assets/circle/hoa.JPG',
        caption: 'Bó hoa đáng iu nhất trần đời ♥'
    },

    // ── Nhạc nền ────────────────────────────────────────────────────
    bgMusic: 'assets/music/bgmucsic.mp3',
    bgVolume: 0.50
};


(function () {
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
        } catch (e) {
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