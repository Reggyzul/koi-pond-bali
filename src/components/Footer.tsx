/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, ArrowUp, Phone, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { contactData } from '../data';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-gradient-to-b from-[#04242E] via-[#062C38] to-[#021820] text-white border-t border-teal-500/20 pt-12 pb-6 relative overflow-hidden">
      
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-8 border-b border-teal-500/20 pb-8">
        
        {/* Brand Column (Span 4) */}
        <div className="md:col-span-4 space-y-3">
          <a
            id="footer-logo"
            href="#"
            className="flex items-center gap-2 text-white hover:opacity-95 transition-opacity"
          >
            <Logo variant="dark" />
          </a>
          <p className="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal max-w-sm">
            Spesialis pembuatan, perbaikan dan perawatan kolam, filter chamber vortex dan ikan koi terbaik di Bali sejak 2021.
          </p>
          <div className="space-y-1.5 text-xs sm:text-sm text-teal-100/85">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
              <span>{contactData.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FBBF24] shrink-0" />
              <span>{contactData.phone} (Layanan WhatsApp & Telepon)</span>
            </div>
          </div>
          <div className="flex gap-2.5 pt-1">
            <a
              id="footer-social-instagram"
              href={contactData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-white/10 border border-white/20 hover:border-[#FF6E40] text-white rounded-full transition-all flex items-center gap-1.5 text-xs font-bold"
              title="Instagram: @koi_pondbali"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FF6E40]" />
              <span>@koi_pondbali</span>
            </a>
            <a
              id="footer-social-whatsapp"
              href={contactData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full transition-all flex items-center gap-1.5 text-xs font-bold shadow-sm"
              title="WhatsApp: 08133034733"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column (Span 2) */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
            Tautan Cepat
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-teal-100/80 font-medium">
            <li><a href="#about" className="hover:text-[#FBBF24] transition-colors">Tentang Kami</a></li>
            <li><a href="#services" className="hover:text-[#FBBF24] transition-colors">6 Layanan Kolam</a></li>
            <li><a href="#why-choose-us" className="hover:text-[#FBBF24] transition-colors">Keunggulan</a></li>
            <li><a href="#articles" className="hover:text-[#FBBF24] transition-colors">Artikel & Edukasi</a></li>
            <li><a href="#faq" className="hover:text-[#FBBF24] transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-[#FBBF24] transition-colors">Kontak Bali</a></li>
          </ul>
        </div>

        {/* 6 Services Column (Span 3) */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
            Layanan Spesialis
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-teal-100/80 font-medium">
            <li><a href="#pembuatan-kolam-koi" className="hover:text-[#FBBF24] transition-colors">Pembuatan Kolam Koi</a></li>
            <li><a href="#renovasi-perbaikan-kolam" className="hover:text-[#FBBF24] transition-colors">Renovasi Kolam Bocor</a></li>
            <li><a href="#perawatan-kolam" className="hover:text-[#FBBF24] transition-colors">Perawatan & Kuras Kolam</a></li>
            <li><a href="#perawatan-ikan-koi" className="hover:text-[#FBBF24] transition-colors">Perawatan Ikan Koi (Medis)</a></li>
            <li><a href="#pembuatan-perawatan-filter" className="hover:text-[#FBBF24] transition-colors">Filter & Plumbing</a></li>
            <li><a href="#jual-beli-ikan-koi" className="hover:text-[#FBBF24] transition-colors">Jual / Beli Ikan Koi</a></li>
          </ul>
        </div>

        {/* Free Consultation Column (Span 3) */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
            Survei Lokasi Gratis
          </h4>
          <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed">
            Butuh estimasi pembuatan atau perbaikan kolam di Bali? Konsultasi dan survei lokasi 100% GRATIS ke seluruh Bali.
          </p>

          <button
            id="footer-consultation-btn"
            onClick={onOpenConsultation}
            className="w-full py-2.5 btn-koi-flame text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            Konsultasi Gratis
          </button>
        </div>

      </div>

      {/* Sub-Footer copyrights & Back-to-top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-200/60 font-medium">
        <div>
          &copy; {new Date().getFullYear()} KOI POND SERVICES BALI. All rights reserved.
        </div>

        <div className="flex gap-2.5">
          <span>Denpasar, Bali</span>
          <span>•</span>
          <span>Plumbing • Kelistrikan • Konstruksi</span>
        </div>

        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer text-xs font-bold"
        >
          Kembali ke Atas
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </footer>
  );
}
