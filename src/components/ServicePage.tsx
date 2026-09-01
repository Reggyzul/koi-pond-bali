/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';
import { contactData } from '../data';

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
          { name: 'sickCount', label: 'Perkiraan Jumlah Ikan Sakit', type: 'select', options: ['1 - 2 Ekor', '3 - 5 Ekor', 'Hampir Seluruh Kolam (>5 Ekor)'] },
          { name: 'koiSize', label: 'Ukuran Rata-rata Ikan Koi', type: 'select', options: ['Kecil (< 20 cm)', 'Sedang (20 - 40 cm)', 'Jumbo (> 40 cm)'] },
          { name: 'locationArea', label: 'Lokasi Kolam di Bali', type: 'text', placeholder: 'Alamat lengkap kolam Anda di Bali' }
        ];
      case 'pembuatan-perawatan-filter':
        return [
          { name: 'filterNeed', label: 'Kebutuhan Sistem Filtrasi', type: 'select', options: ['Pembuatan Ruang Chamber Baru', 'Penggantian Media Filter Jenuh (Japmat, Bio Ring, Bio Ball)', 'Pemasangan Lampu UV Sterilizer Anti Lumut', 'Upgrade Pompa Sirkulasi & Aerator Hemat Listrik', 'Pembuatan Sistem Moving Bed MBBR'] },
          { name: 'pondVolume', label: 'Perkiraan Volume Kolam (m³ / Liter)', type: 'text', placeholder: 'Contoh: 5 m³ (5.000 Liter)' },
          { name: 'locationArea', label: 'Lokasi Kolam di Bali', type: 'text', placeholder: 'Lokasi Anda di Bali' }
        ];
      case 'jual-beli-ikan-koi':
        return [
          { name: 'koiInterest', label: 'Varietas yang Diminati / Dijual', type: 'select', options: ['Kohaku (Merah & Putih)', 'Taisho Sanke (3 Warna)', 'Showa Sanshoku (Hitam Dasar)', 'Shiro Utsuri / Hi Utsuri', 'Chagoi / Karashi (Jumbo Friendly)', 'Tancho / Asagi / Shusui', 'Campuran / Bebas Rekomendasi'] },
          { name: 'sizeTarget', label: 'Target Ukuran Ikan Koi', type: 'select', options: ['Tosai (15 - 25 cm)', 'Nisai (25 - 40 cm)', 'Jumbo / Show Quality (40 - 65+ cm)'] },
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
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 stroke-[2.2]" />;
    }
    return <Icons.Sparkles className="w-6 h-6 stroke-[2.2]" />;
  };

  const getWhatsAppLink = () => {
    let text = `Halo KOI POND SERVICES BALI (Alvian Malengga)!\nSaya ingin konsultasi mengenai layanan: *${service.title}*.\n\n`;
    fields.forEach(f => {
      const val = formData[f.name];
      if (val) {
        text += `• *${f.label}*: ${val}\n`;
      }
    });
    if (formData.clientName) text += `• *Nama*: ${formData.clientName}\n`;
    if (formData.clientPhone) text += `• *No. WhatsApp*: ${formData.clientPhone}\n`;
    
    text += `\nMohon informasi estimasi biaya, jadwal survei gratis, dan ketersediaan teknisi. Terima kasih!`;
    return `https://wa.me/628133034733?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#F2F9F9] text-[#0F172A]">
      
      {/* Hero Banner Section - Living Tranquil Pond Atmosphere */}
      <div className="relative pt-20 md:pt-24 pb-10 md:pb-14 overflow-hidden bg-gradient-to-b from-[#04242E] via-[#062C38] to-[#0A4354] border-b border-teal-500/20 shadow-xl">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062C38] via-[#062C38]/85 to-[#04242E]/95" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          
          {/* Large, Touch-Friendly Breadcrumb Back Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-500/20 pb-4 pt-1">
            <button
              id="service-page-back-btn"
              onClick={onBackToHome}
              className="text-sm sm:text-base font-bold tracking-wide uppercase text-teal-100 hover:text-white flex items-center gap-2 group cursor-pointer bg-white/10 hover:bg-white/20 py-2 px-4 rounded-xl border border-white/15 transition-all shadow-sm active:scale-95"
            >
              <Icons.ArrowLeft className="w-5 h-5 text-[#FF6E40] group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Beranda</span>
            </button>
            <span className="font-mono tracking-widest text-[#FBBF24] uppercase font-extrabold text-xs sm:text-sm bg-black/25 px-3.5 py-1.5 rounded-lg border border-amber-400/20">
              Layanan / {service.title}
            </span>
          </div>

          {/* Large Hero Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3.5 max-w-4xl pt-1"
          >
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white px-4 py-1.5 rounded-full shadow-lg">
              <div className="text-white">
                {renderIcon(service.iconName)}
              </div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                KOI POND SERVICES BALI
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {service.title}
            </h1>

            <p className="text-base xs:text-lg sm:text-xl text-teal-50/95 leading-relaxed font-normal max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Side: Visi, Misi, Specs & Packages (Span 7) */}
        <div className="lg:col-span-7 space-y-9">
          
          {/* Visi & Misi */}
          {(service.visi || service.misi) && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-teal-900/10 rounded-2xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {service.visi && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#062C38]">
                    <div className="p-2 rounded-lg bg-teal-50 text-[#FF5722]">
                      <Icons.Eye className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h4 className="text-base sm:text-lg font-black uppercase tracking-wide">
                      Visi Layanan
                    </h4>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed pl-1">
                    {service.visi}
                  </p>
                </div>
              )}
              {service.misi && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#062C38]">
                    <div className="p-2 rounded-lg bg-teal-50 text-[#FF5722]">
                      <Icons.Target className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h4 className="text-base sm:text-lg font-black uppercase tracking-wide">
                      Misi Layanan
                    </h4>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed pl-1">
                    {service.misi}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Mengapa Memilih */}
          {service.whyChooseUs && (
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#062C38] flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#FF5722] rounded-full inline-block" />
                Keunggulan {service.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whyChooseUs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-5 bg-white rounded-2xl border border-teal-900/10 shadow-sm hover:border-[#0E5C73]/40 transition-all hover:shadow-md"
                  >
                    <Icons.ShieldCheck className="w-6 h-6 text-[#FF5722] mt-0.5 shrink-0" />
                    <p className="text-base sm:text-[17px] text-slate-800 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ruang Lingkup Pekerjaan */}
          {service.details && (
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#062C38] flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#059669] rounded-full inline-block" />
                Ruang Lingkup Pekerjaan
              </h3>
              <div className="space-y-3">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-5 bg-white rounded-2xl border border-teal-900/10 shadow-sm hover:border-teal-500/30 transition-all">
                    <Icons.CheckCircle2 className="w-6 h-6 text-[#059669] mt-0.5 shrink-0" />
                    <p className="text-base sm:text-[17px] text-slate-800 font-medium leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cakupan & Kategori */}
          {service.servicesList && (
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#062C38] flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#0E5C73] rounded-full inline-block" />
                Cakupan & Pilihan Kategori
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.servicesList.map((cat, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-teal-900/10 shadow-sm space-y-3.5">
                    <h4 className="font-black text-lg text-[#062C38] border-b border-teal-50 pb-2.5">
                      {cat.category}
                    </h4>
                    {cat.items && (
                      <ul className="space-y-2.5">
                        {cat.items.map((it, i) => (
                          <li key={i} className="text-base text-slate-700 flex items-start gap-2.5 leading-snug">
                            <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 shrink-0" />
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
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#062C38] flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#FF6E40] rounded-full inline-block" />
                Pilihan Paket Rekomendasi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.packages.map((pkg, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-teal-900/15 hover:border-[#0E5C73] transition-all space-y-4 shadow-sm hover:shadow-lg">
                    <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-3">
                      <h4 className="font-black text-lg text-[#062C38]">
                        {pkg.name}
                      </h4>
                      <span className="text-xs sm:text-sm font-extrabold text-[#FF5722] bg-orange-50 px-3 py-1 rounded-full border border-orange-200 shrink-0">
                        Custom
                      </span>
                    </div>
                    <ul className="space-y-2.5 text-base text-slate-700">
                      {pkg.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Icons.Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
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

        {/* Right Side: Interactive Consultation Form with Large Clear Inputs (Span 5) */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 bg-white border-2 border-teal-900/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
            <div className="space-y-1.5 border-b border-gray-100 pb-4">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#FF5722] block">
                KONSULTASI & ESTIMASI BIAYA
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#062C38]">
                Ajukan Survei Kolam Gratis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Isi form berikut lalu klik tombol WhatsApp untuk terhubung langsung dengan Alvian Malengga.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {fields.map((field) => (
                <div key={field.name} className="space-y-1.5">
                  <label className="block text-sm font-bold uppercase tracking-wider text-slate-700">
                    {field.label} *
                  </label>
                  {field.type === 'select' ? (
                    <select
                      required
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-teal-50/20 border border-slate-300 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                    >
                      <option value="">-- Pilih {field.label} --</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      required
                      rows={3}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-teal-50/20 border border-slate-300 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] resize-none transition-all"
                    />
                  ) : (
                    <input
                      type={field.type || 'text'}
                      required
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-teal-50/20 border border-slate-300 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                    />
                  )}
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold uppercase tracking-wider text-slate-700">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName || ''}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3.5 rounded-xl bg-teal-50/20 border border-slate-300 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold uppercase tracking-wider text-slate-700">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.clientPhone || ''}
                    onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                    placeholder="08133034733..."
                    className="w-full px-4 py-3.5 rounded-xl bg-teal-50/20 border border-slate-300 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                  />
                </div>
              </div>

              {/* Large Vibrant Koi Flame WhatsApp CTA */}
              <a
                id="service-submit-whatsapp-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 py-4 px-6 btn-koi-flame text-white rounded-full font-black text-base sm:text-lg tracking-wide uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer active:scale-98"
              >
                <Icons.Phone className="w-5 h-5" />
                <span>Chat WhatsApp (08133034733)</span>
              </a>

              <div className="flex items-center justify-center gap-2 pt-1 text-xs sm:text-sm text-slate-500 font-medium">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>Respon cepat • Survei lokasi 100% GRATIS se-Bali</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
