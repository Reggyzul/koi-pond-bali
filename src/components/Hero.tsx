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
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-14 lg:pt-28 lg:pb-20 min-h-[500px] flex items-center overflow-hidden border-b border-teal-500/15"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-8 lg:gap-12">
          
          {/* Left Column: Glassmorphic Ambience Card with Swimming Koi Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden glass-aquatic-card p-2.5 shadow-2xl border border-teal-400/25 group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <picture>
                  <source srcSet="/images/agro_koi_hero.avif" type="image/avif" />
                  <source srcSet="/images/agro_koi_hero.webp" type="image/webp" />
                  <img
                    src="/images/agro_koi_hero.avif"
                    alt="Ikan Koi Bali - KOI POND SERVICES BALI"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#04242E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-teal-100 font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  <span>Air Sebening Kristal</span>
                  <span className="text-[#FF6E40] font-bold">Bali - Sejak 2021</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Content & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-900/50 backdrop-blur-md border border-teal-400/30 text-teal-200 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6E40]" />
              <span>Spesialis Kolam & Ikan Koi di Bali</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-white leading-[1.25] tracking-tight">
              Pembuatan, Renovasi & Perawatan Kolam Koi Profesional di Bali
            </h1>

            {/* Simplified Direct Description */}
            <p className="text-teal-100/90 text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl">
              Solusi tuntas kolam jernih, bebas bocor, dan ekosistem ikan sehat. Mengintegrasikan standar perpipaan presisi, kelistrikan hemat energi, dan konstruksi beton bertulang dengan garansi resmi.
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-medium text-teal-100">
              <span className="flex items-center gap-1.5 bg-[#04242E]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-teal-500/25">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                Garansi Konstruksi 100%
              </span>
              <span className="flex items-center gap-1.5 bg-[#04242E]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-teal-500/25">
                <Sparkles className="w-4 h-4 text-[#FBBF24]" />
                Survei Lokasi Gratis Se-Bali
              </span>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-2 w-full sm:w-auto flex items-center justify-center lg:justify-start">
              <a
                id="hero-agro-whatsapp-btn"
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 btn-koi-flame text-white rounded-full font-bold text-sm shadow-xl transition-all cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
