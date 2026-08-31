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
  MessageCircle
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
        className="fixed top-0 left-0 right-0 z-50 bg-[#0B436B] border-b border-white/15 py-3 shadow-sm transition-all"
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
            className="flex items-center gap-3 transition-opacity hover:opacity-95 cursor-pointer"
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav Menu - Precisely Aligned & Spaced */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-white">
            <a
              id="nav-link-about"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('about');
              }}
              className="hover:text-[#FCB900] transition-colors py-1 cursor-pointer"
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
                className="hover:text-[#FCB900] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
              >
                <span>Layanan</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    id="services-dropdown-menu"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white text-[#222222] rounded-lg shadow-xl z-50 py-2 border border-gray-100"
                  >
                    {serviceCategories.map((srv) => (
                      <button
                        id={`dropdown-item-${srv.id}`}
                        key={srv.id}
                        onClick={() => {
                          onSelectService(srv.id);
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-[#0B436B]/10 hover:text-[#0B436B] text-sm font-medium transition-colors flex items-center gap-2.5 cursor-pointer"
                      >
                        <srv.icon className="w-4 h-4 text-[#E53935]" />
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
              className="hover:text-[#FCB900] transition-colors py-1 cursor-pointer"
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
              className="hover:text-[#FCB900] transition-colors py-1 cursor-pointer"
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
              className="hover:text-[#FCB900] transition-colors py-1 cursor-pointer"
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
              className="hover:text-[#FCB900] transition-colors py-1 cursor-pointer"
            >
              Kontak
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden bg-[#0B436B] border-t border-white/15 px-6 py-5 space-y-4 text-white overflow-y-auto max-h-[85vh]"
            >
              <a
                id="mobile-nav-link-about"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onSelectSection('about');
                }}
                className="block text-base font-semibold hover:text-[#FCB900] transition-colors"
              >
                Tentang Kami (Profil Alvian Malengga)
              </a>

              <div className="space-y-2 pl-3 border-l-2 border-[#FCB900]/40">
                <span className="text-xs font-bold text-[#FCB900] uppercase tracking-wider block">
                  6 Layanan Spesialis
                </span>
                {serviceCategories.map((srv) => (
                  <button
                    id={`mobile-item-${srv.id}`}
                    key={srv.id}
                    onClick={() => {
                      onSelectService(srv.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-1 text-sm text-white/90 hover:text-[#FCB900] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <srv.icon className="w-3.5 h-3.5 text-[#E53935]" />
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
                className="block text-base font-semibold hover:text-[#FCB900] transition-colors"
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
                className="block text-base font-semibold hover:text-[#FCB900] transition-colors"
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
                className="block text-base font-semibold hover:text-[#FCB900] transition-colors"
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
                className="block text-base font-semibold hover:text-[#FCB900] transition-colors"
              >
                Kontak & Lokasi Bali
              </a>

              <div className="pt-2">
                <a
                  id="mobile-nav-wa-btn"
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-full font-bold text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Whatsapp Kami
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
