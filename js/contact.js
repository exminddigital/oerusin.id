const translations = {
    id: {
        nav_home: "Home",
        nav_about: "Tentang",
        nav_services: "Layanan",
        nav_article: "Artikel",
        nav_contact: "Kontak Kami",
        contact_hero_title: "Konsultasi Legalitas Usaha",
        contact_hero_desc: "Isi form berikut dan tim kami akan langsung menghubungi Anda melalui WhatsApp.",
        contact_why_title: "Kenapa Konsultasi di Oerusin?",
        contact_point_1: "Konsultasi Gratis",
        contact_point_2: "Proses Cepat & Legal",
        contact_point_3: "Didampingi Tim Profesional",
        contact_wa_fast: "Respon Cepat WhatsApp",
        contact_wa_time: "Senin - Sabtu • 09.00 - 18.00",
        form_title: "Form Konsultasi",
        form_subtitle: "Lengkapi data di bawah untuk terhubung ke WhatsApp kami.",
        form_opt_default: "Pilih Layanan",
        form_btn: "Kirim via WhatsApp →",
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
        contact_hero_title: "Business Legality Consultation",
        contact_hero_desc: "Fill out the form below and our team will contact you directly via WhatsApp.",
        contact_why_title: "Why Consult with Oerusin?",
        contact_point_1: "Free Consultation",
        contact_point_2: "Fast & Legal Process",
        contact_point_3: "Accompanied by Professional Team",
        contact_wa_fast: "Fast Response WhatsApp",
        contact_wa_time: "Monday - Saturday • 09:00 - 18:00",
        form_title: "Consultation Form",
        form_subtitle: "Complete the data below to connect to our WhatsApp.",
        form_opt_default: "Select Service",
        form_btn: "Send via WhatsApp →",
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
        contact_hero_title: "业务合法化咨询",
        contact_hero_desc: "填写下方表格，我们的团队将通过 WhatsApp 直接联系您。",
        contact_why_title: "为什么选择 Oerusin 咨询？",
        contact_point_1: "免费咨询",
        contact_point_2: "快捷且合法的流程",
        contact_point_3: "专业团队全程陪同",
        contact_wa_fast: "WhatsApp 快速响应",
        contact_wa_time: "周一至周六 • 09:00 - 18:00",
        form_title: "咨询表格",
        form_subtitle: "填写下方资料，连接至我们的 WhatsApp。",
        form_opt_default: "选择服务",
        form_btn: "通过 WhatsApp 发送 →",
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