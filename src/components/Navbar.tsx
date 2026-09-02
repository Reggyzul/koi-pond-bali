/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Building2,
  Hammer,
  Sparkles,
  HeartHandshake,
  Wrench,
  ShoppingBag,
  Zap
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectService: (id: string) => void;
  onSelectSection: (id: string) => void;
}

export default function Navbar({ onOpenConsultation, onSelectService, onSelectSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { t, servicesData } = useLanguage();

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'pembuatan-kolam-koi': Building2,
    'renovasi-perbaikan-kolam': Hammer,
    'perawatan-kolam': Sparkles,
    'perawatan-ikan-koi': HeartHandshake,
    'pembuatan-perawatan-filter': Wrench,
    'jual-beli-ikan-koi': ShoppingBag,
    'perbaikan-listrik-konstruksi': Zap
  };

  const navServices = servicesData || [];

  return (
    <>
      <nav
        id="app-navbar"
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#04242E] via-[#062C38] to-[#0A4354] border-b border-teal-500/20 py-2 sm:py-2.5 shadow-md backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          
          {/* Brand Logo */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectService('home');
            }}
            className="flex items-center transition-transform hover:scale-[1.01] cursor-pointer min-w-0"
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-white/90">
            <a
              id="nav-link-about"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('about');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer tracking-wide relative group"
            >
              <span>{t?.nav?.about || 'Tentang Kami'}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6E40] transition-all duration-200 group-hover:w-full rounded-full" />
            </a>

            {/* Layanan Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                id="nav-link-services-drop"
                className="hover:text-[#FBBF24] transition-colors flex items-center gap-1.5 cursor-pointer py-1 tracking-wide group"
              >
                <span>{t?.nav?.services || 'Layanan'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#FBBF24]' : 'text-teal-300/70 group-hover:text-[#FBBF24]'}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    id="services-dropdown-menu"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-64 bg-[#04242E]/95 backdrop-blur-xl text-white rounded-xl shadow-2xl z-50 py-2 border border-teal-500/25 overflow-hidden"
                  >
                    {navServices.map((srv) => {
                      const Icon = iconMap[srv.id] || Sparkles;
                      return (
                        <button
                          id={`dropdown-item-${srv.id}`}
                          key={srv.id}
                          onClick={() => {
                            onSelectService(srv.id);
                            setDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-white/10 hover:text-[#FF6E40] text-xs font-semibold transition-colors flex items-center gap-2.5 cursor-pointer group"
                        >
                          <div className="p-1 rounded-md bg-teal-900/60 text-teal-300 group-hover:bg-[#FF5722] group-hover:text-white transition-colors border border-teal-500/20">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span>{srv.title}</span>
                        </button>
                      );
                    })}
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
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer tracking-wide relative group"
            >
              <span>{t?.nav?.whyChooseUs || 'Keunggulan'}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6E40] transition-all duration-200 group-hover:w-full rounded-full" />
            </a>

            <a
              id="nav-link-articles"
              href="#articles"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('articles');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer tracking-wide relative group"
            >
              <span>{t?.nav?.articles || 'Artikel'}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6E40] transition-all duration-200 group-hover:w-full rounded-full" />
            </a>

            <a
              id="nav-link-faq"
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('faq');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer tracking-wide relative group"
            >
              <span>{t?.nav?.faq || 'FAQ'}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6E40] transition-all duration-200 group-hover:w-full rounded-full" />
            </a>

            <a
              id="nav-link-contact"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('contact');
              }}
              className="hover:text-[#FBBF24] transition-colors py-1 cursor-pointer tracking-wide relative group"
            >
              <span>{t?.nav?.contact || 'Kontak'}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6E40] transition-all duration-200 group-hover:w-full rounded-full" />
            </a>
          </div>

          {/* Right Section: Single Language Switcher & Hamburger Button (NO DUPLICATE) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Exactly ONE Language Switcher */}
            <LanguageToggle />

            {/* Mobile Menu Toggle Button (Garis 3) */}
            <button
              id="nav-mobile-menu-toggle"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (mobileMenuOpen) setMobileServicesOpen(false);
              }}
              className="lg:hidden p-1.5 sm:p-2 text-white hover:bg-white/10 rounded-lg transition-colors border border-white/15 cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
              className="lg:hidden bg-gradient-to-b from-[#062C38] to-[#04242E] border-t border-teal-500/20 px-5 py-4 space-y-3 text-white overflow-y-auto max-h-[85vh] shadow-xl"
            >
              <a
                id="mobile-nav-link-about"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                  onSelectSection('about');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1.5"
              >
                {t?.nav?.about || 'Tentang Kami'}
              </a>

              {/* Layanan Kami Accordion */}
              <div>
                <button
                  id="mobile-nav-services-toggle"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1.5 cursor-pointer"
                >
                  <span>{t?.nav?.mobileServicesLabel || 'Layanan Kami'}</span>
                  <ChevronDown className={`w-4 h-4 text-teal-300 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#FBBF24]' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-3 pr-1 py-1.5 space-y-1 border-l-2 border-[#FF6E40]/40 my-1 ml-1"
                    >
                      {navServices.map((srv) => (
                        <button
                          key={srv.id}
                          id={`mobile-service-item-${srv.id}`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileServicesOpen(false);
                            onSelectService(srv.id);
                          }}
                          className="w-full text-left py-1.5 px-2 hover:bg-white/10 rounded-lg text-xs font-medium text-teal-100/90 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6E40] shrink-0" />
                          <span>{srv.title}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                id="mobile-nav-link-why"
                href="#why-choose-us"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                  onSelectSection('why-choose-us');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1.5"
              >
                {t?.nav?.whyChooseUs || 'Keunggulan'}
              </a>

              <a
                id="mobile-nav-link-articles"
                href="#articles"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                  onSelectSection('articles');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1.5"
              >
                {t?.nav?.articles || 'Artikel'}
              </a>

              <a
                id="mobile-nav-link-faq"
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                  onSelectSection('faq');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1.5"
              >
                {t?.nav?.faq || 'FAQ'}
              </a>

              <a
                id="mobile-nav-link-contact"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                  onSelectSection('contact');
                }}
                className="block text-sm font-semibold hover:text-[#FBBF24] transition-colors py-1.5"
              >
                {t?.nav?.contact || 'Kontak'}
              </a>

              <div className="pt-2">
                <button
                  id="mobile-nav-consultation-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 btn-koi-flame text-white rounded-full font-bold text-xs sm:text-sm tracking-wide text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t?.nav?.consultationBtn || 'Konsultasi Gratis'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
