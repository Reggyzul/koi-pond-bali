/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { processStepsData } from '../data';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-beige border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-24">
          <span className="text-[10px] font-bold tracking-fashion-widest uppercase text-brand-bronze block">
            Our Structured Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
            The Roadmap To Your <span className="italic font-light text-gold-gradient">Dream Sanctuary</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-light max-w-lg mx-auto pt-2">
            A cohesive, highly-organized process engineered to eliminate surprises, align budgets, and guarantee precision craftsmanship.
          </p>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-brand-bronze to-transparent mx-auto mt-5" />
        </div>

        {/* Process Steps List/Timeline */}
        <div className="relative border-l-2 border-brand-bronze/20 pl-6 sm:pl-12 space-y-12 max-w-4xl mx-auto py-4">
          
          {processStepsData.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Bullet indicator with pulsing ring */}
              <div className="absolute -left-[32px] sm:-left-[51px] top-4 flex items-center justify-center">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-brand-bronze/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-3.5 h-3.5 rounded-full bg-brand-beige group-hover:bg-brand-bronze border-2 border-brand-bronze transition-all duration-300 z-10" />
              </div>
              
              {/* Step Card */}
              <div className="p-6 sm:p-8 bg-white border border-brand-charcoal/5 group-hover:border-brand-bronze/20 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-500 space-y-3 relative overflow-hidden">
                <div className="flex flex-row items-center gap-4">
                  {/* Step number large display with clean serif layout */}
                  <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-bronze/20 group-hover:text-brand-bronze transition-colors duration-500">
                    {step.step}
                  </span>
                  
                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-charcoal tracking-tight group-hover:text-brand-bronze transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-light max-w-3xl pl-0 sm:pl-10">
                  {step.description}
                </p>

                {/* Subtle visual line at the card bottom */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-brand-bronze/10 to-brand-bronze/60 transition-all duration-700" />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
