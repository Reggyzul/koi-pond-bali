/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Eye, ShieldCheck, Check, Compass, Sliders, Palette } from 'lucide-react';

interface Material {
  id: string;
  name: string;
  type: 'stone' | 'wood' | 'metal' | 'fabric';
  desc: string;
  image: string;
  tone: string;
}

interface MaterialCuratorProps {
  onSelectMoodboard: (summary: string) => void;
  onOpenConsultation: () => void;
}

export default function MaterialCurator({ onSelectMoodboard, onOpenConsultation }: MaterialCuratorProps) {
  const stones: Material[] = [
    {
      id: 'calacatta',
      name: 'Calacatta Borghini',
      type: 'stone',
      desc: 'Rare Italian white marble featuring dramatic, bold charcoal and warm gold vein structures.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80',
      tone: 'Majestic & Classical'
    },
    {
      id: 'travertine',
      name: 'Honed Ivory Travertine',
      type: 'stone',
      desc: 'Earthy, cream-colored sedimented stone characterized by unique porous voids and rich matte texture.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80',
      tone: 'Warm Mediterranean Minimalist'
    },
    {
      id: 'verde-alpi',
      name: 'Verde Alpi Marble',
      type: 'stone',
      desc: 'Magnificent deep emerald-green stone accented by fine, crystalline pale webbed veins.',
      image: 'https://images.unsplash.com/photo-1590483736148-3c1a58f9a362?auto=format&fit=crop&w=400&q=80',
      tone: 'Moody Brutalist & Opulent'
    }
  ];

  const woods: Material[] = [
    {
      id: 'walnut',
      name: 'Crown-Cut Smoked Walnut',
      type: 'wood',
      desc: 'Rich, high-density dark timber boasting complex wavy cathedral grain configurations.',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80',
      tone: 'Sophisticated & Grounded'
    },
    {
      id: 'white-oak',
      name: 'Washed European White Oak',
      type: 'wood',
      desc: 'Slightly greyed, straight-grained light hardwood bringing expansive airiness to any space.',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80',
      tone: 'Nordic Organic & Light'
    },
    {
      id: 'shou-sugi',
      name: 'Shou Sugi Ban Cedar',
      type: 'wood',
      desc: 'Bespoke charred timber utilizing ancient Japanese flame-treatment for deep, charcoal-reptilian textures.',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=400&q=80',
      tone: 'Contemporary Avant-Garde'
    }
  ];

  const metals: Material[] = [
    {
      id: 'champagne-bronze',
      name: 'Brushed Champagne Bronze',
      type: 'metal',
      desc: 'An eye-safe, soft metallic finish presenting gold-beige undertones with light diffusion.',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80',
      tone: 'Quiet Luxury & Soft Accent'
    },
    {
      id: 'hand-hammered-iron',
      name: 'Hand-Hammered Patinated Iron',
      type: 'metal',
      desc: 'Deep pewter-toned metal showing organic hammer markings and custom artisanal hand-work.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80',
      tone: 'Wabi-Sabi & Architectural'
    }
  ];

  const fabrics: Material[] = [
    {
      id: 'boucle',
      name: 'Belgian Bouclé Linen',
      type: 'fabric',
      desc: 'Looped, heavily textured textile in ivory-sand color, offering comfortable tactile comfort.',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80',
      tone: 'Cozy Sculptural Living'
    },
    {
      id: 'velvet',
      name: 'Midnight Forest Velvet',
      type: 'fabric',
      desc: 'Extremely dense, luxurious woven fabric casting rich color transitions based on light angles.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80',
      tone: 'Dramatic & High-Contrast Comfort'
    }
  ];

  const [selectedStone, setSelectedStone] = useState<Material>(stones[1]); // Travertine
  const [selectedWood, setSelectedWood] = useState<Material>(woods[0]); // Walnut
  const [selectedMetal, setSelectedMetal] = useState<Material>(metals[0]); // Bronze
  const [selectedFabric, setSelectedFabric] = useState<Material>(fabrics[0]); // Boucle

  const [roomArchetype, setRoomArchetype] = useState<'Sanctuary Living' | 'Wellness Master Bath' | 'Culinary Kitchen'>('Sanctuary Living');

  const handleInquireWithMoodboard = () => {
    const summary = `Tactile Profile for ${roomArchetype}:\n- Stone: ${selectedStone.name}\n- Wood: ${selectedWood.name}\n- Metal: ${selectedMetal.name}\n- Fabric: ${selectedFabric.name}`;
    onSelectMoodboard(summary);
    onOpenConsultation();
  };

  return (
    <section id="tactile-curator" className="py-24 bg-white border-b border-brand-charcoal/5 relative overflow-hidden">
      {/* Decorative large letters */}
      <div className="absolute right-0 top-0 text-[20vw] font-serif font-bold text-brand-charcoal/[0.01] pointer-events-none select-none translate-x-12 -translate-y-12">
        Tactile
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-bronze flex items-center gap-2">
            <Palette className="w-4 h-4 text-brand-bronze" /> Interactive Spatial Laboratory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
            Curate Your Bespoke Tactile Profile
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-light max-w-xl">
            Experiment with our curated material pairings. Select high-end stones, timber, finishes, and fabrics to dynamically visualize the atmosphere of your future residence.
          </p>
        </div>

        {/* Space Selection Bar */}
        <div className="flex gap-3 border-b border-brand-charcoal/10 pb-6 mb-12 flex-wrap">
          {(['Sanctuary Living', 'Wellness Master Bath', 'Culinary Kitchen'] as const).map((space) => (
            <button
              id={`curator-space-${space.replace(/\s+/g, '-').toLowerCase()}`}
              key={space}
              onClick={() => setRoomArchetype(space)}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer ${
                roomArchetype === space
                  ? 'bg-brand-charcoal text-brand-beige shadow-sm'
                  : 'bg-brand-beige text-brand-charcoal/75 hover:bg-brand-charcoal/5'
              }`}
            >
              {space}
            </button>
          ))}
        </div>

        {/* Curator main interface workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Material Selectors (Span 7) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Category 1: Marble & Stone */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-brand-charcoal/10 pb-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                  01 &bull; Primary Architectural Stone
                </h4>
                <span className="text-[10px] font-bold text-brand-charcoal/50 uppercase">
                  Current Selection: <span className="text-brand-charcoal">{selectedStone.name}</span>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stones.map((stone) => (
                  <button
                    id={`curator-stone-${stone.id}`}
                    key={stone.id}
                    onClick={() => setSelectedStone(stone)}
                    className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between h-44 cursor-pointer relative overflow-hidden group ${
                      selectedStone.id === stone.id
                        ? 'border-brand-bronze bg-brand-beige shadow-sm'
                        : 'border-brand-charcoal/10 bg-white hover:border-brand-charcoal/30'
                    }`}
                  >
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity">
                      <img src={stone.image} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="relative z-10 space-y-1">
                      <h5 className="font-serif font-bold text-brand-charcoal text-sm leading-tight">{stone.name}</h5>
                      <span className="text-[9px] font-bold uppercase text-brand-bronze tracking-wider block">{stone.tone}</span>
                    </div>
                    <p className="relative z-10 text-[10px] text-brand-charcoal/65 leading-relaxed font-light line-clamp-3 mt-4">
                      {stone.desc}
                    </p>
                    {selectedStone.id === stone.id && (
                      <div className="absolute bottom-3 right-3 bg-brand-bronze text-white p-1 rounded-full shadow-sm">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Category 2: Timber Veneer */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-brand-charcoal/10 pb-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                  02 &bull; Premium Wood Veneer
                </h4>
                <span className="text-[10px] font-bold text-brand-charcoal/50 uppercase">
                  Current Selection: <span className="text-brand-charcoal">{selectedWood.name}</span>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {woods.map((wood) => (
                  <button
                    id={`curator-wood-${wood.id}`}
                    key={wood.id}
                    onClick={() => setSelectedWood(wood)}
                    className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between h-44 cursor-pointer relative overflow-hidden group ${
                      selectedWood.id === wood.id
                        ? 'border-brand-bronze bg-brand-beige shadow-sm'
                        : 'border-brand-charcoal/10 bg-white hover:border-brand-charcoal/30'
                    }`}
                  >
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity">
                      <img src={wood.image} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="relative z-10 space-y-1">
                      <h5 className="font-serif font-bold text-brand-charcoal text-sm leading-tight">{wood.name}</h5>
                      <span className="text-[9px] font-bold uppercase text-brand-bronze tracking-wider block">{wood.tone}</span>
                    </div>
                    <p className="relative z-10 text-[10px] text-brand-charcoal/65 leading-relaxed font-light line-clamp-3 mt-4">
                      {wood.desc}
                    </p>
                    {selectedWood.id === wood.id && (
                      <div className="absolute bottom-3 right-3 bg-brand-bronze text-white p-1 rounded-full shadow-sm">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Category 3 & 4 (Metals and Fabrics in grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Metals */}
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-brand-charcoal/10 pb-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                    03 &bull; Accent Metallic Trim
                  </h4>
                </div>
                <div className="space-y-3">
                  {metals.map((metal) => (
                    <button
                      id={`curator-metal-${metal.id}`}
                      key={metal.id}
                      onClick={() => setSelectedMetal(metal)}
                      className={`text-left p-4 rounded-xl border transition-all flex items-center gap-4 w-full cursor-pointer relative ${
                        selectedMetal.id === metal.id
                          ? 'border-brand-bronze bg-brand-beige shadow-sm'
                          : 'border-brand-charcoal/10 bg-white hover:border-brand-charcoal/30'
                      }`}
                    >
                      <img src={metal.image} alt="" className="w-12 h-12 rounded-lg object-cover border border-brand-charcoal/10" referrerPolicy="no-referrer" />
                      <div className="space-y-0.5">
                        <h5 className="font-serif font-bold text-brand-charcoal text-sm leading-tight">{metal.name}</h5>
                        <p className="text-[10px] text-brand-charcoal/60 line-clamp-1">{metal.desc}</p>
                      </div>
                      {selectedMetal.id === metal.id && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-bronze text-white p-1 rounded-full shadow-sm">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabrics */}
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-brand-charcoal/10 pb-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                    04 &bull; Luxury Fabric
                  </h4>
                </div>
                <div className="space-y-3">
                  {fabrics.map((fabric) => (
                    <button
                      id={`curator-fabric-${fabric.id}`}
                      key={fabric.id}
                      onClick={() => setSelectedFabric(fabric)}
                      className={`text-left p-4 rounded-xl border transition-all flex items-center gap-4 w-full cursor-pointer relative ${
                        selectedFabric.id === fabric.id
                          ? 'border-brand-bronze bg-brand-beige shadow-sm'
                          : 'border-brand-charcoal/10 bg-white hover:border-brand-charcoal/30'
                      }`}
                    >
                      <img src={fabric.image} alt="" className="w-12 h-12 rounded-lg object-cover border border-brand-charcoal/10" referrerPolicy="no-referrer" />
                      <div className="space-y-0.5">
                        <h5 className="font-serif font-bold text-brand-charcoal text-sm leading-tight">{fabric.name}</h5>
                        <p className="text-[10px] text-brand-charcoal/60 line-clamp-1">{fabric.desc}</p>
                      </div>
                      {selectedFabric.id === fabric.id && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-bronze text-white p-1 rounded-full shadow-sm">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Moodboard Canvas preview card (Span 5) */}
          <div className="lg:col-span-5 sticky top-28 bg-brand-beige border border-brand-charcoal/10 p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-bronze block">
                The Resulting Aesthetic Board
              </span>
              <h3 className="text-2xl font-serif font-bold text-brand-charcoal leading-snug">
                {roomArchetype}
              </h3>
              <p className="text-xs text-brand-charcoal/60 font-light">
                An orchestration of texture and weight designed to evoke quiet confidence.
              </p>
            </div>

            {/* Tactile Swatches visual layout */}
            <div className="relative h-64 bg-white rounded-xl border border-brand-charcoal/5 overflow-hidden flex items-center justify-center p-4 shadow-inner">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Swatch 1: Stone (Back Left) */}
                <motion.div
                  layoutId="swatch-stone"
                  whileHover={{ scale: 1.12, rotate: -5, zIndex: 45 }}
                  className="absolute w-32 h-32 rounded-lg overflow-hidden shadow-lg border border-brand-beige z-10 rotate-[-12deg] -translate-x-12 -translate-y-4 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
                >
                  <img src={selectedStone.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-charcoal/85 text-[9px] font-bold text-brand-beige py-1.5 text-center backdrop-blur-xs">
                    {selectedStone.name}
                  </div>
                </motion.div>

                {/* Swatch 2: Wood (Back Right) */}
                <motion.div
                  layoutId="swatch-wood"
                  whileHover={{ scale: 1.12, rotate: 12, zIndex: 45 }}
                  className="absolute w-28 h-36 rounded-lg overflow-hidden shadow-lg border border-brand-beige z-20 rotate-[8deg] translate-x-14 -translate-y-2 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
                >
                  <img src={selectedWood.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-charcoal/85 text-[9px] font-bold text-brand-beige py-1.5 text-center backdrop-blur-xs">
                    {selectedWood.name}
                  </div>
                </motion.div>

                {/* Swatch 3: Fabric (Center front overlap) */}
                <motion.div
                  layoutId="swatch-fabric"
                  whileHover={{ scale: 1.15, rotate: -3, zIndex: 45 }}
                  className="absolute w-24 h-24 rounded-full overflow-hidden shadow-xl border-2 border-brand-beige z-30 translate-y-12 -translate-x-2 shadow-brand-charcoal/15 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                >
                  <img src={selectedFabric.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent flex items-end justify-center pb-2.5">
                    <span className="text-[8px] font-bold text-brand-beige tracking-wider uppercase text-center max-w-[80px] line-clamp-1">
                      {selectedFabric.name}
                    </span>
                  </div>
                </motion.div>

                {/* Swatch 4: Metal (Float Accent Dot) */}
                <motion.div
                  layoutId="swatch-metal"
                  whileHover={{ scale: 1.25, rotate: 15, zIndex: 45 }}
                  className="absolute w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-brand-beige z-40 translate-x-14 translate-y-16 animate-bounce transition-all duration-300 hover:shadow-xl cursor-pointer"
                  style={{ animationDuration: '4s' }}
                >
                  <img src={selectedMetal.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>

              </div>
            </div>

            {/* Sensory output evaluation box */}
            <div className="p-4 bg-white border border-brand-charcoal/5 rounded-xl space-y-2.5">
              <span className="text-[9px] font-bold uppercase tracking-widest text-brand-bronze block">
                Atmospheric Sensory Analysis
              </span>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                This combination pairs the classical majesty of <span className="font-semibold text-brand-charcoal">{selectedStone.name}</span> with the organic grounded weight of <span className="font-semibold text-brand-charcoal">{selectedWood.name}</span>. Rounded off by <span className="font-semibold text-brand-charcoal">{selectedFabric.name}</span> and custom accents of <span className="font-semibold text-brand-charcoal">{selectedMetal.name}</span>, this space expresses a <span className="italic font-serif text-brand-bronze font-medium">"{selectedStone.tone}"</span> feeling.
              </p>
            </div>

            {/* Action buttons */}
            <button
              id="curator-submit-moodboard-btn"
              onClick={handleInquireWithMoodboard}
              className="w-full py-4 bg-brand-charcoal hover:bg-brand-bronze text-brand-beige rounded-lg font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              Inquire with this tactile profile
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
