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
      return <IconComponent className="w-5 h-5 stroke-[2]" />;
    }
    return <Icons.Sparkles className="w-5 h-5 stroke-[2]" />;
  };

  return (
    <section id="services" className="py-16 md:py-20 glass-aquatic-section relative">
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
            Layanan Spesialis Kolam
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Layanan Spesialis Kolam & Ikan Koi Bali
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-teal-100/80 font-normal leading-relaxed">
            Rancang bangun kolam baru, renovasi kebocoran, sistem filtrasi vortex, serta perawatan kesehatan ikan koi.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesData.map((service, idx) => (
            <motion.div
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              whileHover={{ y: -5 }}
              onClick={() => onSelectService(service.id)}
              className="scroll-mt-24 group flex flex-col justify-between overflow-hidden rounded-2xl glass-aquatic-card border border-teal-500/20 hover:border-[#FF6E40]/50 transition-all duration-300 relative cursor-pointer"
            >
              {/* Service Image Section */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062C38] via-[#062C38]/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                
                {/* Float Icon Badge */}
                <div className="absolute bottom-3 left-3 p-2.5 bg-[#04242E]/80 backdrop-blur-md text-teal-200 rounded-xl shadow-md border border-teal-500/25 group-hover:bg-gradient-to-r group-hover:from-[#FF5722] group-hover:to-[#FF6E40] group-hover:text-white transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-[#FF5722] to-[#FF6E40] rounded-full text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                  Garansi 100%
                </div>
              </div>

              {/* Service Body Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-3 bg-[#062C38]/40 backdrop-blur-sm">
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF6E40] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed line-clamp-3 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-teal-500/20 mt-3 flex items-center justify-between">
                  <button
                    id={`learn-more-${service.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.id);
                    }}
                    className="text-xs font-bold tracking-wider uppercase text-teal-200 group-hover:text-[#FF6E40] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    Detail & Estimasi
                    <Icons.ArrowRight className="w-3.5 h-3.5 text-[#FF6E40] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-emerald-300 font-bold bg-emerald-950/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/30">
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
