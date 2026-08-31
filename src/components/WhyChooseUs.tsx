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
      return <IconComponent className="w-6 h-6 stroke-[2]" />;
    }
    return <Icons.ShieldCheck className="w-6 h-6 stroke-[2]" />;
  };

  return (
    <section id="why-choose-us" className="py-16 bg-[#0B436B] text-white border-b border-[#083657]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <span className="text-xs font-bold tracking-widest uppercase text-[#FCB900] block">
            Nilai & Komitmen Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Keunggulan KOI POND SERVICES BALI
          </h2>
          <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed">
            Menghadirkan rasa aman dan kepuasan melalui keahlian teknis, transparansi harga, dan garansi resmi.
          </p>
          <div className="w-16 h-1 bg-[#E53935] mx-auto mt-3 rounded-full" />
        </div>

        {/* Why Choose Us Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 bg-white text-[#222222] rounded-xl transition-all duration-300 flex flex-col justify-between relative shadow-lg"
            >
              {/* Corner Number Display */}
              <div className="absolute right-4 top-3 text-3xl font-bold text-[#0B436B]/15 select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className="space-y-3.5 relative z-10">
                {/* Floating Icon Frame */}
                <div className="p-3 bg-[#0B436B]/10 text-[#0B436B] rounded-lg w-fit">
                  {renderIcon(item.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-[#0B436B] text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="h-1 w-8 bg-[#E53935] mt-5 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
