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
      className="relative bg-[#0B436B] pt-16 md:pt-16 min-h-[460px] lg:min-h-[500px] flex items-stretch overflow-hidden border-b border-[#083657]"
    >
      {/* Full Left-Half Edge-to-Edge Image (From top to bottom, left edge to center) */}
      <div className="lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-1/2 w-full h-64 lg:h-full z-0 overflow-hidden">
        <img
          src="/images/agro_koi_hero.jpg"
          alt="Ikan Koi Bali - KOI POND SERVICES BALI"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge blend gradient on the right of the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B436B] hidden lg:block opacity-40" />
      </div>

      {/* Right-Side Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center">
          
          {/* Empty spacer for the left half on desktop */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Right Column: Tight & Precisely Spaced Content (No Logo in Hero) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 py-8 lg:py-12 lg:pl-8 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Bold Ubuntu Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-white leading-[1.25] tracking-tight">
              Spesialis Pembuatan, Perbaikan & Perawatan Kolam, Filter dan Ikan Koi Terbaik di Indonesia Khususnya Bali
            </h1>

            {/* Description Paragraph */}
            <p className="text-white/90 text-sm sm:text-[15px] font-normal leading-relaxed">
              KOI POND SERVICES BALI adalah penyedia jasa pembuatan, renovasi perbaikan, perawatan kolam & sistem filtrasi, serta perawatan dan jual-beli ikan koi terpercaya di Bali sejak 2021. Dipimpin langsung oleh <strong>Alvian Malengga</strong> dengan keahlian plumbing, kelistrikan, dan konstruksi bergaransi 100% dengan harga termurah dan bisa menyesuaikan.
            </p>

            {/* Red Pill WhatsApp Button */}
            <div className="pt-1">
              <a
                id="hero-agro-whatsapp-btn"
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-full font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Whatsapp Kami
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
