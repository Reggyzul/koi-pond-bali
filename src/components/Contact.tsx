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
    
    const text = `Halo KOI POND SERVICES BALI!\nSaya ingin konsultasi / survei kolam koi:\n\n- Nama: ${formData.name}\n- No. WhatsApp: ${formData.phone}\n- Layanan: ${formData.type}\n- Lokasi: ${formData.location}\n- Kebutuhan: ${formData.message}\n\nMohon informasi estimasi & jadwal survei. Terima kasih.`;
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
      title: 'Alamat Workshop',
      desc: contactData.address
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Resmi',
      desc: `${contactData.whatsapp} (Layanan Konsultasi)`
    },
    {
      icon: Phone,
      title: 'Telepon',
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-2 mb-10 sm:mb-14"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF6E40] bg-[#04242E]/70 backdrop-blur-md px-4 py-1 rounded-full border border-teal-500/25 inline-block shadow-xs">
              Konsultasi & Pemesanan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Hubungi KOI POND SERVICES BALI
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-teal-100/80 font-normal leading-relaxed">
              Konsultasikan kolam baru, perbaikan kebocoran, atau perawatan ikan koi Anda. Dapatkan survei lokasi gratis se-Bali.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
          </motion.div>

          {/* Contact Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-start">
            
            {/* Left Column: Form Section (Span 7) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 glass-aquatic-card p-5 sm:p-7 rounded-2xl shadow-2xl space-y-5 border border-teal-500/20"
            >
              {!isSuccess ? (
                <form id="contact-page-form" onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="space-y-1 border-b border-teal-500/20 pb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Formulir Konsultasi & Estimasi Biaya
                    </h3>
                    <p className="text-xs text-teal-100/75">
                      Kirimkan detail kebutuhan kolam Anda untuk mendapatkan estimasi awal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        Nomor WhatsApp *
                      </label>
                      <input
                        id="contact-input-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder="08133034733..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        Layanan *
                      </label>
                      <select
                        id="contact-input-type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/90 border border-teal-500/30 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                      >
                        <option value="Pembuatan Kolam Koi" className="bg-[#062C38] text-white">Pembuatan Kolam Koi Baru</option>
                        <option value="Renovasi / Perbaikan Kolam" className="bg-[#062C38] text-white">Renovasi / Perbaikan Kolam Bocor</option>
                        <option value="Perawatan & Kuras Kolam" className="bg-[#062C38] text-white">Perawatan & Kuras Kolam Berkala</option>
                        <option value="Perawatan & Medis Ikan Koi" className="bg-[#062C38] text-white">Perawatan & Pengobatan Ikan Koi</option>
                        <option value="Pembuatan / Perawatan Filter" className="bg-[#062C38] text-white">Pembuatan / Perawatan Sistem Filter</option>
                        <option value="Jual / Beli Ikan Koi" className="bg-[#062C38] text-white">Jual / Beli Ikan Koi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        Lokasi di Bali *
                      </label>
                      <input
                        id="contact-input-location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder="Denpasar, Sanur, Ubud, Canggu..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                      Detail Kebutuhan Kolam *
                    </label>
                    <textarea
                      id="contact-input-message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] resize-none transition-all"
                      placeholder="Jelaskan ukuran kolam, kendala air atau kebocoran yang dialami..."
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 btn-koi-flame text-white rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Menghubungkan...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim & Konsultasi WhatsApp</span>
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
                      Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah terhubung ke WhatsApp resmi KOI POND SERVICES BALI (08133034733).
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

            {/* Right Column: Contact info cards (Span 5) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-widest uppercase text-[#FF6E40] block">
                  Informasi Kontak
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Hubungi KOI POND SERVICES BALI
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

              {/* WhatsApp Hot Desk Banner */}
              <div className="p-4 sm:p-5 border border-teal-500/30 bg-[#04242E]/70 backdrop-blur-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                <div className="space-y-0.5 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-emerald-300 flex items-center justify-center sm:justify-start gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#10B981]" /> WhatsApp Langsung
                  </h4>
                  <p className="text-xs text-teal-100/80 font-normal">
                    Kirim foto kolam atau video ikan koi untuk diagnosa dan estimasi instan.
                  </p>
                </div>
                <a
                  id="contact-whatsapp-direct"
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-5 py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer shrink-0"
                >
                  Chat WA
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
