/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Articles from './components/Articles';
import ArticlesPage from './components/ArticlesPage';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ServicePage from './components/ServicePage';
import { servicesData, contactData } from './data';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState('');
  const [initialCategory, setInitialCategory] = useState('Pembuatan Kolam Koi');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [isContactPageActive, setIsContactPageActive] = useState<boolean>(false);
  const [isAboutPageActive, setIsAboutPageActive] = useState<boolean>(false);
  const [isArticlesPageActive, setIsArticlesPageActive] = useState<boolean>(false);

  useEffect(() => {
    const serviceMap: { [key: string]: string } = {
      'pembuatan-kolam-koi': 'pembuatan-kolam-koi',
      'pembuatan-kolam': 'pembuatan-kolam-koi',
      'pembuatankolamkoi': 'pembuatan-kolam-koi',
      'kolam-koi': 'pembuatan-kolam-koi',

      'renovasi-perbaikan-kolam': 'renovasi-perbaikan-kolam',
      'renovasi-kolam': 'renovasi-perbaikan-kolam',
      'perbaikan-kolam': 'renovasi-perbaikan-kolam',
      'kolam-bocor': 'renovasi-perbaikan-kolam',

      'perawatan-kolam': 'perawatan-kolam',
      'kuras-kolam': 'perawatan-kolam',
      'maintenance-kolam': 'perawatan-kolam',

      'perawatan-ikan-koi': 'perawatan-ikan-koi',
      'ikan-koi-sakit': 'perawatan-ikan-koi',
      'pengobatan-koi': 'perawatan-ikan-koi',
      'kesehatan-koi': 'perawatan-ikan-koi',

      'pembuatan-perawatan-filter': 'pembuatan-perawatan-filter',
      'filter-kolam': 'pembuatan-perawatan-filter',
      'filter-kolam-koi': 'pembuatan-perawatan-filter',
      'chamber-filter': 'pembuatan-perawatan-filter',

      'jual-beli-ikan-koi': 'jual-beli-ikan-koi',
      'jual-koi': 'jual-beli-ikan-koi',
      'beli-koi': 'jual-beli-ikan-koi',
      'ikan-koi-bali': 'jual-beli-ikan-koi'
    };

    const handleNavigationCheck = () => {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const target = path || hash;

      if (target === 'contact' || target === 'kontak') {
        setIsContactPageActive(true);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (target === 'about' || target === 'tentang-kami' || target === 'founder') {
        setIsAboutPageActive(true);
        setIsContactPageActive(false);
        setIsArticlesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (target === 'articles' || target === 'artikel' || target === 'blog' || target === 'edukasi') {
        setIsArticlesPageActive(true);
        setIsAboutPageActive(false);
        setIsContactPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      const matchedId = serviceMap[target];
      if (matchedId) {
        setActiveServiceId(matchedId);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    handleNavigationCheck();

    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      if (path === 'contact' || path === 'kontak') {
        setIsContactPageActive(true);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (path === 'about' || path === 'tentang-kami' || targetMatched(path)) {
        setIsAboutPageActive(true);
        setIsContactPageActive(false);
        setIsArticlesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (path === 'articles' || path === 'artikel' || path === 'blog' || targetMatched(path)) {
        setIsArticlesPageActive(true);
        setIsAboutPageActive(false);
        setIsContactPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      const matchedId = serviceMap[path];
      if (matchedId) {
        setActiveServiceId(matchedId);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
      } else {
        setActiveServiceId(null);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setTimeout(() => {
          const element = document.getElementById('services');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    function targetMatched(p: string) {
      return p === 'blog' || p === 'edukasi' || p === 'founder';
    }

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleNavigationCheck);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleNavigationCheck);
    };
  }, []);

  const handleSelectService = (id: string) => {
    if (id === 'home') {
      setActiveServiceId(null);
      setIsContactPageActive(false);
      setIsAboutPageActive(false);
      setIsArticlesPageActive(false);
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsContactPageActive(false);
    setIsAboutPageActive(false);
    setIsArticlesPageActive(false);
    setActiveServiceId(id);
    window.history.pushState(null, '', '/' + id);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  const handleBackToHome = () => {
    setActiveServiceId(null);
    setIsAboutPageActive(false);
    setIsContactPageActive(false);
    setIsArticlesPageActive(false);
    window.history.pushState(null, '', '/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenConsultation = (categoryName?: string) => {
    setPrefillMessage('');
    setInitialCategory(categoryName || 'Pembuatan Kolam Koi');
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => setIsConsultationOpen(false);

  const handleSelectSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      setIsContactPageActive(true);
      setIsAboutPageActive(false);
      setIsArticlesPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (sectionId === 'about') {
      setIsAboutPageActive(true);
      setIsContactPageActive(false);
      setIsArticlesPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/about');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (sectionId === 'articles') {
      setIsArticlesPageActive(true);
      setIsAboutPageActive(false);
      setIsContactPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/artikel');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (activeServiceId || isContactPageActive || isAboutPageActive || isArticlesPageActive) {
      setActiveServiceId(null);
      setIsContactPageActive(false);
      setIsAboutPageActive(false);
      setIsArticlesPageActive(false);
      window.history.pushState(null, '', '/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const activeService = servicesData.find(s => s.id === activeServiceId);

  return (
    <div className="relative min-h-screen bg-[#04242E] text-slate-100">
      
      {/* Fixed Ambient Luxury Koi Pond Background Layer (GPU Accelerated) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden gpu-layer">
        <picture>
          <source srcSet="/images/luxury_koi_ambient_bg.avif" type="image/avif" />
          <source srcSet="/images/luxury_koi_ambient_bg.webp" type="image/webp" />
          <img
            src="/images/luxury_koi_ambient_bg.avif"
            alt="KOI POND SERVICES BALI Ambient"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        {/* Luxury Cinematic Gradient Overlay to keep swimming koi visible throughout scrolling */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021820]/75 via-[#04242E]/70 to-[#062C38]/80 pointer-events-none" />
      </div>

      {/* Top Navigation */}
      <div className="relative z-50">
        <Navbar
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectService={handleSelectService}
          onSelectSection={handleSelectSection}
        />
      </div>

      <div className="relative z-10">

      {activeService ? (
        <ServicePage
          service={activeService}
          onBackToHome={handleBackToHome}
          onOpenConsultation={() => handleOpenConsultation(activeService.title)}
        />
      ) : isContactPageActive ? (
        <Contact
          onBackToHome={() => {
            setIsContactPageActive(false);
            window.history.pushState(null, '', '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : isAboutPageActive ? (
        <About
          onBackToHome={() => {
            setIsAboutPageActive(false);
            window.history.pushState(null, '', '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : isArticlesPageActive ? (
        <ArticlesPage
          onBackToHome={() => {
            setIsArticlesPageActive(false);
            window.history.pushState(null, '', '/');
            setTimeout(() => {
              const element = document.getElementById('articles');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
          onOpenConsultation={() => handleOpenConsultation()}
        />
      ) : (
        <>
          <Hero
            onOpenConsultation={() => handleOpenConsultation()}
            onViewFounder={() => handleSelectSection('about')}
          />

          <main>
            <Services
              onOpenConsultation={() => handleOpenConsultation()}
              activeServiceId={activeServiceId}
              onClearActiveService={() => setActiveServiceId(null)}
              onSelectService={handleSelectService}
            />

            <WhyChooseUs />

            {/* 3 Featured Articles Preview on Landing Page */}
            <Articles
              onOpenConsultation={() => handleOpenConsultation()}
              onViewAllArticles={() => handleSelectSection('articles')}
            />

            <FAQ />
          </main>
        </>
      )}

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Mobile-Optimized Floating WhatsApp Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:left-6 z-40 flex items-center">
        <a
          id="floating-agro-whatsapp-pill"
          href={contactData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white rounded-full shadow-xl text-xs sm:text-sm font-bold transition-transform hover:scale-105 active:scale-95 border border-white/80"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        prefillMessage={prefillMessage}
        initialCategory={initialCategory}
      />

      </div>
    </div>
  );
}
