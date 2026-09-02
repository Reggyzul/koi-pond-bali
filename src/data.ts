/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Service,
  WhyChooseUsItem,
  FAQItem,
  Article
} from './types';

// Slogan & Deskripsi Utama KOI POND SERVICES BALI
export const brandName = "KOI POND SERVICES BALI";
export const brandSlogan = "Spesialis Pembuatan, Perbaikan dan Perawatan Kolam, Filter dan Ikan Koi Terbaik di Indonesia Khususnya Bali.";
export const brandDescription = "KOI POND SERVICES BALI adalah penyedia jasa terpadu dan profesional spesialis pembuatan, renovasi, perawatan kolam & sistem filtrasi, serta perawatan dan jual-beli ikan koi terpercaya di Bali sejak 2021. Didukung tenaga ahli plumbing, kelistrikan, dan konstruksi berpengalaman dengan harga termurah, fleksibel, serta bergaransi resmi.";

// Data Profil & Sejarah Perjalanan KOI POND SERVICES BALI
export const founderProfile = {
  name: "KOI POND SERVICES BALI",
  role: "Spesialis Kolam, Sistem Filter & Perawatan Ikan Koi di Bali",
  established: 2021,
  quote: "Kolam yang sehat berawal dari sistem filtrasi dan plumbing yang presisi, menghadirkan air sejernih kristal untuk keindahan dan kesehatan ekosistem ikan koi Anda.",
  history: "KOI POND SERVICES BALI didirikan pada tahun 2021 sebagai layanan terpadu spesialis ekosistem kolam koi di Bali. Berawal dari kecintaan mendalam terhadap seni arsitektur air dan biologi Nishikigoi, kami mendedikasikan diri untuk menghadirkan standar mutu perkolaman terbaik bagi residensial, villa, resort, restoran, dan properti komersial di seluruh Bali.",
  background: "Dengan mengintegrasikan tiga keahlian inti — plumbing sirkulasi air tanpa dead-spot, kelistrikan outdoor aman & hemat daya, serta konstruksi beton kedap air anti bocor bergaransi — KOI POND SERVICES BALI senantiasa mengutamakan kepuasan pelanggan lewat transparansi biaya, estimasi yang fleksibel, dan garansi penuh pada setiap pekerjaan."
};

