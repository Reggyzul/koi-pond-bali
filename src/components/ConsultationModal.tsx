/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Phone, Sparkles, MessageCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillMessage?: string;
  initialCategory?: string;
}

export default function ConsultationModal({ isOpen, onClose, prefillMessage = '', initialCategory = 'Pembuatan Kolam Koi' }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Pembuatan Kolam Koi',
    location: '',
    budget: 'Bisa Disesuaikan (Fleksibel)',
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

    const text = `Halo KOI POND SERVICES BALI!\nSaya ingin mengajukan KONSULTASI & SURVEI GRATIS:\n\n- Nama: ${formData.name}\n- No. WhatsApp: ${formData.phone}\n- Layanan: ${formData.category}\n- Lokasi di Bali: ${formData.location}\n- Estimasi Budget: ${formData.budget}\n- Keterangan: ${formData.message}\n\nMohon informasi jadwal survei gratis. Terima kasih.`;
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
      category: 'Pembuatan Kolam Koi',
      location: '',
      budget: 'Bisa Disesuaikan (Fleksibel)',
      message: '',
      targetNumber: '08133034733'
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
                        Konsultasi & Survei Gratis
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
                          Nama Lengkap *
                        </label>
                        <input
                          id="modal-input-name"
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
                          No. WhatsApp *
                        </label>
                        <input
                          id="modal-input-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                          placeholder="Contoh: 08123456789"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                          Layanan *
                        </label>
                        <select
                          id="modal-select-category"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/80 border border-teal-500/30 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                        >
                          <option value="Pembuatan Kolam Koi" className="bg-[#062C38]">Pembuatan Kolam Koi Baru</option>
                          <option value="Renovasi / Perbaikan Kolam" className="bg-[#062C38]">Renovasi / Perbaikan Kolam Bocor</option>
                          <option value="Perawatan & Kuras Kolam" className="bg-[#062C38]">Perawatan & Kuras Kolam Berkala</option>
                          <option value="Perawatan Ikan Koi" className="bg-[#062C38]">Perawatan & Pengobatan Ikan Koi</option>
                          <option value="Pembuatan / Perawatan Filter" className="bg-[#062C38]">Pembuatan / Perawatan Filter</option>
                          <option value="Jual / Beli Ikan Koi" className="bg-[#062C38]">Jual / Beli Ikan Koi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                          Lokasi di Bali *
                        </label>
                        <input
                          id="modal-input-location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                          placeholder="Denpasar, Sanur, Ubud..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        Estimasi Anggaran
                      </label>
                      <select
                        id="modal-select-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/80 border border-teal-500/30 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
                      >
                        <option value="Bisa Disesuaikan (Fleksibel)" className="bg-[#062C38]">Bisa Disesuaikan (Fleksibel)</option>
                        <option value="Di bawah Rp 10 Juta" className="bg-[#062C38]">Di bawah Rp 10 Juta</option>
                        <option value="Rp 10 Juta - Rp 25 Juta" className="bg-[#062C38]">Rp 10 Juta - Rp 25 Juta</option>
                        <option value="Rp 25 Juta - Rp 50 Juta" className="bg-[#062C38]">Rp 25 Juta - Rp 50 Juta</option>
                        <option value="Di atas Rp 50 Juta" className="bg-[#062C38]">Di atas Rp 50 Juta</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        Keterangan Tambahan
                      </label>
                      <textarea
                        id="modal-input-message"
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#04242E]/70 border border-teal-500/30 text-white placeholder-teal-300/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6E40] resize-none transition-all"
                        placeholder="Contoh: Kolam bocor surut 10cm/hari, butuh survei..."
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100 mb-1">
                        Pilih Kontak WhatsApp *
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
                            <span className="text-[10px] text-teal-200/70">Konsultasi & Survei</span>
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
                            <span className="text-[10px] text-teal-200/70">Booking & Support</span>
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
                          <span>Menghubungkan...</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4" />
                          <span>Konsultasi WhatsApp</span>
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
                  className="py-8 text-center flex flex-col items-center justify-center space-y-3"
                >
                  <div className="w-12 h-12 bg-emerald-950/60 text-[#10B981] rounded-full flex items-center justify-center border border-emerald-500/40 shadow-xs">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Permintaan Terkirim
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-100/80 max-w-sm">
                    Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah terhubung ke WhatsApp resmi KOI POND SERVICES BALI.
                  </p>
                  
                  <button
                    id="modal-success-close-btn"
                    onClick={handleReset}
                    className="px-6 py-2 btn-pond-teal text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Tutup
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
