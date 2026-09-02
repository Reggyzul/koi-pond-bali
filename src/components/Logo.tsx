/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLanguage } from '../context/LanguageContext';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

export default function Logo({ variant = 'light', className = '', showText = true }: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 min-w-0 ${className}`}>
      {/* Official Circular Logo with Transparent Background */}
      <div className="relative flex items-center justify-center shrink-0">
        <picture>
          <source srcSet="/images/logo_koi_transparent.avif" type="image/avif" />
          <source srcSet="/images/logo_koi_transparent.webp" type="image/webp" />
          <img
            src="/images/logo_koi_transparent.png"
            alt="KOI POND BALI SERVICES"
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105 shrink-0"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center select-none min-w-0">
          <div className="flex items-center leading-tight">
            <span
              className={`font-serif text-xs xs:text-sm sm:text-base md:text-lg font-bold tracking-tight whitespace-nowrap ${
                isDark ? 'text-white' : 'text-[#062C38]'
              }`}
            >
              KOI POND BALI SERVICES
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 leading-none overflow-hidden">
            {/* Full Tagline for Tablets & Desktops */}
            <span
              className={`hidden sm:inline text-[9.5px] md:text-[10px] font-medium tracking-tight whitespace-nowrap ${
                isDark ? 'text-teal-200/90' : 'text-[#0E5C73]'
              }`}
            >
              Specialists in filters, fish ponds, and koi fish
            </span>

            {/* Compact Clean Tagline for Small Mobile Screens */}
            <span
              className={`sm:hidden text-[8px] xs:text-[8.5px] font-medium tracking-tight whitespace-nowrap truncate max-w-[130px] xs:max-w-[170px] ${
                isDark ? 'text-teal-200/90' : 'text-[#0E5C73]'
              }`}
            >
              Filters, Fish Ponds & Koi
            </span>

            {/* Smaller 'Since 2021' Badge directly beside tagline */}
            <span
              className={`text-[6.5px] sm:text-[7.5px] font-mono tracking-wider uppercase font-bold px-1 py-0.5 rounded leading-none shrink-0 opacity-85 ${
                isDark
                  ? 'bg-teal-950/90 text-[#FF6E40] border border-teal-500/30'
                  : 'bg-teal-100 text-[#FF5722] border border-teal-300'
              }`}
            >
              Since 2021
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
