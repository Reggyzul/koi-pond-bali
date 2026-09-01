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
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center select-none leading-none">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-serif text-sm sm:text-[15px] md:text-base font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-[#062C38]'
              }`}
            >
              KOI POND <span className="text-[#FF6E40]">BALI</span> SERVICES
            </span>
          </div>
          <span
            className={`text-[7.5px] sm:text-[8px] font-mono tracking-[0.25em] uppercase mt-1 font-medium ${
              isDark ? 'text-teal-200/70' : 'text-[#0E5C73]/75'
            }`}
          >
            SEJAK 2021
          </span>
        </div>
      )}
    </div>
  );
}
