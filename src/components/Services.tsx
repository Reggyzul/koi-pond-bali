/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { servicesData } from '../data';

interface ServicesProps {
  onOpenConsultation: () => void;
  activeServiceId: string | null;
  onClearActiveService: () => void;
  onSelectService: (id: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 stroke-[2.2]" />;
    }
    return <Icons.Sparkles className="w-6 h-6 stroke-[2.2]" />;
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-[#F2F9F9] border-b border-teal-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#FF5722] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200/80 inline-block shadow-2xs">
            Layanan Spesialis Kolam & Ikan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062C38] leading-tight">
            6 Layanan Kolam & Ikan Koi Bali
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Solusi komprehensif mulai dari rancang bangun kolam baru, renovasi kebocoran, sistem filter chamber vortex, hingga perawatan medis ikan koi.
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-3 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6, boxShadow: '0 16px 30px -8px rgba(6, 44, 56, 0.15)' }}
              onClick={() => onSelectService(service.id)}
              className="scroll-mt-24 group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-teal-900/10 hover:border-[#0E5C73]/60 transition-all duration-300 relative cursor-pointer shadow-sm"
            >
              {/* Service Image Section */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062C38] via-[#062C38]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
                
                {/* Float Icon Badge */}
                <div className="absolute bottom-4 left-4 p-3 bg-white text-[#062C38] rounded-2xl shadow-lg border border-teal-900/10 group-hover:bg-gradient-to-r group-hover:from-[#FF5722] group-hover:to-[#FF6E40] group-hover:text-white transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] rounded-full text-xs font-extrabold text-white uppercase tracking-wider shadow-md">
                  Garansi 100%
                </div>
              </div>

              {/* Service Body Content */}
              <div className="p-7 flex flex-col flex-grow justify-between bg-white space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-black text-[#062C38] group-hover:text-[#FF5722] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-teal-50 mt-4 flex items-center justify-between">
                  <button
                    id={`learn-more-${service.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.id);
                    }}
                    className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#0E5C73] group-hover:text-[#FF5722] flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    Detail & Estimasi
                    <Icons.ArrowRight className="w-4 h-4 text-[#FF5722] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs sm:text-sm text-[#059669] font-extrabold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Survei Gratis
                  </span>
                </div>
              </div>

              {/* Koi flame bottom glow bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF5722] group-hover:to-[#FF6E40] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
