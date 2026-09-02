/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, WhyChooseUsItem, FAQItem, Article } from '../types';

export type Language = 'id' | 'en';

export interface Translations {
  nav: {
    services: string;
    about: string;
    whyChooseUs: string;
    articles: string;
    faq: string;
    contact: string;
    consultationBtn: string;
    servicesDropdown: string;
    mobileServicesLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    desc: string;
    crystalWater: string;
    est: string;
    guarantee: string;
    freeSurvey: string;
    whatsappCta: string;
  };
  about: {
    badge: string;
    title: string;
    historyTitle: string;
    specTitle: string;
    experience: string;
    established: string;
    serviceArea: string;
    baliWide: string;
    backBtn: string;
    corePillars: string;
    specPlumbing: string;
    specPlumbingDesc: string;
    specElectrical: string;
    specElectricalDesc: string;
    specConcrete: string;
    specConcreteDesc: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    detailBtn: string;
    consultBtn: string;
    featuresLabel: string;
    packagesLabel: string;
    servicesListLabel: string;
    specificationsLabel: string;
    moreServices: string;
  };
  servicePage: {
    backBtn: string;
    consultationTitle: string;
    formTitle: string;
    formSubtitle: string;
    inputName: string;
    inputPhone: string;
    inputLocation: string;
    inputMessage: string;
    selectTargetWa: string;
    wa1Label: string;
    wa2Label: string;
    submitBtn: string;
    surveyFreeBadge: string;
    whyChooseTitle: string;
  };
  whyChooseUs: {
    badge: string;
    title: string;
    subtitle: string;
    ctaQuestion: string;
    ctaBtn: string;
  };
  articles: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    viewAll: string;
    readTime: string;
    shareArticle: string;
    backBtn: string;
    relatedArticles: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    noResults: string;
    allCategories: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    backBtn: string;
    formTitle: string;
    formDesc: string;
    labelName: string;
    labelPhone: string;
    labelService: string;
    labelLocation: string;
    labelMessage: string;
    labelTargetWa: string;
    placeholderName: string;
    placeholderPhone: string;
    placeholderLocation: string;
    placeholderMessage: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    resetBtn: string;
    workshopAddress: string;
    operatingHours: string;
    hoursDetail: string;
  };
  consultationModal: {
    title: string;
    subtitle: string;
    labelName: string;
    labelPhone: string;
    labelService: string;
    labelLocation: string;
    labelBudget: string;
    labelMessage: string;
    labelTargetWa: string;
    budgetFlexible: string;
    budgetUnder10m: string;
    budget10m25m: string;
    budget25m50m: string;
    budgetAbove50m: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  waChoiceModal: {
    badge: string;
    title: string;
    subtitle: string;
    wa1Name: string;
    wa1Role: string;
    wa1Desc: string;
    wa1Badge: string;
    wa2Name: string;
    wa2Role: string;
    wa2Desc: string;
    wa2Badge: string;
    chatBtn: string;
    guaranteeNote: string;
  };
  footer: {
    aboutSnippet: string;
    quickLinks: string;
    servicesCol: string;
    surveyCol: string;
    surveyTitle: string;
    surveyDesc: string;
    surveyBtn: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      services: 'Layanan',
      about: 'Tentang Kami',
      whyChooseUs: 'Keunggulan',
      articles: 'Artikel',
      faq: 'FAQ',
      contact: 'Kontak',
      consultationBtn: 'Konsultasi Gratis',
      servicesDropdown: 'Pilihan Layanan Spesialis',
      mobileServicesLabel: 'Layanan Kami'
    },
    hero: {
      badge: 'Spesialis Kolam & Ikan Koi di Bali',
      title: 'Pembuatan, Renovasi & Perawatan Kolam Koi Profesional di Bali',
      desc: 'Solusi tuntas kolam jernih, bebas bocor, dan ekosistem ikan sehat. Mengintegrasikan standar perpipaan presisi, kelistrikan hemat energi, dan konstruksi beton bertulang dengan garansi resmi.',
      crystalWater: 'Air Sebening Kristal',
      est: 'Bali - Sejak 2021',
      guarantee: 'Garansi Konstruksi 100%',
      freeSurvey: 'Survei Lokasi Gratis Se-Bali',
      whatsappCta: 'Konsultasi WhatsApp'
    },
    about: {
      badge: 'Tentang Kami',
      title: 'Profil & Sejarah KOI POND SERVICES BALI',
      historyTitle: 'Sejarah & Dedikasi Kami',
      specTitle: 'Spesifikasi & Keahlian Teknis',
      experience: 'Pengalaman Sejak',
      established: 'Tahun 2021',
      serviceArea: 'Wilayah Layanan',
      baliWide: 'Seluruh Pulau Bali',
      backBtn: 'Kembali ke Beranda',
      corePillars: '3 Pilar Keahlian Utama',
      specPlumbing: 'Plumbing & Sirkulasi Vortex',
      specPlumbingDesc: 'Desain sirkulasi bottom drain dan skimmer presisi tanpa titik mati (dead-spot), menjamin kotoran tersedot langsung ke filter.',
      specElectrical: 'Kelistrikan Outdoor Aman & Hemat',
      specElectricalDesc: 'Instalasi pompa celup dan lampu UV dengan sistem proteksi kebocoran listrik (ELCB) serta efisiensi konsumsi daya.',
      specConcrete: 'Konstruksi Beton Kedap Air',
      specConcreteDesc: 'Pengecoran beton bertulang bermutu tinggi dengan lapisan waterproofing multi-layer bergaransi anti rembes seumur hidup kolam.'
    },
    services: {
      badge: 'Layanan Spesialis',
      title: 'Solusi Terpadu Kolam & Ikan Koi di Bali',
      subtitle: 'Enam divisi layanan profesional terintegrasi yang dirancang untuk menjaga ekosistem air kolam Anda tetap jernih, sehat, dan indah dipandang.',
      detailBtn: 'Pelajari Selengkapnya',
      consultBtn: 'Konsultasi Sekarang',
      featuresLabel: 'Keunggulan Layanan',
      packagesLabel: 'Pilihan Paket Layanan',
      servicesListLabel: 'Cakupan Pekerjaan',
      specificationsLabel: 'Spesifikasi Teknis',
      moreServices: 'Layanan Lainnya'
    },
    servicePage: {
      backBtn: 'Kembali ke Beranda',
      consultationTitle: 'Konsultasi & Penawaran Harga',
      formTitle: 'Kustomisasi Kebutuhan Anda',
      formSubtitle: 'Isi detail di bawah ini untuk mendapatkan estimasi biaya dan jadwal survei gratis ke lokasi Anda:',
      inputName: 'Nama Lengkap *',
      inputPhone: 'Nomor WhatsApp *',
      inputLocation: 'Lokasi Properti di Bali *',
      inputMessage: 'Catatan / Keterangan Tambahan',
      selectTargetWa: 'Pilih Kontak WhatsApp *',
      wa1Label: 'WA 1 (08133034733) - Konsultasi & Survei',
      wa2Label: 'WA 2 (081295903430) - Booking & Support',
      submitBtn: 'Konsultasi WhatsApp Sekarang',
      surveyFreeBadge: 'Survei lokasi gratis ke seluruh Bali tanpa biaya tambahan',
      whyChooseTitle: 'Mengapa Memilih Kami untuk Layanan Ini'
    },
    whyChooseUs: {
      badge: 'Keunggulan Kami',
      title: 'Standar Mutu & Komitmen Terbaik di Bali',
      subtitle: 'Kami mengutamakan presisi teknis, transparansi harga, dan perlindungan garansi penuh untuk setiap proyek kolam koi Anda.',
      ctaQuestion: 'Ingin kolam koi Anda bebas bocor, air sebening kristal, dan ikan selalu sehat?',
      ctaBtn: 'Hubungi Tim Spesialis Kami'
    },
    articles: {
      badge: 'Artikel & Panduan',
      title: 'Edukasi & Tips Perawatan Kolam Koi',
      subtitle: 'Pelajari panduan praktis dari para ahli kami untuk menjaga parameter air, perawatan filter biologis, dan kesehatan ikan koi di iklim tropis Bali.',
      readMore: 'Baca Selengkapnya',
      viewAll: 'Lihat Semua Artikel',
      readTime: 'Waktu Baca',
      shareArticle: 'Bagikan Artikel',
      backBtn: 'Kembali ke Beranda',
      relatedArticles: 'Artikel Edukasi Lainnya'
    },
    faq: {
      badge: 'FAQ',
      title: 'Pertanyaan yang Sering Diajukan',
      subtitle: 'Temukan jawaban lengkap seputar pembuatan kolam, perbaikan kebocoran, biaya, dan garansi layanan kami di Bali.',
      searchPlaceholder: 'Ketik kata kunci pertanyaan...',
      noResults: 'Tidak ada pertanyaan yang sesuai dengan pencarian Anda.',
      allCategories: 'Semua Kategori'
    },
    contact: {
      badge: 'Kontak & Lokasi',
      title: 'Konsultasi & Jadwalkan Survei',
      subtitle: 'Hubungi tim teknisi spesialis kami untuk survei lokasi dan konsultasi kebutuhan kolam koi Anda di Bali.',
      backBtn: 'Kembali ke Beranda',
      formTitle: 'Formulir Pengajuan Survei',
      formDesc: 'Silakan isi formulir singkat berikut. Pesan Anda akan langsung diteruskan ke WhatsApp tim teknisi kami:',
      labelName: 'Nama Lengkap *',
      labelPhone: 'Nomor WhatsApp *',
      labelService: 'Pilihan Layanan *',
      labelLocation: 'Lokasi Properti di Bali *',
      labelMessage: 'Pesan atau Keterangan Tambahan',
      labelTargetWa: 'Pilih Tujuan WhatsApp *',
      placeholderName: 'Nama Anda...',
      placeholderPhone: 'Contoh: 08123456789',
      placeholderLocation: 'Denpasar, Sanur, Ubud, Canggu, Seminyak...',
      placeholderMessage: 'Jelaskan kebutuhan Anda, ukuran kolam, atau kendala yang dialami...',
      submitBtn: 'Kirim via WhatsApp',
      submitting: 'Menghubungkan...',
      successTitle: 'Pesan Terkirim!',
      successDesc: 'Terima kasih. Anda telah dialihkan ke WhatsApp teknisi resmi kami.',
      resetBtn: 'Kirim Pesan Lain',
      workshopAddress: 'Alamat Workshop & Kantor',
      operatingHours: 'Jam Operasional Layanan',
      hoursDetail: '08.00 - 18.00 WITA (Senin - Minggu / Konsultasi WA 24 Jam)'
    },
    consultationModal: {
      title: 'Konsultasi & Survei Gratis',
      subtitle: 'Isi formulir singkat di bawah ini. Tim kami akan segera merespons estimasi biaya dan jadwal survei gratis ke lokasi Anda di Bali.',
      labelName: 'Nama Lengkap *',
      labelPhone: 'Nomor WhatsApp *',
      labelService: 'Pilihan Layanan *',
      labelLocation: 'Lokasi di Bali *',
      labelBudget: 'Estimasi Anggaran',
      labelMessage: 'Keterangan Tambahan',
      labelTargetWa: 'Pilih Kontak WhatsApp *',
      budgetFlexible: 'Bisa Disesuaikan (Fleksibel)',
      budgetUnder10m: 'Di bawah Rp 10 Juta',
      budget10m25m: 'Rp 10 Juta - Rp 25 Juta',
      budget25m50m: 'Rp 25 Juta - Rp 50 Juta',
      budgetAbove50m: 'Di atas Rp 50 Juta',
      submitBtn: 'Konsultasi WhatsApp Sekarang',
      submitting: 'Menghubungkan...',
      successTitle: 'Permintaan Diterima!',
      successDesc: 'Anda akan segera diarahkan ke WhatsApp admin kami untuk konfirmasi jadwal survei.',
      closeBtn: 'Tutup'
    },
    waChoiceModal: {
      badge: 'Konsultasi & Booking',
      title: 'Pilih Kontak WhatsApp',
      subtitle: 'Silakan pilih salah satu admin WhatsApp resmi KOI POND SERVICES BALI:',
      wa1Name: 'WhatsApp 1',
      wa1Role: 'Layanan Konsultasi & Survei Kolam',
      wa1Desc: 'Spesialis teknis pembuatan, renovasi & perbaikan kebocoran kolam di Bali.',
      wa1Badge: 'Survei & Teknis',
      wa2Name: 'WhatsApp 2',
      wa2Role: 'Layanan Booking & Customer Care',
      wa2Desc: 'Layanan booking jadwal kuras filter, perawatan ikan koi & pemesanan.',
      wa2Badge: 'Booking & Support',
      chatBtn: 'Chat WA',
      guaranteeNote: 'Kedua nomor aktif 24 jam & terhubung langsung ke teknisi Bali'
    },
    footer: {
      aboutSnippet: 'Spesialis pembuatan, perbaikan dan perawatan kolam, filter chamber vortex dan ikan koi terbaik di Bali sejak 2021.',
      quickLinks: 'Tautan Cepat',
      servicesCol: 'Layanan Spesialis',
      surveyCol: 'Survei Lokasi Gratis',
      surveyTitle: 'Konsultasi Kolam Tanpa Biaya',
      surveyDesc: 'Dapatkan estimasi biaya transparan dan jadwal survei gratis langsung ke villa, rumah, atau resort Anda di Bali.',
      surveyBtn: 'Jadwalkan Survei Gratis',
      rights: 'Hak Cipta Terpelihara.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About Us',
      whyChooseUs: 'Why Us',
      articles: 'Articles',
      faq: 'FAQ',
      contact: 'Contact',
      consultationBtn: 'Free Consultation',
      servicesDropdown: 'Our Specialist Services',
      mobileServicesLabel: 'Our Services'
    },
    hero: {
      badge: 'Koi Pond & Fish Specialist in Bali',
      title: 'Professional Koi Pond Construction, Renovation & Maintenance in Bali',
      desc: 'Complete solutions for crystal clear water, leak-free reinforced concrete structures, and healthy koi ecosystems. Precision vortex plumbing, energy-efficient electrical systems, and official warranty included.',
      crystalWater: 'Crystal Clear Water',
      est: 'Bali - Since 2021',
      guarantee: '100% Construction Warranty',
      freeSurvey: 'Free On-Site Survey Across Bali',
      whatsappCta: 'WhatsApp Consultation'
    },
    about: {
      badge: 'About Us',
      title: 'Profile & History of KOI POND SERVICES BALI',
      historyTitle: 'Our Story & Dedication',
      specTitle: 'Technical Specifications & Engineering',
      experience: 'Experience Since',
      established: 'Year 2021',
      serviceArea: 'Service Coverage',
      baliWide: 'All Across Bali Island',
      backBtn: 'Back to Home',
      corePillars: '3 Core Engineering Pillars',
      specPlumbing: 'Vortex & Bottom Drain Plumbing',
      specPlumbingDesc: 'Precision zero-dead-spot circulation design ensuring bottom waste and surface debris are instantly drawn into the filtration chamber.',
      specElectrical: 'Safe & Energy-Saving Outdoor Electrical',
      specElectricalDesc: 'High-grade submersible pumps and UV sterilizers with Earth Leakage Circuit Breaker (ELCB) safety and low power consumption.',
      specConcrete: 'Waterproof Reinforced Concrete',
      specConcreteDesc: 'High-grade reinforced concrete casting with multi-layer commercial waterproofing and a leak-free structural warranty.'
    },
    services: {
      badge: 'Specialist Services',
      title: 'Integrated Koi Pond & Fish Solutions in Bali',
      subtitle: 'Six comprehensive professional divisions engineered to keep your water crystal clear, your fish healthy, and your property stunning.',
      detailBtn: 'Learn More',
      consultBtn: 'Consult Now',
      featuresLabel: 'Key Service Features',
      packagesLabel: 'Available Service Packages',
      servicesListLabel: 'Scope of Work',
      specificationsLabel: 'Technical Specifications',
      moreServices: 'More Services'
    },
    servicePage: {
      backBtn: 'Back to Home',
      consultationTitle: 'Consultation & Quotation',
      formTitle: 'Customize Your Requirements',
      formSubtitle: 'Fill in the details below to receive a personalized cost estimation and schedule a free on-site survey at your Bali property:',
      inputName: 'Full Name *',
      inputPhone: 'WhatsApp Number *',
      inputLocation: 'Property Location in Bali *',
      inputMessage: 'Notes / Additional Details',
      selectTargetWa: 'Select WhatsApp Contact *',
      wa1Label: 'WA 1 (+628133034733) - Consultation & Survey',
      wa2Label: 'WA 2 (+6281295903430) - Booking & Support',
      submitBtn: 'Consult via WhatsApp Now',
      surveyFreeBadge: 'Free on-site survey anywhere in Bali with no extra charge',
      whyChooseTitle: 'Why Choose Us for This Service'
    },
    whyChooseUs: {
      badge: 'Why Choose Us',
      title: 'Quality Standards & Reliable Commitment in Bali',
      subtitle: 'We prioritize technical precision, transparent pricing, and full warranty coverage for every pond project across Bali.',
      ctaQuestion: 'Ready for a leak-free pond, crystal-clear water, and vibrant, thriving koi fish?',
      ctaBtn: 'Contact Our Specialist Team'
    },
    articles: {
      badge: 'Articles & Guides',
      title: 'Koi Pond Care Education & Expert Tips',
      subtitle: 'Discover practical guides from our engineering team on maintaining water parameters, biological filtration, and fish wellness in Bali’s tropical climate.',
      readMore: 'Read Full Guide',
      viewAll: 'View All Articles',
      readTime: 'Read Time',
      shareArticle: 'Share Article',
      backBtn: 'Back to Home',
      relatedArticles: 'Other Educational Guides'
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Find clear answers about new pond construction, leak repairs, filtration chamber upgrades, costs, and warranties in Bali.',
      searchPlaceholder: 'Search question keywords...',
      noResults: 'No questions match your search query.',
      allCategories: 'All Categories'
    },
    contact: {
      badge: 'Contact & Location',
      title: 'Consultation & Schedule On-Site Survey',
      subtitle: 'Reach out to our specialist engineering team for on-site surveys and bespoke consultations across Bali.',
      backBtn: 'Back to Home',
      formTitle: 'Survey Request Form',
      formDesc: 'Please fill out this quick form. Your inquiry will be immediately forwarded to our technician WhatsApp:',
      labelName: 'Full Name *',
      labelPhone: 'WhatsApp Number *',
      labelService: 'Selected Service *',
      labelLocation: 'Property Location in Bali *',
      labelMessage: 'Message or Additional Details',
      labelTargetWa: 'Select WhatsApp Destination *',
      placeholderName: 'Your Full Name...',
      placeholderPhone: 'e.g. +628123456789 or 08123456789',
      placeholderLocation: 'Denpasar, Sanur, Ubud, Canggu, Seminyak, Uluwatu...',
      placeholderMessage: 'Tell us about your pond dimensions, ideas, or existing issues...',
      submitBtn: 'Send via WhatsApp',
      submitting: 'Connecting...',
      successTitle: 'Message Sent!',
      successDesc: 'Thank you. You have been redirected to our official technician WhatsApp.',
      resetBtn: 'Send Another Inquiry',
      workshopAddress: 'Workshop & Office Location',
      operatingHours: 'Service Hours',
      hoursDetail: '08:00 AM - 06:00 PM WITA (Mon - Sun / 24h WhatsApp Support)'
    },
    consultationModal: {
      title: 'Free Consultation & On-Site Survey',
      subtitle: 'Fill out this brief form. Our engineering team will promptly provide cost estimates and schedule a free survey at your property in Bali.',
      labelName: 'Full Name *',
      labelPhone: 'WhatsApp Number *',
      labelService: 'Selected Service *',
      labelLocation: 'Location in Bali *',
      labelBudget: 'Estimated Budget',
      labelMessage: 'Additional Details',
      labelTargetWa: 'Select WhatsApp Contact *',
      budgetFlexible: 'Flexible / Customizable',
      budgetUnder10m: 'Under IDR 10 Million (~$650 USD)',
      budget10m25m: 'IDR 10M - 25M (~$650 - $1,600 USD)',
      budget25m50m: 'IDR 25M - 50M (~$1,600 - $3,200 USD)',
      budgetAbove50m: 'Above IDR 50 Million (~$3,200+ USD)',
      submitBtn: 'Consult via WhatsApp Now',
      submitting: 'Connecting...',
      successTitle: 'Request Received!',
      successDesc: 'You will be directed to our technician WhatsApp to confirm your free survey schedule.',
      closeBtn: 'Close'
    },
    waChoiceModal: {
      badge: 'Consultation & Booking',
      title: 'Select WhatsApp Contact',
      subtitle: 'Please choose one of our official KOI POND SERVICES BALI technicians:',
      wa1Name: 'WhatsApp 1',
      wa1Role: 'Pond Consultation & On-Site Survey',
      wa1Desc: 'Specialized in new construction, full renovations & structural leak repairs in Bali.',
      wa1Badge: 'Surveys & Engineering',
      wa2Name: 'WhatsApp 2',
      wa2Role: 'Booking & Customer Care',
      wa2Desc: 'Fast booking for filter chamber cleaning, routine maintenance & koi fish care.',
      wa2Badge: 'Booking & Support',
      chatBtn: 'Chat WA',
      guaranteeNote: 'Both numbers active 24/7 & connected directly to Bali technicians'
    },
    footer: {
      aboutSnippet: 'Specialist in custom koi pond construction, leak repairs, vortex chamber filtration, and koi fish wellness across Bali since 2021.',
      quickLinks: 'Quick Links',
      servicesCol: 'Specialist Services',
      surveyCol: 'Free On-Site Survey',
      surveyTitle: 'Complimentary Pond Consultation',
      surveyDesc: 'Get transparent cost estimates and schedule a free on-site survey directly to your villa, home, or resort in Bali.',
      surveyBtn: 'Schedule Free Survey',
      rights: 'All Rights Reserved.'
    }
  }
};

