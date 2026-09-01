/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Hammer,
  Sparkles,
  HeartHandshake,
  Wrench,
  ShoppingBag,
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { contactData } from '../data';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectService: (id: string) => void;
  onSelectSection: (id: string) => void;
}

export default function Navbar({ onOpenConsultation, onSelectService, onSelectSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const serviceCategories = [
    { label: 'Pembuatan Kolam Koi', id: 'pembuatan-kolam-koi', icon: Building2 },
    { label: 'Renovasi / Perbaikan Kolam', id: 'renovasi-perbaikan-kolam', icon: Hammer },
    { label: 'Perawatan Kolam', id: 'perawatan-kolam', icon: Sparkles },
    { label: 'Perawatan Ikan Koi', id: 'perawatan-ikan-koi', icon: HeartHandshake },
    { label: 'Pembuatan / Perawatan Filter', id: 'pembuatan-perawatan-filter', icon: Wrench },
    { label: 'Jual / Beli Ikan Koi', id: 'jual-beli-ikan-koi', icon: ShoppingBag },
  ];

  return (
    <>
      <nav
        id="app-navbar"
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#04242E] via-[#062C38] to-[#0A4354] border-b border-teal-500/20 py-2.5 sm:py-3 shadow-md backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectService('home');
            }}
            className="flex items-center gap-2.5 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav Menu - Precisely Aligned & Spaced */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/90">
            <a
              id="nav-link-about"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('about');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer"
            >
              Tentang Kami
            </a>

            {/* Layanan Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                id="nav-link-services-drop"
                className="hover:text-[#FBBF24] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
              >
                <span>Layanan</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#FBBF24]' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    id="services-dropdown-menu"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-64 bg-white text-[#0F172A] rounded-xl shadow-xl z-50 py-2 border border-teal-900/10 overflow-hidden"
                  >
                    {serviceCategories.map((srv) => (
                      <button
                        id={`dropdown-item-${srv.id}`}
                        key={srv.id}
                        onClick={() => {
                          onSelectService(srv.id);
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-teal-50 hover:text-[#0A4354] text-xs font-semibold transition-colors flex items-center gap-2.5 cursor-pointer group"
                      >
                        <div className="p-1 rounded-md bg-teal-100/60 text-[#0E5C73] group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
                          <srv.icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{srv.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              id="nav-link-why"
              href="#why-choose-us"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('why-choose-us');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer"
            >
              Keunggulan
            </a>

            <a
              id="nav-link-articles"
              href="#articles"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('articles');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer"
            >
              Artikel
            </a>

            <a
              id="nav-link-faq"
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('faq');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer"
            >
              FAQ
            </a>

            <a
              id="nav-link-contact"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('contact');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer"
            >
              Kontak
            </a>

            {/* Direct Consultation Pill Button */}
            <button
              id="desktop-nav-cta-btn"
              onClick={onOpenConsultation}
              className="btn-koi-flame px-4 py-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer ml-1"
            >
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors border border-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="nav-mobile-dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-gradient-to-b from-[#062C38] to-[#04242E] border-t border-teal-500/20 px-5 py-5 space-y-4 text-white overflow-y-auto max-h-[85vh] shadow-xl"
            >
              <a
                id="mobile-nav-link-about"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onSelectSection('about');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1"
              >
                Tentang Kami (Profil Alvian Malengga)
              </a>

              <div className="space-y-1.5 pl-3 border-l-2 border-[#FF6E40]/50 bg-white/5 py-2.5 rounded-r-lg pr-3">
                <span className="text-[11px] font-bold text-[#FBBF24] uppercase tracking-wider block">
                  6 Layanan Spesialis Kolam
                </span>
                {serviceCategories.map((srv) => (
                  <button
                    id={`mobile-item-${srv.id}`}
                    key={srv.id}
                    onClick={() => {
                      onSelectService(srv.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-1 text-xs sm:text-sm font-medium text-teal-50 hover:text-[#FF6E40] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <srv.icon className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
                    <span>{srv.label}</span>
                  </button>
                ))}
              </div>

              <a
                id="mobile-nav-link-why"
                href="#why-choose-us"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onSelectSection('why-choose-us');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1"
              >
                Keunggulan Kami
              </a>

              <a
                id="mobile-nav-link-articles"
                href="#articles"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onSelectSection('articles');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1"
              >
                Artikel & Edukasi Koi
              </a>

              <a
                id="mobile-nav-link-faq"
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onSelectSection('faq');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1"
              >
                FAQ & Tanya Jawab
              </a>

              <a
                id="mobile-nav-link-contact"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onSelectSection('contact');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1"
              >
                Kontak & Lokasi Bali
              </a>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  id="mobile-nav-wa-btn"
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-bold text-xs sm:text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp (08133034733)
                </a>

                <button
                  id="mobile-nav-consultation-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 btn-koi-flame text-white rounded-full font-bold text-xs sm:text-sm tracking-wide text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Ajukan Survei Gratis
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
