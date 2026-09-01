/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { contactData } from '../data';

interface HeroProps {
  onOpenConsultation?: () => void;
  onViewFounder?: () => void;
  onViewServices?: () => void;
}

export default function Hero({ onOpenConsultation, onViewServices }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#04242E] via-[#062C38] to-[#0A4354] pt-24 pb-12 lg:pt-20 lg:pb-6 min-h-[500px] lg:min-h-[540px] flex items-center overflow-hidden border-b border-teal-500/20"
    >
      {/* Desktop Split Left Image with Water Atmosphere Blend */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/2 h-full z-0 overflow-hidden">
        <img
          src="/images/agro_koi_hero.jpg"
          alt="Ikan Koi Bali - KOI POND SERVICES BALI"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#062C38]/40 to-[#062C38]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-6 lg:gap-8">
          
          {/* Mobile-Only Hero Koi Image Card */}
          <div className="block lg:hidden w-full max-w-sm sm:max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl border-2 border-teal-400/30">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#062C38]">
              <img
                src="/images/agro_koi_hero.jpg"
                alt="Ikan Koi Bali - KOI POND SERVICES BALI"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04242E]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Desktop Left Spacer */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Right Column: High-Contrast Koi Pond Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 py-2 lg:py-12 lg:pl-8 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Top Quality Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/60 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#FF6E40]" />
              <span>Spesialis Kolam & Ikan Koi Terpercaya Sejak 2021</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[38px] font-black text-white leading-[1.25] tracking-tight drop-shadow-sm">
              Spesialis Pembuatan, Perbaikan & Perawatan Kolam, Filter dan Ikan Koi Terbaik di Bali
            </h1>

            {/* Description Paragraph */}
            <p className="text-teal-50/90 text-sm xs:text-base md:text-[16px] font-normal leading-relaxed max-w-xl">
              KOI POND SERVICES BALI menghadirkan kolam koi jernih kristal, bebas bocor, dan ekosistem ikan sehat. Dipimpin langsung oleh <strong>Alvian Malengga</strong> dengan keahlian plumbing, kelistrikan, dan konstruksi bergaransi resmi 100% serta harga fleksibel menyesuaikan budget.
            </p>

            {/* Guarantees Mini Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs sm:text-sm font-bold text-teal-100">
              <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1 rounded-lg border border-teal-500/20">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                Garansi Konstruksi 100%
              </span>
              <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1 rounded-lg border border-teal-500/20">
                <Sparkles className="w-4 h-4 text-[#FBBF24]" />
                Survei Lokasi GRATIS Se-Bali
              </span>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-3 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
              <a
                id="hero-agro-whatsapp-btn"
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 btn-koi-flame text-white rounded-full font-bold text-base shadow-xl transition-all cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Whatsapp Kami (Konsultasi)</span>
              </a>

              {onViewServices && (
                <button
                  id="hero-view-services-btn"
                  onClick={onViewServices}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-base border border-white/20 transition-all cursor-pointer"
                >
                  Lihat 6 Layanan
                </button>
              )}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
