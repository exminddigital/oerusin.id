const translations = {
    id: {
        nav_home: "Home",
        nav_about: "Tentang",
        nav_services: "Layanan",
        nav_article: "Artikel",
        nav_contact: "Kontak Kami",
        services_hero_title: "Layanan Oerusin",
        services_hero_desc: "Oerusin menyediakan layanan legalitas dan perizinan usaha profesional.",
        start_from: "Mulai Dari",
        pelajari: "Pelajari Layanan",
        whatsapp: "Konsultasi WhatsApp",
        cta_title: "Konsultasikan Legalitas Bisnis Anda Sekarang",
        cta_btn_contact: "Hubungi Kami →",
        cta_btn_service: "Lihat Layanan",
        footer_tagline: "Solusi legalitas dan perizinan bisnis terpercaya untuk pertumbuhan usaha Anda.",
        footer_menu_1: "Layanan",
        footer_link_pt: "Pendirian PT",
        footer_link_legal: "Legalitas Usaha",
        footer_link_permit: "Perizinan",
        footer_link_cek: "Cek Nama PT",
        footer_menu_2: "Perusahaan",
        footer_link_about: "Tentang",
        footer_link_article: "Artikel",
        footer_link_partner: "Partner",
        footer_menu_3: "Kontak",
        footer_copy: "© 2026 Oerusin. All rights reserved.",
        footer_link_privacy: "Privasi",
        footer_link_terms: "Syarat & Ketentuan",
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_article: "Article",
        nav_contact: "Contact Us",
        services_hero_title: "Oerusin Services",
        services_hero_desc: "Oerusin provides professional business legality and licensing services.",
        start_from: "Start From",
        pelajari: "Learn Services",
        whatsapp: "WhatsApp consultation",
        cta_title: "Consult Your Business Legality Now",
        cta_btn_contact: "Contact Us →",
        cta_btn_service: "View Services",
        footer_tagline: "Trusted business legality and licensing solutions for your business growth.",
        footer_menu_1: "Services",
        footer_link_pt: "PT Incorporation",
        footer_link_legal: "Business Legality",
        footer_link_permit: "Licensing",
        footer_link_cek: "Check PT Name",
        footer_menu_2: "Company",
        footer_link_about: "About Us",
        footer_link_article: "Articles",
        footer_link_partner: "Partners",
        footer_menu_3: "Contact",
        footer_copy: "© 2026 Oerusin. All rights reserved.",
        footer_link_privacy: "Privacy",
        footer_link_terms: "Terms & Conditions"
    },
    cn: {
        nav_home: "首页",
        nav_about: "关于我们",
        nav_services: "服务",
        nav_article: "文章",
        nav_contact: "联系我们",
        services_hero_title: "Oerusin 服务",
        services_hero_desc: "Oerusin 提供专业的业务合法性和许可服务。",
        start_from: "开始于",
        pelajari: "学习服务",
        whatsapp: "WhatsApp咨询",
        cta_title: "立即咨询您的业务合法性",
        cta_btn_contact: "联系我们 →",
        cta_btn_service: "查看服务",
        footer_tagline: "为您业务增长提供值得信赖的法律和许可解决方案。",
        footer_menu_1: "服务项目",
        footer_link_pt: "成立有限责任公司 (PT)",
        footer_link_legal: "业务合法化",
        footer_link_permit: "许可申请",
        footer_link_cek: "核名查询",
        footer_menu_2: "公司信息",
        footer_link_about: "关于我们",
        footer_link_article: "文章咨询",
        footer_link_partner: "合作伙伴",
        footer_menu_3: "联系方式",
        footer_copy: "© 2026 Oerusin. 版权所有。",
        footer_link_privacy: "隐私政策",
        footer_link_terms: "服务条款"
    }
};

function switchLanguage(lang) {
    // Simpan pilihan bahasa ke localStorage agar tidak reset saat pindah halaman
    localStorage.setItem('selectedLang', lang);

    // Cari semua elemen yang punya atribut data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'id';
    switchLanguage(savedLang);
});