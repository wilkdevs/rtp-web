/**
 * ===========================================
 * KONFIGURASI WEBSITE SLOT - BRAND123 🎰
 * ===========================================
 * 
 * Penjelasan Konfigurasi:
 * 
 * 1. Warna Kartu Game: 🎮
 *    - firstColor, fifthColor: warna utama kartu game. 🎨
 *    - secondColor - fourthColor: gradasi/variasi tambahan. 🌈
 * 
 * 2. Warna Tombol PLAY: 🔘
 *    - g1Color dan g2Color: warna gradasi untuk tombol Play game. 🎯
 * 
 * 3. Pengaturan Tampilan Konten: 🖥️
 *    - contentWith: lebar maksimum konten utama (px atau 100% untuk fullscreen). 💻
 *    - contentBackground: gambar latar belakang utama website. 🖼️
 *    - gamesColumn: jumlah kolom daftar game (3, 4, atau 6). 📊
 * 
 * 4. Informasi Dasar Website: 🌐
 *    - websiteURL, websiteURLRegister, websiteURLPromo: link utama, pendaftaran, dan promosi. 🔗
 *    - websiteLogo: logo yang ditampilkan di header. 🏷️
 *    - websiteName, websiteDesc: nama dan deskripsi brand. 🏆
 *    - contactWhatsapp, contactTelegramUrl: kontak admin (WA/Telegram). 📱
 * 
 * 5. Pengaturan Durasi Konsistensi: ⏰
 *    - CONSISTENCY_DURATION: interval waktu (menit) update persentase dan jam di rtp game. ⏱️
 * 
 * 6. Running Text: 🏃
 *    - runningTextData: tulisan berjalan di bawah logo, bisa diubah sesuai promo/pemberitahuan/info. 📝
 * 
 * 7. Banner Slider: 📸
 *    - bannersSectionData: daftar gambar banner yang muncul secara sliding. 🔄
 * 
 * 8. Tombol Login dan Daftar: 🔑
 *    - websiteButtonSectionData: daftar tombol, warna, link, dan tampilan hover. 🖱️
 * 
 * 9. Daftar Provider Game: 🎮
 *    - providersSectionData: icon dan nama masing-masing provider. 🎲
 * 
 * 10. Deskripsi & Data Provider Game: 🧩
 *     - gameSectionData: deskripsi, rating, like, dan file JSON daftar game dari tiap provider. 📈
 * 
 * 11. Tombol Floating (Desktop Only): 🏄
 *     - floatingButtons: tombol promosi dan kontak (bisa buka modal atau link). 🖱️
 * 
 */

// WARNA KARTU GAME
const firstColor = "rgb(245, 176, 66)"; // 🎨
const secondColor = "rgb(218, 165, 32)"; // 🌈
const thirdColor = "rgb(250, 235, 215)"; // 🌟
const fourthColor = "rgb(184, 134, 11)"; // 🎮
const fifthColor = "rgb(207, 181, 59)"; // ✨

// WARNA TOMBOL PLAY (GRADASI)
const g1Color = "rgb(184, 134, 11)"; // 🔘
const g2Color = "rgb(207, 181, 59)"; // 🎯

// PENGATURAN STYLE KONTEN WEBSITE
const contentWith = '1400px'; // 🖥️
const contentBackground = "images/background.jpg"; // 🖼️
const gamesColumn = 4; // 📊

// DATA WEBSITE 
const websiteURL = "https://google.com/"; // 🌐
const websiteURLRegister = "https://google.com/"; // 🔗
const websiteURLPromo = "https://google.com/"; // 🔗
const websiteLogo = "images/logo.png"; // 🏷️
const websiteName = "BRAND123"; // 🏆
const websiteDesc = "agen slot terpercaya yang menyediakan rtp slot pasti maxwin hanya dengan modal receh "; // 💸
const contactWhatsapp = "6282100000000"; // 📱
const contactTelegramUrl = "https://t.me/cilla_chill"; // 📱

// DURASI UPDATE DATA GAME (MENIT)
const CONSISTENCY_DURATION = 30; // ⏱️

// RUNNING TEXT DI BAWAH LOGO
const runningTextData = {
    text: "SELAMAT DATANG DI BRAND123 AGEN SLOT GACOR MODAL KECIL PASTI MAXWIN", // 📝
    background: "#c9a639", // 🎨
    fontWeight: "500", // 💪
    textTransform: "uppercase", // 🔠
    fontSize: "1rem", // 🖋️
    color: "#333333", // 🎨
    padding: "0.1rem" // 💫
};

// BANNER SLIDER
const bannersSectionData = [
    { image: "images/banners/banner-1.jpg", alt: "slider 1" }, // 📸
    { image: "images/banners/banner-2.jpg", alt: "slider 2" }, // 📸
    { image: "images/banners/banner-3.jpg", alt: "slider 3" } // 📸
];

