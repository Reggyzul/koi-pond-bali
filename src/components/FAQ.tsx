/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { t, faqData, language } = useLanguage();

  const categories = ['All', 'General', 'Process', 'Pricing', 'Materials', 'Warranty'];

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return t?.faq?.allCategories || 'Semua';
    if (language === 'id') {
      switch (cat) {
        case 'General': return 'Umum';
        case 'Process': return 'Pengerjaan';
        case 'Pricing': return 'Biaya';
        case 'Materials': return 'Kualitas';
        case 'Warranty': return 'Garansi';
        default: return cat;
      }
    }
    return cat;
  };

  const listFaqs = faqData || [];

  const filteredFaqs = listFaqs.filter((faq) => {
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
    <section id="faq" className="py-16 md:py-20 glass-aquatic-section relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-[#FF6E40] bg-[#04242E]/70 backdrop-blur-md px-4 py-1 rounded-full border border-teal-500/25 inline-block shadow-xs">
            {t?.faq?.badge || 'FAQ & Panduan'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {t?.faq?.title || 'Pertanyaan yang Sering Diajukan'}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-teal-100/80 font-normal leading-relaxed">
            {t?.faq?.subtitle || ''}
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Search and Category Control Bar */}
        <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-between mb-7 border-b border-teal-500/20 pb-5">
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
                    : 'bg-[#04242E]/60 backdrop-blur-md text-teal-200 hover:text-white border border-teal-500/20'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-teal-400" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t?.faq?.searchPlaceholder || 'Cari pertanyaan...'}
              className="w-full pl-9 pr-3.5 py-1.5 rounded-full bg-[#04242E]/70 border border-teal-500/30 text-xs text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40] transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-teal-500/20 glass-aquatic-card overflow-hidden transition-all duration-200"
                >
                  <button
                    id={`faq-toggle-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-white font-bold text-sm sm:text-base hover:text-[#FF6E40] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <div className="p-1 rounded-full bg-teal-900/50 text-teal-300 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-teal-500/15 bg-[#04242E]/40"
                      >
                        <div className="p-4 sm:p-5 pt-3 text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-teal-300/70 text-xs sm:text-sm">
              Tidak ada pertanyaan yang sesuai dengan pencarian Anda.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
