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
  CalendarCheck,
  ArrowLeft,
  Eye,
  Target,
  ShieldCheck,
  CheckCircle2,
  Check,
  Phone
} from 'lucide-react';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Hammer,
  Sparkles,
  HeartHandshake,
  Wrench,
  ShoppingBag,
  Zap,
  CalendarCheck,
};

interface ServicePageProps {
  service: Service;
  onBackToHome: () => void;
  onOpenConsultation: () => void;
}

export default function ServicePage({ service, onBackToHome }: ServicePageProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { t, language } = useLanguage();
  
  const getDivisionFields = (id: string) => {
    if (language === 'en') {
      switch (id) {
        case 'pembuatan-kolam-koi':
          return [
            { name: 'propertyType', label: 'Property Type', type: 'select', options: ['Private Residence', 'Private / Rental Villa', 'Hotel & Resort', 'Restaurant / Cafe', 'Commercial Office / Plaza'] },
            { name: 'pondStyle', label: 'Desired Pond Concept', type: 'select', options: ['Modern Minimalist Koi Pond', 'Natural Bali Stone & Water-Wall', 'Tempered Glass Viewing Window Pond', 'Water Fall & Cascading Stone Feature', 'Not Sure (Need Recommendations)'] },
            { name: 'pondSize', label: 'Estimated Dimensions / Land Area (L x W x D meters)', type: 'text', placeholder: 'e.g. 4 x 2.5 x 1.3 meters' },
            { name: 'locationArea', label: 'Project Location in Bali', type: 'text', placeholder: 'e.g. Sanur, Canggu, Ubud, Seminyak, Uluwatu...' }
          ];
        case 'renovasi-perbaikan-kolam':
          return [
            { name: 'problemType', label: 'Primary Pond Issue', type: 'select', options: ['Structural Crack / Fast Water Loss', 'Persistent Green / Murky Water (Ineffective Filter)', 'Filtration Chamber Too Small / Needs Upgrade', 'Blocked or Leaking Sub-surface Plumbing', 'Aesthetic Redesign & Natural Stone Tiling'] },
            { name: 'approxSize', label: 'Current Pond Dimensions', type: 'text', placeholder: 'e.g. 4 x 2 meters with 1.2m depth' },
            { name: 'fishStatus', label: 'Current Koi Fish Status', type: 'select', options: ['Still in Pond (Need Temporary Holding Tank)', 'Already Relocated / Pond Empty'] },
            { name: 'locationArea', label: 'Pond Location in Bali', type: 'text', placeholder: 'Enter your address or villa area in Bali' }
          ];
        case 'perawatan-kolam':
          return [
            { name: 'maintenanceType', label: 'Maintenance Option', type: 'select', options: ['One-Time Deep Clean & Chamber Backwash', 'Bi-Weekly Subscription (2x Monthly)', 'Weekly Subscription (4x Monthly)', 'General Water Chemistry & Electrical Health Check'] },
            { name: 'pondCondition', label: 'Current Pond Condition', type: 'select', options: ['Very Murky with Heavy Algae', 'Slightly Green Water', 'Normal / Routine Upkeep Needed', 'Pump or Filtration Faulty'] },
            { name: 'locationArea', label: 'Location in Bali', type: 'text', placeholder: 'e.g. Denpasar, Badung, Gianyar, Tabanan...' }
          ];
        case 'perawatan-ikan-koi':
          return [
            { name: 'koiCondition', label: 'Fish Symptoms / Inquiries', type: 'select', options: ['Fish Lying on Floor / Lethargic at Surface', 'Anchor Worms / Argulus Lice Visible', 'White Spots (Ich) / Cotton Wool Fungus', 'Red Ulcers / Flaking Scales / Fin Rot', 'Gasping at Surface / Loss of Appetite', 'New Arrival Quarantine Assistance'] },
            { name: 'fishCount', label: 'Fish Count & Average Size', type: 'text', placeholder: 'e.g. 15 fish, 30-50 cm length' },
            { name: 'locationArea', label: 'Location in Bali', type: 'text', placeholder: 'e.g. Jimbaran, Nusa Dua, Canggu...' }
          ];
        case 'pembuatan-perawatan-filter':
          return [
            { name: 'filterNeed', label: 'Filtration Requirement', type: 'select', options: ['New Multi-Chamber / Vortex Bio-Reactor Build', 'Filter Media Upgrade (Japmat, Bio-Rings, Moving Bed)', 'Eco Pump & High-Flow Aerator Installation', 'High-Output UV Clarifier Anti-Green Water Setup', 'Pump & Electrical Safety Servicing'] },
            { name: 'pondVolume', label: 'Estimated Pond Volume / Dimensions', type: 'text', placeholder: 'e.g. 10,000 Liters / 4x2x1.2 meters' },
            { name: 'locationArea', label: 'Location in Bali', type: 'text', placeholder: 'Villa or residence location' }
          ];
        case 'jual-beli-ikan-koi':
          return [
            { name: 'varietyInterest', label: 'Desired Koi Varieties', type: 'select', options: ['Assorted Mix (Kohaku, Showa, Sanke, etc.)', 'Gosanke (Kohaku, Sanke, Showa)', 'Shiro Utsuri / Hi Utsuri', 'Tancho / Asagi / Shusui / Chagoi', 'Bali Butterfly / Longfin Fin Koi', 'Jumbo Show Quality (> 50 cm)', 'Consignment / Selling Personal Koi'] },
            { name: 'sizeRange', label: 'Size Category', type: 'select', options: ['Fingerling / Tosai (15 - 25 cm)', 'Junior / Nisai (25 - 40 cm)', 'Adult / Jumbo (40 - 65+ cm)', 'Flexible / Best Available Stock'] },
            { name: 'budgetRange', label: 'Budget Range', type: 'select', options: ['Under IDR 500k / fish', 'IDR 500k - 2 Million / fish', 'IDR 2M - 5M (Grade A / Show Quality)', 'Above IDR 5 Million (Import / High Quality)', 'Open to Recommendations'] },
            { name: 'actionType', label: 'Transaction Type', type: 'select', options: ['Purchase Healthy Certified Koi', 'Trade-in / Consignment Sale'] },
            { name: 'deliveryArea', label: 'Delivery Location in Bali', type: 'text', placeholder: 'Full delivery destination' }
          ];
        case 'perbaikan-listrik-konstruksi':
          return [
            { name: 'repairCategory', label: 'Repair & Engineering Scope', type: 'select', options: ['Pond Electrical & Pump Rewiring (IP68 Waterproof)', 'Stray Electrical Current / Grounding Hazard Fix', 'Concrete Wall & Floor Crack Injection Repair', 'High-Pressure Waterproofing & Leak Prevention', 'Complete Electrical & Concrete Structure Overhaul'] },
            { name: 'urgencyLevel', label: 'Urgency Level', type: 'select', options: ['Emergency (Electrical Leak / Critical Leak)', 'Urgent (Within 1-2 Days)', 'Standard Survey & Quotation'] },
            { name: 'propertyType', label: 'Property Type', type: 'select', options: ['Private Villa', 'Commercial Resort / Hotel', 'Residential Home', 'Restaurant / Cafe'] },
            { name: 'locationArea', label: 'Location in Bali', type: 'text', placeholder: 'e.g. Sanur, Canggu, Ubud, Uluwatu...' }
          ];
        case 'regular-maintenance':
        case 'paket-regular-maintenance':
          return [
            { name: 'pondSize', label: 'Estimated Pond Size / Dimensions', type: 'text', placeholder: 'e.g. 4 x 2.5 x 1.3 meters / 10,000 Liters' },
            { name: 'currentFishCount', label: 'Approximate Number of Koi Fish', type: 'text', placeholder: 'e.g. 15 Koi fish' },
            { name: 'propertyType', label: 'Property Type', type: 'select', options: ['Private Residence', 'Villa / Rental Property', 'Resort / Hotel', 'Restaurant / Cafe', 'Office'] },
            { name: 'preferredSchedule', label: 'Preferred Maintenance Schedule', type: 'select', options: ['1-Year Package (11x Regular + 1x Deep Clean)', 'Custom Regular Interval', 'Need Survey First'] },
            { name: 'locationArea', label: 'Pond Location in Bali', type: 'text', placeholder: 'e.g. Sanur, Canggu, Ubud, Seminyak, Denpasar...' }
          ];
        default:
          return [
            { name: 'generalInquiry', label: 'Inquiry Details', type: 'textarea', placeholder: 'Describe your requirements here...' }
          ];
      }
    }

    // Indonesian Default
    switch (id) {
      case 'pembuatan-kolam-koi':
        return [
          { name: 'propertyType', label: 'Tipe Properti', type: 'select', options: ['Rumah Tinggal', 'Villa Pribadi / Sewa', 'Hotel & Resort', 'Restoran / Cafe', 'Kantor / Komersial'] },
          { name: 'pondStyle', label: 'Model Kolam yang Diinginkan', type: 'select', options: ['Kolam Koi Minimalis Modern', 'Kolam Koi Batu Alam Bali (Natural Stone)', 'Kolam Kaca Viewing Window (Tempered Glass)', 'Kolam Tebing Water Wall & Air Terjun', 'Belum Tahu (Butuh Rekomendasi)'] },
          { name: 'pondSize', label: 'Perkiraan Ukuran / Lahan (P x L x T meter)', type: 'text', placeholder: 'Contoh: 3 x 2 x 1.2 meter' },
          { name: 'locationArea', label: 'Lokasi Proyek di Bali', type: 'text', placeholder: 'Contoh: Sanur, Denpasar, Canggu, Ubud, dll.' }
        ];
      case 'renovasi-perbaikan-kolam':
        return [
          { name: 'problemType', label: 'Masalah Utama Kolam', type: 'select', options: ['Kolam Bocor / Air Cepat Surut', 'Air Selalu Hijau & Keruh (Filter Tidak Efektif)', 'Chamber Filter Kurang Besar / Mau Ditambah', 'Pipa Sirkulasi & Bottom Drain Buntu', 'Perombakan Desain & Ganti Batu Alam'] },
          { name: 'approxSize', label: 'Perkiraan Ukuran Kolam Saat Ini', type: 'text', placeholder: 'Contoh: 4 x 2.5 meter kedalaman 1 meter' },
          { name: 'fishStatus', label: 'Status Ikan Koi', type: 'select', options: ['Masih Ada di Kolam (Perlu Wadah Sementara)', 'Sudah Dipindahkan / Kolam Kosong'] },
          { name: 'locationArea', label: 'Alamat Kolam di Bali', type: 'text', placeholder: 'Masukkan lokasi kolam Anda di Bali' }
        ];
      case 'perawatan-kolam':
        return [
          { name: 'maintenanceType', label: 'Pilihan Layanan Perawatan', type: 'select', options: ['Kuras & Pembersihan Chamber Filter (Sekali Datang)', 'Paket Langganan Rutin (2x Sebulan)', 'Paket Langganan Rutin (4x Sebulan)', 'General Checkup Parameter Air & Kelistrikan'] },
          { name: 'pondCondition', label: 'Kondisi Kolam Saat Ini', type: 'select', options: ['Air Sangat Keruh & Lumut Tebal', 'Air Agak Hijau', 'Hanya Butuh Kuras Rutin / Normal', 'Pompa / Filter Bermasalah'] },
          { name: 'locationArea', label: 'Lokasi Kolam di Bali', type: 'text', placeholder: 'Contoh: Denpasar Barat, Badung, Gianyar, dll.' }
        ];
      case 'perawatan-ikan-koi':
        return [
          { name: 'koiCondition', label: 'Gejala / Keluhan Ikan Koi', type: 'select', options: ['Ikan Diam di Dasar / Mengambang Lemas', 'Muncul Kutu Jarum / Kutu Bulat', 'Bercak Putih (White Spot) / Jamur Kapas', 'Luka Merah / Sisik Mengelupas / Borok', 'Insang Megap-megap & Kurang Nafsu Makan', 'Mau Prosedur Karantina Ikan Baru'] },
          { name: 'fishCount', label: 'Jumlah Populasi & Ukuran Ikan', type: 'text', placeholder: 'Contoh: 15 ekor ukuran 30-50 cm' },
          { name: 'locationArea', label: 'Lokasi Kolam di Bali', type: 'text', placeholder: 'Contoh: Jimbaran, Nusa Dua, Tabanan, dll.' }
        ];
      case 'pembuatan-perawatan-filter':
        return [
          { name: 'filterNeed', label: 'Kebutuhan Sistem Filter', type: 'select', options: ['Pembuatan Ruang Chamber Filter Baru (Vortex / Multi-Chamber)', 'Upgrade / Ganti Media Filter Berkualitas (Japmat, Bioball, Bioring)', 'Pemasangan Pompa Hemat Listrik & Aerator High Flow', 'Instalasi Lampu UV Sterilizer Anti-Lumut Hijau', 'Servis / Perbaikan Pompa & Kelistrikan Kolam'] },
          { name: 'pondVolume', label: 'Estimasi Volume / Ukuran Kolam', type: 'text', placeholder: 'Contoh: Volume 10 ton air / 4x2x1.2 m' },
          { name: 'locationArea', label: 'Lokasi di Bali', type: 'text', placeholder: 'Alamat survei teknisi' }
        ];
      case 'jual-beli-ikan-koi':
        return [
          { name: 'varietyInterest', label: 'Varietas Koi yang Dicari', type: 'select', options: ['Paket Campur (Kohaku, Showa, Sanke, dll)', 'Kohaku / Sanke / Showa (Gosanke)', 'Shiro Utsuri / Hi Utsuri', 'Tancho / Asagi / Shusui / Chagoi', 'Koi Slayer Kumpay Bali (Sirip Panjang)', 'Koi Jumbo / Indukan (> 50 cm)', 'Mau Jual / Titip Jual Ikan Koi'] },
          { name: 'sizeRange', label: 'Ukuran yang Diinginkan', type: 'select', options: ['Bibit / Tosai (15 - 25 cm)', 'Remaja / Nisai (25 - 40 cm)', 'Dewasa / Jumbo (40 - 65+ cm)', 'Bebas / Sesuai Stok yang Bagus'] },
          { name: 'budgetRange', label: 'Kisaran Anggaran / Budget', type: 'select', options: ['Di bawah Rp 500 Ribu / ekor', 'Rp 500 Ribu - Rp 2 Juta / ekor', 'Rp 2 Juta - Rp 5 Juta (Grade A / Show Quality)', 'Di atas Rp 5 Juta (Import / High Quality)', 'Menyesuaikan Rekomendasi'] },
          { name: 'actionType', label: 'Tujuan Transaksi', type: 'select', options: ['Beli Ikan Koi Sehat & Berkualitas', 'Titip Jual / Menjual Ikan Koi Pribadi'] },
          { name: 'deliveryArea', label: 'Alamat Pengiriman di Bali', type: 'text', placeholder: 'Alamat lengkap pengantaran' }
        ];
      case 'perbaikan-listrik-konstruksi':
        return [
          { name: 'repairCategory', label: 'Kategori Kerusakan / Kebutuhan', type: 'select', options: ['Kelistrikan & Pompa Kolam (Kabel Terkelupas / Korsleting)', 'Grounding & Kebocoran Arus Listrik di Air Kolam', 'Injeksi Grouting Retak Struktur Dinding Beton', 'Waterproofing Ulang & Perbaikan Rembes', 'Perbaikan Menyeluruh Listrik & Struktur'] },
          { name: 'urgencyLevel', label: 'Tingkat Urgensi', type: 'select', options: ['Darurat / Emergency (Arus Bocor / Kolam Surut Cepat)', 'Mendesak (1-2 Hari ke Depan)', 'Survei Berkala & Estimasi Biaya'] },
          { name: 'propertyType', label: 'Tipe Properti', type: 'select', options: ['Villa Pribadi / Sewa', 'Resort / Hotel', 'Rumah Tinggal', 'Restoran / Tempat Usaha'] },
          { name: 'locationArea', label: 'Lokasi Kolam di Bali', type: 'text', placeholder: 'Contoh: Canggu, Sanur, Ubud, Nusa Dua, dll.' }
        ];
      case 'regular-maintenance':
      case 'paket-regular-maintenance':
        return [
          { name: 'pondSize', label: 'Perkiraan Ukuran Kolam (P x L x Kedalaman)', type: 'text', placeholder: 'contoh: 4 x 2.5 x 1.3 meter / 10.000 Liter' },
          { name: 'currentFishCount', label: 'Jumlah Ikan Koi di Kolam', type: 'text', placeholder: 'contoh: 15 ekor koi' },
          { name: 'propertyType', label: 'Tipe Properti', type: 'select', options: ['Rumah Tinggal', 'Villa Pribadi / Sewa', 'Hotel & Resort', 'Restoran / Cafe', 'Kantor'] },
          { name: 'preferredSchedule', label: 'Pilihan Jadwal Kunjungan', type: 'select', options: ['Paket 1 Tahun (11x Servis + 1x Deep Clean)', 'Jadwal Fleksibel', 'Butuh Survei Lokasi Dulu'] },
          { name: 'locationArea', label: 'Lokasi Kolam di Bali', type: 'text', placeholder: 'contoh: Sanur, Canggu, Ubud, Seminyak, Denpasar...' }
        ];
      default:
        return [
          { name: 'generalInquiry', label: 'Detail Kebutuhan Anda', type: 'textarea', placeholder: 'Tuliskan kebutuhan spesifik Anda di sini...' }
        ];
    }
  };

  const fields = getDivisionFields(service.id);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || Sparkles;
    return <IconComponent className="w-5 h-5 stroke-[2]" />;
  };

  const getWhatsAppLink = () => {
    let text = '';
    if (language === 'en') {
      text = `Hello KOI POND SERVICES BALI!\nI would like to inquire about: *${service.title}*.\n\n`;
      fields.forEach(f => {
        const val = formData[f.name];
        if (val) text += `- ${f.label}: ${val}\n`;
      });
      if (formData.clientName) text += `- Name: ${formData.clientName}\n`;
      if (formData.clientPhone) text += `- WhatsApp Number: ${formData.clientPhone}\n`;
      text += `\nPlease provide estimated cost & survey schedule. Thank you!`;
    } else {
      text = `Halo KOI POND SERVICES BALI!\nSaya ingin konsultasi mengenai layanan: *${service.title}*.\n\n`;
      fields.forEach(f => {
        const val = formData[f.name];
        if (val) text += `- ${f.label}: ${val}\n`;
      });
      if (formData.clientName) text += `- Nama: ${formData.clientName}\n`;
      if (formData.clientPhone) text += `- No. WhatsApp: ${formData.clientPhone}\n`;
      text += `\nMohon informasi estimasi biaya & jadwal survei. Terima kasih.`;
    }

    const target = formData.targetNumber || '08133034733';
    const cleanNumber = target.replace(/\D/g, '');
    const fullNumber = cleanNumber.startsWith('0') ? `62${cleanNumber.slice(1)}` : cleanNumber;
    return `https://wa.me/${fullNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen relative text-slate-100">
      
      {/* Hero Banner Section */}
      <div className="relative pt-20 md:pt-24 pb-8 md:pb-10 overflow-hidden bg-[#04242E]/80 backdrop-blur-md border-b border-teal-500/20 shadow-md">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Breadcrumb Back Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-500/20 pb-3 pt-1">
            <button
              id="service-page-back-btn"
              onClick={onBackToHome}
              className="text-xs sm:text-sm font-bold tracking-wide uppercase text-teal-100 hover:text-white flex items-center gap-2 group cursor-pointer bg-white/10 hover:bg-white/20 py-1.5 px-3.5 rounded-lg border border-white/15 transition-all shadow-xs active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF6E40] group-hover:-translate-x-1 transition-transform" />
              <span>{t.servicePage.backBtn}</span>
            </button>
            <span className="font-mono tracking-widest text-[#FBBF24] uppercase font-bold text-xs bg-black/25 px-3 py-1 rounded-md border border-amber-400/20">
              {t.services.badge} / {service.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Title & Headline */}
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-teal-900/80 text-teal-200 border border-teal-500/30">
                  {renderIcon(service.iconName)}
                </span>
                <span className="px-3 py-0.5 bg-[#FF5722] text-white rounded-full text-[11px] font-bold uppercase tracking-wider">
                  {language === 'id' ? 'Layanan Unggulan' : 'Featured Service'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-teal-100/90 leading-relaxed font-normal max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Quick Guarantees Pill Card */}
            <div className="lg:col-span-4 bg-[#062C38]/70 border border-teal-500/25 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-lg">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm border-b border-teal-500/20 pb-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>{language === 'id' ? 'Standar Mutu & Garansi' : 'Quality Standards & Warranty'}</span>
              </div>
              <div className="space-y-1.5 text-xs text-teal-100/80 font-normal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6E40] shrink-0" />
                  <span>{t.hero.guarantee}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6E40] shrink-0" />
                  <span>{t.hero.freeSurvey}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6E40] shrink-0" />
                  <span>{language === 'id' ? 'Harga transparan & fleksibel' : 'Transparent & flexible pricing'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Details & Form Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Content & Features (Span 7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Photo Banner */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-aquatic-card p-1.5 border border-teal-500/20 shadow-xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Visi & Misi Box */}
          {(service.visi || service.misi) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.visi && (
                <div className="p-4 sm:p-5 glass-aquatic-card rounded-xl border border-teal-500/20 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-teal-300 font-bold text-xs sm:text-sm uppercase tracking-wider">
                    <Eye className="w-4 h-4 text-[#FF6E40]" />
                    <span>{language === 'id' ? 'Komitmen Visi' : 'Vision Statement'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">{service.visi}</p>
                </div>
              )}
              {service.misi && (
                <div className="p-4 sm:p-5 glass-aquatic-card rounded-xl border border-teal-500/20 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-teal-300 font-bold text-xs sm:text-sm uppercase tracking-wider">
                    <Target className="w-4 h-4 text-[#FF6E40]" />
                    <span>{language === 'id' ? 'Komitmen Misi' : 'Mission Commitment'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">{service.misi}</p>
                </div>
              )}
            </div>
          )}

          {/* Keunggulan Spesifik Divisi */}
          {service.details && (
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-[#FF5722] rounded-full inline-block" />
                {t.services.featuresLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 glass-aquatic-card rounded-xl border border-teal-500/20 shadow-xs hover:border-teal-400/40 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-0.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-teal-100/90 font-normal leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cakupan & Kategori */}
          {service.servicesList && (
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-teal-400 rounded-full inline-block" />
                {t.services.servicesListLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.servicesList.map((cat, idx) => (
                  <div key={idx} className="p-4 sm:p-5 glass-aquatic-card rounded-xl border border-teal-500/20 shadow-xs space-y-2.5">
                    <h4 className="font-bold text-sm sm:text-base text-white border-b border-teal-500/20 pb-2">
                      {cat.category}
                    </h4>
                    {cat.items && (
                      <ul className="space-y-1.5">
                        {cat.items.map((it, i) => (
                          <li key={i} className="text-xs sm:text-sm text-teal-100/80 flex items-start gap-2 leading-snug font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6E40] mt-1.5 shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Paket Rekomendasi */}
          {service.packages && (
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-[#FF6E40] rounded-full inline-block" />
                {t.services.packagesLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.packages.map((pkg, idx) => (
                  <div key={idx} className="p-4 sm:p-5 glass-aquatic-card rounded-xl border border-teal-500/20 hover:border-[#FF6E40]/50 transition-all space-y-3 shadow-xs">
                    <div className="flex items-center justify-between gap-2 border-b border-teal-500/20 pb-2.5">
                      <h4 className="font-bold text-sm sm:text-base text-white">
                        {pkg.name}
                      </h4>
                      <span className="text-[11px] font-bold text-[#FF6E40] bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-orange-500/30 shrink-0">
                        Custom
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-teal-100/85 font-normal">
                      {pkg.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Interactive Consultation Form (Span 5) */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 glass-aquatic-card border border-teal-500/25 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4">
            <div className="space-y-1 border-b border-teal-500/20 pb-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6E40] block">
                {t.servicePage.consultationTitle}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {t.servicePage.formTitle}
              </h3>
              <p className="text-xs text-teal-100/80 leading-relaxed font-normal">
                {t.servicePage.formSubtitle}
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
              {fields.map((field) => (
                <div key={field.name} className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                    {field.label} *
                  </label>
                  {field.type === 'select' ? (
                    <select
                      required
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/80 border border-teal-500/30 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                    >
                      <option value="" className="bg-[#062C38]">-- {field.label} --</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#062C38] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      required
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                    />
                  )}
                </div>
              ))}

              {/* Client Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-teal-500/20">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                    {t.servicePage.inputName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName || ''}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    placeholder={language === 'id' ? 'Nama Anda' : 'Your Name'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                    {t.servicePage.inputPhone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.clientPhone || ''}
                    onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                    placeholder={language === 'id' ? 'Contoh: 08123456789' : 'e.g. +628123456789'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                  {t.servicePage.selectTargetWa}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-all ${(formData.targetNumber || '08133034733') === '08133034733' ? 'border-[#25D366] bg-[#063327] text-white' : 'border-teal-500/30 bg-[#04242E]/70 text-teal-100/80 hover:border-teal-400/50'}`}>
                    <input
                      type="radio"
                      name="serviceTargetNumber"
                      value="08133034733"
                      checked={(formData.targetNumber || '08133034733') === '08133034733'}
                      onChange={(e) => handleInputChange('targetNumber', e.target.value)}
                      className="accent-[#25D366] w-3.5 h-3.5 cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="font-bold block text-white text-[11px]">WA 1 (08133034733)</span>
                      <span className="text-[10px] text-teal-200/70">{language === 'id' ? 'Konsultasi & Survei' : 'Consult & Survey'}</span>
                    </div>
                  </label>

                  <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-all ${formData.targetNumber === '081295903430' ? 'border-[#25D366] bg-[#063327] text-white' : 'border-teal-500/30 bg-[#04242E]/70 text-teal-100/80 hover:border-teal-400/50'}`}>
                    <input
                      type="radio"
                      name="serviceTargetNumber"
                      value="081295903430"
                      checked={formData.targetNumber === '081295903430'}
                      onChange={(e) => handleInputChange('targetNumber', e.target.value)}
                      className="accent-[#25D366] w-3.5 h-3.5 cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="font-bold block text-white text-[11px]">WA 2 (081295903430)</span>
                      <span className="text-[10px] text-teal-200/70">{language === 'id' ? 'Booking & Support' : 'Booking & Support'}</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <a
                id="service-submit-whatsapp-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 py-3 px-5 btn-koi-flame text-white rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>{t.servicePage.submitBtn}</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 pt-0.5 text-xs text-teal-200/80 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>{t.servicePage.surveyFreeBadge}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
