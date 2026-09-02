/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Hammer,
  Sparkles,
  HeartHandshake,
  Wrench,
  ShoppingBag,
  Zap,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Hammer,
  Sparkles,
  HeartHandshake,
  Wrench,
  ShoppingBag,
  Zap,
};

interface ServicesPageProps {
  onBackToHome: () => void;
  onSelectService: (id: string) => void;
  onOpenConsultation: () => void;
}

export default function ServicesPage({ onBackToHome, onSelectService }: ServicesPageProps) {
  const { t, servicesData, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = language === 'id'
    ? ['Semua', 'Konstruksi & Renovasi', 'Filtrasi & Plumbing', 'Perawatan & Ikan', 'Kelistrikan']
    : ['All', 'Construction & Renovation', 'Filtration & Plumbing', 'Maintenance & Fish', 'Electrical'];

  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || Sparkles;
    return <IconComponent className="w-5 h-5 stroke-[2]" />;
  };

  const allServices = servicesData || [];

  const filteredServices = allServices.filter((srv) => {
    if (activeFilter === 'All' || activeFilter === 'Semua') return true;
    if (activeFilter === 'Konstruksi & Renovasi' || activeFilter === 'Construction & Renovation') {
      return srv.id === 'pembuatan-kolam-koi' || srv.id === 'renovasi-perbaikan-kolam' || srv.id === 'perbaikan-listrik-konstruksi';
    }
    if (activeFilter === 'Filtrasi & Plumbing' || activeFilter === 'Filtration & Plumbing') {
      return srv.id === 'pembuatan-perawatan-filter' || srv.id === 'pembuatan-kolam-koi';
    }
    if (activeFilter === 'Perawatan & Ikan' || activeFilter === 'Maintenance & Fish') {
      return srv.id === 'perawatan-kolam' || srv.id === 'perawatan-ikan-koi' || srv.id === 'jual-beli-ikan-koi';
    }
    if (activeFilter === 'Kelistrikan' || activeFilter === 'Electrical') {
      return srv.id === 'perbaikan-listrik-konstruksi' || srv.id === 'pembuatan-perawatan-filter';
    }
    return true;
  });

  return (
    <div className="min-h-screen relative text-slate-100">
      {/* Top Banner Header */}
      <div className="relative pt-20 md:pt-24 pb-8 md:pb-10 overflow-hidden bg-[#04242E]/80 backdrop-blur-md border-b border-teal-500/20 shadow-md">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-500/20 pb-3 pt-1">
            <button
              id="services-page-back-btn"
              onClick={onBackToHome}
              className="text-xs sm:text-sm font-bold tracking-wide uppercase text-teal-100 hover:text-white flex items-center gap-2 group cursor-pointer bg-white/10 hover:bg-white/20 py-1.5 px-3.5 rounded-lg border border-white/15 transition-all shadow-xs active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF6E40] group-hover:-translate-x-1 transition-transform" />
              <span>{t?.servicePage?.backBtn || 'Kembali'}</span>
            </button>
            <span className="font-mono tracking-widest text-[#FBBF24] uppercase font-bold text-xs bg-black/25 px-3 py-1 rounded-md border border-amber-400/20">
              {t?.services?.badge || 'Layanan Spesialis'}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2 max-w-4xl pt-1"
          >
            <span className="px-3.5 py-1 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white rounded-full text-xs font-bold uppercase tracking-wider inline-block shadow-xs">
              {language === 'id' ? 'Layanan Terpadu Spesialis' : 'Integrated Specialist Services'}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              {language === 'id'
                ? 'Daftar Lengkap Layanan Kolam & Ikan Koi Bali'
                : 'Complete Koi Pond & Fish Care Services in Bali'}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-teal-50/90 leading-relaxed font-normal max-w-3xl">
              {language === 'id'
                ? 'Pilih layanan spesialis di bawah ini untuk konsultasi teknis, survei lokasi gratis, dan estimasi biaya transparan bergaransi resmi.'
                : 'Explore our full range of specialist services for technical consultations, free on-site surveys, and official warranty protections across Bali.'}
            </p>
          </motion.div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-teal-500/20 pb-5">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat || (cat === 'Semua' && activeFilter === 'All') || (cat === 'All' && activeFilter === 'Semua');
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white shadow-md scale-100'
                    : 'bg-white/5 border border-teal-500/30 text-teal-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* All 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service, idx) => (
            <motion.div
              id={`service-card-${service.id}`}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => onSelectService(service.id)}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl glass-aquatic-card border border-teal-500/20 hover:border-[#FF6E40]/50 transition-all duration-300 relative cursor-pointer shadow-lg"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062C38] via-[#062C38]/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                
                {/* Float Icon Badge */}
                <div className="absolute bottom-3 left-3 p-2.5 bg-[#04242E]/80 backdrop-blur-md text-teal-200 rounded-xl shadow-md border border-teal-500/25 group-hover:bg-gradient-to-r group-hover:from-[#FF5722] group-hover:to-[#FF6E40] group-hover:text-white transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] rounded-full text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                  {language === 'id' ? 'Garansi 100%' : '100% Warranty'}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-3 bg-[#062C38]/40 backdrop-blur-sm">
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF6E40] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed line-clamp-3 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-teal-500/20 mt-3 flex items-center justify-between">
                  <button
                    id={`page-learn-more-${service.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.id);
                    }}
                    className="text-xs font-bold tracking-wider uppercase text-teal-200 group-hover:text-[#FF6E40] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {t?.services?.detailBtn || 'Pelajari Selengkapnya'}
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF6E40] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-emerald-300 font-bold bg-emerald-950/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {language === 'id' ? 'Survei Gratis' : 'Free Survey'}
                  </span>
                </div>
              </div>

              {/* Koi flame bottom glow bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF5722] group-hover:to-[#FF6E40] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
