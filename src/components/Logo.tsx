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
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Official Circular Logo with Transparent Background */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/images/logo_koi_transparent.png"
          alt="KOI POND BALI SERVICES"
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-serif text-base sm:text-lg font-bold tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-[#062C38]'
            }`}
          >
            KOI POND <span className="text-[#FF6E40]">BALI</span>
          </span>
          <span
            className={`text-[9.5px] font-mono tracking-[0.2em] uppercase mt-0.5 font-medium ${
              isDark ? 'text-teal-200/85' : 'text-[#0E5C73]'
            }`}
          >
            SERVICES | SEJAK 2021
          </span>
        </div>
      )}
    </div>
  );
}
