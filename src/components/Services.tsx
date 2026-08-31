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

export default function Services({ onOpenConsultation, activeServiceId, onClearActiveService, onSelectService }: ServicesProps) {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 stroke-[2]" />;
    }
    return <Icons.Sparkles className="w-5 h-5 stroke-[2]" />;
  };

  return (
    <section id="services" className="py-16 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E53935] block">
            Layanan Spesialis Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B436B] leading-tight">
            6 Layanan Kolam & Ikan Koi Bali
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            Solusi komprehensif mulai dari rancang bangun kolam baru, renovasi kebocoran, sistem filterisasi, hingga perawatan medis ikan koi.
          </p>
          <div className="h-1 w-16 bg-[#E53935] mx-auto mt-3 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((service, idx) => (
            <motion.div
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 12px 24px -5px rgba(11, 67, 107, 0.12)' }}
              onClick={() => onSelectService(service.id)}
              className="scroll-mt-24 group flex flex-col justify-between overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#0B436B] transition-all duration-300 relative cursor-pointer shadow-sm"
            >
              {/* Service Image Section */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B436B]/80 via-transparent to-transparent opacity-80" />
                
                {/* Float Icon Badge */}
                <div className="absolute bottom-3.5 left-3.5 p-2.5 bg-white text-[#0B436B] rounded-lg shadow-md border border-gray-100 group-hover:bg-[#E53935] group-hover:text-white transition-colors duration-300">
                  {renderIcon(service.iconName)}
                </div>

                <div className="absolute top-3.5 right-3.5 px-3 py-1 bg-[#E53935] rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                  Garansi 100%
                </div>
              </div>

              {/* Service Body Content */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-[#0B436B] group-hover:text-[#E53935] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-5 flex items-center justify-between">
                  <button
                    id={`learn-more-${service.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.id);
                    }}
                    className="text-xs font-bold tracking-wider uppercase text-[#0B436B] group-hover:text-[#E53935] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    Detail & Estimasi
                    <Icons.ArrowRight className="w-4 h-4 text-[#E53935]" />
                  </button>
                  <span className="text-xs text-green-700 font-bold bg-green-50 px-2.5 py-1 rounded-md border border-green-200">
                    Survei Gratis
                  </span>
                </div>
              </div>

              {/* Red highlight bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#E53935] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
