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
    <section id="articles" className="py-16 md:py-20 glass-aquatic-section scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-2 mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-[#FF6E40] bg-[#04242E]/70 backdrop-blur-md px-4 py-1 rounded-full border border-teal-500/25 inline-block shadow-xs">
            Artikel & Panduan Koi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Tips & Panduan Perawatan Kolam Koi Bali
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-teal-100/80 font-normal leading-relaxed">
            Artikel teknis, kualitas air kristal, pencegahan kebocoran, dan perawatan kesehatan ikan koi.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredArticles.map((article, idx) => (
            <motion.article
              id={`featured-article-${article.id}`}
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedArticle(article)}
              className="glass-aquatic-card rounded-2xl overflow-hidden border border-teal-500/20 hover:border-[#FF6E40]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg"
            >
              {/* Image Banner */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#04242E]/85 text-teal-100 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md backdrop-blur-md border border-teal-400/20">
                  {article.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-3 bg-[#062C38]/40 backdrop-blur-sm">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-teal-200/70 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF6E40]" />
                      {article.date}
                    </span>
                    <span className="opacity-40">|</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FBBF24]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF6E40] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed line-clamp-3 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-teal-500/20 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-200 group-hover:text-[#FF6E40] flex items-center gap-1.5 transition-colors">
                    Baca Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF6E40] group-hover:translate-x-1 transition-transform" />
                  </span>

                  <span className="text-[11px] text-teal-300/70 font-medium">
                    {article.author}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Action Button to Next Page */}
        <div className="text-center pt-10">
          <button
            id="btn-view-more-articles"
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-2.5 px-7 py-3 btn-pond-teal text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer active:scale-95"
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
              className="fixed inset-0 bg-[#021820]/85 backdrop-blur-md"
            />

            <motion.div
              id="landing-article-modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#062C38] border border-teal-500/30 rounded-2xl shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden my-auto text-slate-100"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 border-b border-teal-500/20 bg-[#04242E]/90">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6E40] bg-orange-950/60 px-3 py-1 rounded-full border border-orange-500/30">
                  {selectedArticle.category}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(selectedArticle)}
                    className="p-1.5 text-teal-200 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                    title="Bagikan Artikel"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    id="landing-article-close-btn"
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 text-teal-200 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Content Scroll Area */}
              <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {selectedArticle.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-teal-200/70">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#FF6E40]" />
                      {selectedArticle.author}
                    </span>
                    <span className="opacity-40">|</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF6E40]" />
                      {selectedArticle.date}
                    </span>
                    <span className="opacity-40">|</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FBBF24]" />
                      {selectedArticle.readTime}
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-teal-500/20">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-3.5 text-sm text-teal-50/90 leading-relaxed font-normal">
                  {selectedArticle.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {selectedArticle.tags && (
                  <div className="pt-3 border-t border-teal-500/20 flex flex-wrap items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-[#FF6E40]" />
                    {selectedArticle.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs bg-white/5 border border-teal-500/20 text-teal-200 px-2.5 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Consultation Banner */}
                <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#04242E] to-[#0A4354] border border-teal-500/30 text-white space-y-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-sm sm:text-base">
                      Konsultasikan Kolam Anda
                    </h4>
                    <p className="text-xs text-teal-100/80">
                      Layanan survei dan penanganan teknis bergaransi resmi di seluruh Bali.
                    </p>
                  </div>
                  <a
                    id="landing-article-modal-wa-cta"
                    href={`https://wa.me/628133034733?text=${encodeURIComponent(`Halo KOI POND SERVICES BALI! Saya membaca artikel "${selectedArticle.title}" dan ingin konsultasi mengenai kolam saya.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap px-5 py-2 btn-koi-flame text-white rounded-full font-bold text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Konsultasi WA</span>
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
