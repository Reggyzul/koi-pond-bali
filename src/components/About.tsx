import { motion } from 'motion/react';
import { BookOpen, Quote, ArrowLeft, Wrench, Zap, Waves, MapPin, CheckCircle2 } from 'lucide-react';
import { founderProfile } from '../data';

interface AboutProps {
  onBackToHome?: () => void;
}

export default function About({ onBackToHome }: AboutProps) {
  return (
    <div className={onBackToHome ? "pt-16 min-h-screen bg-[#F8F9FA]" : ""}>
      {onBackToHome && (
        <div className="bg-[#0B436B] text-white border-b border-[#083657] py-3.5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <button
              id="about-page-back-btn"
              onClick={onBackToHome}
              className="text-xs font-bold tracking-wider uppercase text-white/80 hover:text-white flex items-center gap-1.5 group cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </button>
            <span className="text-xs font-mono tracking-widest text-[#FCB900] uppercase font-bold">
              Profil Pemilik & Usaha
            </span>
          </div>
        </div>
      )}

      <section id="about" className={`py-16 bg-white ${onBackToHome ? "" : "border-b border-gray-200"}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <span className="text-xs font-bold tracking-widest uppercase text-[#E53935] block">
                TENTANG KAMI
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B436B] leading-tight">
                Profil Founder & Dedikasi Kolam
              </h2>
              <div className="h-1 w-16 bg-[#E53935] mx-auto mt-2.5 rounded-full" />
            </div>

            {/* Founder Identity Card */}
            <div className="border border-gray-200 bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-1 bg-[#E53935] text-white rounded-full text-xs font-bold uppercase tracking-wider">
                      Sejak 2021
                    </span>
                    <span className="px-3 py-1 bg-[#0B436B] text-white rounded-full text-xs font-bold uppercase tracking-wider">
                      Bali, Indonesia
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B436B] tracking-tight">
                    {founderProfile.name}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#E53935] mt-0.5">
                    {founderProfile.role}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#0B436B] font-medium bg-white px-4 py-2.5 rounded-lg border border-gray-200 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#E53935]" />
                  <span>Jl. Pura Demak 2 No. 24, Bali</span>
                </div>
              </div>

              {/* Masterpiece Quote Block */}
              <div className="relative pl-6 py-2 bg-white rounded-xl border border-gray-200 p-5 shadow-2xs">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0B436B] rounded-l-xl" />
                <Quote className="absolute -top-3 -left-1 w-8 h-8 text-[#0B436B]/15 rotate-180 pointer-events-none" />
                <p className="italic text-base sm:text-lg text-[#0B436B] font-medium leading-relaxed">
                  "{founderProfile.quote}"
                </p>
              </div>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-2">
                  <div className="p-2.5 w-fit rounded-lg bg-[#0B436B]/10 text-[#0B436B]">
                    <Waves className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-[#0B436B]">1. Plumbing</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Sistem perpipaan sirkulasi bottom drain, surface skimmer, backwash, dan return tanpa dead spot.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-2">
                  <div className="p-2.5 w-fit rounded-lg bg-[#0B436B]/10 text-[#0B436B]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-[#0B436B]">2. Kelistrikan</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Instalasi kelistrikan pompa, aerator, UV sterilizer hemat energi yang aman dari korsleting outdoor.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-2">
                  <div className="p-2.5 w-fit rounded-lg bg-[#0B436B]/10 text-[#0B436B]">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-[#0B436B]">3. Konstruksi</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Struktur beton bertulang dan waterproofing elastis anti retak/bocor bergaransi resmi.
                  </p>
                </div>
              </div>

              {/* Latar Belakang */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-[#0B436B] font-bold text-sm uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-[#E53935]" />
                  <span>Komitmen Layanan</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {founderProfile.background}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-sm text-[#0B436B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E53935] shrink-0" />
                    <span>Harga termurah dan fleksibel menyesuaikan budget</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0B436B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E53935] shrink-0" />
                    <span>Setiap barang & pekerjaan bergaransi 100%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0B436B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E53935] shrink-0" />
                    <span>Konsultasi & survei gratis ke seluruh wilayah Bali</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0B436B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E53935] shrink-0" />
                    <span>Penanganan cepat untuk kolam bocor & ikan sakit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
