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
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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