// Bilingual Services Data
export const bilingualServicesData: Record<Language, Service[]> = {
  id: [
    {
      id: 'pembuatan-kolam-koi',
      title: 'Pembuatan Kolam Koi',
      iconName: 'Building2',
      image: '/images/pembuatan_kolam.avif',
      description: 'Jasa pembuatan kolam koi profesional dari nol untuk rumah tinggal, villa, hotel, resort, dan kantor di seluruh Bali. Menggunakan standar konstruksi beton bertulang kedap air, kemiringan dasar kolam presisi, bottom drain, surface skimmer, dan integrasi air terjun estetik.',
      visi: 'Menjadi mitra kontraktor kolam koi nomor satu di Bali yang menghadirkan kolam berestetika tinggi dan ramah lingkungan.',
      misi: 'Membangun kolam koi kokoh, anti bocor, bersistem sirkulasi optimal, dan bergaransi penuh dengan biaya yang dapat disesuaikan.',
      details: [
        'Desain 3D kustom & survei lokasi GRATIS di seluruh Bali',
        'Konstruksi beton bertulang berkualitas tinggi dengan waterproofing berlapis',
        'Pemasangan instalasi plumbing bottom drain, surface skimmer & return pipe tanpa dead spot',
        'Pembuatan ruang chamber bio-filtrasi modern dan tertata rapi'
      ],
      whyChooseUs: [
        'Garansi konstruksi & anti bocor resmi',
        'Desain kustom sesuai luas lahan & estetika properti',
        'Harga termurah & bisa menyesuaikan budget Anda',
        'Konsultasi dan survei lokasi 100% Gratis di Bali'
      ],
      servicesList: [
        {
          category: 'Pilihan Model Kolam',
          items: [
            'Kolam Koi Minimalis Modern',
            'Kolam Koi Batu Alam Bali (Natural Stone & Water Wall)',
            'Kolam Koi Kaca Tempered / Glass Viewing Window',
            'Kolam Koi Eksterior Villa, Resort & Restoran'
          ]
        },
        {
          category: 'Tahapan Pengerjaan',
          items: [
            'Konsultasi Kebutuhan & Survei Lokasi Gratis',
            'Perencanaan Desain & Perhitungan Volume Chamber',
            'Penggalian, Pembesian & Pengecoran Beton Kedap Air',
            'Instalasi Pemipaan & Finishing Batu Alam Estetik'
          ]
        }
      ],
      packages: [
        {
          name: 'Paket Minimalis Residence',
          items: [
            'Cocok untuk lahan rumah tinggal / halaman depan & belakang',
            'Chamber bio-filter terintegrasi & hemat tempat',
            'Pompa & aerator hemat energi',
            'Garansi konstruksi & free konsultasi'
          ]
        },
        {
          name: 'Paket Luxury Villa & Resort',
          items: [
            'Kapasitas air medium hingga besar dengan chamber multi-step',
            'Opsi kaca viewing tempered tebal & water fountain',
            'Sistem otomatisasi backwash & UV sterilizer',
            'Garansi menyeluruh & free perawatan bulan pertama'
          ]
        }
      ]
    },
    {
      id: 'renovasi-perbaikan-kolam',
      title: 'Renovasi / Perbaikan Kolam',
      iconName: 'Hammer',
      image: '/images/renovasi_kolam.avif',
      description: 'Solusi tuntas untuk masalah kolam koi yang sering bocor, air keruh kehijauan, sistem filtrasi lama yang tidak bekerja optimal, atau perombakan desain kolam lama menjadi kolam modern berstandar estetika tinggi.',
      visi: 'Mengembalikan fungsi dan keindahan kolam koi lama menjadi sumber ketenangan yang jernih dan awet.',
      misi: 'Memberikan diagnosa teknis yang tepat pada kebocoran dan perbaikan sistem pemipaan dengan garansi hasil maksimal.',
      details: [
        'Injeksi dan pelapisan ulang waterproofing khusus kolam anti rembes',
        'Perombakan dan penambahan kapasitas chamber filter yang kurang memadai',
        'Perbaikan pipa saluran sirkulasi yang tersumbat atau bocor di bawah tanah',
        'Penggantian keramik atau finishing batu alam dinding kolam'
      ],
      whyChooseUs: [
        'Deteksi kebocoran akurat tanpa membongkar seluruh kolam',
        'Pengerjaan cepat dan terencana agar ikan koi tidak stres lama',
        'Jaminan garansi anti bocor setelah pengerjaan',
        'Biaya renovasi transparan dan fleksibel'
      ],
      servicesList: [
        {
          category: 'Jenis Perbaikan',
          items: [
            'Penambalan Kolam Rembes & Bocor Struktural',
            'Penambahan / Perbesaran Chamber Filter',
            'Modifikasi Jalur Pemipaan (Bottom Drain & Skimmer Baru)',
            'Upgrade Pompa Sirkulasi & Instalasi UV'
          ]
        }
      ],
      packages: [
        {
          name: 'Paket Stop Bocor Tuntas',
          items: [
            'Identifikasi sumber kebocoran kolam & chamber',
            'Aplikasi bahan waterproofing elastis & tahan tekanan air',
            'Uji genang air minimal 3x24 jam',
            'Garansi anti bocor'
          ]
        },
        {
          name: 'Paket Upgrade Chamber Filtrasi',
          items: [
            'Pembuatan chamber filter baru dengan rasio volume ideal',
            'Penggantian media filter mekanik & biologis lengkap',
            'Optimalisasi arus air kolam agar kotoran tersedot sempurna'
          ]
        }
      ]
    },
    {
      id: 'perawatan-kolam',
      title: 'Perawatan Kolam',
      iconName: 'Sparkles',
      image: '/images/perawatan_kolam.avif',
      description: 'Layanan jasa kuras dan perawatan berkala kolam koi agar air selalu jernih sebening kaca (crystal clear), parameter air tetap stabil, dinding kolam bebas lumut liar, dan ekosistem bakteri baik tetap terjaga sempurna.',
      visi: 'Menjaga kolam koi Anda senantiasa indah dipandang dan menjadi habitat terbaik bagi koi kesayangan.',
      misi: 'Menyediakan tenaga perawatan berpengalaman yang mengerti teknik pembersihan aman tanpa merusak ekosistem biologis.',
      details: [
        'Pembersihan menyeluruh media filter mekanik (brush, japmat, sponge)',
        'Backwash dan pembersihan chamber endapan lumpur dasar',
        'Pengecekan kualitas air (pH, TDS, Amonia, Nitrit, Suhu)',
        'Pemeriksaan rutin performa pompa sirkulasi, aerator, dan lampu UV'
      ],
      whyChooseUs: [
        'Teknik kuras higienis tanpa membunuh bakteri nitrifikasi baik',
        'Peralatan modern & teknisi ramah terpercaya',
        'Jadwal fleksibel (panggilan satu kali atau kontrak rutin bulanan)',
        'Air dijamin jernih dan segar kembali'
      ],
      servicesList: [
        {
          category: 'Cakupan Perawatan',
          items: [
            'Pembersihan Media Filter Mekanik & Biologis',
            'Pembersihan Endapan Dasar & Dinding Kolam',
            'Pengecekan Parameter Kimia & Kualitas Air',
            'Pengecekan Kelistrikan Pompa, Aerasi & UV Sterilizer'
          ]
        }
      ],
      packages: [
        {
          name: 'Paket Kuras Sekali Datang (On-Call)',
          items: [
            'Pembersihan total chamber filter & backwash',
            'Pembersihan lumut berlebih dinding & dasar kolam',
            'Pengecekan kelistrikan & pompa sirkulasi',
            'Pemberian garam ikan & probiotik pengurai'
          ]
        },
        {
          name: 'Paket Berlangganan Rutin Bulanan',
          items: [
            'Kunjungan rutin 2x atau 4x per bulan',
            'Perawatan filter berkala & pemantauan kualitas air',
            'Penanganan darurat cepat jika ada kendala pompa/air',
            'Harga paket lebih hemat dengan garansi air jernih'
          ]
        }
      ]
    },
    {
      id: 'perawatan-ikan-koi',
      title: 'Perawatan Ikan Koi',
      iconName: 'HeartHandshake',
      image: '/images/perawatan_ikan.avif',
      description: 'Layanan medis dan pemeliharaan kesehatan ikan koi Anda. Menangani diagnosa dan pengobatan penyakit koi (kutu jarum, jamur, infeksi insang, dropsy), karantina ikan baru, perbaikan nutrisi, hingga treatment warna koi.',
      visi: 'Memastikan seluruh ikan koi di kolam Anda hidup sehat, bugar, aktif, dan berumur panjang dengan warna cemerlang.',
      misi: 'Memberikan penanganan medis dan obat-obatan yang aman serta terukur sesuai diagnosa akurat.',
      details: [
        'Pemeriksaan fisik ikan koi langsung di kolam Anda',
        'Diagnosa penyakit dan pemberian terapi pengobatan yang tepat',
        'Pendampingan prosedur karantina untuk ikan koi yang baru dibeli',
        'Konsultasi manajemen pakan, vitamin, dan suplemen warna'
      ],
      whyChooseUs: [
        'Penanganan cepat untuk mencegah penularan penyakit massal',
        'Pengalaman mendalam dalam anatomi dan perilaku ikan koi',
        'Penggunaan obat dan antiseptik khusus berkualitas teruji',
        'Panduan pencegahan penyakit jangka panjang'
      ],
      servicesList: [
        {
          category: 'Layanan Kesehatan Koi',
          items: [
            'Pengobatan Penyakit Parasit (Kutu Jarum, Kutu Bulat/Argulus, White Spot)',
            'Pengobatan Infeksi Bakteri & Jamur (Fin Rot, Cotton Wool, Aeromonas)',
            'Program Karantina & Aklimatisasi Ikan Baru',
            'Konsultasi Pakan Nutrisi & Pertumbuhan Cepat (Bulky & Color Booster)'
          ]
        }
      ],
      packages: [
        {
          name: 'Paket Emergency Treatment Ikan Sakit',
          items: [
            'Pemeriksaan intensif di lokasi kolam',
            'Pemberian obat & dosis medis terukur',
            'Pemisahan ikan sakit ke wadah karantina',
            'Follow up perkembangan hingga ikan pulih'
          ]
        },
        {
          name: 'Paket Suplemen & General Check-up',
          items: [
            'Pemeriksaan kondisi seluruh ikan di kolam',
            'Pemberian multivitamin & peningkat imun',
            'Panduan pola pemberian pakan sesuai cuaca & suhu'
          ]
        }
      ]
    },
    {
      id: 'pembuatan-perawatan-filter',
      title: 'Pembuatan / Perawatan Filter',
      iconName: 'Wrench',
      image: '/images/filter_kolam.avif',
      description: 'Sistem filtrasi adalah jantung utama kolam koi. Kami melayani pembuatan chamber filter baru, penataan media mekanis, biologis, dan kimiawi, serta instalasi pompa hemat listrik dan lampu UV penangkal lumut.',
      visi: 'Menciptakan sistem filtrasi modern yang efisien, minim perawatan, dan menjaga kemurnian air kolam sepanjang tahun.',
      misi: 'Mengaplikasikan teknologi filtrasi perkolaman terkini dengan bahan media filter grade terbaik dan instalasi rapi.',
      details: [
        'Perancangan chamber filter multi-ruang (Settling Chamber/Vortex, Mekanik, Bio, Pompa)',
        'Penyediaan media filter berkualitas (Japmat, Bio Ring, Bio Ball, MBBR Moving Bed, Filter Brush)',
        'Instalasi sistem lampu UV Sterilizer untuk membasmi lumut hijau & alga',
        'Pemasangan pompa sirkulasi hemat energi sesuai debit air kolam'
      ],
      whyChooseUs: [
        'Perhitungan kapasitas chamber presisi (minimal 30-40% volume kolam)',
        'Air tidak mudah hijau dan bebas bau amis',
        'Instalasi plumbing rapi, kokoh, dan mudah dibersihkan',
        'Garansi instalasi dan peralatan pompa / UV'
      ],
      servicesList: [
        {
          category: 'Komponen Filtrasi',
          items: [
            'Chamber Mekanik: Vortex / Brush / Japmat Sieve',
            'Chamber Biologis: Moving Bed MBBR / Ceramic Ring / Bio Ball',
            'Chamber Sterilisasi: Lampu UV Submersible / Eksternal',
            'Instalasi Pompa Celup Rendah Daya & Aerator Hi-Blow'
          ]
        }
      ],
      packages: [
        {
          name: 'Paket Filter Lengkap Kolam Baru',
          items: [
            'Media filter mekanik & biologis lengkap grade premium',
            'Pemasangan lampu UV sterilizer anti alga hijau',
            'Bakteri starter pengurai nitrifikasi',
            'Garansi peralatan & instalasi'
          ]
        },
        {
          name: 'Paket Refresh & Ganti Media Filter',
          items: [
            'Penggantian media filter yang sudah jenuh/rusak',
            'Pembersihan chamber menyeluruh & pipa backwash',
            'Penggantian bohlam lampu UV baru'
          ]
        }
      ]
    },
    {
      id: 'jual-beli-ikan-koi',
      title: 'Jual / Beli Ikan Koi',
      iconName: 'ShoppingBag',
      image: '/images/jual_beli_koi.avif',
      description: 'Penyediaan aneka jenis dan varietas ikan koi berkualitas tinggi di Bali. Mulai dari bibit prospektif (tosai), remaja (nisai), hingga indukan show-quality yang telah lolos uji karantina ketat dan bebas penyakit.',
      visi: 'Menjadi sentra penyedia ikan koi berkualitas, sehat, dan bergaransi bagi penghobi dan kolektor di Bali.',
      misi: 'Menghadirkan pilihan koi beraneka varietas dengan pola warna tegas, struktur tubuh proporsional, dan harga bersahabat.',
      details: [
        'Penyediaan varietas favorit: Kohaku, Taisho Sanke, Showa Sanshoku, Shiro Utsuri, Chagoi, Tancho, Asagi, Shusui',
        'Seluruh ikan telah melewati masa karantina minimal 14 hari sebelum dikirim',
        'Menerima titip jual / beli ikan koi sehat dari sesama penghobi di Bali',
        'Pengantaran aman bergaransi selamat dan sehat sampai ke kolam Anda'
      ],
      whyChooseUs: [
        'Ikan dijamin sehat 100%, lincah, dan nafsu makan tinggi',
        'Pilihan varietas lengkap dari ukuran 15 cm hingga 60+ cm',
        'Bisa konsultasi pemilihan ikan yang cocok untuk kolam Anda',
        'Harga bersaing dan bisa disesuaikan dengan kebutuhan'
      ],
      servicesList: [
        {
          category: 'Varietas Koi Tersedia',
          items: [
            'Kohaku (Merah & Putih Klasik Elegan)',
            'Taisho Sanke & Showa Sanshoku (Tiga Warna Merah, Putih, Hitam)',
            'Shiro Utsuri & Hi Utsuri',
            'Chagoi, Karashigoi, Ochiba (Penjinak Kolam Jumbo)',
            'Tancho, Asagi, Shusui, Kujaku & Doitsu'
          ]
        }
      ],
      packages: [
        {
          name: 'Paket Koloni Bibit Prospektif',
          items: [
            'Ukuran 15 - 25 cm (Tosai pilihan)',
            'Pola warna rapi & body simetris',
            'Sudah lolos karantina & siap masuk kolam',
            'Bonus pakan awal & panduan perawatan'
          ]
        },
        {
          name: 'Paket Koi Jumbo / Indukan Pilihan',
          items: [
            'Ukuran 35 - 60+ cm (Nisai & Sansai)',
            'Body jumbo & warna cerah tebal',
            'Cocok untuk display kolam villa/resort mewah',
            'Garansi pengantaran aman se-Bali'
          ]
        }
      ]
    },
    {
      id: 'perbaikan-listrik-konstruksi',
      title: 'Perbaikan Listrik & Konstruksi Kolam',
      iconName: 'Zap',
      image: '/images/listrik_konstruksi.avif',
      description: 'Layanan spesialis perbaikan instalasi kelistrikan kolam, pompa sirkulasi, aerator, grounding anti-korsleting outdoor, serta perbaikan dan penguatan struktur beton bertulang, penambalan retak dinding kolam, dan waterproofing anti-bocor di Bali.',
      visi: 'Menghadirkan keamanan kelistrikan dan keandalan konstruksi kolam koi berstandar teknik tertinggi dan bebas bahaya.',
      misi: 'Melakukan perbaikan kelistrikan dan rekonstruksi beton dengan material tahan cuaca ekstrem dan garansi pengerjaan 100%.',
      details: [
        'Pemeriksaan dan perbaikan instalasi kabel outdoor tahan air (waterproof IP68)',
        'Penanganan pompa macet, kebocoran arus listrik, dan perapihan panel MCB kolam',
        'Injeksi grouting & plesteran beton kedap air pada dinding kolam yang retak',
        'Penguatan pondasi & pemasangan waterstop membran anti rembes'
      ],
      whyChooseUs: [
        'Teknisi kelistrikan & konstruksi kolam berpengalaman dan bersertifikat',
        'Penanganan cepat untuk kebocoran arus listrik yang membahayakan ikan & manusia',
        'Bahan semen waterproofing kualitas tertinggi anti getas & anti retak',
        'Garansi pengerjaan resmi dan survei lokasi gratis se-Bali'
      ],
      servicesList: [
        {
          category: 'Layanan Kelistrikan Kolam',
          items: [
            'Instalasi & Perbaikan Pompa Air Submersible',
            'Pemasangan Sistem Aerasi & Blower High-Pressure',
            'Instalasi Lampu UV & Panel Kontrol Otomatis (Timer/Smart Switch)',
            'Isolasi Kebocoran Arus Listrik & Pasang Grounding Pengaman'
          ]
        },
        {
          category: 'Layanan Konstruksi & Struktur',
          items: [
            'Perbaikan Retak Struktur Dinding & Lantai Beton',
            'Aplikasi Waterproofing Elastomeric Tahan Tekanan Tinggi',
            'Pemasangan & Penggantian Batu Alam / Keramik Kolam',
            'Pembuatan Dinding Kaca Viewing Tempered Glass'
          ]
        }
      ],
      packages: [
        {
          name: 'Paket Servis Kelistrikan & Pompa',
          items: [
            'Pemeriksaan total kabel, stop kontak outdoor & panel kontrol',
            'Uji daya pompa sirkulasi & aerator',
            'Penggantian kabel rusak dengan kabel standar outdoor IP68',
            'Garansi keamanan instalasi'
          ]
        },
        {
          name: 'Paket Perbaikan Konstruksi & Waterproofing',
          items: [
            'Deteksi titik retak struktur beton',
            'Injeksi semen ekspansi / epoxy & pelapisan waterproofing 3 lapis',
            'Uji genang air & garansi konstruksi'
          ]
        }
      ]
    },
    {
      id: 'regular-maintenance',
      title: 'Paket Regular Maintenance 1 Tahun',
      iconName: 'CalendarCheck',
      image: '/images/regular_maintenance.avif',
      description: 'Paket kontrak perawatan berkala kolam koi tahunan (1-Year Regular Maintenance Package) terpadu di Bali. Solusi lengkap air kolam kristal: 11x regular maintenance, 1x full deep clean, penggantian media filter rusak, inspeksi kesehatan ikan koi, pendampingan pemijahan koi bunting, gratis 1kg pakan HIRO Premium setiap bulan, dan probiotik setiap penggantian air. Harga mulai Rp 5.000.000 All-in.',
      visi: 'Memberikan jaminan ketenangan penuh dan mutu ekosistem kolam koi kelas satu dengan kejernihan air bergaransi 365 hari.',
      misi: 'Menghadirkan jadwal perawatan berkala profesional tanpa repot, menjaga nutrisi prima koi, dan memastikan filtrasi bekerja sempurna sepanjang tahun.',
      details: [
        '11x Kunjungan Regular Maintenance Berkala',
        '1x Full Maintenance (Deep Clean Total Kolam & Chamber)',
        'Penggantian Media Filter yang Rusak (Filter Media Replacement if damaged)',
        'Inspeksi Rutin Parameter & Kesehatan Fisik Ikan Koi (Fish Health Inspection)',
        'Pendampingan Khusus Pemijahan Ikan Koi Bunting (Breeding Assistance for Pregnant Fish)',
        'Gratis 1 kg Pakan Ikan HIRO PREMIUM FISH FOOD per Bulan',
        'Pemberian PROBIOTIK Pengurai Alami Setiap Penggantian Air (Probiotics every water change)',
        'Garansi Air Kolam Jernih Sebening Kristal Sepanjang Tahun (Guarantee Clear Water)'
      ],
      whyChooseUs: [
        'Garansi air kolam jernih kristal & ekosistem sehat 365 hari',
        'Bonus 1 kg pakan HIRO Premium Fish Food setiap bulannya',
        'Penggantian media filter rusak langsung tertangani tanpa biaya tambahan',
        'Harga paket tahunan All-In termurah mulai dari Rp 5.000.000'
      ],
      servicesList: [
        {
          category: 'Cakupan Paket 1-Year Maintenance',
          items: [
            '11x Regular Maintenance (Kunjungan Servis & Kuras Filter Rutin)',
            '1x Full Maintenance / Deep Cleaning Total Kolam & Chamber',
            'Filter Media Replacement (Penggantian Media Filter jika Rusak/Jenuh)',
            'Fish Health Inspection (Pemeriksaan Kesehatan & Diagnosa Koi)',
            'Breeding Assistance (Pendampingan Pemijahan Koi Bunting/Bertelur)',
            'Bonus 1kg Pakan HIRO Premium Koi Food Setiap Bulan',
            'Pemberian Probiotik Pengurai Setiap Kali Penggantian Air',
            'Garansi Penuh Kualitas Kejernihan Air Kolam (Guarantee Clear Water)'
          ]
        },
        {
          category: 'Keuntungan Berlangganan Tahunan',
          items: [
            'Bebas repot perawatan harian kolam koi',
            'Kesehatan ikan koi terpantau rutin oleh praktisi ahli',
            'Respon prioritas untuk penanganan darurat (emergency response)',
            'Estimasi biaya tetap tanpa biaya tersembunyi'
          ]
        }
      ],
      packages: [
        {
          name: '1-Year Regular Maintenance Package (Standard)',
          items: [
            '11x Regular Maintenance + 1x Full Maintenance (Deep Clean)',
            'Filter Media Replacement (If Damaged)',
            'Fish Health Inspection & Breeding Assistance for Pregnant Fish',
            '1kg HIRO Premium Fish Food per Month + Probiotics on every water change',
            'Guarantee Clear Water',
            'START FROM Rp 5.000.000 All in'
          ]
        },
        {
          name: '1-Year Regular Maintenance Package (Large / Luxury Villa)',
          items: [
            'Kapasitas volume kolam besar / display villa & resort komersial',
            'Frekuensi perawatan intensif & multivitamin booster ikan lengkap',
            'Pengecekan kelistrikan pompa, UV, dan aerasi 24 jam',
            'Garansi menyeluruh 1 tahun penuh & penanganan darurat 24/7'
          ]
        }
      ]
    }
  ],
  en: [
    {
      id: 'pembuatan-kolam-koi',
      title: 'Koi Pond Construction',
      iconName: 'Building2',
      image: '/images/pembuatan_kolam.avif',
      description: 'Professional turn-key koi pond construction for luxury villas, private residences, hotels, resorts, and commercial venues across Bali. Engineered with reinforced waterproof concrete, bottom drains, surface skimmers, and aesthetic waterfalls.',
      visi: 'To be Bali’s leading koi pond builder, delivering sustainable, eco-friendly, and breathtaking aquatic architecture.',
      misi: 'Building solid, leak-free koi ponds with optimal water flow dynamics, multi-stage bio-filtration, and comprehensive warranty.',
      details: [
        'Custom 3D architectural design & FREE on-site survey across Bali',
        'High-grade reinforced concrete structure with multi-layer commercial waterproofing',
        'Zero-dead-spot plumbing with bottom drains, surface skimmers & return jets',
        'Custom-engineered multi-chamber bio-filtration system'
      ],
      whyChooseUs: [
        'Official structural & waterproofing warranty',
        'Bespoke designs tailored to your property layout and aesthetic',
        'Competitive, transparent pricing with flexible budget matching',
        '100% Free on-site survey anywhere in Bali'
      ],
      servicesList: [
        {
          category: 'Pond Styles & Concepts',
          items: [
            'Modern Minimalist Koi Pond',
            'Bali Natural Stone & Water-Wall Pond',
            'Heavy-Duty Tempered Glass Viewing Window Pond',
            'Luxury Villa, Hotel & Resort Exterior Aquatic Features'
          ]
        },
        {
          category: 'Project Execution Phases',
          items: [
            'Consultation & Free On-Site Survey',
            'CAD Design & Filtration Chamber Volume Calculations',
            'Excavation, Steel Reinforcement & Waterproof Concrete Pouring',
            'Plumbing Setup & Natural Stone Finishing'
          ]
        }
      ],
      packages: [
        {
          name: 'Residential Minimalist Package',
          items: [
            'Ideal for private home gardens & courtyards',
            'Space-efficient integrated multi-chamber bio-filter',
            'Energy-saving pumps and aeration systems',
            'Full structural warranty & complimentary consultation'
          ]
        },
        {
          name: 'Luxury Villa & Resort Package',
          items: [
            'Medium to large water volume with multi-stage filtration',
            'Options for thick tempered glass windows and waterfalls',
            'Automated backwash setup & high-output UV sterilizer',
            'Complete warranty & free first-month maintenance'
          ]
        }
      ]
    },
    {
      id: 'renovasi-perbaikan-kolam',
      title: 'Pond Renovation & Leak Repair',
      iconName: 'Hammer',
      image: '/images/renovasi_kolam.avif',
      description: 'Complete restorative solutions for leaking ponds, green/murky water, outdated filtration systems, or total aesthetic upgrades transforming old ponds into modern luxury aquatic centerpieces.',
      visi: 'Restoring old and damaged ponds into clear, serene, and long-lasting aquatic sanctuaries.',
      misi: 'Providing accurate leak diagnostics and filtration engineering with guaranteed long-term results.',
      details: [
        'High-pressure chemical injection and multi-coat elastomeric waterproofing',
        'Filtration chamber enlargement and modern media retrofitting',
        'Repair of blocked, damaged, or subterranean plumbing lines',
        'Natural stone repointing, tiling replacement & aesthetic facelifts'
      ],
      whyChooseUs: [
        'Accurate leak detection without destructive total demolition',
        'Swift, organized execution minimizing fish relocation stress',
        'Official leak-free warranty after completion',
        'Transparent, flexible quotation suited to your requirements'
      ],
      servicesList: [
        {
          category: 'Repair Specializations',
          items: [
            'Structural Crack & Concrete Seepage Waterproofing',
            'Filtration Chamber Expansion & Redesign',
            'Sub-surface Plumbing Retrofitting (New BD & Skimmers)',
            'Circulation Pump Upgrades & Commercial UV Installation'
          ]
        }
      ],
      packages: [
        {
          name: 'Zero-Leak Seal Package',
          items: [
            'Source leak pinpointing in pond basin & chambers',
            'Pressure-resistant elastomeric waterproofing application',
            'Minimum 72-hour standing water test',
            'Official leak-free warranty'
          ]
        },
        {
          name: 'Chamber Filtration Upgrade Package',
          items: [
            'New high-ratio bio-chamber addition',
            'Complete mechanical and biological filter media overhaul',
            'Circulation flow optimization for rapid bottom waste extraction'
          ]
        }
      ]
    },
    {
      id: 'perawatan-kolam',
      title: 'Routine Pond Maintenance',
      iconName: 'Sparkles',
      image: '/images/perawatan_kolam.avif',
      description: 'Professional periodic cleaning and servicing to keep your water crystal clear, maintain stable chemical parameters, prevent excessive algae growth, and protect beneficial biological nitrifying bacteria.',
      visi: 'Keeping your koi pond visually stunning and providing the healthiest habitat for your fish.',
      misi: 'Delivering experienced pond technicians who understand safe cleaning without disrupting biological filtration.',
      details: [
        'Thorough mechanical filter media cleaning (brushes, japmats, sponges)',
        'Sludge chamber backwashing and bottom vacuuming',
        'Water chemistry testing (pH, TDS, Ammonia, Nitrite, Temp)',
        'Routine inspection of pumps, aerators, and UV quartz sleeves'
      ],
      whyChooseUs: [
        'Hygienic cleaning techniques preserving good nitrifying bacteria',
        'Modern equipment and trusted, professional technicians',
        'Flexible scheduling (one-time on-call or monthly routine service)',
        'Guaranteed crystal clear and refreshing water'
      ],
      servicesList: [
        {
          category: 'Maintenance Scope',
          items: [
            'Mechanical & Biological Media Servicing',
            'Bottom Silt Vacuuming & Wall Algae Brushing',
            'Water Quality & Chemistry Testing',
            'Electrical, Pump & UV Sterilizer Safety Checks'
          ]
        }
      ],
      packages: [
        {
          name: 'One-Time On-Call Deep Clean',
          items: [
            'Complete filter chamber servicing & backwashing',
            'Controlled wall and floor algae scrub',
            'Pump, pipe, and aerator performance inspection',
            'Application of pure pond salt & beneficial probiotic starter'
          ]
        },
        {
          name: 'Monthly Routine Subscription',
          items: [
            'Regular bi-weekly (2x) or weekly (4x) scheduled visits',
            'Continuous filter management & water chemistry monitoring',
            'Rapid priority emergency response for pump or water issues',
            'Cost-efficient subscription with crystal-clear water guarantee'
          ]
        }
      ]
    },
    {
      id: 'perawatan-ikan-koi',
      title: 'Koi Fish Health & Veterinary Care',
      iconName: 'HeartHandshake',
      image: '/images/perawatan_ikan.avif',
      description: 'Comprehensive health monitoring, medical diagnosis, and treatment for koi fish. Specializing in parasite eradication (anchor worms, lice), fungal and gill infections, dropsy treatments, new fish quarantine protocols, and nutrition consulting.',
      visi: 'Ensuring every koi fish in your pond lives an active, vibrant, healthy, and long life.',
      misi: 'Delivering safe, calculated medical treatments and veterinary remedies based on precise diagnostics.',
      details: [
        'On-site physical fish examinations directly at your pond',
        'Targeted disease diagnostics and administered medical therapy',
        'Quarantine and acclimatization assistance for newly purchased koi',
        'Custom feeding regimens, vitamins, and color-enhancing nutrition plans'
      ],
      whyChooseUs: [
        'Fast emergency response preventing cross-infection in the pond',
        'Deep veterinary understanding of Nishikigoi biology and pathology',
        'High-grade, tested pharmaceutical aquatic remedies and antiseptics',
        'Long-term preventative wellness guidance'
      ],
      servicesList: [
        {
          category: 'Healthcare Capabilities',
          items: [
            'Parasite Treatments (Anchor Worm, Argulus Lice, Costia, White Spot)',
            'Bacterial & Fungal Therapies (Fin Rot, Cotton Wool, Aeromonas Ulcers)',
            'Quarantine & Acclimatization Protocols for New Arrivals',
            'Nutritional Formulation for Growth & Vibrant Color'
          ]
        }
      ],
      packages: [
        {
          name: 'Emergency Sick Fish Treatment',
          items: [
            'Intensive on-site fish diagnostic examination',
            'Precision medical dosing and targeted aquatic medicine',
            'Safe temporary quarantine isolation setup',
            'Regular follow-up until full fish recovery'
          ]
        },
        {
          name: 'General Wellness & Vitamin Package',
          items: [
            'Full flock health and behavior assessment',
            'Immune-boosting multivitamins and mineral treatment',
            'Weather and temperature-adapted feeding schedule'
          ]
        }
      ]
    },
    {
      id: 'pembuatan-perawatan-filter',
      title: 'Filter Design & Chamber Servicing',
      iconName: 'Wrench',
      image: '/images/filter_kolam.avif',
      description: 'Filtration is the vital heart of every koi pond. We design new multi-chamber filter systems, configure mechanical, biological, and chemical media, and install low-power circulation pumps and anti-algae UV sterilizers.',
      visi: 'Creating modern, low-maintenance filtration systems that sustain pure, crystal-clear water year-round.',
      misi: 'Applying cutting-edge aquatic engineering with premium filter media and clean plumbing craftsmanship.',
      details: [
        'Multi-stage chamber design (Vortex/Settling, Mechanical Sieve, Bio-Reactor, Pump Chamber)',
        'Premium filter media provisioning (Japmats, Bio-Rings, Bio-Balls, MBBR Moving Beds, Filter Brushes)',
        'Commercial UV Sterilizer integration to eliminate green water and floating algae',
        'Flow-matched low-wattage eco pump and high-output aerator installations'
      ],
      whyChooseUs: [
        'Engineered chamber sizing (minimum 30-40% of total pond volume)',
        'Guaranteed odor-free and non-green water environment',
        'Neat, sturdy, and easily accessible plumbing for simple backwash',
        'Official warranty on plumbing craftsmanship and electrical equipment'
      ],
      servicesList: [
        {
          category: 'Filtration Components',
          items: [
            'Mechanical Stage: Vortex Settler / Sieve / Stainless Filter Brushes',
            'Biological Stage: MBBR Moving Bed / Ceramic Bio-Rings / Bio-Balls',
            'Sterilization Stage: High-Output Submersible or Inline UV Clarifiers',
            'Equipment: Low-Wattage Eco Pumps & Hi-Blow Diaphragm Aerators'
          ]
        }
      ],
      packages: [
        {
          name: 'Complete New Pond Filter Package',
          items: [
            'Full premium mechanical and biological media setup',
            'Inline UV sterilizer installation preventing algae bloom',
            'Live nitrifying beneficial bacteria starter culture',
            'Comprehensive equipment and installation warranty'
          ]
        },
        {
          name: 'Media Refresh & Overhaul Package',
          items: [
            'Replacement of exhausted, saturated, or worn filter media',
            'Chamber deep cleaning and backwash valve servicing',
            'UV quartz sleeve cleaning & new bulb installation'
          ]
        }
      ]
    },
    {
      id: 'jual-beli-ikan-koi',
      title: 'Koi Fish Supply & Sourcing',
      iconName: 'ShoppingBag',
      image: '/images/jual_beli_koi.avif',
      description: 'Sourcing and supplying healthy, high-grade koi fish varieties in Bali. From promising young fingerlings (Tosai) to mature (Nisai) and show-quality parent stock, all rigorously quarantined and disease-free.',
      visi: 'To be Bali’s trusted source for premium, certified healthy, and show-grade koi fish.',
      misi: 'Providing authentic varieties with vibrant colors, symmetrical body conformation, and transparent pricing.',
      details: [
        'Classic and rare varieties: Kohaku, Taisho Sanke, Showa Sanshoku, Shiro Utsuri, Chagoi, Tancho, Asagi, Shusui',
        'Every fish undergoes a minimum 14-day rigorous quarantine before delivery',
        'Pond consignment and healthy koi trade-in service in Bali',
        'Safe oxygenated transport guaranteed live and healthy to your pond'
      ],
      whyChooseUs: [
        '100% healthy, energetic fish with vigorous appetite',
        'Extensive size selection from 15 cm fingerlings to 60+ cm jumbo koi',
        'Expert guidance on selecting compatible varieties for your pond capacity',
        'Fair, competitive pricing with live arrival guarantee'
      ],
      servicesList: [
        {
          category: 'Available Koi Varieties',
          items: [
            'Kohaku (Classic Elegant Red & White)',
            'Taisho Sanke & Showa Sanshoku (Three-Color Red, White & Black)',
            'Shiro Utsuri & Hi Utsuri (Black & White / Black & Red)',
            'Chagoi, Karashigoi, Ochiba (Friendly Jumbo Pond Takers)',
            'Tancho, Asagi, Shusui, Kujaku & Doitsu Scale-less'
          ]
        }
      ],
      packages: [
        {
          name: 'Starter Colony Package',
          items: [
            'Size 15 - 25 cm (Selected Tosai)',
            'Sharp color patterns & symmetrical body structure',
            'Fully quarantined and pond-ready',
            'Complimentary starter feed & care guide'
          ]
        },
        {
          name: 'Jumbo Show-Quality Package',
          items: [
            'Size 35 - 60+ cm (Nisai & Sansai)',
            'Impressive jumbo body conformation & deep luster',
            'Perfect centerpiece for luxury villa and hotel ponds',
            'Insured live delivery anywhere in Bali'
          ]
        }
      ]
    },
    {
      id: 'perbaikan-listrik-konstruksi',
      title: 'Pond Electrical & Structural Repair',
      iconName: 'Zap',
      image: '/images/renovasi_kolam.avif',
      description: 'Specialized repair and rewiring services for outdoor pond electrical systems, water pumps, high-flow aerators, UV sterilizers, stray electrical current insulation, alongside structural reinforced concrete reinforcement, crack repair, and leak-proof waterproofing across Bali.',
      visi: 'To deliver total electrical safety and unmatched structural durability for koi pond facilities throughout Bali.',
      misi: 'Providing rapid troubleshooting of electrical hazards and robust concrete rehabilitation with official workmanship warranties.',
      details: [
        'Comprehensive diagnostics of IP68 waterproof underwater wiring & junction boxes',
        'Stray electrical current elimination, GFCI/ELCB installations & pump overhauls',
        'Pressure injection grouting and elastomeric waterproofing for cracked pond walls',
        'Structural beam reinforcement and tempered glass viewing frame rebuilding'
      ],
      whyChooseUs: [
        'Certified pond electricians and structural concrete engineers in Bali',
        'Fast priority response for electrical shocks or critical structural cracks',
        'Industrial-grade non-toxic waterproofing safe for high-value Nishikigoi',
        '100% Official warranty and complimentary on-site inspection'
      ],
      servicesList: [
        {
          category: 'Pond Electrical Services',
          items: [
            'Submersible Pump Repair & Variable Speed Upgrades',
            'High-Volume Aeration System & Air Ring Setup',
            'Submersible UV Clarifier Wiring & Smart Control Timers',
            'Grounding & Stray Current Safety Isolation'
          ]
        },
        {
          category: 'Structural Concrete & Waterproofing',
          items: [
            'Concrete Wall & Floor Structural Crack Grouting',
            'Multi-Layer High-Pressure Waterproof Coating',
            'Natural Bali Stone & Glass Tile Tiling Refinishing',
            'Tempered Glass Viewing Panel Resealing & Replacement'
          ]
        }
      ],
      packages: [
        {
          name: 'Electrical & Pump Safety Overhaul',
          items: [
            'Complete check of outdoor conduits, sockets, and breaker panels',
            'Pump motor diagnostics, impedance & flow rate test',
            'Weatherproof rewiring to IP68 international standards',
            'Electrical safety certificate & warranty'
          ]
        },
        {
          name: 'Concrete Reconstruction & Waterproofing',
          items: [
            'High-precision leak and fracture point identification',
            'Epoxy/polyurethane resin crack injection sealing',
            '3-layer flexible membrane waterproofing & flood test'
          ]
        }
      ]
    },
    {
      id: 'regular-maintenance',
      title: '1-Year Regular Maintenance Package',
      iconName: 'CalendarCheck',
      image: '/images/regular_maintenance.avif',
      description: 'Comprehensive 1-Year Regular Maintenance Package for koi ponds in Bali. All-inclusive worry-free maintenance: 11x regular maintenance visits, 1x full deep clean, filter media replacement if damaged, fish health inspection, breeding assistance for pregnant fish, 1kg HIRO Premium fish food per month, and probiotics on every water change. Price starts from IDR 5,000,000 All-in.',
      visi: 'To deliver absolute peace of mind and pristine crystal-clear koi pond ecosystems with 365 days clear water warranty.',
      misi: 'Providing scheduled professional upkeep, maintaining peak koi nutrition, and ensuring bio-filtration operates at maximum efficiency year-round.',
      details: [
        '11x Regular Maintenance Visits throughout the year',
        '1x Full Maintenance (Total Basin & Chamber Deep Clean)',
        'Filter Media Replacement (if damaged or saturated)',
        'Comprehensive Fish Health & Physical Condition Inspection',
        'Breeding Assistance for Pregnant / Egg-Carrying Koi',
        'Complimentary 1kg HIRO PREMIUM FISH FOOD Every Month',
        'Beneficial Biological Probiotics Added on Every Water Change',
        'Guaranteed Crystal Clear Water 365 Days a Year'
      ],
      whyChooseUs: [
        'Guaranteed crystal clear water & healthy ecosystem 365 days',
        'Complimentary 1kg bag of HIRO Premium Koi Food every month',
        'Damaged filter media promptly replaced at zero extra cost',
        'Best-value all-inclusive annual package starting from IDR 5,000,000'
      ],
      servicesList: [
        {
          category: '1-Year Maintenance Scope',
          items: [
            '11x Regular Maintenance (Scheduled Servicing & Chamber Backwash)',
            '1x Full Maintenance / Deep Cleaning (Basin, Walls & Filter Chambers)',
            'Filter Media Replacement (Replaced If Damaged or Degraded)',
            'Fish Health Inspection (Vital Signs, Parasite & Disease Check)',
            'Breeding Assistance (Care & Spawning Support for Pregnant Fish)',
            'Complimentary 1kg HIRO Premium Koi Food Delivered Monthly',
            'Water-Clarifying Nitrifying Probiotics on Every Water Change',
            'Full Water Quality & Clarity Guarantee (Crystal Clear Water)'
          ]
        },
        {
          category: 'Annual Subscription Benefits',
          items: [
            'Zero daily pond maintenance hassle for homeowners & villa managers',
            'Continuous health tracking by certified aquatic specialists',
            'Priority emergency response for pump or water crises',
            'Fixed predictable yearly investment with no hidden charges'
          ]
        }
      ],
      packages: [
        {
          name: '1-Year Regular Maintenance Package (Standard)',
          items: [
            '11x Regular Maintenance + 1x Full Maintenance (Deep Clean)',
            'Filter Media Replacement (If Damaged)',
            'Fish Health Inspection & Breeding Assistance for Pregnant Fish',
            '1kg HIRO Premium Fish Food per Month + Probiotics on every water change',
            'Guarantee Clear Water',
            'START FROM IDR 5,000,000 All in'
          ]
        },
        {
          name: '1-Year Regular Maintenance Package (Commercial / Resort)',
          items: [
            'Large water volume / luxury resort & commercial villa display ponds',
            'Customizable frequency & full multivitamin immune boosters',
            '24/7 pump, aeration & UV sterilizer monitoring support',
            'Full 1-year comprehensive warranty & priority emergency calls'
          ]
        }
      ]
    }
  ]
};

