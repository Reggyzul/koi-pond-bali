/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const length = testimonialsData.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isHovered, activeIndex]);

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-bold tracking-fashion-widest uppercase text-brand-bronze block">
            Endorsements & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
            What Our Clients Say About <span className="italic font-light text-gold-gradient">HomeWorks Experience</span>
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-brand-bronze to-transparent mx-auto mt-5" />
        </div>

        {/* Carousel Container */}
        <div
          id="testimonials-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative max-w-4xl mx-auto p-8 sm:p-14 md:p-16 rounded-3xl bg-white border border-brand-charcoal/5 shadow-xl hover:shadow-2xl transition-all duration-700 hover:border-brand-bronze/10"
        >
          {/* Decorative quote icon */}
          <div className="absolute top-8 right-8 text-brand-bronze/[0.07] pointer-events-none select-none">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          {/* Left golden edge highlight */}
          <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-transparent via-brand-bronze/50 to-transparent rounded-r" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10"
            >
              {/* Star rating */}
              <div className="flex items-center gap-1 text-brand-bronze">
                {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-bronze" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base md:text-lg font-serif italic text-brand-charcoal/90 leading-relaxed font-light">
                "{testimonialsData[activeIndex].text}"
              </p>

              {/* Client bio row */}
              <div className="flex items-center gap-4 pt-6 border-t border-brand-charcoal/10">
                <img
                  src={testimonialsData[activeIndex].image}
                  alt={testimonialsData[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-bronze/30 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-brand-charcoal text-base">
                    {testimonialsData[activeIndex].name}
                  </h4>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-brand-charcoal/50 mt-0.5">
                    {testimonialsData[activeIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons */}
          <div className="flex items-center gap-3 mt-8 justify-between relative z-10 pt-4 border-t border-brand-charcoal/5 sm:border-0 sm:pt-0 sm:absolute sm:bottom-12 sm:right-12">
            <button
              id="testimonial-prev-btn"
              onClick={prevSlide}
              className="p-2 border border-brand-charcoal/15 hover:border-brand-bronze hover:bg-brand-bronze/5 rounded-full transition-colors cursor-pointer text-brand-charcoal"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonialsData.map((_, idx) => (
                <button
                  id={`testimonial-dot-${idx}`}
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-5 bg-brand-bronze' : 'bg-brand-charcoal/20'
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-btn"
              onClick={nextSlide}
              className="p-2 border border-brand-charcoal/15 hover:border-brand-bronze hover:bg-brand-bronze/5 rounded-full transition-colors cursor-pointer text-brand-charcoal"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
