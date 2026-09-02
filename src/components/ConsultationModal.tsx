/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillMessage?: string;
  initialCategory?: string;
}

export default function ConsultationModal({ isOpen, onClose, prefillMessage = '', initialCategory = 'Pembuatan Kolam Koi' }: ConsultationModalProps) {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: initialCategory,
    location: '',
    budget: language === 'id' ? 'Bisa Disesuaikan (Fleksibel)' : 'Flexible / Customizable',
    message: '',
    targetNumber: '08133034733'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        message: prefillMessage || prev.message,
        category: initialCategory || prev.category
      }));
    }
  }, [isOpen, prefillMessage, initialCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let text = '';
    if (language === 'en') {
      text = `Hello KOI POND SERVICES BALI!\nI would like to request a FREE CONSULTATION & ON-SITE SURVEY:\n\n- Name: ${formData.name}\n- WhatsApp: ${formData.phone}\n- Service: ${formData.category}\n- Location in Bali: ${formData.location}\n- Estimated Budget: ${formData.budget}\n- Details: ${formData.message}\n\nPlease inform me of available survey slots. Thank you!`;
    } else {
      text = `Halo KOI POND SERVICES BALI!\nSaya ingin mengajukan KONSULTASI & SURVEI GRATIS:\n\n- Nama: ${formData.name}\n- No. WhatsApp: ${formData.phone}\n- Layanan: ${formData.category}\n- Lokasi di Bali: ${formData.location}\n- Estimasi Budget: ${formData.budget}\n- Keterangan: ${formData.message}\n\nMohon informasi jadwal survei gratis. Terima kasih.`;
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
      category: language === 'id' ? 'Pembuatan Kolam Koi' : 'Koi Pond Construction',
      location: '',
      budget: language === 'id' ? 'Bisa Disesuaikan (Fleksibel)' : 'Flexible / Customizable',
      message: '',
      targetNumber: '08133034733'
    });
    setIsSuccess(false);
    onClose();
  };

  const categories = language === 'en' ? [
    { value: 'Koi Pond Construction', label: 'Koi Pond Construction' },
    { value: 'Pond Renovation & Repairs', label: 'Pond Renovation & Repairs' },
    { value: 'Pond Maintenance & Cleaning', label: 'Pond Maintenance & Cleaning' },
    { value: 'Koi Health & Disease Treatment', label: 'Koi Health & Disease Treatment' },
    { value: 'Filter Systems & Pumps', label: 'Filter Systems & Pumps' },
    { value: 'Certified Koi Fish Sales', label: 'Certified Koi Fish Sales' },
    { value: 'Electrical & Structural Repair', label: 'Electrical & Structural Repair' }
  ] : [
    { value: 'Pembuatan Kolam Koi', label: 'Pembuatan Kolam Koi' },
    { value: 'Renovasi / Perbaikan Kolam', label: 'Renovasi / Perbaikan Kolam' },
    { value: 'Perawatan Kolam', label: 'Perawatan Kolam' },
    { value: 'Perawatan Ikan Koi', label: 'Perawatan Ikan Koi' },
    { value: 'Pembuatan / Perawatan Filter', label: 'Pembuatan / Perawatan Filter' },
    { value: 'Jual / Beli Ikan Koi', label: 'Jual / Beli Ikan Koi' },
    { value: 'Perbaikan Listrik & Konstruksi Kolam', label: 'Perbaikan Listrik & Konstruksi Kolam' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="consultation-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#021820]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#062C38] border border-teal-500/30 shadow-2xl z-10 max-h-[92vh] flex flex-col text-slate-100"
          >
            {/* Top decorative bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5722] to-[#FF6E40] shrink-0" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-3.5 right-3.5 text-teal-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="overflow-y-auto p-5 sm:p-6">
              {!isSuccess ? (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-950 rounded-xl text-[#FF6E40] border border-teal-500/30">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {t?.consultationModal?.title || 'Konsultasi & Penawaran Gratis'}
                      </h3>
                      <p className="text-xs text-teal-200/80 font-medium">
                        KOI POND SERVICES BALI
                      </p>
                    </div>
                  </div>

                  <form id="consultation-form" onSubmit={handleSubmit} className="space-y-3 mt-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                          {t?.consultationModal?.labelName || 'Nama Lengkap *'}
                        </label>
                        <input
                          id="modal-input-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                          placeholder={language === 'id' ? 'Nama Anda' : 'Your Name'}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                          {t?.consultationModal?.labelPhone || 'Nomor WhatsApp *'}
                        </label>
                        <input
                          id="modal-input-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                          placeholder={language === 'id' ? 'Contoh: 08123456789' : 'e.g. +628123456789'}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                          {t?.consultationModal?.labelService || 'Pilihan Layanan *'}
                        </label>
                        <select
                          id="modal-select-category"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/80 border border-teal-500/30 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        >
                          {categories.map((cat) => (
                            <option key={cat.value} value={cat.value} className="bg-[#062C38]">
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                          {t?.consultationModal?.labelLocation || 'Lokasi di Bali *'}
                        </label>
                        <input
                          id="modal-input-location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                          placeholder={language === 'id' ? 'Denpasar, Sanur, Ubud...' : 'Sanur, Canggu, Ubud...'}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        {t?.consultationModal?.labelBudget || 'Estimasi Anggaran'}
                      </label>
                      <select
                        id="modal-select-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/80 border border-teal-500/30 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                      >
                        <option value={t?.consultationModal?.budgetFlexible || 'Bisa Disesuaikan (Fleksibel)'} className="bg-[#062C38]">{t?.consultationModal?.budgetFlexible || 'Bisa Disesuaikan (Fleksibel)'}</option>
                        <option value={t?.consultationModal?.budgetUnder10m || 'Di bawah Rp 10 Juta'} className="bg-[#062C38]">{t?.consultationModal?.budgetUnder10m || 'Di bawah Rp 10 Juta'}</option>
                        <option value={t?.consultationModal?.budget10m25m || 'Rp 10 Juta - Rp 25 Juta'} className="bg-[#062C38]">{t?.consultationModal?.budget10m25m || 'Rp 10 Juta - Rp 25 Juta'}</option>
                        <option value={t?.consultationModal?.budget25m50m || 'Rp 25 Juta - Rp 50 Juta'} className="bg-[#062C38]">{t?.consultationModal?.budget25m50m || 'Rp 25 Juta - Rp 50 Juta'}</option>
                        <option value={t?.consultationModal?.budgetAbove50m || 'Di atas Rp 50 Juta'} className="bg-[#062C38]">{t?.consultationModal?.budgetAbove50m || 'Di atas Rp 50 Juta'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        {t?.consultationModal?.labelMessage || 'Keterangan Tambahan'}
                      </label>
                      <textarea
                        id="modal-input-message"
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] resize-none transition-all"
                        placeholder={language === 'id' ? 'Contoh: Kolam bocor surut 10cm/hari, butuh survei...' : 'e.g. Pond leaking, need on-site inspection...'}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        {t?.consultationModal?.labelTargetWa || 'Pilih Kontak WhatsApp *'}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${formData.targetNumber === '08133034733' ? 'border-[#25D366] bg-[#063327] text-white' : 'border-teal-500/30 bg-[#04242E]/70 text-teal-100/80 hover:border-teal-400/50'}`}>
                          <input
                            type="radio"
                            name="modalTargetNumber"
                            value="08133034733"
                            checked={formData.targetNumber === '08133034733'}
                            onChange={(e) => setFormData({ ...formData, targetNumber: e.target.value })}
                            className="accent-[#25D366] w-3.5 h-3.5 cursor-pointer"
                          />
                          <div className="text-xs">
                            <span className="font-bold block text-white">WA 1 (08133034733)</span>
                            <span className="text-[10px] text-teal-200/70">{language === 'id' ? 'Konsultasi & Survei' : 'Consult & Survey'}</span>
                          </div>
                        </label>

                        <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${formData.targetNumber === '081295903430' ? 'border-[#25D366] bg-[#063327] text-white' : 'border-teal-500/30 bg-[#04242E]/70 text-teal-100/80 hover:border-teal-400/50'}`}>
                          <input
                            type="radio"
                            name="modalTargetNumber"
                            value="081295903430"
                            checked={formData.targetNumber === '081295903430'}
                            onChange={(e) => setFormData({ ...formData, targetNumber: e.target.value })}
                            className="accent-[#25D366] w-3.5 h-3.5 cursor-pointer"
                          />
                          <div className="text-xs">
                            <span className="font-bold block text-white">WA 2 (081295903430)</span>
                            <span className="text-[10px] text-teal-200/70">{language === 'id' ? 'Booking & Support' : 'Booking & Support'}</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <button
                      id="modal-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-3 py-3 px-5 btn-koi-flame text-white rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t?.consultationModal?.submitting || 'Menghubungkan...'}</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4" />
                          <span>{t?.consultationModal?.submitBtn || 'Konsultasi WhatsApp Sekarang'}</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  id="modal-success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 text-[#10B981] border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">
                      {t?.consultationModal?.successTitle || 'Permintaan Diterima!'}
                    </h4>
                    <p className="text-xs text-teal-200/80 leading-relaxed max-w-xs mx-auto">
                      {t?.consultationModal?.successDesc || 'Anda akan segera diarahkan ke WhatsApp admin kami untuk konfirmasi jadwal survei.'}
                    </p>
                  </div>
                  <button
                    id="modal-finish-close-btn"
                    onClick={handleReset}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {t?.consultationModal?.closeBtn || 'Tutup'}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
