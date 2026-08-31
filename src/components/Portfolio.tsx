/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Calendar, Maximize2, MapPin, X, ArrowRight, Eye, ChevronRight, Sliders, LayoutGrid, BookOpen, ChevronLeft } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

interface PortfolioProps {
  onOpenConsultation: () => void;
}

export default function Portfolio({ onOpenConsultation }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'lookbook'>('grid');
  const [lookbookIndex, setLookbookIndex] = useState(0);
  
  // Before/After Slider state
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'Residential', 'Office', 'Apartment', 'Villa', 'Restaurant', 'Retail'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const activeLookbookIndex = lookbookIndex >= filteredProjects.length
    ? 0
    : lookbookIndex;
  const activeLookbookProject = filteredProjects[activeLookbookIndex];

  // Before/After slider dragging math
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // L click down
      handleMove(e.clientX);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Layout */}
        <div className="space-y-4 mb-16 text-center md:text-left">
          <span className="text-[10px] font-bold tracking-fashion-widest uppercase text-brand-bronze block">
            Featured Masterpieces
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight max-w-xl">
              Showcasing Our Curated <span className="italic font-light text-gold-gradient">Design Portfolio</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-light max-w-md md:text-right">
              Explore award-winning spatial atmospheres crafted with architectural discipline for luxury living, high-performance workspace, and fine gastronomy.
            </p>
          </div>
        </div>

        {/* Categories filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 border-b border-brand-charcoal/10 pb-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {filters.map((filter) => (
              <button
                id={`portfolio-filter-${filter.toLowerCase()}`}
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setLookbookIndex(0); // Reset Lookbook slideshow
                }}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-brand-charcoal text-brand-beige shadow-sm'
                    : 'bg-brand-beige hover:bg-brand-charcoal/5 text-brand-charcoal/70'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid vs Editorial slider layout selector */}
          <div className="flex items-center justify-center gap-1.5 bg-brand-beige p-1 rounded-xl self-center sm:self-auto">
            <button
              id="portfolio-view-grid"
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-brand-charcoal shadow-sm'
                  : 'text-brand-charcoal/60 hover:text-brand-charcoal'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-brand-bronze" />
              Grid
            </button>
            <button
              id="portfolio-view-lookbook"
              onClick={() => setViewMode('lookbook')}
              className={`p-2 rounded-lg transition-all flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer ${
                viewMode === 'lookbook'
                  ? 'bg-white text-brand-charcoal shadow-sm'
                  : 'text-brand-charcoal/60 hover:text-brand-charcoal'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-brand-bronze" />
              Lookbook
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          /* Portfolio Masonry Grid */
          <motion.div
            id="portfolio-grid"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  id={`project-${project.id}`}
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-96 overflow-hidden rounded-2xl bg-brand-beige border border-brand-charcoal/5 cursor-pointer shadow-sm hover:shadow-lg"
                  onClick={() => {
                    setSliderPosition(50); // Reset slider on open
                    setSelectedProject(project);
                  }}
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Editorial Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                  {/* Hover Quick View Button */}
                  <div className="absolute top-4 right-4 p-2 bg-brand-beige/25 hover:bg-brand-beige/55 text-brand-beige hover:text-brand-charcoal backdrop-blur-sm rounded-full transition-colors z-10">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Info Text */}
                  <div className="absolute bottom-6 left-6 right-6 text-brand-beige space-y-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-brand-bronze">
                      {project.category} &bull; {project.style}
                    </span>
                    <h3 className="text-xl font-serif font-semibold tracking-tight leading-snug group-hover:text-brand-bronze transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-[10px] text-brand-beige/60 pt-1 border-t border-brand-beige/10 group-hover:border-brand-bronze/30 transition-colors">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-bronze" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-brand-bronze" />
                        {project.area}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : filteredProjects.length > 0 ? (
          /* Editorial Lookbook Slider View */
          <div className="bg-brand-beige rounded-2xl border border-brand-charcoal/5 overflow-hidden shadow-md max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Lookbook Left column: Image preview */}
              <div className="lg:col-span-7 bg-brand-charcoal relative h-80 sm:h-96 lg:h-[450px] overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeLookbookProject.id}
                    src={activeLookbookProject.image}
                    alt={activeLookbookProject.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Visual Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 to-transparent pointer-events-none" />
                
                <button
                  id="lookbook-open-comparer"
                  onClick={() => {
                    setSliderPosition(50);
                    setSelectedProject(activeLookbookProject);
                  }}
                  className="absolute bottom-6 left-6 bg-brand-beige/90 hover:bg-brand-beige text-brand-charcoal px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Sliders className="w-3.5 h-3.5 text-brand-bronze" />
                  Compare Before/After
                </button>
              </div>

              {/* Lookbook Right column: Narrative and Specifications */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-white h-[450px]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-brand-bronze">
                      HomeWorks Masterpiece Lookbook
                    </span>
                    <span className="text-[10px] font-mono text-brand-charcoal/40 font-semibold">
                      0{activeLookbookIndex + 1} / 0{filteredProjects.length}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-bronze/75">
                      {activeLookbookProject.category} &bull; {activeLookbookProject.style}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal leading-snug">
                      {activeLookbookProject.title}
                    </h3>
                  </div>

                  {/* Metadata spec parameters */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-charcoal/10 text-xs">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-bronze shrink-0" />
                      <div>
                        <span className="text-[8px] font-bold text-brand-charcoal/40 uppercase block">Location</span>
                        <span className="font-semibold text-brand-charcoal">{activeLookbookProject.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-brand-bronze shrink-0" />
                      <div>
                        <span className="text-[8px] font-bold text-brand-charcoal/40 uppercase block">Area Size</span>
                        <span className="font-semibold text-brand-charcoal">{activeLookbookProject.area}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light line-clamp-4">
                    {activeLookbookProject.description}
                  </p>
                </div>

                {/* Lookbook controls and CTAs */}
                <div className="pt-6 border-t border-brand-charcoal/10 flex items-center justify-between gap-4">
                  {/* Slider Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLookbookIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)}
                      className="p-2 border border-brand-charcoal/10 hover:border-brand-charcoal rounded-full text-brand-charcoal hover:text-brand-bronze transition-colors cursor-pointer"
                      aria-label="Previous Project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setLookbookIndex((prev) => (prev + 1) % filteredProjects.length)}
                      className="p-2 border border-brand-charcoal/10 hover:border-brand-charcoal rounded-full text-brand-charcoal hover:text-brand-bronze transition-colors cursor-pointer"
                      aria-label="Next Project"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Consultation Action */}
                  <button
                    id="lookbook-consultation-trigger"
                    onClick={onOpenConsultation}
                    className="flex-grow py-3 bg-brand-charcoal hover:bg-brand-bronze text-brand-beige rounded-lg font-bold text-[10px] tracking-widest uppercase transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    Bespoke Inquiry
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-brand-charcoal/50">
            No projects found in this category.
          </div>
        )}

        {/* Detailed Project Overlay Modal with Before/After Slider */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                id="portfolio-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-brand-charcoal/90 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                id="portfolio-modal-card"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative w-full max-w-4xl bg-brand-beige rounded-2xl overflow-hidden shadow-2xl z-10 border border-brand-charcoal/10 my-8"
              >
                {/* Top close button */}
                <button
                  id="portfolio-modal-close"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-brand-charcoal/80 hover:bg-brand-charcoal text-brand-beige p-2 rounded-full border border-brand-beige/10 z-20 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Grid Layout inside modal */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left Column: Media Presentation / Before-After Slider (Span 7) */}
                  <div className="md:col-span-7 bg-brand-charcoal relative h-72 sm:h-96 md:h-[500px]">
                    {selectedProject.beforeImage && selectedProject.afterImage ? (
                      /* Before/After Draggable Slider */
                      <div
                        id="before-after-container"
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        className="relative w-full h-full overflow-hidden select-none cursor-ew-resize"
                      >
                        {/* After Image (Full background) */}
                        <img
                          src={selectedProject.afterImage}
                          alt="Finished room design"
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 right-4 bg-brand-charcoal/70 px-3 py-1 rounded-md text-[10px] font-bold text-brand-beige uppercase tracking-wider backdrop-blur-sm z-10">
                          After Design
                        </div>

                        {/* Before Image (Slipped overlay) */}
                        <div
                          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                          style={{ width: `${sliderPosition}%` }}
                        >
                          <img
                            src={selectedProject.beforeImage}
                            alt="Before renovation state"
                            className="absolute inset-0 w-full h-full object-cover max-w-none"
                            style={{ width: containerRef.current?.offsetWidth || '100%' }}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 left-4 bg-brand-bronze/90 px-3 py-1 rounded-md text-[10px] font-bold text-brand-beige uppercase tracking-wider backdrop-blur-sm z-10 whitespace-nowrap">
                            Before Restoration
                          </div>
                        </div>

                        {/* Splitter bar and handles */}
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-brand-beige z-10 pointer-events-none"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-beige border-2 border-brand-bronze text-brand-charcoal flex items-center justify-center shadow-lg pointer-events-none">
                            <Sliders className="w-3.5 h-3.5 text-brand-bronze rotate-90" />
                          </div>
                        </div>

                        {/* Explanatory drag handle overlay */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-charcoal/80 text-brand-beige/90 px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-semibold pointer-events-none backdrop-blur-sm text-center">
                          Drag slider left/right to compare
                        </div>
                      </div>
                    ) : (
                      /* Fallback Static Image if before/after not present */
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>

                  {/* Right Column: Narrative Details (Span 5) */}
                  <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-[500px] overflow-y-auto bg-brand-beige">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-bronze">
                          {selectedProject.category} &bull; {selectedProject.style}
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-brand-charcoal leading-snug">
                          {selectedProject.title}
                        </h3>
                      </div>

                      {/* Technical specifications grid */}
                      <div className="grid grid-cols-2 gap-4 border-y border-brand-charcoal/10 py-4 text-xs">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-bronze shrink-0" />
                          <div>
                            <p className="text-[10px] text-brand-charcoal/50 uppercase font-semibold">Location</p>
                            <p className="font-medium text-brand-charcoal">{selectedProject.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-4 h-4 text-brand-bronze shrink-0" />
                          <div>
                            <p className="text-[10px] text-brand-charcoal/50 uppercase font-semibold">Area Size</p>
                            <p className="font-medium text-brand-charcoal">{selectedProject.area}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-brand-bronze shrink-0" />
                          <div>
                            <p className="text-[10px] text-brand-charcoal/50 uppercase font-semibold">Year Finished</p>
                            <p className="font-medium text-brand-charcoal">{selectedProject.year}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Compass className="w-4 h-4 text-brand-bronze shrink-0" />
                          <div>
                            <p className="text-[10px] text-brand-charcoal/50 uppercase font-semibold">Design Vibe</p>
                            <p className="font-medium text-brand-charcoal">{selectedProject.style}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                          The Design Brief
                        </h4>
                        <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                          Key Tailored Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.keyFeatures.map((feat, idx) => (
                            <li key={idx} className="flex gap-2 items-start text-[11px] text-brand-charcoal/70 font-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze mt-1 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-brand-charcoal/10 mt-6">
                      <button
                        id="portfolio-project-consultation"
                        onClick={() => {
                          setSelectedProject(null);
                          onOpenConsultation();
                        }}
                        className="w-full py-3 bg-brand-charcoal hover:bg-brand-bronze text-brand-beige rounded-lg font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                      >
                        Request similar design consultation
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
