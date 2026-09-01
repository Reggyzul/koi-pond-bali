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
    <section id="faq" className="py-16 md:py-20 bg-[#F2F9F9] border-b border-teal-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#FF5722] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200/80 inline-block shadow-2xs">
            Tanya Jawab Seputar Kolam
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062C38] leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* Search and Category Control Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8 border-b border-teal-900/10 pb-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                id={`faq-cat-btn-${cat.toLowerCase()}`}
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenId(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'btn-pond-teal text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-teal-50 border border-teal-900/10'
                }`}
              >
                {cat === 'All' ? 'Semua' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-teal-900/15 rounded-full text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E5C73]"
              placeholder="Cari pertanyaan..."
            />
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
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
                    className="border border-teal-900/10 rounded-2xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      id={`faq-toggle-btn-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-black text-base sm:text-lg text-[#062C38] hover:text-[#FF5722] transition-colors cursor-pointer"
                    >
                      <span className="pr-4 leading-snug">{faq.question}</span>
                      <span className="p-2 rounded-xl bg-teal-50 text-[#0E5C73] shrink-0 border border-teal-100">
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                          <div className="px-6 pb-6 pt-2 text-base text-slate-700 leading-relaxed border-t border-teal-50 bg-[#F2F9F9]/60">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-10 bg-white border border-dashed border-teal-300 rounded-2xl space-y-2">
                <HelpCircle className="w-8 h-8 text-[#FF5722] mx-auto" />
                <p className="text-base font-black text-[#062C38]">Pertanyaan tidak ditemukan</p>
                <p className="text-sm text-slate-500">Silakan hubungi WhatsApp kami untuk konsultasi langsung.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
