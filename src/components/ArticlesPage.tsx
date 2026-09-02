/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, User, Tag, ArrowLeft, Search, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Article } from '../types';

interface ArticlesPageProps {
  onBackToHome: () => void;
  onOpenConsultation?: () => void;
}

export default function ArticlesPage({ onBackToHome }: ArticlesPageProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { t, articlesData, language } = useLanguage();

  const categories = language === 'id'
    ? ['Semua', 'Perawatan Kolam', 'Renovasi Kolam', 'Filter & Plumbing']
    : ['All', 'Pond Care', 'Pond Renovation', 'Filter & Plumbing'];

  const allArticles = articlesData || [];

  const filteredArticles = allArticles.filter((art) => {
    const isAll = activeCategory === 'Semua' || activeCategory === 'All';
    const matchesCategory = isAll || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (art.tags || []).some(tg => tg.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
    <div className="min-h-screen relative text-slate-100">
      {/* Top Banner Header */}
      <div className="relative pt-20 md:pt-24 pb-8 md:pb-10 overflow-hidden bg-[#04242E]/80 backdrop-blur-md border-b border-teal-500/20 shadow-md">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-500/20 pb-3 pt-1">
            <button
              id="articles-page-back-btn"
              onClick={onBackToHome}
              className="text-xs sm:text-sm font-bold tracking-wide uppercase text-teal-100 hover:text-white flex items-center gap-2 group cursor-pointer bg-white/10 hover:bg-white/20 py-1.5 px-3.5 rounded-lg border border-white/15 transition-all shadow-xs active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF6E40] group-hover:-translate-x-1 transition-transform" />
              <span>{t?.articles?.backBtn || 'Kembali ke Beranda'}</span>
            </button>
            <span className="font-mono tracking-widest text-[#FBBF24] uppercase font-bold text-xs bg-black/25 px-3 py-1 rounded-md border border-amber-400/20">
              {t?.articles?.badge || 'Artikel & Panduan'}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2 max-w-4xl pt-1"
          >
            <span className="px-3.5 py-1 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white rounded-full text-xs font-bold uppercase tracking-wider inline-block shadow-xs">
              {language === 'id' ? 'Edukasi & Tips Praktisi' : 'Education & Practical Guides'}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              {t?.articles?.title || 'Edukasi & Tips Perawatan Kolam Koi'}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-teal-50/90 leading-relaxed font-normal max-w-3xl">
              {t?.articles?.subtitle || ''}
            </p>
          </motion.div>

        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8">
        
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-teal-500/20 pb-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                id={`all-article-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white shadow-md'
                    : 'bg-white/5 border border-teal-500/30 text-teal-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400" />
            <input
              id="all-articles-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'id' ? 'Cari judul tips & panduan...' : 'Search articles & guides...'}
              className="w-full pl-9 pr-4 py-2 bg-white/5 border border-teal-500/30 rounded-full text-xs sm:text-sm text-white placeholder-teal-300/40 focus:outline-none focus:ring-2 focus:ring-[#FF6E40]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredArticles.map((article, idx) => (
            <motion.article
              id={`page-article-${article.id}`}
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
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

                  <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed line-clamp-3 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-teal-500/20 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-teal-200 group-hover:text-[#FF6E40] transition-colors">
                  <span>{t?.articles?.readMore || 'Baca Selengkapnya'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6E40] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

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
                    id="page-modal-share-article-btn"
                    onClick={() => handleShare(selectedArticle)}
                    className="p-2 text-teal-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 cursor-pointer"
                    title={t?.articles?.shareArticle || 'Bagikan Artikel'}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    id="page-modal-close-article-btn"
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
                  {(selectedArticle.content || []).map((paragraph, i) => (
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
    </div>
  );
}
