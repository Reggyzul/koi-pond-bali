/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { whyChooseUsData } from '../data';

export default function WhyChooseUs() {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 stroke-[2]" />;
    }
    return <Icons.ShieldCheck className="w-5 h-5 stroke-[2]" />;
  };

  return (
    <section id="why-choose-us" className="py-14 md:py-16 bg-gradient-to-b from-[#04242E] via-[#062C38] to-[#0A4354] text-white border-b border-teal-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-[#FBBF24] bg-white/10 px-3.5 py-1 rounded-full border border-amber-400/20 inline-block shadow-xs">
            Nilai & Komitmen Kami
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Keunggulan KOI POND SERVICES BALI
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-teal-100/90 font-normal leading-relaxed">
            Menghadirkan rasa aman dan kepuasan melalui keahlian teknis, transparansi harga fleksibel, dan garansi resmi 100%.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
        </div>

        {/* Why Choose Us Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-5 sm:p-6 bg-white text-[#0F172A] rounded-2xl transition-all duration-300 flex flex-col justify-between relative shadow-lg border border-teal-900/10 hover:border-[#FF6E40]/50"
            >
              {/* Corner Number Display */}
              <div className="absolute right-4 top-3 text-3xl font-bold text-[#062C38]/10 select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className="space-y-3.5 relative z-10">
                {/* Floating Icon Frame */}
                <div className="p-2.5 bg-teal-50 text-[#0E5C73] rounded-xl w-fit shadow-xs border border-teal-100">
                  {renderIcon(item.iconName)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-[#062C38] text-base sm:text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="h-1 w-8 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mt-4 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
