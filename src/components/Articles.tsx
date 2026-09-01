/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, User, Tag, MessageCircle, Share2, Sparkles } from 'lucide-react';
import { articlesData } from '../data';
import { Article } from '../types';

interface ArticlesProps {
  onOpenConsultation?: () => void;
  onViewAllArticles?: () => void;
}

export default function Articles({ onViewAllArticles }: ArticlesProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Exactly 3 Featured Articles for Landing Page
  const featuredArticles = articlesData.slice(0, 3);

  const handleShare = (article: Article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan artikel berhasil disalin ke clipboard!');
    }
  };

  return (
    <section id="articles" className="py-14 md:py-16 bg-white border-b border-teal-900/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#FF5722] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200/80 inline-block shadow-2xs">
            Artikel & Edukasi Koi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062C38] leading-tight">
            Tips & Panduan Perawatan Kolam Koi Bali
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed">
            Kumpulan artikel teknis, panduan kualitas air kristal, pencegahan kebocoran, serta diagnosa penyakit ikan koi dari Alvian Malengga.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredArticles.map((article, idx) => (
            <motion.article
              id={`featured-article-${article.id}`}
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 12px 24px -5px rgba(6, 44, 56, 0.12)' }}
              onClick={() => setSelectedArticle(article)}
              className="bg-[#F2F9F9] rounded-2xl overflow-hidden border border-teal-900/10 hover:border-[#0E5C73]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs"
            >
              {/* Image Banner */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-800">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#062C38]/90 text-teal-100 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md backdrop-blur-sm border border-teal-400/20">
                  {article.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-3">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5722]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0E5C73]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#062C38] group-hover:text-[#FF5722] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-teal-100/80 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0E5C73] group-hover:text-[#FF5722] flex items-center gap-1.5 transition-colors">
                    Baca Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF5722] group-hover:translate-x-1 transition-transform" />
                  </span>

                  <span className="text-[11px] text-slate-500 font-medium">
                    Oleh {article.author}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Action Button to Next Page (Full Articles Archive) */}
        <div className="text-center pt-10">
          <button
            id="btn-view-more-articles"
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-2.5 px-7 py-3 btn-pond-teal text-white rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer active:scale-95"
          >
            <span>Lihat Seluruh Artikel & Panduan</span>
            <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
          </button>
        </div>

      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              id="landing-article-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-[#04242E]/85 backdrop-blur-md"
            />

            <motion.div
              id="landing-article-modal-box"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-teal-900/20"
            >
              {/* Header Cover */}
              <div className="relative h-56 sm:h-64 bg-[#062C38] overflow-hidden shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062C38] via-[#062C38]/60 to-transparent" />

                <button
                  id="close-landing-article-modal-btn"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-3.5 right-3.5 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 space-y-1.5 text-white">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 bg-[#FF5722] text-white rounded-full text-[11px] font-bold uppercase tracking-wider">
                      {selectedArticle.category}
                    </span>
                    <span className="text-xs text-teal-100 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedArticle.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-5 sm:p-7 overflow-y-auto space-y-5 text-[#0F172A]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-100 pb-3 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#0E5C73]" />
                    <span>Penulis: <strong>{selectedArticle.author}</strong> (Founder KOI POND BALI)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{selectedArticle.date}</span>
                    <button
                      onClick={() => handleShare(selectedArticle)}
                      className="p-1.5 hover:bg-teal-50 rounded-full transition-colors text-[#0E5C73] cursor-pointer"
                      title="Bagikan Artikel"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-700">
                  {selectedArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-3 border-t border-teal-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Topik Terkait:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedArticle.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-teal-50 text-[#062C38] text-xs font-semibold rounded-md border border-teal-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#062C38] to-[#0A4354] text-white space-y-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
                  <div className="space-y-1">
                    <h4 className="font-bold text-base">
                      Punya Masalah Serupa pada Kolam Anda?
                    </h4>
                    <p className="text-xs text-teal-100">
                      Konsultasikan langsung dengan Alvian Malengga untuk survei dan penanganan bergaransi di Bali.
                    </p>
                  </div>
                  <a
                    id="landing-article-modal-wa-cta"
                    href={`https://wa.me/628133034733?text=${encodeURIComponent(`Halo KOI POND SERVICES BALI! Saya membaca artikel "${selectedArticle.title}" dan ingin konsultasi mengenai kolam saya.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap px-6 py-2.5 btn-koi-flame text-white rounded-full font-bold text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Konsultasi WA
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