// 6 Layanan Utama dengan Foto Generated Asli
export const servicesData: Service[] = [
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
    image: '/images/renovasi_kolam.avif',
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

// Artikel & Edukasi Kolam Koi
export const articlesData: Article[] = [
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
      'Kolam koi yang bocor merupakan momok bagi penghobi karena dapat memboroskan air, mengganggu kestabilan parameter air, dan membahayakan keselamatan ikan koi jika air surut saat pemilik sedang bepergian.',
      'Penyebab utama kebocoran kolam umumnya terbagi dua: pergeseran tanah/retak struktur beton (structural crack) dan kebocoran sambungan pipa sirkulasi/bottom drain (plumbing leakage).',
      'Untuk mendiagnosa lokasi bocor, biarkan air surut secara alami hingga berhenti pada level tertentu. Jika air berhenti tepat di bawah skimmer atau pipa return, titik bocor berada di jalur pipa tersebut. Jika terus surut ke dasar, kemungkinan besar terjadi retak di dinding atau lantai beton.',
      'Metode penanganan modern tidak selalu memerlukan pembongkaran total. Kami menggunakan teknologi injeksi semen grouting polimer dan pelapisan membran waterproofing elastis berbahan dasar semen fleksibel anti-lumut yang aman 100% untuk ikan koi.',
      'Pastikan setiap perbaikan dikerjakan oleh teknisi berpengalaman dan memiliki garansi tertulis agar kolam tahan puluhan tahun.'
    ],
    tags: ['Kolam Bocor', 'Renovasi', 'Waterproofing', 'Garansi']
  },
  {
    id: 'art-3',
    slug: 'panduan-sistem-filter-chamber-vortex-koi',
    title: 'Mengenal Sistem Filter Chamber Vortex & Media Filtrasi Terbaik untuk Kolam Koi',
    category: 'Sistem Filter',
    date: '25 Agustus 2026',
    readTime: '6 Menit Baca',
    author: 'KOI POND SERVICES BALI',
    image: '/images/filter_kolam.avif',
    excerpt: 'Sistem filter adalah jantung kolam koi. Pelajari bagaimana sistem 4 chamber vortex memisahkan kotoran padat, menyaring zat kimia berbahaya, dan menciptakan ekosistem air yang sehat.',
    content: [
      'Memelihara ikan koi pada hakikatnya adalah memelihara air. Tanpa filter yang dirancang dengan rasio volume ideal (minimal 30% dari total volume kolam utama), ikan koi akan rentan terserang penyakit akibat penumpukan amonia.',
      'Sistem Chamber Multi-Stage standar profesional terdiri dari: Chamber 1 (Vortex / Settling Chamber & Sikat Brush Mekanis) untuk menangkap kotoran kasar; Chamber 2 (Moving Bed MBBR / Japmat) untuk kolonisasi bakteri aerob; Chamber 3 (Bio Ring / Batu Apung / Lava Rock) untuk filtrasi biologis lanjutan; dan Chamber 4 (Pompa Return & Lampu UV Sterilizer).',
      'Media mekanis bertugas menyaring kotoran fisik, sedangkan media biologis membutuhkan asupan oksigen yang melimpah dari aerator agar bakteri menguntungkan dapat memproses racun kotoran ikan secara efektif.',
      'KOI POND SERVICES BALI melayani rancang bangun chamber baru, perombakan chamber sempit, dan upgrade media filter bermutu tinggi yang mudah dibackwash.'
    ],
    tags: ['Filter Chamber', 'Vortex', 'Media Filter', 'Plumbing']
  },
  {
    id: 'art-4',
    slug: 'pertolongan-pertama-ikan-koi-sakit-jamur-kutu',
    title: 'Pertolongan Pertama Saat Ikan Koi Sakit, Berjamur, atau Terserang Kutu Jarum',
    category: 'Perawatan Ikan',
    date: '20 Agustus 2026',
    readTime: '4 Menit Baca',
    author: 'KOI POND SERVICES BALI',
    image: '/images/perawatan_ikan.avif',
    excerpt: 'Gejala ikan koi diam di dasar, flashing menggesekkan badan, atau timbul bercak merah/putih membutuhkan penanganan medis yang cepat dan tepat sebelum menular ke seluruh kolam.',
    content: [
      'Perubahan cuaca ekstrem di Bali (pancaroba musim hujan ke kemarau) seringkali memicu stres pada ikan koi dan melemahkan sistem imun mereka.',
      'Gejala umum penyakit koi meliputi: berenang menyendiri di pojok kolam, sirip menguncup, tubuh berlendir tebal, bintik putih (Ich / White Spot), luka borok merah (Aeromonas), atau kutu jarum (Lernaea) yang menempel di sisik.',
      'Langkah pertama: Segera pisahkan ikan yang sakit ke bak karantina khusus. Berikan aerasi kencang dan tambahkan garam ikan non-yodium dengan dosis 3-5 kg per 1.000 liter air untuk membantu regulasi osmoregulasi ikan.',
      'Gunakan obat-obatan teruji seperti Malachite Green, Acriflavine, atau Dimilin khusus kutu sesuai dosis yang tepat. Hindari memasukkan garam langsung ke kolam utama jika terdapat tanaman air atau zeolit.',
      'Jika Anda ragu melakukan pengobatan sendiri, tim KOI POND SERVICES BALI siap datang langsung ke lokasi Anda untuk melakukan diagnosa medis, swab parasit, dan pemberian obat injeksi/oles.'
    ],
    tags: ['Ikan Sakit', 'Kutu Jarum', 'Pengobatan Koi', 'Karantina']
  },
  {
    id: 'art-5',
    slug: 'tips-memilih-ikan-koi-berkualitas-bali',
    title: 'Tips Memilih Jenis Ikan Koi (Kohaku, Sanke, Showa) untuk Pemula di Bali',
    category: 'Jual Beli Koi',
    date: '15 Agustus 2026',
    readTime: '5 Menit Baca',
    author: 'KOI POND SERVICES BALI',
    image: '/images/jual_beli_koi.avif',
    excerpt: 'Ingin mulai mengoleksi koi? Kenali 3 varietas paling populer (Gosanke) beserta kriteria bentuk tubuh (body build), ketajaman warna (kiwa & sashi), dan pola motif yang bernilai tinggi.',
    content: [
      'Dalam dunia Nishikigoi, kelompok "Big Three" atau Gosanke (Kohaku, Taisho Sanke, dan Showa Sanshoku) adalah varietas yang paling bergengsi dan menjadi primadona di setiap kontes koi.',
      'Kohaku adalah koi dengan dasar warna putih bersih (Shiroji) dengan corak merah menyala (Hi/Beni). Pilihlah Kohaku dengan pola merah yang seimbang dari kepala hingga pangkal ekor (odome) dan warna putih yang tidak kekuningan.',
      'Taisho Sanke (Sanke) adalah koi putih dengan corak merah dan bercak hitam (Sumi) yang hanya tersebar di atas garis punggung, tanpa ada corak hitam di area kepala.',
      'Showa Sanshoku (Showa) memiliki warna dasar hitam dengan corak merah dan putih, dengan ciri khas corak hitam bermotif petir (Menware) di bagian kepala.',
      'Selain corak warna, perhatikan postur tubuh: pilih ikan yang berbadan seperti torpedo (proporsional tidak buncit), sirip dada mulus, dan mata yang jernih aktif berenang.',
      'Kami menyediakan koleksi bibit unggul tosai hingga koi jumbo berkualitas kontes yang sudah lolos karantina ketat di Bali.'
    ],
    tags: ['Gosanke', 'Kohaku', 'Sanke', 'Showa', 'Beli Koi']
  },
  {
    id: 'art-6',
    slug: 'standar-plumbing-dan-bottom-drain-kolam-koi',
    title: 'Standar Kedalaman & Sirkulasi Pipa (Bottom Drain & Skimmer) Kolam Koi Modern',
    category: 'Konstruksi Kolam',
    date: '10 Agustus 2026',
    readTime: '5 Menit Baca',
    author: 'KOI POND SERVICES BALI',
    image: '/images/pembuatan_kolam.avif',
    excerpt: 'Kunci kolam koi minim perawatan adalah desain plumbing yang benar sejak awal pengecoran. Pahami fungsi bottom drain, skimmer, aerated BD, dan kemiringan lantai kolam.',
    content: [
      'Banyak pemilik kolam koi mengeluh harus menguras kolam setiap minggu karena kotoran mengendap di dasar. Masalah ini 100% bersumber dari kesalahan desain dasar kolam dan perpipaan plumbing.',
      'Standar kedalaman kolam koi ideal untuk iklim Bali adalah minimal 1 meter hingga 1.5 meter. Kedalaman ini menjaga suhu air tetap sejuk dan stabil meski matahari siang sangat terik, serta memberi ruang bagi koi untuk berkembang jumbo.',
      'Lantai kolam wajib dibuat miring membentuk kerucut mengarah ke lubang Bottom Drain (BD) dengan pipa berukuran minimal 3 atau 4 inch agar kotoran tersedot gravitasi secara otomatis.',
      'Surface Skimmer dipasang di permukaan air untuk menyedot debu, minyak pakan, dan daun kering sebelum tenggelam ke dasar.',
      'Pipa arus return diposisikan strategis untuk menciptakan arus putaran air yang lembut menuju BD, sehingga kolam memiliki mekanisme "self-cleaning" alami.'
    ],
    tags: ['Bottom Drain', 'Plumbing Kolam', 'Konstruksi', 'Desain Kolam']
  }
];

// Informasi Kontak & Area
export const contactData = {
  businessName: "KOI POND SERVICES BALI",
  ownerName: "KOI POND SERVICES BALI",
  phone: "08133034733",
  phoneSecondary: "081295903430",
  whatsapp1: "08133034733",
  whatsappUrl1: "https://wa.me/628133034733",
  whatsapp2: "081295903430",
  whatsappUrl2: "https://wa.me/6281295903430",
  whatsapp: "08133034733",
  whatsappUrl: "https://wa.me/628133034733",
  instagram: "@koi_pondbali",
  instagramUrl: "https://www.instagram.com/koi_pondbali/",
  tiktok: "@koipondservices.com",
  tiktokUrl: "https://www.tiktok.com/@koipondservices.com",
  address: "JL PURA DEMAK 2 NO. 24, BALI",
  serviceArea: "Seluruh Bali (Denpasar, Badung, Gianyar, Sanur, Kuta, Seminyak, Canggu, Ubud, Tabanan, Jimbaran, Nusa Dua, dll.)",
  operatingHours: "08.00 - 18.00 WITA (Senin - Minggu / Konsultasi WhatsApp 24 Jam)"
};
