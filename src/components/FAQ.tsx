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
    <section id="faq" className="py-16 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E53935] block">
            Tanya Jawab
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B436B] leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="h-1 w-16 bg-[#E53935] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* Search and Category Control Bar */}
        <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-between mb-6 border-b border-gray-200 pb-5">
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
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0B436B] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat === 'All' ? 'Semua' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
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
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      id={`faq-toggle-btn-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-base text-[#0B436B] hover:text-[#E53935] transition-colors cursor-pointer"
                    >
                      <span className="pr-4 leading-snug">{faq.question}</span>
                      <span className="p-1.5 rounded-full bg-[#0B436B]/5 text-[#0B436B] shrink-0">
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
                          <div className="px-5 pb-5 pt-2 text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-[#F8F9FA]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-8 bg-white border border-dashed border-gray-300 rounded-xl space-y-1.5">
                <HelpCircle className="w-6 h-6 text-[#E53935] mx-auto" />
                <p className="text-sm font-bold text-gray-800">Pertanyaan tidak ditemukan</p>
                <p className="text-xs text-gray-500">Silakan hubungi WhatsApp kami untuk konsultasi langsung.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
