/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { contactData } from '../data';

interface HeroProps {
  onOpenConsultation?: () => void;
  onViewFounder?: () => void;
  onViewServices?: () => void;
}

export default function Hero({}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative bg-[#0B436B] pt-20 pb-10 lg:pt-16 lg:pb-0 min-h-[460px] lg:min-h-[500px] flex items-center overflow-hidden border-b border-[#083657]"
    >
      {/* Desktop Split Left Image (Full-Height Edge-to-Edge from Top to Bottom) */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/2 h-full z-0 overflow-hidden">
        <img
          src="/images/agro_koi_hero.jpg"
          alt="Ikan Koi Bali - KOI POND SERVICES BALI"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B436B] opacity-40" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-5 lg:gap-8">
          
          {/* Mobile-Only Hero Koi Image Card (Clean 16:10 Ratio, Rounded Corners & Subtle Border) */}
          <div className="block lg:hidden w-full max-w-xs sm:max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl border-2 border-white/15">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#073454]">
              <img
                src="/images/agro_koi_hero.jpg"
                alt="Ikan Koi Bali - KOI POND SERVICES BALI"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B436B]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Desktop Left Spacer */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Right Column: Mobile & Desktop Optimized Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 py-2 lg:py-12 lg:pl-8 space-y-3.5 sm:space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Bold Ubuntu Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-white leading-[1.3] tracking-tight">
              Spesialis Pembuatan, Perbaikan & Perawatan Kolam, Filter dan Ikan Koi Terbaik di Indonesia Khususnya Bali
            </h1>

            {/* Description Paragraph */}
            <p className="text-white/90 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed max-w-xl">
              KOI POND SERVICES BALI adalah penyedia jasa pembuatan, renovasi perbaikan, perawatan kolam & sistem filtrasi, serta perawatan dan jual-beli ikan koi terpercaya di Bali sejak 2021. Dipimpin langsung oleh <strong>Alvian Malengga</strong> dengan keahlian plumbing, kelistrikan, dan konstruksi bergaransi 100% dengan harga termurah dan bisa menyesuaikan.
            </p>

            {/* WhatsApp CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <a
                id="hero-agro-whatsapp-btn"
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-full font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Whatsapp Kami</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
