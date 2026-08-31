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
      return <IconComponent className="w-5 h-5 stroke-[2]" />;
    }
    return <Icons.Sparkles className="w-5 h-5 stroke-[2]" />;
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
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero Banner Section - Directly Connected under Navbar without gap */}
      <div className="relative pt-16 md:pt-18 pb-8 md:pb-10 overflow-hidden bg-[#0B436B] border-b border-[#083657]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B436B] via-[#0B436B]/80 to-[#0B436B]/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Integrated Clean Breadcrumb */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 pt-2 text-xs">
            <button
              id="service-page-back-btn"
              onClick={onBackToHome}
              className="font-bold tracking-wider uppercase text-white/80 hover:text-white flex items-center gap-1.5 group cursor-pointer transition-colors"
            >
              <Icons.ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </button>
            <span className="font-mono tracking-widest text-[#FCB900] uppercase font-bold text-[11px]">
              Layanan / {service.title}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2.5 max-w-3xl pt-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#E53935] text-white px-3.5 py-1 rounded-full shadow-sm">
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
            <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed font-normal">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Visi, Misi & Specifications */}
        <div className="lg:col-span-7 space-y-8">
          {/* Visi & Misi */}
          {(service.visi || service.misi) && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {service.visi && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#0B436B]">
                    <Icons.Eye className="w-5 h-5 text-[#E53935]" />
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      Visi Layanan
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.visi}
                  </p>
                </div>
              )}
              {service.misi && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#0B436B]">
                    <Icons.Target className="w-5 h-5 text-[#E53935]" />
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      Misi Layanan
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.misi}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Mengapa Memilih */}
          {service.whyChooseUs && (
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0B436B]">
                Keunggulan {service.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.whyChooseUs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-2xs"
                  >
                    <Icons.ShieldCheck className="w-5 h-5 text-[#E53935] mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">
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
              <h3 className="text-2xl font-bold text-[#0B436B]">
                Ruang Lingkup Pekerjaan
              </h3>
              <div className="space-y-2.5">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
                    <Icons.CheckCircle2 className="w-5 h-5 text-[#0B436B] mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-800">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cakupan & Kategori */}
          {service.servicesList && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0B436B]">
                Cakupan & Pilihan Kategori
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.servicesList.map((cat, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-gray-200 shadow-2xs space-y-2.5">
                    <h4 className="font-bold text-base text-[#0B436B] border-b border-gray-100 pb-2">
                      {cat.category}
                    </h4>
                    {cat.items && (
                      <ul className="space-y-2">
                        {cat.items.map((it, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                            {it}
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
              <h3 className="text-2xl font-bold text-[#0B436B]">
                Pilihan Paket
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.packages.map((pkg, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#0B436B] transition-colors space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#0B436B]">
                        {pkg.name}
                      </h4>
                      <span className="text-xs font-bold text-[#E53935] bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                        Custom
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {pkg.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icons.Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
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

        {/* Right Side: Interactive Consultation Form */}
        <div className="lg:col-span-5">
          <div className="sticky top-20 bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-md space-y-4">
            <div className="space-y-1 border-b border-gray-200 pb-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#E53935]">
                KONSULTASI GRATIS
              </span>
              <h3 className="text-xl font-bold text-[#0B436B]">
                Ajukan Estimasi Biaya & Survei
              </h3>
              <p className="text-xs text-gray-600">
                Isi kebutuhan Anda dan klik tombol WhatsApp untuk terhubung dengan Alvian Malengga.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
              {fields.map((field) => (
                <div key={field.name} className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    {field.label} *
                  </label>
                  {field.type === 'select' ? (
                    <select
                      required
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
                    >
                      <option value="">-- Pilih {field.label} --</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      required
                      rows={2}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B436B] resize-none"
                    />
                  ) : (
                    <input
                      type={field.type || 'text'}
                      required
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
                    />
                  )}
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName || ''}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    placeholder="Nama Lengkap"
                    className="w-full px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.clientPhone || ''}
                    onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                    placeholder="0812..."
                    className="w-full px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
                  />
                </div>
              </div>

              <a
                id="service-submit-whatsapp-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icons.Phone className="w-4 h-4" />
                Chat WhatsApp (08133034733)
              </a>

              <p className="text-xs text-center text-gray-500">
                * Respon cepat • Layanan survei lokasi GRATIS seluruh Bali
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
