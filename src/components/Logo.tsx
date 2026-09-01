/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

export default function Logo({ variant = 'light', className = '', showText = true }: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      {/* Official Circular Logo with Transparent Background */}
      <div className="relative flex items-center justify-center shrink-0">
        <picture>
          <source srcSet="/images/logo_koi_transparent.avif" type="image/avif" />
          <source srcSet="/images/logo_koi_transparent.webp" type="image/webp" />
          <img
            src="/images/logo_koi_transparent.png"
            alt="KOI POND BALI SERVICES"
            className="w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center select-none leading-none">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-[#062C38]'
              }`}
            >
              KOI POND BALI SERVICES
            </span>
          </div>
          <span
            className={`text-[8.5px] sm:text-[9.5px] md:text-[10px] font-mono tracking-[0.28em] uppercase mt-1 font-medium ${
              isDark ? 'text-teal-200/80' : 'text-[#0E5C73]/75'
            }`}
          >
            SEJAK 2021
          </span>
        </div>
      )}
    </div>
  );
}