// Bilingual Why Choose Us Data
export const bilingualWhyChooseUsData: Record<Language, WhyChooseUsItem[]> = {
  id: [
    {
      id: 'why-1',
      title: 'Harga Termurah & Fleksibel',
      description: 'Estimasi biaya transparan yang dapat disesuaikan dengan anggaran dan ukuran kolam Anda tanpa mengurangi kualitas.',
      iconName: 'DollarSign'
    },
    {
      id: 'why-2',
      title: 'Garansi Pekerjaan & Barang 100%',
      description: 'Setiap konstruksi, perbaikan kebocoran, pompa sirkulasi, dan media filter dilindungi jaminan garansi resmi.',
      iconName: 'ShieldCheck'
    },
    {
      id: 'why-3',
      title: 'Ahli Plumbing, Kelistrikan & Konstruksi',
      description: 'Dikerjakan langsung oleh teknisi spesialis dengan keahlian sirkulasi bottom drain, listrik outdoor aman, dan cor beton anti bocor.',
      iconName: 'Wrench'
    },
    {
      id: 'why-4',
      title: 'Konsultasi & Survei Gratis Seluruh Bali',
      description: 'Layanan konsultasi teknis dan survei langsung ke lokasi Anda di seluruh area Bali tanpa biaya tambahan.',
      iconName: 'Headphones'
    }
  ],
  en: [
    {
      id: 'why-1',
      title: 'Transparent & Flexible Pricing',
      description: 'Clear, itemized cost estimates tailored to your project budget and pond dimensions without compromising engineering quality.',
      iconName: 'DollarSign'
    },
    {
      id: 'why-2',
      title: '100% Craftsmanship & Equipment Warranty',
      description: 'Every structural build, waterproofing repair, circulation pump, and filter setup is protected by our official warranty.',
      iconName: 'ShieldCheck'
    },
    {
      id: 'why-3',
      title: 'Plumbing, Electrical & Concrete Specialists',
      description: 'Directly executed by dedicated technicians skilled in zero-dead-spot vortex plumbing, outdoor electrical safety, and leak-free concrete.',
      iconName: 'Wrench'
    },
    {
      id: 'why-4',
      title: 'Free On-Site Survey Across All Bali',
      description: 'Complimentary technical consultations and on-site visits to your villa, home, or resort anywhere in Bali with zero obligation.',
      iconName: 'Headphones'
    }
  ]
};

