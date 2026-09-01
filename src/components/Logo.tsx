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
      {/* Official Circular Logo with Responsive Sizing for all Mobiles & Tablets */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/images/logo_koi_transparent.png"
          alt="KOI POND BALI SERVICES"
          className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 md:w-15 md:h-15 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Brand Typography - Bold, Crisp & Readable on Every Phone Screen */}
      {showText && (
        <div className="flex flex-col justify-center select-none">
          <span
            className={`text-lg xs:text-xl sm:text-2xl font-black tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-[#062C38]'
            }`}
          >
            KOI POND <span className="text-[#FF6E40]">BALI</span>
          </span>
          <span
            className={`text-[10.5px] xs:text-[11.5px] sm:text-xs font-mono tracking-[0.22em] uppercase mt-1 font-bold ${
              isDark ? 'text-teal-200/90' : 'text-[#0E5C73]'
            }`}
          >
            SERVICES • SEJAK 2021
          </span>
        </div>
      )}
    </div>
  );
}
