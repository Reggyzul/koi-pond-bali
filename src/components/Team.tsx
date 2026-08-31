/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { teamMembersData } from '../data';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-brand-beige border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Layout */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-bronze block">
            Our Architectural Visionaries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
            Meet Our Award-Winning Design Team
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed font-light max-w-lg mx-auto pt-2">
            A cohesive guild of architects, texture experts, and interior designers dedicated to perfecting physical environments.
          </p>
          <div className="h-0.5 w-16 bg-brand-bronze mx-auto mt-4" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembersData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white border border-brand-charcoal/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Profile Image Portrait */}
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 filter brightness-[0.93] group-hover:brightness-[0.85]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant overlay line frame */}
                <div className="absolute inset-4 border border-brand-beige/20 group-hover:border-brand-bronze/50 rounded-xl pointer-events-none transition-all duration-700 group-hover:inset-3" />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Hover Contacts */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    id={`team-link-linkedin-${member.id}`}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-brand-beige hover:bg-brand-bronze text-brand-charcoal hover:text-brand-beige rounded-full shadow-md transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    id={`team-link-email-${member.id}`}
                    href="mailto:contact@homeworks.id"
                    className="p-2 bg-brand-beige hover:bg-brand-bronze text-brand-charcoal hover:text-brand-beige rounded-full shadow-md transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                {/* Detail Tags inside picture */}
                <div className="absolute bottom-6 left-6 right-6 text-brand-beige space-y-1">
                  <h3 className="text-xl font-serif font-bold text-brand-beige">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-brand-bronze">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Specification Grid in body */}
              <div className="p-5 border-t border-brand-charcoal/5 grid grid-cols-2 gap-4 text-xs bg-white">
                <div>
                  <p className="text-[9px] text-brand-charcoal/40 uppercase font-semibold">Experience</p>
                  <p className="font-semibold text-brand-charcoal mt-0.5">{member.experience}</p>
                </div>
                <div>
                  <p className="text-[9px] text-brand-charcoal/40 uppercase font-semibold">Specialization</p>
                  <p className="font-semibold text-brand-charcoal mt-0.5 leading-tight">{member.specialization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
