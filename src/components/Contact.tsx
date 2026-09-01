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
    <div className={onBackToHome ? "pt-18 min-h-screen bg-[#F2F9F9]" : ""}>
      {onBackToHome && (
        <div className="bg-gradient-to-r from-[#04242E] via-[#062C38] to-[#0A4354] text-white border-b border-teal-500/20 py-4 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <button
              id="contact-page-back-btn"
              onClick={onBackToHome}
              className="text-sm sm:text-base font-bold tracking-wide uppercase text-teal-100 hover:text-white flex items-center gap-2 group cursor-pointer bg-white/10 hover:bg-white/20 py-2 px-4 rounded-xl border border-white/15 transition-all shadow-sm"
            >
              <ArrowLeft className="w-5 h-5 text-[#FF6E40] group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Beranda</span>
            </button>
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FBBF24] uppercase font-extrabold bg-black/20 px-3 py-1 rounded-md border border-amber-400/20">
              Kontak & Lokasi Bali
            </span>
          </div>
        </div>
      )}

      <section id="contact" className={`py-16 md:py-20 bg-white ${onBackToHome ? "" : "border-b border-teal-900/10"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          {/* Header Layout */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#FF5722] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200/80 inline-block shadow-2xs">
              Konsultasi & Pemesanan
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062C38] leading-tight">
              Hubungi KOI POND SERVICES BALI
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Konsultasikan pembuatan kolam baru, perbaikan kebocoran, atau perawatan ikan koi Anda sekarang juga. Nikmati layanan <strong>KONSULTASI & SURVEI GRATIS</strong> di seluruh Bali.
            </p>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2.5 rounded-full" />
          </div>

          {/* Contact Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Form Section (Span 7) */}
            <div className="lg:col-span-7 bg-[#F2F9F9] border border-teal-900/10 p-7 sm:p-9 rounded-3xl shadow-md space-y-6">
              {!isSuccess ? (
                <form id="contact-page-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5 border-b border-teal-900/10 pb-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#062C38]">
                      Formulir Konsultasi & Estimasi Biaya
                    </h3>
                    <p className="text-sm text-slate-600">
                      Kirimkan detail rencana Anda dan tim teknisi kami akan segera merespons dengan estimasi awal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Nama Lengkap Anda *
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Nomor WhatsApp / HP *
                      </label>
                      <input
                        id="contact-input-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                        placeholder="08133034733..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Layanan yang Dibutuhkan *
                      </label>
                      <select
                        id="contact-input-type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
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
                      <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Area / Lokasi di Bali *
                      </label>
                      <input
                        id="contact-input-location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                        placeholder="Contoh: Denpasar, Sanur, Ubud..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Pesan / Detail Kebutuhan Kolam *
                    </label>
                    <textarea
                      id="contact-input-message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] resize-none transition-all"
                      placeholder="Jelaskan ukuran perkiraan, masalah air/bocor, atau jenis kolam yang diinginkan..."
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 btn-koi-flame text-white rounded-full font-black text-base sm:text-lg tracking-wide uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Menghubungkan...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim & Konsultasi WhatsApp
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  id="contact-success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 px-6 space-y-5 flex flex-col items-center"
                >
                  <div className="p-4 bg-emerald-500/10 text-[#059669] border border-emerald-500/20 rounded-full w-fit">
                    <Check className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-[#062C38]">
                      Permintaan Konsultasi Diterima
                    </h3>
                    <p className="text-base text-slate-600 max-w-md">
                      Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah diarahkan ke WhatsApp 08133034733 (Alvian Malengga).
                    </p>
                  </div>
                  <button
                    id="contact-reset-btn"
                    onClick={handleReset}
                    className="px-8 py-3.5 btn-pond-teal text-white rounded-full font-bold text-sm tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Kirim Pesan Baru
                  </button>
                </motion.div>
              )}
            </div>

            {/* Right Column: Contact info cards (Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#FF5722] block">
                  Informasi Kontak
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#062C38] tracking-tight">
                  Hubungi Alvian Malengga
                </h3>
              </div>

              {/* Informational Cards */}
              <div className="grid grid-cols-1 gap-3.5">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4.5 bg-[#F2F9F9] border border-teal-900/10 hover:border-[#0E5C73] rounded-2xl transition-all group shadow-2xs"
                  >
                    <div className="p-3 bg-white text-[#0E5C73] rounded-xl shadow-2xs group-hover:bg-[#FF5722] group-hover:text-white transition-colors duration-200 shrink-0 h-fit border border-teal-100">
                      <info.icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#062C38] mb-0.5">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-slate-800 font-semibold hover:text-[#FF5722] transition-colors"
                        >
                          {info.desc}
                        </a>
                      ) : (
                        <p className="text-base text-slate-700 leading-relaxed font-medium">
                          {info.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Hot Desk Banner */}
              <div className="p-6 border border-emerald-300 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-base font-black text-emerald-950 flex items-center justify-center sm:justify-start gap-2">
                    <MessageCircle className="w-5 h-5 text-[#059669]" /> WhatsApp Hot Desk
                  </h4>
                  <p className="text-sm text-emerald-800">
                    Kirim foto kolam / video ikan koi untuk diagnosa & estimasi instan.
                  </p>
                </div>
                <a
                  id="contact-whatsapp-direct"
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white rounded-full font-black text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer shrink-0"
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
