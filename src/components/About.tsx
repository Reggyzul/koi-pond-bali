import { motion } from 'motion/react';
import { BookOpen, Quote, ArrowLeft, Wrench, Zap, Waves, MapPin, CheckCircle2 } from 'lucide-react';
import { founderProfile } from '../data';

interface AboutProps {
  onBackToHome?: () => void;
}

export default function About({ onBackToHome }: AboutProps) {
  return (
    <div className={onBackToHome ? "pt-18 min-h-screen relative" : ""}>
      {onBackToHome && (
        <div className="bg-[#04242E]/80 backdrop-blur-md text-white border-b border-teal-500/20 py-4 shadow-md sticky top-16 z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <button
              id="about-page-back-btn"
              onClick={onBackToHome}
              className="text-xs sm:text-sm font-bold tracking-wide uppercase text-teal-100 hover:text-white flex items-center gap-2 group cursor-pointer bg-white/10 hover:bg-white/20 py-2 px-4 rounded-xl border border-white/15 transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF6E40] group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Beranda</span>
            </button>
            <span className="text-xs font-mono tracking-widest text-[#FBBF24] uppercase font-bold bg-black/30 px-3 py-1 rounded-md border border-amber-400/20">
              Profil & Sejarah Layanan
            </span>
          </div>
        </div>
      )}

      <section id="about" className={`py-14 md:py-18 relative ${onBackToHome ? "" : "glass-aquatic-section"}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 text-center"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6E40] bg-[#04242E]/70 backdrop-blur-md px-4 py-1 rounded-full border border-teal-500/25 inline-block shadow-xs">
                Tentang Kami
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Profil & Sejarah KOI POND SERVICES BALI
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
            </motion.div>

            {/* Company Identity Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-teal-500/20 glass-aquatic-card rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-teal-500/20 pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="px-3 py-0.5 bg-[#FF5722] text-white rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs">
                      Sejak 2021
                    </span>
                    <span className="px-3 py-0.5 bg-teal-900/80 text-teal-200 border border-teal-500/30 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs">
                      Bali, Indonesia
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {founderProfile.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF6E40] mt-0.5">
                    {founderProfile.role}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-teal-100 font-semibold bg-[#04242E]/70 px-4 py-2.5 rounded-xl border border-teal-500/25 shadow-xs">
                  <MapPin className="w-4 h-4 text-[#FF5722] shrink-0" />
                  <span>Jl. Pura Demak 2 No. 24, Bali</span>
                </div>
              </div>

              {/* Masterpiece Quote Block */}
              <div className="relative pl-6 py-2.5 bg-[#04242E]/60 rounded-xl border border-teal-500/20 p-5 shadow-xs">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF5722] to-[#FF6E40] rounded-l-xl" />
                <Quote className="absolute -top-2.5 -left-1 w-7 h-7 text-teal-400/20 rotate-180 pointer-events-none" />
                <p className="italic text-sm sm:text-base text-teal-100 font-medium leading-relaxed">
                  "{founderProfile.quote}"
                </p>
              </div>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-5 rounded-xl bg-[#04242E]/60 border border-teal-500/20 shadow-xs space-y-2.5 hover:border-teal-400/50 transition-all">
                  <div className="p-2.5 w-fit rounded-lg bg-teal-950 text-teal-300 border border-teal-500/30">
                    <Waves className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="font-bold text-base text-white">1. Plumbing</h4>
                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed font-normal">
                    Sistem perpipaan sirkulasi bottom drain, surface skimmer, dan return tanpa dead spot.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#04242E]/60 border border-teal-500/20 shadow-xs space-y-2.5 hover:border-amber-400/50 transition-all">
                  <div className="p-2.5 w-fit rounded-lg bg-amber-950/60 text-[#FBBF24] border border-amber-500/30">
                    <Zap className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="font-bold text-base text-white">2. Kelistrikan</h4>
                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed font-normal">
                    Instalasi pompa, aerasi, dan UV sterilizer hemat energi yang aman dari korsleting outdoor.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#04242E]/60 border border-teal-500/20 shadow-xs space-y-2.5 hover:border-emerald-400/50 transition-all">
                  <div className="p-2.5 w-fit rounded-lg bg-emerald-950/60 text-[#10B981] border border-emerald-500/30">
                    <Wrench className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="font-bold text-base text-white">3. Konstruksi</h4>
                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed font-normal">
                    Struktur beton bertulang dan waterproofing elastis anti retak dengan garansi resmi.
                  </p>
                </div>
              </div>

              {/* Sejarah & Standar Komitmen */}
              <div className="space-y-4 pt-4 border-t border-teal-500/20">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-[#FF6E40]" />
                    <span>Sejarah & Dedikasi Layanan</span>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">
                    {founderProfile.history}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">
                    {founderProfile.background}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-teal-100 font-medium bg-[#04242E]/60 p-3 rounded-lg border border-teal-500/20 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Biaya fleksibel menyesuaikan kebutuhan kolam</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-teal-100 font-medium bg-[#04242E]/60 p-3 rounded-lg border border-teal-500/20 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Setiap pekerjaan bergaransi 100%</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-teal-100 font-medium bg-[#04242E]/60 p-3 rounded-lg border border-teal-500/20 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Konsultasi dan survei gratis ke seluruh wilayah Bali</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-teal-100 font-medium bg-[#04242E]/60 p-3 rounded-lg border border-teal-500/20 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Penanganan cepat untuk kolam bocor dan ikan sakit</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
