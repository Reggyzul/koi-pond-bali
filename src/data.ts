/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Service,
  WhyChooseUsItem,
  FAQItem
} from './types';

// Slogan & Deskripsi Utama KOI POND SERVICES BALI
export const brandName = "KOI POND SERVICES BALI";
export const brandSlogan = "Spesialis Pembuatan, Perbaikan dan Perawatan Kolam, Filter dan Ikan Koi Terbaik di Indonesia Khususnya Bali.";
export const brandDescription = "KOI POND SERVICES BALI adalah penyedia jasa terpadu dan profesional spesialis pembuatan, renovasi, perawatan kolam & sistem filtrasi, serta perawatan dan jual-beli ikan koi terpercaya di Bali sejak 2021. Didukung tenaga ahli plumbing, kelistrikan, dan konstruksi berpengalaman dengan harga termurah, fleksibel, serta bergaransi resmi.";

// Data Owner / Founder Profile
export const founderProfile = {
  name: "Alvian Malengga",
  role: "Founder & Owner KOI POND SERVICES BALI",
  established: 2021,
  quote: "Kolam yang sehat berawal dari sistem filtrasi dan plumbing yang presisi, menghadirkan air sejernih kristal untuk keindahan dan kesehatan ikan koi Anda.",
  background: "KOI POND SERVICES BALI didirikan pada tahun 2021 dan dipimpin langsung oleh Alvian Malengga. Dengan dedikasi tinggi dan keahlian mendalam di bidang plumbing perairan, instalasi kelistrikan sistem kolam, dan konstruksi beton kedap air, beliau memimpin tim teknisi profesional dalam menangani berbagai proyek kolam koi di seluruh Bali — mulai dari hunian pribadi, villa, resort, restoran, hingga area komersial. Seluruh layanan kami mengutamakan kepuasan pelanggan melalui harga yang fleksibel, hasil kerja rapi, serta garansi pada setiap pekerjaan dan material."
};

// 6 Layanan Utama dengan Foto Generated Asli
export const servicesData: Service[] = [
  {
    id: 'pembuatan-kolam-koi',
    title: 'Pembuatan Kolam Koi',
    iconName: 'Building2',
    image: '/images/pembuatan_kolam.jpg',
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
    image: '/images/renovasi_kolam.jpg',
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
    image: '/images/perawatan_kolam.jpg',
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
    image: '/images/perawatan_ikan.jpg',
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
    image: '/images/filter_kolam.jpg',
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
    image: '/images/jual_beli_koi.jpg',
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
  }
];

// Keunggulan Utama Usaha
export const whyChooseUsData: WhyChooseUsItem[] = [
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
];

// FAQ Data
export const faqData: FAQItem[] = [
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
];

// Informasi Kontak & Area
export const contactData = {
  businessName: "KOI POND SERVICES BALI",
  ownerName: "ALVIAN MALENGGA",
  phone: "08133034733",
  whatsapp: "08133034733",
  whatsappUrl: "https://wa.me/628133034733",
  instagram: "@koi_pondbali",
  instagramUrl: "https://www.instagram.com/koi_pondbali/",
  address: "JL PURA DEMAK 2 NO. 24, BALI",
  serviceArea: "Seluruh Bali (Denpasar, Badung, Gianyar, Sanur, Kuta, Seminyak, Canggu, Ubud, Tabanan, Jimbaran, Nusa Dua, dll.)",
  operatingHours: "08.00 - 18.00 WITA (Senin - Minggu / Konsultasi WhatsApp 24 Jam)"
};