// Bilingual FAQ Data
export const bilingualFaqData: Record<Language, FAQItem[]> = {
  id: [
    {
      id: 'faq-1',
      question: 'Apakah KOI POND SERVICES BALI melayani konsultasi dan survei gratis?',
      answer: 'Ya, benar! Kami memberikan layanan KONSULTASI GRATIS dan survei lokasi langsung ke tempat Anda di seluruh wilayah Bali (Denpasar, Badung, Gianyar, Sanur, Kuta, Seminyak, Canggu, Ubud, Tabanan, Jimbaran, Nusa Dua, dan sekitarnya) tanpa biaya tambahan.',
      category: 'General'
    },
    {
      id: 'faq-2',
      question: 'Apakah ada garansi untuk pembuatan dan perbaikan kolam?',
      answer: 'Tentu saja. Setiap pekerjaan konstruksi kolam baru, perbaikan kolam bocor, instalasi perpipaan (plumbing), serta barang/peralatan (pompa, aerator, lampu UV) yang kami berikan memiliki jaminan garansi untuk memberikan ketenangan bagi Anda.',
      category: 'Warranty'
    },
    {
      id: 'faq-3',
      question: 'Bagaimana sistem penyesuaian harga dan anggaran?',
      answer: 'Kami mengusung prinsip HARGA TERMURAH DAN BISA MENYESUAIKAN. Anda cukup menyampaikan rencana atau anggaran yang Anda miliki, dan tim kami akan merancang spesifikasi desain kolam, material, dan sistem filtrasi yang paling optimal sesuai budget Anda.',
      category: 'Pricing'
    },
    {
      id: 'faq-4',
      question: 'Berapa lama waktu yang dibutuhkan untuk membuat kolam koi baru?',
      answer: 'Waktu pembuatan bervariasi tergantung ukuran dan kerumitan desain, umumnya berkisar antara 2 hingga 4 minggu. Waktu ini mencakup proses penggalian, pembesian, pengecoran beton kedap air, pengeringan waterproofing, instalasi filter, hingga uji genang air.',
      category: 'Process'
    },
    {
      id: 'faq-5',
      question: 'Kolam saya bocor dan airnya sering hijau berlumut, apakah bisa diperbaiki?',
      answer: 'Sangat bisa! Ini adalah spesialisasi utama kami. Kami akan melakukan perbaikan titik kebocoran dengan pelapis waterproofing elastis khusus, sekaligus mengoptimalkan ruang chamber filter biologis dan memasang lampu UV agar air kolam Anda kembali jernih kristal.',
      category: 'General'
    },
    {
      id: 'faq-6',
      question: 'Apakah ikan koi yang dijual dijamin sehat dan sudah dikarantina?',
      answer: 'Semua ikan koi yang kami sediakan dijamin 100% sehat, aktif, dan telah melalui masa karantina ketat minimal 14 hari serta steril dari parasit sebelum dikirim ke kolam Anda.',
      category: 'Materials'
    }
  ],
  en: [
    {
      id: 'faq-1',
      question: 'Does KOI POND SERVICES BALI provide free on-site consultations & surveys?',
      answer: 'Yes! We offer 100% FREE on-site surveys and consultations anywhere across Bali—including Denpasar, Badung, Gianyar, Sanur, Kuta, Seminyak, Canggu, Ubud, Tabanan, Jimbaran, Nusa Dua, and Uluwatu with zero hidden costs.',
      category: 'General'
    },
    {
      id: 'faq-2',
      question: 'Do you provide official warranties for new ponds and leak repairs?',
      answer: 'Absolutely. Every new pond construction project, structural leak repair, custom vortex plumbing installation, and electrical equipment (submersible pumps, air blowers, UV sterilizers) comes with our official warranty for your complete peace of mind.',
      category: 'Warranty'
    },
    {
      id: 'faq-3',
      question: 'How flexible is your pricing and project budget matching?',
      answer: 'We believe in top-tier engineering that matches your budget. Simply share your goals or allocated budget, and our engineering team will calculate the most optimal design, materials, and filtration setup to deliver the best value without compromising durability.',
      category: 'Pricing'
    },
    {
      id: 'faq-4',
      question: 'How long does it take to construct a new koi pond in Bali?',
      answer: 'Construction typically takes 2 to 4 weeks depending on pond volume and architectural complexity. This covers ground excavation, steel reinforcement, waterproof concrete casting, multi-layer curing, filtration setup, and rigorous standing water leak tests.',
      category: 'Process'
    },
    {
      id: 'faq-5',
      question: 'My pond is leaking and the water constantly turns green. Can it be restored?',
      answer: 'Yes, this is our core specialty! We will identify the exact leakage points using pressure-resistant elastomeric seals, re-engineer your bio-filtration chamber, and install commercial-grade UV clarifiers to permanently restore crystal clear water.',
      category: 'General'
    },
    {
      id: 'faq-6',
      question: 'Are supplied koi fish certified healthy and properly quarantined?',
      answer: 'Every koi fish we supply is 100% healthy, energetic, and has completed a minimum 14-day strict quarantine protocol to ensure complete safety before being introduced into your pond.',
      category: 'Materials'
    }
  ]
};

