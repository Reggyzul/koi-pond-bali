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
  ArrowLeft,
  Eye,
  Target,
  ShieldCheck,
  CheckCircle2,
  Check,
  Phone
} from 'lucide-react';
import { Service } from '../types';
import { contactData } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Hammer,
  Sparkles,
  HeartHandshake,
  Wrench,
  ShoppingBag,
};

interface ServicePageProps {
  service: Service;
  onBackToHome: () => void;
  onOpenConsultation: () => void;
}

export default function ServicePage({ service, onBackToHome, onOpenConsultation }: ServicePageProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  
  const getDivisionFields = (id: string) => {
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
    let text = `Halo KOI POND SERVICES BALI!\nSaya ingin konsultasi mengenai layanan: *${service.title}*.\n\n`;
    fields.forEach(f => {
      const val = formData[f.name];
      if (val) {
        text += `- ${f.label}: ${val}\n`;
      }
    });
    if (formData.clientName) text += `- Nama: ${formData.clientName}\n`;
    if (formData.clientPhone) text += `- No. WhatsApp: ${formData.clientPhone}\n`;
    
    text += `\nMohon informasi estimasi biaya & jadwal survei. Terima kasih.`;
    return `https://wa.me/628133034733?text=${encodeURIComponent(text)}`;
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
              <span>Kembali ke Beranda</span>
            </button>
            <span className="font-mono tracking-widest text-[#FBBF24] uppercase font-bold text-xs bg-black/25 px-3 py-1 rounded-md border border-amber-400/20">
              Layanan / {service.title}
            </span>
          </div>

          {/* Hero Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2.5 max-w-4xl pt-1"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white px-3.5 py-1 rounded-full shadow-md">
              <div className="text-white">
                {renderIcon(service.iconName)}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">
                KOI POND SERVICES BALI
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-teal-50/90 leading-relaxed font-normal max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8">
        
        {/* Left Side: Visi, Misi, Specs & Packages (Span 7) */}
        <div className="lg:col-span-7 space-y-7">
          
          {/* Visi & Misi */}
          {(service.visi || service.misi) && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-aquatic-card border border-teal-500/20 rounded-xl p-5 sm:p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {service.visi && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-white">
                    <div className="p-1.5 rounded-lg bg-teal-950 text-[#FF6E40] border border-teal-500/30">
                      <Eye className="w-4 h-4 stroke-[2]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold uppercase tracking-wide">
                      Visi Layanan
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed pl-1 font-normal">
                    {service.visi}
                  </p>
                </div>
              )}
              {service.misi && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-white">
                    <div className="p-1.5 rounded-lg bg-teal-950 text-[#FF6E40] border border-teal-500/30">
                      <Target className="w-4 h-4 stroke-[2]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold uppercase tracking-wide">
                      Misi Layanan
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed pl-1 font-normal">
                    {service.misi}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Mengapa Memilih */}
          {service.whyChooseUs && (
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-[#FF5722] rounded-full inline-block" />
                Keunggulan Layanan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.whyChooseUs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 glass-aquatic-card rounded-xl border border-teal-500/20 shadow-xs hover:border-[#FF6E40]/50 transition-all"
                  >
                    <ShieldCheck className="w-5 h-5 text-[#10B981] mt-0.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-teal-100/90 font-normal leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ruang Lingkup Pekerjaan */}
          {service.details && (
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-[#10B981] rounded-full inline-block" />
                Ruang Lingkup Pekerjaan
              </h3>
              <div className="space-y-2.5">
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
                Cakupan & Kategori
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
                Pilihan Paket
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
                Konsultasi & Estimasi
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Ajukan Survei Kolam Gratis
              </h3>
              <p className="text-xs text-teal-100/80 leading-relaxed font-normal">
                Isi formulir untuk konsultasi langsung dengan teknisi spesialis.
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
                      <option value="" className="bg-[#062C38]">-- Pilih {field.label} --</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#062C38]">{opt}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      required
                      rows={3}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] resize-none transition-all"
                    />
                  ) : (
                    <input
                      type={field.type || 'text'}
                      required
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                    />
                  )}
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName || ''}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.clientPhone || ''}
                    onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                    placeholder="Contoh: 08123456789"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                  />
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
                <span>Konsultasi WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 pt-0.5 text-xs text-teal-200/80 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Survei lokasi gratis ke seluruh Bali</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
