const translations = {
    id: {
        nav_home: "Home",
        nav_about: "Tentang",
        nav_services: "Layanan",
        nav_article: "Artikel",
        nav_contact: "Kontak Kami",
        blog_hero_title: "Artikel & Wawasan Bisnis",
        blog_hero_desc: "Panduan legalitas, strategi bisnis, dan informasi terbaru untuk membantu pertumbuhan usaha Anda.",
        featured_label: "Artikel Pilihan",
        featured_title: "Bikin PT Semakin Mudah dengan Peraturan Baru Pemerintah!",
        featured_desc: "Simak bagaimana regulasi terbaru memudahkan pengusaha UMKM dalam mendirikan badan hukum PT.",
        featured_btn: "Baca Artikel →",
        read_more: "Baca Artikel →",
        art2_title: "Simak Persiapan Biaya dan Tips Menghemat Biaya Pendirian PT",
        art2_desc: "Persiapan Biaya Pendirian PT",
        art3_title: "Hal-hal Penting yang Wajib Diketahui untuk Mendirikan PT",
        art3_desc: "Hal Penting untuk Mendirikan PT",
        art4_title: "7 Syarat Penting yang Sering Terlewat Saat Mendirikan Badan Usaha PT",
        art4_desc: "Syarat Penting Saat Mendirikan PT",
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
        blog_hero_title: "Articles & Business Insights",
        blog_hero_desc: "Legality guides, business strategies, and the latest information to help your business grow.",
        featured_label: "Featured Article",
        featured_title: "Setting Up a PT is Easier with New Government Regulations!",
        featured_desc: "Learn how the latest regulations make it easier for MSME entrepreneurs to establish a PT legal entity.",
        featured_btn: "Read Article →",
        read_more: "Read Article →",
        art2_title: "Preparation and Tips for Saving on PT Incorporation Costs",
        art2_desc: "PT Incorporation Cost Preparation",
        art3_title: "Essential Things You Must Know to Establish a PT",
        art3_desc: "Important Matters for Establishing a PT",
        art4_title: "7 Crucial Requirements Often Missed When Setting Up a PT",
        art4_desc: "Crucial Requirements for Setting Up a PT",
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
        blog_hero_title: "文章与业务见解",
        blog_hero_desc: "合法性指南、业务战略和最新信息，助力您的企业增长。",
        featured_label: "精选文章",
        featured_title: "随着政府新规的出台，成立有限公司 (PT) 变得更加容易！",
        featured_desc: "了解最新法规如何简化中小微企业主成立 PT 法人的流程。",
        featured_btn: "阅读文章 →",
        read_more: "阅读文章 →",
        art2_title: "了解成立有限公司 (PT) 的费用准备及省钱技巧",
        art2_desc: "成立 PT 的费用准备",
        art3_title: "成立有限公司 (PT) 必须了解的重要事项",
        art3_desc: "成立 PT 的重要事项",
        art4_title: "成立 PT 企业法人时经常被忽略的 7 个重要条件",
        art4_desc: "成立 PT 的关键要求",
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