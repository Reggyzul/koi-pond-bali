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
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#04242E] via-[#062C38] to-[#0A4354] border-b border-teal-500/20 py-3 sm:py-3.5 shadow-lg backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Responsive Sizing with Perfect Touch Area */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectService('home');
            }}
            className="flex items-center gap-3 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav Menu - Precisely Aligned & Spaced */}
          <div className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-white/95">
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
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#FBBF24]' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    id="services-dropdown-menu"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-72 bg-white text-[#0F172A] rounded-2xl shadow-2xl z-50 py-2.5 border border-teal-900/10 overflow-hidden"
                  >
                    {serviceCategories.map((srv) => (
                      <button
                        id={`dropdown-item-${srv.id}`}
                        key={srv.id}
                        onClick={() => {
                          onSelectService(srv.id);
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-teal-50 hover:text-[#0A4354] text-sm font-semibold transition-colors flex items-center gap-3 cursor-pointer group"
                      >
                        <div className="p-1.5 rounded-lg bg-teal-100/60 text-[#0E5C73] group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
                          <srv.icon className="w-4 h-4" />
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
              className="btn-koi-flame px-5 py-2 text-xs font-extrabold uppercase tracking-wider cursor-pointer ml-1"
            >
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Toggle Button - Large Easy Tap Area */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-xl transition-colors border border-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Large Legible Fonts */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="nav-mobile-dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-gradient-to-b from-[#062C38] to-[#04242E] border-t border-teal-500/20 px-6 py-6 space-y-5 text-white overflow-y-auto max-h-[85vh] shadow-2xl"
            >
              <a
                id="mobile-nav-link-about"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onSelectSection('about');
                }}
                className="block text-lg font-bold hover:text-[#FBBF24] transition-colors"
              >
                Tentang Kami (Profil Alvian Malengga)
              </a>

              <div className="space-y-2.5 pl-3.5 border-l-2 border-[#FF6E40]/50 bg-white/5 py-3 rounded-r-xl pr-3">
                <span className="text-xs font-extrabold text-[#FBBF24] uppercase tracking-wider block">
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
                    className="w-full text-left py-1.5 text-base font-semibold text-teal-50 hover:text-[#FF6E40] transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <srv.icon className="w-4 h-4 text-[#FF5722] shrink-0" />
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
                className="block text-lg font-bold hover:text-[#FBBF24] transition-colors"
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
                className="block text-lg font-bold hover:text-[#FBBF24] transition-colors"
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
                className="block text-lg font-bold hover:text-[#FBBF24] transition-colors"
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
                className="block text-lg font-bold hover:text-[#FBBF24] transition-colors"
              >
                Kontak & Lokasi Bali
              </a>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  id="mobile-nav-wa-btn"
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-bold text-base tracking-wide text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp (08133034733)
                </a>

                <button
                  id="mobile-nav-consultation-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 btn-koi-flame text-white rounded-full font-bold text-base tracking-wide text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
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
