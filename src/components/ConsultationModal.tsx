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
    message: ''
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

    const text = `Halo KOI POND SERVICES BALI (Alvian Malengga)!\nSaya ingin mengajukan KONSULTASI & SURVEI GRATIS:\n\n• *Nama*: ${formData.name}\n• *No. WhatsApp*: ${formData.phone}\n• *Layanan*: ${formData.category}\n• *Lokasi di Bali*: ${formData.location}\n• *Estimasi Budget*: ${formData.budget}\n• *Keterangan*: ${formData.message}\n\nMohon informasi jadwal survei gratis. Terima kasih!`;
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
      category: 'Pembuatan Kolam Koi',
      location: '',
      budget: 'Bisa Disesuaikan (Fleksibel)',
      message: ''
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
            className="absolute inset-0 bg-[#04242E]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white border border-teal-900/20 shadow-2xl z-10 max-h-[92vh] flex flex-col"
          >
            {/* Top decorative bar */}
            <div className="h-2.5 w-full bg-gradient-to-r from-[#FF5722] to-[#FF6E40] shrink-0" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-2 rounded-full hover:bg-teal-50 transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 sm:p-8">
              {!isSuccess ? (
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-3 bg-teal-50 rounded-2xl text-[#0E5C73] border border-teal-100">
                      <Sparkles className="w-6 h-6 text-[#FF5722]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#062C38]">
                        Konsultasi & Survei Gratis
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        KOI POND SERVICES BALI (Alvian Malengga)
                      </p>
                    </div>
                  </div>

                  <form id="consultation-form" onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Nama Lengkap *
                        </label>
                        <input
                          id="modal-input-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-teal-50/20 border border-slate-300 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          No. WhatsApp *
                        </label>
                        <input
                          id="modal-input-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-teal-50/20 border border-slate-300 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                          placeholder="08133034733..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Layanan *
                        </label>
                        <select
                          id="modal-select-category"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-teal-50/20 border border-slate-300 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                        >
                          <option value="Pembuatan Kolam Koi">Pembuatan Kolam Koi Baru</option>
                          <option value="Renovasi / Perbaikan Kolam">Renovasi / Perbaikan Kolam Bocor</option>
                          <option value="Perawatan & Kuras Kolam">Perawatan & Kuras Kolam Berkala</option>
                          <option value="Perawatan Ikan Koi">Perawatan & Pengobatan Ikan Koi</option>
                          <option value="Pembuatan / Perawatan Filter">Pembuatan / Perawatan Filter</option>
                          <option value="Jual / Beli Ikan Koi">Jual / Beli Ikan Koi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Lokasi di Bali *
                        </label>
                        <input
                          id="modal-input-location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-teal-50/20 border border-slate-300 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                          placeholder="Denpasar, Sanur, Ubud..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Estimasi Anggaran / Budget
                      </label>
                      <select
                        id="modal-select-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-teal-50/20 border border-slate-300 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] transition-all"
                      >
                        <option value="Bisa Disesuaikan (Fleksibel)">Bisa Disesuaikan (Fleksibel / Sesuai Rekomendasi)</option>
                        <option value="Di bawah Rp 10 Juta">Di bawah Rp 10 Juta</option>
                        <option value="Rp 10 Juta - Rp 25 Juta">Rp 10 Juta - Rp 25 Juta</option>
                        <option value="Rp 25 Juta - Rp 50 Juta">Rp 25 Juta - Rp 50 Juta</option>
                        <option value="Di atas Rp 50 Juta">Di atas Rp 50 Juta</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Keterangan Tambahan
                      </label>
                      <textarea
                        id="modal-input-message"
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-teal-50/20 border border-slate-300 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-[#0E5C73] focus:border-[#0E5C73] resize-none transition-all"
                        placeholder="Contoh: Kolam bocor surut 10cm/hari, butuh survei..."
                      />
                    </div>

                    <button
                      id="modal-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-4 px-6 btn-koi-flame text-white rounded-full font-black text-base sm:text-lg tracking-wide uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Menghubungkan...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5" />
                          Chat WhatsApp Sekarang
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
                  className="py-10 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-[#059669] rounded-full flex items-center justify-center border border-emerald-200 shadow-sm">
                    <Check className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h3 className="text-3xl font-black text-[#062C38]">
                    Permintaan Terkirim
                  </h3>
                  <p className="text-base text-slate-600 max-w-sm">
                    Terima kasih, <strong>{formData.name}</strong>. WhatsApp Anda telah terhubung ke <strong>08133034733</strong> (Alvian Malengga).
                  </p>
                  
                  <button
                    id="modal-success-close-btn"
                    onClick={handleReset}
                    className="px-8 py-3 btn-pond-teal text-white rounded-full text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
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
