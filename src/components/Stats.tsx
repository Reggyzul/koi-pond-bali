/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { statsData } from '../data';

interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (end === 0) return;

      const duration = 1500; // ms
      const incrementTime = Math.max(Math.floor(duration / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 40); // larger step size for fast counts
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-brand-beige tracking-tight">
      {count}
      <span className="text-brand-bronze ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-brand-charcoal text-brand-beige relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full border border-brand-beige" />
        <div className="absolute bottom-12 right-12 w-64 h-64 rounded-full border-2 border-brand-bronze" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 md:divide-x md:divide-brand-beige/10">
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center justify-center text-center space-y-2 ${
                idx > 0 ? 'md:pl-6' : ''
              }`}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-beige/65 max-w-[150px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
