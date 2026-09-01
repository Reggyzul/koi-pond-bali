import { motion } from 'motion/react';
import { BookOpen, Quote, ArrowLeft, Wrench, Zap, Waves, MapPin, CheckCircle2 } from 'lucide-react';
import { founderProfile } from '../data';

interface AboutProps {
  onBackToHome?: () => void;
}

export default function About({ onBackToHome }: AboutProps) {
  return (
    <div className={onBackToHome ? "pt-18 min-h-screen bg-[#F2F9F9]" : ""}>
      {onBackToHome && (
        <div className="bg-gradient-to-r from-[#04242E] via-[#062C38] to-[#0A4354] text-white border-b border-teal-500/20 py-4 shadow-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <button
              id="about-page-back-btn"
              onClick={onBackToHome}
              className="text-sm sm:text-base font-bold tracking-wide uppercase text-teal-100 hover:text-white flex items-center gap-2 group cursor-pointer bg-white/10 hover:bg-white/20 py-2 px-4 rounded-xl border border-white/15 transition-all shadow-sm"
            >
              <ArrowLeft className="w-5 h-5 text-[#FF6E40] group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Beranda</span>
            </button>
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FBBF24] uppercase font-extrabold bg-black/20 px-3 py-1 rounded-md border border-amber-400/20">
              Profil Pemilik & Dedikasi Kolam
            </span>
          </div>
        </div>
      )}

      <section id="about" className={`py-16 md:py-20 bg-white ${onBackToHome ? "" : "border-b border-teal-900/10"}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8">
            <div className="space-y-3 text-center">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#FF5722] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200/80 inline-block shadow-2xs">
                TENTANG KAMI
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062C38] leading-tight">
                Profil Founder & Dedikasi Kolam
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2.5 rounded-full" />
            </div>

            {/* Founder Identity Card */}
            <div className="border border-teal-900/10 bg-[#F2F9F9] rounded-3xl p-7 sm:p-10 space-y-7 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-teal-900/10 pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3.5 py-1 bg-[#FF5722] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      Sejak 2021
                    </span>
                    <span className="px-3.5 py-1 bg-[#062C38] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      Bali, Indonesia
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#062C38] tracking-tight">
                    {founderProfile.name}
                  </h3>
                  <p className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#FF5722] mt-1">
                    {founderProfile.role}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 text-sm sm:text-base text-[#062C38] font-bold bg-white px-5 py-3 rounded-2xl border border-teal-900/10 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#FF5722] shrink-0" />
                  <span>Jl. Pura Demak 2 No. 24, Bali</span>
                </div>
              </div>

              {/* Masterpiece Quote Block */}
              <div className="relative pl-7 py-3 bg-white rounded-2xl border border-teal-900/10 p-6 shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#FF5722] to-[#FF6E40] rounded-l-2xl" />
                <Quote className="absolute -top-3 -left-1 w-9 h-9 text-[#0E5C73]/15 rotate-180 pointer-events-none" />
                <p className="italic text-base sm:text-xl text-[#062C38] font-medium leading-relaxed">
                  "{founderProfile.quote}"
                </p>
              </div>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
                <div className="p-6 rounded-2xl bg-white border border-teal-900/10 shadow-sm space-y-3 hover:border-teal-500/40 transition-all">
                  <div className="p-3 w-fit rounded-xl bg-teal-50 text-[#0E5C73]">
                    <Waves className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h4 className="font-black text-lg text-[#062C38]">1. Plumbing</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Sistem perpipaan sirkulasi bottom drain, surface skimmer, backwash, dan return tanpa dead spot.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-teal-900/10 shadow-sm space-y-3 hover:border-amber-500/40 transition-all">
                  <div className="p-3 w-fit rounded-xl bg-amber-50 text-[#F59E0B]">
                    <Zap className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h4 className="font-black text-lg text-[#062C38]">2. Kelistrikan</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Instalasi kelistrikan pompa, aerator, UV sterilizer hemat energi yang aman dari korsleting outdoor.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-teal-900/10 shadow-sm space-y-3 hover:border-emerald-500/40 transition-all">
                  <div className="p-3 w-fit rounded-xl bg-emerald-50 text-[#059669]">
                    <Wrench className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h4 className="font-black text-lg text-[#062C38]">3. Konstruksi</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Struktur beton bertulang dan waterproofing elastis anti retak/bocor bergaransi resmi.
                  </p>
                </div>
              </div>

              {/* Latar Belakang & Komitmen */}
              <div className="space-y-4 pt-5 border-t border-teal-900/10">
                <div className="flex items-center gap-2.5 text-[#062C38] font-black text-base sm:text-lg uppercase tracking-wider">
                  <BookOpen className="w-5 h-5 text-[#FF5722]" />
                  <span>Komitmen & Standar Kerja</span>
                </div>
                <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed">
                  {founderProfile.background}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                  <div className="flex items-center gap-3 text-base text-[#062C38] font-semibold bg-white p-3.5 rounded-xl border border-teal-900/10 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                    <span>Harga termurah dan fleksibel menyesuaikan budget</span>
                  </div>
                  <div className="flex items-center gap-3 text-base text-[#062C38] font-semibold bg-white p-3.5 rounded-xl border border-teal-900/10 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                    <span>Setiap barang & pekerjaan bergaransi 100%</span>
                  </div>
                  <div className="flex items-center gap-3 text-base text-[#062C38] font-semibold bg-white p-3.5 rounded-xl border border-teal-900/10 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                    <span>Konsultasi & survei gratis ke seluruh wilayah Bali</span>
                  </div>
                  <div className="flex items-center gap-3 text-base text-[#062C38] font-semibold bg-white p-3.5 rounded-xl border border-teal-900/10 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
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
