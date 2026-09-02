/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, User, Tag, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Article } from '../types';

interface ArticlesProps {
  onOpenConsultation?: () => void;
  onViewAllArticles?: () => void;
}

export default function Articles({ onViewAllArticles }: ArticlesProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { t, articlesData, language } = useLanguage();

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
      alert(language === 'id' ? 'Tautan artikel berhasil disalin ke clipboard!' : 'Article link copied to clipboard!');
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
            {t.articles.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {t.articles.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-teal-100/80 font-normal leading-relaxed">
            {t.articles.subtitle}
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
                  loading="lazy"
                  decoding="async"
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

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF6E40] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed line-clamp-2 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-teal-500/20 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-teal-200 group-hover:text-[#FF6E40] transition-colors">
                  <span>{t.articles.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6E40] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Articles Action */}
        {onViewAllArticles && (
          <div className="mt-12 text-center">
            <button
              id="landing-view-all-articles-btn"
              onClick={onViewAllArticles}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-teal-100 hover:text-white border border-teal-500/30 hover:border-[#FF6E40] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-95"
            >
              <span>{t.articles.viewAll}</span>
              <ArrowRight className="w-4 h-4 text-[#FF6E40]" />
            </button>
          </div>
        )}

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#04242E] border border-teal-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Sticky Top Bar */}
              <div className="p-4 sm:p-5 border-b border-teal-500/20 flex items-center justify-between bg-[#062C38]/90 backdrop-blur-md">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6E40] px-3 py-1 rounded-full bg-black/40 border border-teal-500/25">
                  {selectedArticle.category}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    id="modal-share-article-btn"
                    onClick={() => handleShare(selectedArticle)}
                    className="p-2 text-teal-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 cursor-pointer"
                    title={t.articles.shareArticle}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    id="modal-close-article-btn"
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 text-teal-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 cursor-pointer"
                    aria-label="Tutup"
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
