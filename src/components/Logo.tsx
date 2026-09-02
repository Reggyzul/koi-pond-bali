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
    <div className={`flex items-center gap-2 xs:gap-2.5 sm:gap-3 min-w-0 ${className}`}>
      {/* Official Circular Logo with Transparent Background */}
      <div className="relative flex items-center justify-center shrink-0">
        <picture>
          <source srcSet="/images/logo_koi_transparent.avif" type="image/avif" />
          <source srcSet="/images/logo_koi_transparent.webp" type="image/webp" />
          <img
            src="/images/logo_koi_transparent.png"
            alt="KOI POND BALI SERVICES"
            className="w-11 h-11 xs:w-11.5 xs:h-11.5 sm:w-12 sm:h-12 md:w-13 md:h-13 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105 shrink-0"
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
              className={`font-serif text-[13.5px] xs:text-[15px] sm:text-base md:text-lg lg:text-xl font-bold tracking-tight whitespace-nowrap ${
                isDark ? 'text-white' : 'text-[#062C38]'
              }`}
            >
              KOI POND BALI SERVICES
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 leading-none overflow-hidden">
            {/* Full Tagline for Desktop & Tablet */}
            <span
              className={`hidden sm:inline text-[10px] md:text-[11px] font-medium tracking-tight whitespace-nowrap ${
                isDark ? 'text-teal-200/90' : 'text-[#0E5C73]'
              }`}
            >
              Specialists in filters, fish ponds, and koi fish
            </span>

            {/* Clear & Bigger Tagline for Mobile */}
            <span
              className={`sm:hidden text-[9px] xs:text-[9.5px] font-medium tracking-tight whitespace-nowrap ${
                isDark ? 'text-teal-200/90' : 'text-[#0E5C73]'
              }`}
            >
              Specialists in filters, ponds & koi
            </span>

            {/* 'Since 2021' Badge beside tagline */}
            <span
              className={`text-[7px] sm:text-[7.5px] md:text-[8px] font-mono tracking-wider uppercase font-bold px-1 py-0.5 rounded leading-none shrink-0 opacity-90 ${
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
