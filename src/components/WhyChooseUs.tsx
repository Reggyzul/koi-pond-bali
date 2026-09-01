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
      return <IconComponent className="w-7 h-7 stroke-[2.2]" />;
    }
    return <Icons.ShieldCheck className="w-7 h-7 stroke-[2.2]" />;
  };

  return (
    <section id="why-choose-us" className="py-18 md:py-22 bg-gradient-to-b from-[#04242E] via-[#062C38] to-[#0A4354] text-white border-b border-teal-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#FBBF24] bg-white/10 px-4 py-1.5 rounded-full border border-amber-400/20 inline-block shadow-sm">
            Nilai & Komitmen Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Keunggulan KOI POND SERVICES BALI
          </h2>
          <p className="text-base sm:text-lg text-teal-100/90 font-normal leading-relaxed">
            Menghadirkan rasa aman dan kepuasan melalui keahlian teknis, transparansi harga fleksibel, dan garansi resmi 100%.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-3 rounded-full" />
        </div>

        {/* Why Choose Us Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="p-7 bg-white text-[#0F172A] rounded-3xl transition-all duration-300 flex flex-col justify-between relative shadow-2xl border border-teal-900/10 hover:border-[#FF6E40]/50"
            >
              {/* Corner Number Display */}
              <div className="absolute right-5 top-4 text-4xl font-black text-[#062C38]/10 select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className="space-y-4 relative z-10">
                {/* Floating Icon Frame */}
                <div className="p-3.5 bg-teal-50 text-[#0E5C73] rounded-2xl w-fit shadow-xs border border-teal-100">
                  {renderIcon(item.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-black text-[#062C38] text-xl leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="h-1.5 w-10 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mt-6 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
