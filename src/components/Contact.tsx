/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send, MessageCircle, Check, Instagram, ArrowLeft } from 'lucide-react';
import { contactData } from '../data';

interface ContactProps {
  onBackToHome?: () => void;
}

export default function Contact({ onBackToHome }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Pembuatan Kolam Koi',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const text = `Halo KOI POND SERVICES BALI (Alvian Malengga)!\nSaya ingin konsultasi / survei kolam koi:\n\n• *Nama*: ${formData.name}\n• *No. HP/WA*: ${formData.phone}\n• *Layanan*: ${formData.type}\n• *Lokasi*: ${formData.location}\n• *Detail Kebutuhan*: ${formData.message}\n\nMohon informasi lebih lanjut. Terima kasih!`;
    const waUrl = `https://wa.me/628133034733?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(waUrl, '_blank');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      type: 'Pembuatan Kolam Koi',
      location: '',
      message: ''
    });
    setIsSuccess(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Workshop / Kantor',
      desc: contactData.address
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Resmi',
      desc: `${contactData.whatsapp} (Alvian Malengga)`
    },
    {
      icon: Phone,
      title: 'Telepon Langsung',
      desc: contactData.phone
    },
    {
      icon: Instagram,
      title: 'Instagram Resmi',
      desc: contactData.instagram,
      link: contactData.instagramUrl
    },
    {
      icon: Clock,
      title: 'Jam Operasional & Survei',
      desc: contactData.operatingHours
    }
  ];

  return (
    <div className={onBackToHome ? "pt-16 min-h-screen bg-[#F8F9FA]" : ""}>
      {onBackToHome && (
        <div className="bg-[#0B436B] text-white border-b border-[#083657] py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <button
              id="contact-page-back-btn"
              onClick={onBackToHome}
              className="text-xs font-bold tracking-wider uppercase text-white/80 hover:text-white flex items-center gap-1.5 group cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </button>
            <span className="text-xs font-mono tracking-widest text-[#FCB900] uppercase font-bold">
              Kontak & Lokasi Bali
            </span>
          </div>
        </div>
      )}

      <section id="contact" className={`py-16 bg-white ${onBackToHome ? "" : "border-b border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          {/* Header Layout */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#E53935] block">
              Konsultasi & Pemesanan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B436B] leading-tight">
              Hubungi KOI POND SERVICES BALI
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Konsultasikan pembuatan kolam, perbaikan kebocoran, atau perawatan ikan koi Anda sekarang juga. Nikmati layanan <strong>KONSULTASI & SURVEI GRATIS</strong> di seluruh Bali.
            </p>
            <div className="h-1 w-16 bg-[#E53935] mx-auto mt-2.5 rounded-full" />
          </div>

          {/* Contact Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Form Section (Span 7) */}
            <div className="lg:col-span-7 bg-[#F8F9FA] border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-5">
              {!isSuccess ? (
                <form id="contact-page-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 border-b border-gray-200 pb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B436B]">
                      Formulir Konsultasi & Estimasi Biaya
                    </h3>
                    <p className="text-xs text-gray-600">
                      Kirimkan detail rencana Anda dan tim teknisi kami akan segera merespons dengan estimasi awal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Nama Lengkap Anda *
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Nomor WhatsApp / HP *
                      </label>
                      <input
                        id="contact-input-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
                        placeholder="08133034733..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Layanan yang Dibutuhkan *
                      </label>
                      <select
                        id="contact-input-type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
                      >
                        <option value="Pembuatan Kolam Koi">Pembuatan Kolam Koi Baru</option>
                        <option value="Renovasi / Perbaikan Kolam">Renovasi / Perbaikan Kolam Bocor</option>
                        <option value="Perawatan & Kuras Kolam">Perawatan & Kuras Kolam Berkala</option>
                        <option value="Perawatan & Medis Ikan Koi">Perawatan & Pengobatan Ikan Koi</option>
                        <option value="Pembuatan / Perawatan Filter">Pembuatan / Perawatan Sistem Filter</option>
                        <option value="Jual / Beli Ikan Koi">Jual / Beli Ikan Koi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Area / Lokasi di Bali *
                      </label>
                      <input
                        id="contact-input-location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
                        placeholder="Contoh: Denpasar, Sanur, Ubud..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Pesan / Detail Kebutuhan Kolam *
                    </label>
                    <textarea
                      id="contact-input-message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B436B] resize-none"
                      placeholder="Jelaskan ukuran perkiraan, masalah air/bocor, atau jenis kolam yang diinginkan..."
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Menghubungkan...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Kirim & Konsultasi Langsung
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  id="contact-success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 px-5 space-y-4 flex flex-col items-center"
                >
                  <div className="p-3.5 bg-green-500/10 text-green-600 border border-green-500/20 rounded-full w-fit">
                    <Check className="w-8 h-8 stroke-[2]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-[#0B436B]">
                      Permintaan Konsultasi Diterima
                    </h3>
                    <p className="text-sm text-gray-600 max-w-sm">
                      Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah diarahkan ke WhatsApp 08133034733 (Alvian Malengga).
                    </p>
                  </div>
                  <button
                    id="contact-reset-btn"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#0B436B] hover:bg-[#E53935] text-white rounded-full font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Kirim Pesan Baru
                  </button>
                </motion.div>
              )}
            </div>

            {/* Right Column: Contact info cards (Span 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-widest uppercase text-[#E53935] block">
                  Informasi Kontak
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B436B] tracking-tight">
                  Hubungi Alvian Malengga
                </h3>
              </div>

              {/* Informational Cards */}
              <div className="grid grid-cols-1 gap-3">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-[#F8F9FA] border border-gray-200 hover:border-[#0B436B] rounded-xl transition-all group"
                  >
                    <div className="p-3 bg-white text-[#0B436B] rounded-lg shadow-2xs group-hover:bg-[#E53935] group-hover:text-white transition-colors duration-200 shrink-0 h-fit border border-gray-100">
                      <info.icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B436B] mb-0.5">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-800 font-medium hover:text-[#E53935] transition-colors"
                        >
                          {info.desc}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {info.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Hot Desk Banner */}
              <div className="p-5 border border-green-200 bg-green-50 rounded-xl flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-green-900 flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp Hot Desk
                  </h4>
                  <p className="text-xs text-green-800">
                    Kirim foto kolam / video ikan koi untuk diagnosa & estimasi instan.
                  </p>
                </div>
                <a
                  id="contact-whatsapp-direct"
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
                >
                  Chat WA
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
