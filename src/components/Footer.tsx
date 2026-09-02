/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { contactData } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenWhatsAppChoice?: () => void;
  onSelectSection?: (sectionId: string) => void;
}

export default function Footer({ onOpenConsultation, onSelectSection }: FooterProps) {
  const { t, servicesData } = useLanguage();

  return (
    <footer id="footer" className="bg-[#04242E]/85 backdrop-blur-md text-white border-t border-teal-500/20 pt-12 pb-6 relative overflow-hidden">
      
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-8 border-b border-teal-500/20 pb-8">
        
        {/* Brand Column (Span 4) */}
        <div className="md:col-span-4 space-y-3">
          <a
            id="footer-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-white hover:opacity-95 transition-opacity"
          >
            <Logo variant="dark" />
          </a>
          <p className="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal max-w-sm">
            {t?.footer?.aboutSnippet || 'Spesialis pembuatan, perbaikan dan perawatan kolam, filter chamber vortex dan ikan koi terbaik di Bali sejak 2021.'}
          </p>
          <div className="space-y-1.5 text-xs sm:text-sm text-teal-100/85">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
              <span>{contactData.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FBBF24] shrink-0" />
              <span>{contactData.phone} / {contactData.phoneSecondary}</span>
            </div>
          </div>
          
          {/* Social Links: IG and TikTok directly below */}
          <div className="flex flex-col gap-2 pt-1">
            <a
              id="footer-social-instagram"
              href={contactData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-white/10 border border-white/20 hover:border-[#FF6E40] text-white rounded-full transition-all flex items-center gap-2 text-xs font-bold w-fit"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FF6E40]" />
              <span>@koi_pondbali</span>
            </a>
            
            <a
              id="footer-social-tiktok"
              href={contactData.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-white/10 border border-white/20 hover:border-[#00F2FE] text-white rounded-full transition-all flex items-center gap-2 text-xs font-bold w-fit"
              title="TikTok: @koipondservices.com"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#00F2FE]" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.15 1.15 2.06 2.3 2.36.95.23 1.98.05 2.78-.51.71-.47 1.15-1.26 1.25-2.11.08-1.73.04-3.46.05-5.19.01-4.34.02-8.68.01-13.02z"/>
              </svg>
              <span>tiktok.com/@koipondservices.com</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column (Span 2) */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
            {t?.footer?.quickLinks || 'Tautan Cepat'}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-teal-100/80 font-medium">
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection?.('about');
                }}
                className="hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                {t?.nav?.about || 'Tentang Kami'}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection?.('services');
                }}
                className="hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                {t?.nav?.services || 'Layanan'}
              </a>
            </li>
            <li>
              <a
                href="#why-choose-us"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection?.('why-choose-us');
                }}
                className="hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                {t?.nav?.whyChooseUs || 'Keunggulan'}
              </a>
            </li>
            <li>
              <a
                href="#articles"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection?.('articles');
                }}
                className="hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                {t?.nav?.articles || 'Artikel'}
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection?.('faq');
                }}
                className="hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                {t?.nav?.faq || 'FAQ'}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection?.('contact');
                }}
                className="hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                {t?.nav?.contact || 'Kontak'}
              </a>
            </li>
          </ul>
        </div>

        {/* Services Column (Span 3) */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
            {t?.footer?.servicesCol || 'Layanan Spesialis'}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-teal-100/80 font-medium">
            {(servicesData || []).map((srv) => (
              <li key={srv.id}>
                <a
                  href={`#${srv.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectSection?.(srv.id);
                  }}
                  className="hover:text-[#FBBF24] transition-colors cursor-pointer"
                >
                  {srv.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Free Consultation Column (Span 3) */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
            {t?.footer?.surveyTitle || 'Konsultasi Kolam'}
          </h4>
          <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal">
            {t?.footer?.surveyDesc || 'Dapatkan estimasi biaya transparan dan jadwal survei gratis langsung ke lokasi Anda di Bali.'}
          </p>

          <button
            id="footer-consultation-btn"
            onClick={onOpenConsultation}
            className="w-full py-2.5 btn-koi-flame text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            {t?.footer?.surveyBtn || 'Jadwalkan Survei'}
          </button>
        </div>

      </div>

      {/* Sub-Footer copyrights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-200/60 font-medium">
        <div>
          &copy; 2021 powered by PT ASC Artistic Solution Construction. {t?.footer?.rights || 'Hak Cipta Terpelihara.'}
        </div>

        <div className="flex gap-2.5">
          <span>Denpasar, Bali</span>
          <span>|</span>
          <span>Plumbing | Electrical | Concrete Construction</span>
        </div>
      </div>

    </footer>
  );
}
