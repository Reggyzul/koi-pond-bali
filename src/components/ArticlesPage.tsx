/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, User, Tag, ArrowLeft, Search, MessageCircle, Share2 } from 'lucide-react';
import { articlesData, contactData } from '../data';
import { Article } from '../types';

interface ArticlesPageProps {
  onBackToHome: () => void;
  onOpenConsultation?: () => void;
}

export default function ArticlesPage({ onBackToHome, onOpenConsultation }: ArticlesPageProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Perawatan Kolam', 'Renovasi Kolam', 'Sistem Filter', 'Perawatan Ikan', 'Jual Beli Koi', 'Konstruksi Kolam'];

  const filteredArticles = articlesData.filter((art) => {
    const matchesCategory = activeCategory === 'Semua' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
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
      alert('Tautan artikel berhasil disalin ke clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Top Banner Header - Directly below Navbar */}
      <div className="relative pt-16 md:pt-18 pb-8 md:pb-10 overflow-hidden bg-[#0B436B] border-b border-[#083657]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 pt-2 text-xs">
            <button
              id="articles-page-back-btn"
              onClick={onBackToHome}
              className="font-bold tracking-wider uppercase text-white/80 hover:text-white flex items-center gap-1.5 group cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </button>
            <span className="font-mono tracking-widest text-[#FCB900] uppercase font-bold text-[11px]">
              Edukasi & Artikel Lengkap
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2 max-w-3xl pt-1"
          >
            <span className="px-3 py-1 bg-[#E53935] text-white rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              Pusat Edukasi Koi Bali
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Koleksi Artikel & Panduan Kolam Koi
            </h1>
            <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed font-normal">
              Pelajari berbagai tips praktis seputar perawatan air kolam, instalasi filter biologis, pencegahan kebocoran, serta pengobatan ikan koi dari Alvian Malengga.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-200 pb-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                id={`all-article-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0B436B] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="article-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B436B]"
              placeholder="Cari topik artikel..."
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              id={`full-article-card-${article.id}`}
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#0B436B] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-md"
            >
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-[#0B436B] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                  {article.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3.5 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E53935]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0B436B]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B436B] group-hover:text-[#E53935] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B436B] group-hover:text-[#E53935] flex items-center gap-1.5 transition-colors">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 text-[#E53935] group-hover:translate-x-1 transition-transform" />
                  </span>

                  <span className="text-[11px] text-gray-500 font-medium">
                    Oleh {article.author}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 space-y-2">
            <p className="text-base font-bold text-gray-800">Artikel tidak ditemukan</p>
            <p className="text-xs text-gray-500">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
          </div>
        )}

      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              id="article-page-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-[#0B436B]/80 backdrop-blur-sm"
            />

            <motion.div
              id="article-page-modal-box"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-gray-200"
            >
              {/* Header Cover */}
              <div className="relative h-64 sm:h-72 bg-[#0B436B] overflow-hidden shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B436B] via-[#0B436B]/50 to-transparent" />

                <button
                  id="close-article-page-modal-btn"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 space-y-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#E53935] text-white rounded-full text-xs font-bold uppercase tracking-wider">
                      {selectedArticle.category}
                    </span>
                    <span className="text-xs text-white/80 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedArticle.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#222222]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0B436B]" />
                    <span>Penulis: <strong>{selectedArticle.author}</strong> (Founder KOI POND SERVICES BALI)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{selectedArticle.date}</span>
                    <button
                      onClick={() => handleShare(selectedArticle)}
                      className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-[#0B436B] cursor-pointer"
                      title="Bagikan Artikel"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
                  {selectedArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Topik Terkait:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-gray-100 text-[#0B436B] text-xs font-semibold rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0B436B] text-white space-y-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-base">
                      Punya Masalah Serupa pada Kolam Anda?
                    </h4>
                    <p className="text-xs text-white/80">
                      Konsultasikan langsung dengan Alvian Malengga untuk survei dan penanganan bergaransi di Bali.
                    </p>
                  </div>
                  <a
                    id="article-page-modal-wa-cta"
                    href={`https://wa.me/628133034733?text=${encodeURIComponent(`Halo KOI POND SERVICES BALI! Saya membaca artikel "${selectedArticle.title}" dan ingin konsultasi mengenai kolam saya.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap px-6 py-2.5 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-full font-bold text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2"
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
    </div>
  );
}
