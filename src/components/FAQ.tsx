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
    if (cat === 'All') return t.faq.allCategories;
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
            {t.faq.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {t.faq.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-teal-100/80 font-normal leading-relaxed">
            {t.faq.subtitle}
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
              className="w-full pl-9 pr-3.5 py-2 bg-[#04242E]/70 backdrop-blur-md border border-teal-500/30 rounded-full text-xs sm:text-sm text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-[#FF6E40]"
              placeholder={t.faq.searchPlaceholder}
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
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border border-teal-500/20 rounded-xl overflow-hidden glass-aquatic-card shadow-sm"
                  >
                    <button
                      id={`faq-toggle-btn-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-white hover:text-[#FF6E40] transition-colors cursor-pointer"
                    >
                      <span className="pr-3 leading-snug">{faq.question}</span>
                      <span className="p-1.5 rounded-lg bg-teal-950/60 text-teal-300 shrink-0 border border-teal-500/30">
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
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-teal-100/85 leading-relaxed border-t border-teal-500/20 bg-[#04242E]/60">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-8 bg-[#04242E]/60 border border-dashed border-teal-500/30 rounded-xl space-y-1.5">
                <HelpCircle className="w-6 h-6 text-[#FF6E40] mx-auto" />
                <p className="text-sm font-bold text-white">{t.faq.noResults}</p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
