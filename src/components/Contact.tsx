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
    message: '',
    targetNumber: '08133034733'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const text = `Halo KOI POND SERVICES BALI!\nSaya ingin konsultasi / survei kolam koi:\n\n- Nama: ${formData.name}\n- No. WhatsApp: ${formData.phone}\n- Layanan: ${formData.type}\n- Lokasi: ${formData.location}\n- Kebutuhan: ${formData.message}\n\nMohon informasi estimasi & jadwal survei. Terima kasih.`;
    const cleanNumber = formData.targetNumber.replace(/\D/g, '');
    const fullNumber = cleanNumber.startsWith('0') ? `62${cleanNumber.slice(1)}` : cleanNumber;
    const waUrl = `https://wa.me/${fullNumber}?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(waUrl, '_blank');
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      type: 'Pembuatan Kolam Koi',
      location: '',
      message: '',
      targetNumber: '08133034733'
    });
    setIsSuccess(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Workshop',
      desc: contactData.address
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp 1 (Konsultasi & Survei)',
      desc: `${contactData.whatsapp1} (Layanan Survei Lapangan)`,
      link: contactData.whatsappUrl1
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp 2 (Booking & Support)',
      desc: `${contactData.whatsapp2} (Layanan Cepat & Booking)`,
      link: contactData.whatsappUrl2
    },
    {
      icon: Phone,
      title: 'Telepon Langsung',
      desc: `${contactData.phone} (Telepon Resmi)`
    },
    {
      icon: Instagram,
      title: 'Instagram Resmi',
      desc: contactData.instagram,
      link: contactData.instagramUrl
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      desc: contactData.operatingHours
    }
  ];

  return (
    <div className={onBackToHome ? "pt-18 min-h-screen relative" : ""}>
      {onBackToHome && (
        <div className="bg-[#04242E]/80 backdrop-blur-md text-white border-b border-teal-500/20 py-4 shadow-md sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <button
              id="contact-page-back-btn"
              onClick={onBackToHome}
              className="text-xs sm:text-sm font-bold tracking-wide uppercase text-teal-100 hover:text-white flex items-center gap-2 group cursor-pointer bg-white/10 hover:bg-white/20 py-2 px-4 rounded-xl border border-white/15 transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF6E40] group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Beranda</span>
            </button>
            <span className="text-xs font-mono tracking-widest text-[#FBBF24] uppercase font-bold bg-black/30 px-3 py-1 rounded-md border border-amber-400/20">
              Kontak & Lokasi Bali
            </span>
          </div>
        </div>
      )}

      <section id="contact" className={`py-14 md:py-18 relative ${onBackToHome ? "" : "glass-aquatic-section"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          {/* Header Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF6E40] bg-[#04242E]/70 backdrop-blur-md px-4 py-1 rounded-full border border-teal-500/25 inline-block shadow-xs">
              Kontak & Lokasi
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Konsultasi & Jadwalkan Survei
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-teal-100/80 font-normal leading-relaxed">
              Hubungi tim teknisi spesialis kami untuk survei lokasi dan konsultasi kebutuhan kolam koi Anda di Bali.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
          </motion.div>

          {/* Form & Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">
            
            {/* Left Column: Interactive Form (Span 7) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 glass-aquatic-card rounded-2xl p-5 sm:p-7 border border-teal-500/25 shadow-xl"
            >
              {!isSuccess ? (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 border-b border-teal-500/20 pb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Kirim Pesan Konsultasi
                    </h3>
                    <p className="text-xs text-teal-100/80 font-normal">
                      Isi formulir berikut dan terhubung langsung ke WhatsApp teknisi spesialis kami.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                        Nama Lengkap *
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                        Nomor WhatsApp *
                      </label>
                      <input
                        id="contact-input-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder="Contoh: 08123456789"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                        Pilihan Layanan *
                      </label>
                      <select
                        id="contact-select-type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/80 border border-teal-500/30 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                      >
                        <option value="Pembuatan Kolam Koi" className="bg-[#062C38]">Pembuatan Kolam Koi Baru</option>
                        <option value="Renovasi / Perbaikan Kolam" className="bg-[#062C38]">Renovasi / Perbaikan Kolam Bocor</option>
                        <option value="Perawatan & Kuras Kolam" className="bg-[#062C38]">Perawatan & Kuras Kolam Berkala</option>
                        <option value="Perawatan Ikan Koi" className="bg-[#062C38]">Perawatan & Pengobatan Ikan Koi</option>
                        <option value="Pembuatan / Perawatan Filter" className="bg-[#062C38]">Pembuatan / Perawatan Filter</option>
                        <option value="Jual / Beli Ikan Koi" className="bg-[#062C38]">Jual / Beli Ikan Koi</option>
                        <option value="Konsultasi Umum" className="bg-[#062C38]">Konsultasi Umum Lainnya</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                        Lokasi Properti di Bali *
                      </label>
                      <input
                        id="contact-input-location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder="Denpasar, Sanur, Ubud, Canggu..."
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                      Pesan atau Keterangan Tambahan
                    </label>
                    <textarea
                      id="contact-input-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] resize-none transition-all"
                      placeholder="Jelaskan kebutuhan Anda atau ukuran kolam..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                      Pilih Tujuan WhatsApp *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <label className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${formData.targetNumber === '08133034733' ? 'border-[#25D366] bg-[#063327] text-white shadow-sm' : 'border-teal-500/30 bg-[#04242E]/70 text-teal-100/80 hover:border-teal-400/50'}`}>
                        <input
                          type="radio"
                          name="targetNumber"
                          value="08133034733"
                          checked={formData.targetNumber === '08133034733'}
                          onChange={(e) => setFormData({ ...formData, targetNumber: e.target.value })}
                          className="accent-[#25D366] w-4 h-4 cursor-pointer"
                        />
                        <div className="text-xs">
                          <span className="font-bold block text-white">WhatsApp 1 (08133034733)</span>
                          <span className="text-[11px] text-teal-200/70 font-normal">Konsultasi & Survei</span>
                        </div>
                      </label>

                      <label className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${formData.targetNumber === '081295903430' ? 'border-[#25D366] bg-[#063327] text-white shadow-sm' : 'border-teal-500/30 bg-[#04242E]/70 text-teal-100/80 hover:border-teal-400/50'}`}>
                        <input
                          type="radio"
                          name="targetNumber"
                          value="081295903430"
                          checked={formData.targetNumber === '081295903430'}
                          onChange={(e) => setFormData({ ...formData, targetNumber: e.target.value })}
                          className="accent-[#25D366] w-4 h-4 cursor-pointer"
                        />
                        <div className="text-xs">
                          <span className="font-bold block text-white">WhatsApp 2 (081295903430)</span>
                          <span className="text-[11px] text-teal-200/70 font-normal">Booking & Support</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 px-5 btn-koi-flame text-white rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Menghubungkan...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan Konsultasi</span>
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
                  <div className="p-3 bg-emerald-500/20 text-[#10B981] border border-emerald-500/30 rounded-full w-fit">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Permintaan Konsultasi Diterima
                    </h3>
                    <p className="text-xs sm:text-sm text-teal-100/80 max-w-md">
                      Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah terhubung ke WhatsApp resmi KOI POND SERVICES BALI.
                    </p>
                  </div>
                  <button
                    id="contact-reset-btn"
                    onClick={handleReset}
                    className="px-6 py-2.5 btn-pond-teal text-white rounded-full font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Kirim Pesan Baru
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Right Column: Contact info cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-widest uppercase text-[#FF6E40] block">
                  Informasi Kontak
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Detail Lokasi & Layanan
                </h3>
              </div>

              {/* Informational Cards */}
              <div className="grid grid-cols-1 gap-2.5">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3.5 glass-aquatic-card border border-teal-500/20 rounded-xl transition-all group"
                  >
                    <div className="p-2.5 bg-[#04242E]/80 text-teal-300 rounded-lg group-hover:bg-[#FF5722] group-hover:text-white transition-colors duration-200 shrink-0 h-fit border border-teal-500/30">
                      <info.icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-teal-200/80 mb-0.5">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-white font-semibold hover:text-[#FF6E40] transition-colors"
                        >
                          {info.desc}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-normal">
                          {info.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
