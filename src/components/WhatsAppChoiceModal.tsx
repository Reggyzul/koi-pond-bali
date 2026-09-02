/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ShieldCheck, Sparkles } from 'lucide-react';
import { contactData } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  customMessage?: string;
  title?: string;
}

export default function WhatsAppChoiceModal({
  isOpen,
  onClose,
  customMessage,
  title
}: WhatsAppChoiceModalProps) {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const defaultMsg = language === 'id'
    ? 'Halo KOI POND SERVICES BALI! Saya ingin konsultasi & survei kolam koi.'
    : 'Hello KOI POND SERVICES BALI! I would like to inquire about koi pond services and surveys.';

  const activeMsg = customMessage || defaultMsg;
  const activeTitle = title || t?.waChoiceModal?.title || 'Pilih Kontak WhatsApp';

  const handleSelectNumber = (number: string) => {
    const cleanNumber = number.replace(/\D/g, '');
    const fullNumber = cleanNumber.startsWith('0') ? `62${cleanNumber.slice(1)}` : cleanNumber;
    const url = `https://wa.me/${fullNumber}?text=${encodeURIComponent(activeMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const contacts = [
    {
      id: 'wa-1',
      name: t?.waChoiceModal?.wa1Name || 'WhatsApp 1',
      phone: contactData.whatsapp1,
      role: t?.waChoiceModal?.wa1Role || 'Layanan Konsultasi & Survei Kolam',
      desc: t?.waChoiceModal?.wa1Desc || 'Spesialis teknis pembuatan, renovasi & perbaikan kebocoran kolam di Bali.',
      badge: t?.waChoiceModal?.wa1Badge || (language === 'id' ? 'Survei & Teknis' : 'Surveys & Engineering'),
    },
    {
      id: 'wa-2',
      name: t?.waChoiceModal?.wa2Name || 'WhatsApp 2',
      phone: contactData.whatsapp2,
      role: t?.waChoiceModal?.wa2Role || 'Layanan Booking & Customer Care',
      desc: t?.waChoiceModal?.wa2Desc || 'Layanan booking jadwal kuras filter, perawatan ikan koi & pemesanan.',
      badge: t?.waChoiceModal?.wa2Badge || (language === 'id' ? 'Booking & Support' : 'Booking & Support'),
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg bg-[#04242E] border border-teal-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl text-white z-10 space-y-5"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-teal-500/20 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#FF6E40]" />
                <span>{t?.waChoiceModal?.badge || (language === 'id' ? 'Konsultasi & Booking' : 'Consultation & Booking')}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {activeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-normal">
                {t?.waChoiceModal?.subtitle || 'Silakan pilih salah satu admin WhatsApp resmi KOI POND SERVICES BALI:'}
              </p>
            </div>

            <button
              id="close-wa-choice-modal"
              onClick={onClose}
              className="p-1.5 text-teal-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 cursor-pointer shrink-0"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Cards */}
          <div className="space-y-3.5">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                id={`btn-select-${contact.id}`}
                onClick={() => handleSelectNumber(contact.phone)}
                className="w-full text-left p-4 sm:p-4.5 rounded-xl bg-gradient-to-r from-[#062C38] to-[#083847] border border-teal-500/25 hover:border-[#25D366] hover:bg-[#09475a] transition-all group shadow-md cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 active:scale-[0.99]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                      {contact.name} ({contact.phone})
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                      {contact.badge}
                    </span>
                  </div>
                  <p className="text-xs text-teal-200/90 font-medium">
                    {contact.role}
                  </p>
                  <p className="text-[11px] text-teal-100/70 font-normal leading-relaxed">
                    {contact.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-[#25D366] group-hover:bg-[#20ba5a] text-white rounded-full text-xs font-bold uppercase tracking-wider shrink-0 shadow-sm self-start sm:self-center">
                  <MessageCircle className="w-4 h-4" />
                  <span>{t?.waChoiceModal?.chatBtn || 'Chat WA'}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Guarantee Note */}
          <div className="flex items-center justify-center gap-2 pt-1 text-xs text-teal-200/75 font-medium border-t border-teal-500/15">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>{t?.waChoiceModal?.guaranteeNote || 'Kedua nomor aktif 24 jam & terhubung langsung ke teknisi Bali'}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
