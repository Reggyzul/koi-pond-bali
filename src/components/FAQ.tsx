/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { faqData } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Process', 'Pricing', 'Materials', 'Warranty'];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 md:py-16 bg-[#F2F9F9] border-b border-teal-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <div className="text-center space-y-2 mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#FF5722] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200/80 inline-block shadow-2xs">
            Tanya Jawab Seputar Kolam
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062C38] leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
        </div>

        {/* Search and Category Control Bar */}
        <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-between mb-7 border-b border-teal-900/10 pb-5">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                id={`faq-cat-btn-${cat.toLowerCase()}`}
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenId(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'btn-pond-teal text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-teal-50 border border-teal-900/10'
                }`}
              >
                {cat === 'All' ? 'Semua' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 bg-white border border-teal-900/15 rounded-full text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E5C73] shadow-2xs"
              placeholder="Cari pertanyaan..."
            />
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    id={`faq-item-${faq.id}`}
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="border border-teal-900/10 rounded-xl overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      id={`faq-toggle-btn-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#062C38] hover:text-[#FF5722] transition-colors cursor-pointer"
                    >
                      <span className="pr-3 leading-snug">{faq.question}</span>
                      <span className="p-1.5 rounded-lg bg-teal-50 text-[#0E5C73] shrink-0 border border-teal-100">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-content-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-teal-50 bg-[#F2F9F9]/60">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-8 bg-white border border-dashed border-teal-300 rounded-xl space-y-1.5">
                <HelpCircle className="w-6 h-6 text-[#FF5722] mx-auto" />
                <p className="text-sm font-bold text-[#062C38]">Pertanyaan tidak ditemukan</p>
                <p className="text-xs text-slate-500">Silakan hubungi WhatsApp kami untuk konsultasi langsung.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
