/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send, MessageCircle, Check, Instagram, ArrowLeft } from 'lucide-react';
import { contactData } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  onBackToHome?: () => void;
}

export default function Contact({ onBackToHome }: ContactProps) {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: language === 'id' ? 'Pembuatan Kolam Koi' : 'Koi Pond Construction',
    location: '',
    message: '',
    targetNumber: '08133034733'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let text = '';
    if (language === 'en') {
      text = `Hello KOI POND SERVICES BALI!\nI would like to request an on-site survey & consultation:\n\n- Name: ${formData.name}\n- WhatsApp: ${formData.phone}\n- Selected Service: ${formData.type}\n- Location in Bali: ${formData.location}\n- Notes: ${formData.message}\n\nPlease let me know your estimated pricing and available survey schedule. Thank you!`;
    } else {
      text = `Halo KOI POND SERVICES BALI!\nSaya ingin konsultasi / survei kolam koi:\n\n- Nama: ${formData.name}\n- No. WhatsApp: ${formData.phone}\n- Layanan: ${formData.type}\n- Lokasi: ${formData.location}\n- Kebutuhan: ${formData.message}\n\nMohon informasi estimasi & jadwal survei. Terima kasih.`;
    }

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
      type: language === 'id' ? 'Pembuatan Kolam Koi' : 'Koi Pond Construction',
      location: '',
      message: '',
      targetNumber: '08133034733'
    });
    setIsSuccess(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.workshopAddress,
      desc: contactData.address
    },
    {
      icon: MessageCircle,
      title: language === 'id' ? 'WhatsApp 1 (Konsultasi & Survei)' : 'WhatsApp 1 (Consultation & Survey)',
      desc: `${contactData.whatsapp1} (${language === 'id' ? 'Survei & Teknis' : 'Surveys & Engineering'})`,
      link: contactData.whatsappUrl1
    },
    {
      icon: MessageCircle,
      title: language === 'id' ? 'WhatsApp 2 (Booking & Support)' : 'WhatsApp 2 (Booking & Support)',
      desc: `${contactData.whatsapp2} (${language === 'id' ? 'Layanan Cepat & Booking' : 'Booking & Customer Care'})`,
      link: contactData.whatsappUrl2
    },
    {
      icon: Phone,
      title: language === 'id' ? 'Telepon Langsung' : 'Direct Call',
      desc: `${contactData.phone} (Official Line)`
    },
    {
      icon: Instagram,
      title: 'Instagram',
      desc: contactData.instagram,
      link: contactData.instagramUrl
    },
    {
      icon: Clock,
      title: t.contact.operatingHours,
      desc: t.contact.hoursDetail
    }
  ];

  const serviceOptions = language === 'id' ? [
    { value: 'Pembuatan Kolam Koi', label: 'Pembuatan Kolam Koi Baru' },
    { value: 'Renovasi / Perbaikan Kolam', label: 'Renovasi / Perbaikan Kolam Bocor' },
    { value: 'Perawatan & Kuras Kolam', label: 'Perawatan & Kuras Kolam Berkala' },
    { value: 'Perawatan Ikan Koi', label: 'Perawatan & Pengobatan Ikan Koi' },
    { value: 'Pembuatan / Perawatan Filter', label: 'Pembuatan / Perawatan Filter' },
    { value: 'Jual / Beli Ikan Koi', label: 'Jual / Beli Ikan Koi' },
    { value: 'Konsultasi Umum', label: 'Konsultasi Umum Lainnya' },
  ] : [
    { value: 'Koi Pond Construction', label: 'New Koi Pond Construction' },
    { value: 'Pond Renovation & Leak Repair', label: 'Pond Renovation & Leak Repair' },
    { value: 'Routine Pond Maintenance', label: 'Routine Cleaning & Water Care' },
    { value: 'Koi Fish Care & Healthcare', label: 'Koi Fish Health & Medical Care' },
    { value: 'Filtration & Plumbing Build', label: 'Filter Chamber Build & Servicing' },
    { value: 'Koi Fish Supply', label: 'Koi Fish Sourcing & Supply' },
    { value: 'General Consultation', label: 'General Technical Consultation' },
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
              <span>{t.contact.backBtn}</span>
            </button>
            <span className="text-xs font-mono tracking-widest text-[#FBBF24] uppercase font-bold bg-black/30 px-3 py-1 rounded-md border border-amber-400/20">
              {t.contact.badge}
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
              {t.contact.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-teal-100/80 font-normal leading-relaxed">
              {t.contact.subtitle}
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
                      {t.contact.formTitle}
                    </h3>
                    <p className="text-xs text-teal-100/80 font-normal">
                      {t.contact.formDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                        {t.contact.labelName}
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder={t.contact.placeholderName}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                        {t.contact.labelPhone}
                      </label>
                      <input
                        id="contact-input-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder={t.contact.placeholderPhone}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                        {t.contact.labelService}
                      </label>
                      <select
                        id="contact-select-type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/80 border border-teal-500/30 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#062C38]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                        {t.contact.labelLocation}
                      </label>
                      <input
                        id="contact-input-location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        placeholder={t.contact.placeholderLocation}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                      {t.contact.labelMessage}
                    </label>
                    <textarea
                      id="contact-input-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] resize-none transition-all"
                      placeholder={t.contact.placeholderMessage}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-100">
                      {t.contact.labelTargetWa}
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
                          <span className="font-bold block text-white">WA 1 (08133034733)</span>
                          <span className="text-[11px] text-teal-200/70 font-normal">{language === 'id' ? 'Konsultasi & Survei' : 'Consultation & Survey'}</span>
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
                          <span className="font-bold block text-white">WA 2 (081295903430)</span>
                          <span className="text-[11px] text-teal-200/70 font-normal">{language === 'id' ? 'Booking & Support' : 'Booking & Support'}</span>
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
                        <span>{t.contact.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.submitBtn}</span>
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
                      {t.contact.successTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-teal-100/80 max-w-md">
                      {t.contact.successDesc}
                    </p>
                  </div>
                  <button
                    id="contact-reset-btn"
                    onClick={handleReset}
                    className="px-6 py-2.5 btn-pond-teal text-white rounded-full font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    {t.contact.resetBtn}
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
                  {t.contact.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {language === 'id' ? 'Detail Lokasi & Layanan' : 'Location & Contact Details'}
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