// Bilingual Articles Data
export const bilingualArticlesData: Record<Language, Article[]> = {
  id: [
    {
      id: 'art-1',
      slug: 'cara-merawat-air-kolam-koi-jernih-kristal-bali',
      title: 'Panduan Menjaga Air Kolam Koi Tetap Bening Kristal di Iklim Tropis Bali',
      category: 'Perawatan Kolam',
      date: '31 Agustus 2026',
      readTime: '4 Menit Baca',
      author: 'KOI POND SERVICES BALI',
      image: '/images/perawatan_kolam.avif',
      excerpt: 'Iklim tropis dan sinar matahari intens di Bali seringkali membuat kolam cepat berlumut dan air menjadi hijau. Simak tips ahli menjaga parameter air tetap ideal dan bening kristal sepanjang tahun.',
      content: [
        'Kualitas air adalah kunci utama kesehatan dan keindahan warna ikan koi. Di daerah tropis seperti Bali dengan paparan sinar ultraviolet yang tinggi, alga bersel satu dapat berkembang biak dengan sangat cepat jika kolam tidak ditunjang oleh sistem filtrasi yang memadai.',
        'Langkah pertama adalah memastikan sirkulasi air berjalan minimal 1.5 hingga 2 kali volume kolam per jam. Ini memastikan kotoran feses ikan tidak mengendap dan cepat dialirkan menuju bottom drain dan chamber filter mekanis.',
        'Gunakan kombinasi media filter biologis yang berkualitas seperti Japanese Mat (Japmat), Bio Ball, dan Bio Ring yang telah matang oleh bakteri pengurai (nitrifikasi) untuk mengubah amonia beracun menjadi nitrat.',
        'Pasang lampu UV Sterilizer dengan watt yang disesuaikan dengan debit air (standar 2-3 Watt per 1.000 liter). Lampu UV akan memecah struktur sel alga hijau sehingga air kolam tetap jernih tembus hingga ke dasar.',
        'Lakukan penggantian air (backwash) rutin sebanyak 10% hingga 15% setiap minggu untuk menjaga kesegaran air dan mengurangi kadar zat terlarut (TDS).'
      ],
      tags: ['Air Jernih', 'Perawatan Kolam', 'Filter Kolam', 'Tips Bali']
    },
    {
      id: 'art-2',
      slug: 'solusi-mengatasi-kolam-koi-bocor-bergaransi',
      title: 'Penyebab Kolam Koi Bocor & Cara Mengatasinya Tanpa Bongkar Total',
      category: 'Renovasi Kolam',
      date: '28 Agustus 2026',
      readTime: '5 Menit Baca',
      author: 'KOI POND SERVICES BALI',
      image: '/images/renovasi_kolam.avif',
      excerpt: 'Air kolam koi Anda cepat surut? Kenali penyebab kebocoran struktural vs plumbing serta metode pelapisan waterproofing elastis bergaransi yang efisien tanpa harus merobohkan kolam.',
      content: [
        'Kebocoran pada kolam koi merupakan masalah krusial yang tidak hanya boros air dan biaya listrik, tetapi juga mengancam kelangsungan hidup ikan karena fluktuasi parameter air yang drastis.',
        'Penyebab kebocoran umumnya terbagi menjadi dua: kebocoran struktural (retak pada beton atau sambungan dinding dasar) dan kebocoran sistem perpipaan (sambungan pipa PVC yang longgar atau pecah akibat pergeseran tanah).',
        'Metode perbaikan modern tidak memerlukan pembongkaran total. Tim spesialis kami menggunakan teknik injeksi resin poliuretan (PU) untuk menutup retakan dari dalam pori beton, diikuti pelapisan membran waterproofing elastis khusus kolam renang/ikan yang aman dan tidak beracun.',
        'Setelah pelapisan selesai, wajib dilakukan uji genang air selama minimal 3x24 jam untuk memastikan tekanan air statis tertahan dengan sempurna sebelum kolam kembali dioperasikan.'
      ],
      tags: ['Kolam Bocor', 'Renovasi Kolam', 'Waterproofing', 'Garansi']
    },
    {
      id: 'art-3',
      slug: 'desain-sistem-filter-chamber-vortex-terbaik',
      title: 'Desain Sistem Filter Chamber & Vortex: Rahasia Kolam Bebas Bau dan Kotoran',
      category: 'Filter & Plumbing',
      date: '25 Agustus 2026',
      readTime: '6 Menit Baca',
      author: 'KOI POND SERVICES BALI',
      image: '/images/filter_kolam.avif',
      excerpt: 'Mengapa filter kolam koi membutuhkan rasio minimal 30% dari volume kolam? Pelajari skema ideal chamber vortex mekanis, media biologis moving bed, dan plumbing tanpa titik mati.',
      content: [
        'Filtrasi kolam koi yang sukses harus mengintegrasikan dua fungsi krusial: penyaringan mekanis untuk menangkap kotoran padat dan penyaringan biologis untuk menetralisir racun amonia dari feses ikan.',
        'Chamber pertama idealnya berupa Settling Chamber atau Vortex. Desain aliran air memutar menciptakan gaya sentrifugal yang memaksa kotoran berat mengendap di dasar kerucut, sehingga mudah dibuang melalui pipa pembuangan backwash.',
        'Chamber biologis memanfaatkan media dengan luas permukaan spesifik tinggi (seperti Kaldnes K1 dalam sistem Moving Bed atau Japanese Mat). Bakteri aerobik Nitrosomonas dan Nitrobacter yang berkoloni di media ini akan menguraikan racun amonia menjadi nitrit lalu nitrat yang aman.',
        'Surface Skimmer dipasang di permukaan air untuk menyedot debu, minyak pakan, dan daun kering sebelum tenggelam ke dasar.',
        'Pipa arus return diposisikan strategis untuk menciptakan arus putaran air yang lembut menuju BD, sehingga kolam memiliki mekanisme "self-cleaning" alami.'
      ],
      tags: ['Bottom Drain', 'Plumbing Kolam', 'Konstruksi', 'Desain Kolam']
    }
  ],
  en: [
    {
      id: 'art-1',
      slug: 'cara-merawat-air-kolam-koi-jernih-kristal-bali',
      title: 'Expert Guide to Keeping Koi Pond Water Crystal Clear in Bali’s Tropical Climate',
      category: 'Pond Care',
      date: 'August 31, 2026',
      readTime: '4 Min Read',
      author: 'KOI POND SERVICES BALI',
      image: '/images/perawatan_kolam.avif',
      excerpt: 'Bali’s tropical heat and strong sunlight often cause rapid algae blooms and green water. Discover expert secrets to maintaining pristine, crystal-clear water year-round.',
      content: [
        'Water quality is the foundation of koi fish vitality and color brilliance. In tropical climates like Bali with intense UV exposure, single-celled green algae reproduce rapidly if the pond lacks adequate biological and UV filtration.',
        'The first essential rule is ensuring water turnover rates of 1.5 to 2 times the total pond volume per hour. This guarantees bottom debris is quickly swept into bottom drains and mechanical filtration chambers before decomposing.',
        'Utilize mature biological filter media such as Japanese Mats (Japmat), Bio-Balls, and Ceramic Rings populated with beneficial nitrifying bacteria to safely convert toxic ammonia into harmless nitrates.',
        'Install commercial-grade UV Sterilizers sized to your pond flow rate (typically 2-3 Watts per 1,000 liters of water). UV radiation neutralizes floating algae cell structures, keeping your water transparent down to the deepest bottom drain.',
        'Perform a weekly 10% to 15% water change (backwash) to reduce Total Dissolved Solids (TDS) and infuse fresh minerals essential for koi growth.'
      ],
      tags: ['Clear Water', 'Pond Maintenance', 'Filter Media', 'Bali Tips']
    },
    {
      id: 'art-2',
      slug: 'solusi-mengatasi-kolam-koi-bocor-bergaransi',
      title: 'Causes of Koi Pond Leaks & How to Fix Them Without Total Demolition',
      category: 'Pond Renovation',
      date: 'August 28, 2026',
      readTime: '5 Min Read',
      author: 'KOI POND SERVICES BALI',
      image: '/images/renovasi_kolam.avif',
      excerpt: 'Is your pond water level dropping fast? Learn how to distinguish structural concrete cracks from plumbing leaks, and how modern elastomeric waterproofing seals leaks with a warranty.',
      content: [
        'A leaking koi pond wastes massive volumes of water and electricity, but worse, it stresses fish due to sudden temperature and chemical fluctuations.',
        'Pond leaks generally stem from two origins: structural cracking (caused by ground shifting or improper concrete mixing) or subterranean PVC plumbing failure.',
        'Modern restoration engineering eliminates the need for expensive total demolition. Our technicians utilize targeted polyurethane (PU) chemical injection to seal cracks from deep within concrete pores, followed by fish-safe elastomeric waterproofing coats.',
        'Once coated, a continuous 72-hour hydrostatic standing water test is conducted to verify 100% water retention before fish are safely reintroduced.'
      ],
      tags: ['Pond Leak', 'Renovation', 'Waterproofing', 'Warranty']
    },
    {
      id: 'art-3',
      slug: 'desain-sistem-filter-chamber-vortex-terbaik',
      title: 'Vortex & Multi-Chamber Filter Design: The Secret to Odor-Free, Crystal Clear Water',
      category: 'Filter & Plumbing',
      date: 'August 25, 2026',
      readTime: '6 Min Read',
      author: 'KOI POND SERVICES BALI',
      image: '/images/filter_kolam.avif',
      excerpt: 'Why does an optimal koi pond filter require at least 30% of total pond volume? Learn the mechanics of vortex settlers, moving-bed bio-reactors, and zero-dead-spot plumbing.',
      content: [
        'Successful koi pond filtration requires two synchronized systems: high-capacity mechanical filtration to trap solids and bio-filtration to neutralize biological waste.',
        'The primary chamber functions best as a Vortex or Settling Chamber. Helical circular water motion creates centrifugal inertia, forcing heavy solid fish waste to sink into a bottom cone where it is easily flushed out.',
        'Secondary biological chambers feature high surface-area media (such as Kaldnes K1 Moving Beds or Japanese Mats). Billions of aerobic Nitrosomonas and Nitrobacter bacteria thrive here, oxidizing toxic ammonia into harmless nitrates.',
        'Surface skimmers sweep away dust, floating leaves, and oily feed residues before they sink to the pond floor.',
        'Return jets are positioned to establish a smooth circular current driving all bottom waste directly toward the bottom drain, creating a natural self-cleaning pond ecosystem.'
      ],
      tags: ['Bottom Drain', 'Pond Plumbing', 'Construction', 'Pond Design']
    }
  ]
};
