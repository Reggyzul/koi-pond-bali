/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  isMobileDrawer?: boolean;
}

export default function LanguageToggle({ className = '', isMobileDrawer = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (isMobileDrawer) {
    return (
      <div className={`flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-teal-500/20 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-100">
          <Globe className="w-4 h-4 text-[#FF6E40]" />
          <span>Bahasa / Language</span>
        </div>
        
        <div className="inline-flex p-0.5 rounded-lg bg-black/40 border border-teal-500/30">
          <button
            type="button"
            onClick={() => setLanguage('id')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              language === 'id'
                ? 'bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white shadow-xs'
                : 'text-teal-200/70 hover:text-white'
            }`}
          >
            🇮🇩 ID
          </button>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white shadow-xs'
                : 'text-teal-200/70 hover:text-white'
            }`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-full bg-[#04242E]/90 backdrop-blur-md border border-teal-500/35 shadow-xs transition-all hover:border-teal-400/60 shrink-0 ${className}`}
      title={language === 'id' ? 'Ganti ke Bahasa Inggris' : 'Switch to Indonesian'}
    >
      <div className="pl-1.5 pr-0.5 flex items-center text-teal-300/80">
        <Globe className="w-3 h-3 text-[#FF6E40]" />
      </div>

      <div className="inline-flex items-center p-0.5 rounded-full bg-black/50">
        <button
          type="button"
          id="lang-toggle-id"
          onClick={() => setLanguage('id')}
          className={`px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider transition-all duration-200 cursor-pointer ${
            language === 'id'
              ? 'bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white shadow-xs scale-100'
              : 'text-teal-200/60 hover:text-white'
          }`}
          aria-label="Bahasa Indonesia"
        >
          ID
        </button>

        <button
          type="button"
          id="lang-toggle-en"
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider transition-all duration-200 cursor-pointer ${
            language === 'en'
              ? 'bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white shadow-xs scale-100'
              : 'text-teal-200/60 hover:text-white'
          }`}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </div>
  );
}
