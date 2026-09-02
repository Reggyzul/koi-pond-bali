/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, Quote, ArrowLeft, Wrench, Zap, Waves, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  onBackToHome?: () => void;
}

export default function About({ onBackToHome }: AboutProps) {
  const { t, language } = useLanguage();

  const historyText = language === 'id'
    ? "KOI POND SERVICES BALI didirikan pada tahun 2021 sebagai layanan terpadu spesialis ekosistem kolam koi di Bali. Berawal dari kecintaan mendalam terhadap seni arsitektur air dan biologi Nishikigoi, kami mendedikasikan diri untuk menghadirkan standar mutu perkolaman terbaik bagi residensial, villa, resort, restoran, dan properti komersial di seluruh Bali."
    : "KOI POND SERVICES BALI was established in 2021 as a premier integrated specialist in koi pond ecosystems across Bali. Driven by a deep passion for aquatic architecture and Nishikigoi biological welfare, we dedicate ourselves to delivering top-tier engineering standards for private residences, luxury villas, resorts, restaurants, and commercial properties throughout Bali.";

  const backgroundText = language === 'id'
    ? "Dengan mengintegrasikan tiga keahlian inti — plumbing sirkulasi air tanpa dead-spot, kelistrikan outdoor aman & hemat daya, serta konstruksi beton kedap air anti bocor bergaransi — KOI POND SERVICES BALI senantiasa mengutamakan kepuasan pelanggan lewat transparansi biaya, estimasi yang fleksibel, dan garansi penuh pada setiap pekerjaan."
    : "By harmonizing three core engineering pillars—zero-dead-spot hydraulic vortex plumbing, ultra-safe & energy-efficient outdoor electrical systems, and leak-free reinforced concrete construction—KOI POND SERVICES BALI consistently guarantees customer satisfaction through transparent pricing, flexible project tailoring, and full official warranties on every project.";

  const quoteText = language === 'id'
    ? "Kolam yang sehat berawal dari sistem filtrasi dan plumbing yang presisi, menghadirkan air sejernih kristal untuk keindahan dan kesehatan ekosistem ikan koi Anda."
    : "A thriving koi pond begins with engineered filtration and precision vortex hydraulics, creating crystal clear water for the beauty and vitality of your aquatic ecosystem.";

  const checklistItems = language === 'id' ? [
    'Biaya fleksibel menyesuaikan kebutuhan kolam',
    'Setiap pekerjaan bergaransi 100%',
    'Konsultasi dan survei gratis ke seluruh wilayah Bali',
    'Penanganan cepat untuk kolam bocor dan ikan sakit'
  ] : [
    'Flexible pricing tailored to your pond volume and budget',
    '100% official structural & craftsmanship warranty',
    'Complimentary on-site survey and consultation anywhere in Bali',
    'Fast priority emergency response for leaks and fish medical care'
  ];

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
              <span>{t?.about?.backBtn || 'Kembali ke Beranda'}</span>
            </button>
            <span className="text-xs font-mono tracking-widest text-[#FBBF24] uppercase font-bold bg-black/30 px-3 py-1 rounded-md border border-amber-400/20">
              {t?.about?.badge || 'Tentang Kami'}
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
                {t?.about?.badge || 'Tentang Kami'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {t?.about?.title || 'Profil & Sejarah KOI POND SERVICES BALI'}
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
                      {language === 'id' ? 'Sejak 2021' : 'Since 2021'}
                    </span>
                    <span className="px-3 py-0.5 bg-teal-900/80 text-teal-200 border border-teal-500/30 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs">
                      Bali, Indonesia
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    KOI POND SERVICES BALI
                  </h3>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF6E40] mt-0.5">
                    {language === 'id'
                      ? 'Spesialis Kolam, Sistem Filter & Perawatan Ikan Koi di Bali'
                      : 'Specialist in Koi Ponds, Bio-Filtration & Koi Fish Care in Bali'}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-teal-100 font-semibold bg-[#04242E]/70 px-4 py-2.5 rounded-xl border border-teal-500/25 shadow-xs">
                  <MapPin className="w-4 h-4 text-[#FF5722] shrink-0" />
                  <span>JL PURA DEMAK 2 NO. 24, BALI</span>
                </div>
              </div>

              {/* Masterpiece Quote Block */}
              <div className="relative pl-6 py-2.5 bg-[#04242E]/60 rounded-xl border border-teal-500/20 p-5 shadow-xs">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF5722] to-[#FF6E40] rounded-l-xl" />
                <Quote className="absolute -top-2.5 -left-1 w-7 h-7 text-teal-400/20 rotate-180 pointer-events-none" />
                <p className="italic text-sm sm:text-base text-teal-100 font-medium leading-relaxed">
                  "{quoteText}"
                </p>
              </div>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-5 rounded-xl bg-[#04242E]/60 border border-teal-500/20 shadow-xs space-y-2.5 hover:border-teal-400/50 transition-all">
                  <div className="p-2.5 w-fit rounded-lg bg-teal-950 text-teal-300 border border-teal-500/30">
                    <Waves className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="font-bold text-base text-white">1. {t?.about?.specPlumbing || 'Plumbing & Sirkulasi Vortex'}</h4>
                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed font-normal">
                    {t?.about?.specPlumbingDesc || ''}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#04242E]/60 border border-teal-500/20 shadow-xs space-y-2.5 hover:border-amber-400/50 transition-all">
                  <div className="p-2.5 w-fit rounded-lg bg-amber-950/60 text-[#FBBF24] border border-amber-500/30">
                    <Zap className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="font-bold text-base text-white">2. {t?.about?.specElectrical || 'Kelistrikan Outdoor Aman & Hemat'}</h4>
                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed font-normal">
                    {t?.about?.specElectricalDesc || ''}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#04242E]/60 border border-teal-500/20 shadow-xs space-y-2.5 hover:border-emerald-400/50 transition-all">
                  <div className="p-2.5 w-fit rounded-lg bg-emerald-950/60 text-[#10B981] border border-emerald-500/30">
                    <Wrench className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="font-bold text-base text-white">3. {t?.about?.specConcrete || 'Konstruksi Beton Kedap Air'}</h4>
                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed font-normal">
                    {t?.about?.specConcreteDesc || ''}
                  </p>
                </div>
              </div>

              {/* History & Dedication */}
              <div className="space-y-4 pt-4 border-t border-teal-500/20">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-[#FF6E40]" />
                    <span>{t?.about?.historyTitle || 'Dedikasi & Standar Mutu'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">
                    {historyText}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">
                    {backgroundText}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {checklistItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-teal-100 font-medium bg-[#04242E]/60 p-3 rounded-lg border border-teal-500/20 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