// TOMBOL LOGIN & DAFTAR
const websiteButtonSectionData = [
    {
        text: "LOGIN", // 🔑
        url: "https://www.google.com", // 🔗
        background: "linear-gradient(0deg, #f5b042 0%, #ffcc70 100%)", // ✨
        hoverBackground: "linear-gradient(0deg, #ffcc70 0%, #f5b042 100%)", // ✨
        color: "#000000", // ⚫
        hoverColor: "#000000", // ⚫
        border: "1px solid #f5b042" // 🎮
    },
    {
        text: "DAFTAR", // 🔑
        url: "https://www.google.com", // 🔗
        background: "linear-gradient(0deg, #ff7f50 0%, #ffa07a 100%)", // 🧡
        hoverBackground: "linear-gradient(0deg, #ffa07a 0%, #ff7f50 100%)", // 🧡
        color: "#ffffff", // ⚪
        hoverColor: "#ffffff", // ⚪
        border: "1px solid #ff7f50" // 🧡
    }
];

// DAFTAR PROVIDER GAME
const providersSectionData = {
    bgColor: "#f9d784", // 🎲
    providers: [
        { id: "idn", image: "images/icons/idn.png", name: "IDN Play" }, // 🎮
        { id: "pp", image: "images/icons/pp.png", name: "Pragmatic Play" }, // 🎰
        { id: "pg", image: "images/icons/pg.png", name: "PG Soft" }, // 🎮
        { id: "hb", image: "images/icons/hb.png", name: "Habanero" }, // 🎰
        { id: "gmw", image: "images/icons/gmw.png", name: "Spade Gaming" }, // 🎮
        { id: "tg", image: "images/icons/tg.png", name: "Top Trend" }, // 🎰
        { id: "mg", image: "images/icons/mg.png", name: "Micro Gaming" }, // 🎮
        { id: "nolimit", image: "images/icons/nolimit.png", name: "Nolimit" }, // 🎮
        { id: "playstar", image: "images/icons/playstar.png", name: "Playstar" }, // 🎰
        { id: "idnlottery", image: "images/icons/idnlottery.png", name: "E-lottery" } // 🎲
    ]
};

// DESKRIPSI & DATA GAME PER PROVIDER
const gameSectionData = {
    "gmw": {
        description: "GMW SLOT LIVE RTP", // 🎮
        rating: 3.0, // ⭐
        like: "4.0K", // 💖
        items: "data/gmw.json" // 📈
    },
    "hb": {
        description: "HABANERO SLOT LIVE RTP", // 🎰
        rating: 4.0, // ⭐⭐
        like: "5.1K", // 💖
        items: "data/hb.json" // 📈
    },
    "idn": {
        description: "IDN Play SLOT LIVE RTP", // 🎮
        rating: 5.0, // ⭐⭐⭐
        like: "5.0K", // 💖
        items: "data/idn.json" // 📈
    },
    "idnlottery": {
        description: "Game belum tersedia", // 🚫
        rating: 0, // ❌
        like: "0", // ❌
        items: "data/idnlottery.json" // 📈
    },
    "mg": {
        description: "MICRO GAMING SLOT LIVE RTP", // 🎮
        rating: 3.0, // ⭐
        like: "3.8K", // 💖
        items: "data/mg.json" // 📈
    },
    "nolimit": {
        description: "NOLIMIT SLOT LIVE RTP", // 🎰
        rating: 3.0, // ⭐
        like: "3.8K", // 💖
        items: "data/nolimit.json" // 📈
    },
    "pg": {
        description: "POCKET GAMING SLOT LIVE RTP", // 🎮
        rating: 3.0, // ⭐
        like: "3.8K", // 💖
        items: "data/pg.json" // 📈
    },
    "pp": {
        description: "PRAGMATIC PLAY SLOT LIVE RTP", // 🎰
        rating: 5.0, // ⭐⭐⭐
        like: "5.9K", // 💖
        items: "data/pp.json" // 📈
    },
    "tg": {
        description: "TOP TREND GAMING SLOT LIVE RTP", // 🎮
        rating: 3.0, // ⭐
        like: "3.5K", // 💖
        items: "data/tg.json" // 📈
    }
};

// TOMBOL FLOATING UNTUK DESKTOP
const floatingButtons = [
    {
        id: "promo-btn", // 🏄
        type: "link", // 🔗
        url: "https://linkku.me/7wA5NB", // 🌐
        image: "images/buttons/promo.gif", // 🖼️
        alt: "Promosi" // 📣
    },
    {
        id: "contact-btn", // 🏄
        type: "modal", // 📝
        modalTarget: "#contact", // 📞
        image: "images/buttons/whatsapp.gif", // 📱
        alt: "WhatsApp" // 💬
    }
];
