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
  
  let language = 'id';
  try {
    const langContext = useLanguage();
    if (langContext?.language) {
      language = langContext.language;
    }
  } catch {
    // fallback if context not available
    language = 'id';
  }

  const tagline = language === 'id'
    ? 'Specialists in filters, fish ponds, and koi fish'
    : 'Specialists in filters, fish ponds, and koi fish';

  const sinceText = language === 'id' ? 'Since 2021' : 'Since 2021';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Official Circular Logo with Transparent Background */}
      <div className="relative flex items-center justify-center shrink-0">
        <picture>
          <source srcSet="/images/logo_koi_transparent.avif" type="image/avif" />
          <source srcSet="/images/logo_koi_transparent.webp" type="image/webp" />
          <img
            src="/images/logo_koi_transparent.png"
            alt="KOI POND BALI SERVICES"
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center select-none">
          <div className="flex items-center gap-1.5 leading-tight">
            <span
              className={`font-serif text-sm sm:text-base md:text-lg font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-[#062C38]'
              }`}
            >
              KOI POND BALI SERVICES
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
            <span
              className={`text-[9px] sm:text-[10px] md:text-[10.5px] font-medium tracking-normal leading-tight ${
                isDark ? 'text-teal-200/90' : 'text-[#0E5C73]'
              }`}
            >
              {tagline}
            </span>
            <span
              className={`text-[7px] sm:text-[7.5px] md:text-[8px] font-mono tracking-wider uppercase font-semibold px-1 py-0.2 rounded leading-none shrink-0 opacity-80 ${
                isDark
                  ? 'bg-teal-950/80 text-[#FF6E40] border border-teal-500/30'
                  : 'bg-teal-100 text-[#FF5722] border border-teal-300'
              }`}
            >
              {sinceText}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
