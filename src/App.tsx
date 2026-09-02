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
import ServicesPage from './components/ServicesPage';
import WhyChooseUs from './components/WhyChooseUs';
import Articles from './components/Articles';
import ArticlesPage from './components/ArticlesPage';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ServicePage from './components/ServicePage';
import WhatsAppChoiceModal from './components/WhatsAppChoiceModal';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWhatsAppChoiceOpen, setIsWhatsAppChoiceOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState('');
  const [initialCategory, setInitialCategory] = useState('Pembuatan Kolam Koi');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [isContactPageActive, setIsContactPageActive] = useState<boolean>(false);
  const [isAboutPageActive, setIsAboutPageActive] = useState<boolean>(false);
  const [isArticlesPageActive, setIsArticlesPageActive] = useState<boolean>(false);
  const [isServicesPageActive, setIsServicesPageActive] = useState<boolean>(false);

  const { servicesData, language } = useLanguage();

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
      'ikan-koi-bali': 'jual-beli-ikan-koi',

      'perbaikan-listrik-konstruksi': 'perbaikan-listrik-konstruksi',
      'perbaikan-listrik': 'perbaikan-listrik-konstruksi',
      'perbaikan-konstruksi': 'perbaikan-listrik-konstruksi',
      'listrik-kolam': 'perbaikan-listrik-konstruksi',
      'konstruksi-kolam': 'perbaikan-listrik-konstruksi',

      'regular-maintenance': 'regular-maintenance',
      'paket-regular-maintenance': 'regular-maintenance',
      'perawatan-rutin': 'regular-maintenance',
      'maintenance-tahunan': 'regular-maintenance',
      'regular-maintenance-package': 'regular-maintenance'
    };

    const handleNavigationCheck = () => {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const target = path || hash;

      if (target === 'services-all' || target === 'layanan-kami' || target === 'semua-layanan') {
        setIsServicesPageActive(true);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (target === 'contact' || target === 'kontak') {
        setIsContactPageActive(true);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setIsServicesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (target === 'about' || target === 'tentang-kami' || target === 'founder') {
        setIsAboutPageActive(true);
        setIsContactPageActive(false);
        setIsArticlesPageActive(false);
        setIsServicesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (target === 'articles' || target === 'artikel' || target === 'blog' || target === 'edukasi') {
        setIsArticlesPageActive(true);
        setIsAboutPageActive(false);
        setIsContactPageActive(false);
        setIsServicesPageActive(false);
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
        setIsServicesPageActive(false);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setIsServicesPageActive(false);
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
      if (path === 'services-all' || path === 'layanan-kami' || path === 'semua-layanan') {
        setIsServicesPageActive(true);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (path === 'contact' || path === 'kontak') {
        setIsContactPageActive(true);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setIsServicesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (path === 'about' || path === 'tentang-kami' || path === 'founder') {
        setIsAboutPageActive(true);
        setIsContactPageActive(false);
        setIsArticlesPageActive(false);
        setIsServicesPageActive(false);
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (path === 'articles' || path === 'artikel' || path === 'blog' || path === 'edukasi') {
        setIsArticlesPageActive(true);
        setIsAboutPageActive(false);
        setIsContactPageActive(false);
        setIsServicesPageActive(false);
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
        setIsServicesPageActive(false);
      } else {
        setActiveServiceId(null);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
        setIsArticlesPageActive(false);
        setIsServicesPageActive(false);
        setTimeout(() => {
          const element = document.getElementById('services');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

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
      setIsServicesPageActive(false);
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsContactPageActive(false);
    setIsAboutPageActive(false);
    setIsArticlesPageActive(false);
    setIsServicesPageActive(false);
    setActiveServiceId(id);
    window.history.pushState(null, '', '/' + id);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  const handleBackToHome = () => {
    setActiveServiceId(null);
    setIsAboutPageActive(false);
    setIsContactPageActive(false);
    setIsArticlesPageActive(false);
    setIsServicesPageActive(false);
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
    setInitialCategory(categoryName || (language === 'id' ? 'Pembuatan Kolam Koi' : 'Koi Pond Construction'));
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => setIsConsultationOpen(false);

  const handleSelectSection = (sectionId: string) => {
    if (sectionId === 'services-all') {
      setIsServicesPageActive(true);
      setIsContactPageActive(false);
      setIsAboutPageActive(false);
      setIsArticlesPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/layanan-kami');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (sectionId === 'contact') {
      setIsContactPageActive(true);
      setIsAboutPageActive(false);
      setIsArticlesPageActive(false);
      setIsServicesPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (sectionId === 'about') {
      setIsAboutPageActive(true);
      setIsContactPageActive(false);
      setIsArticlesPageActive(false);
      setIsServicesPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/about');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (sectionId === 'articles') {
      setIsArticlesPageActive(true);
      setIsAboutPageActive(false);
      setIsContactPageActive(false);
      setIsServicesPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/articles');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (activeServiceId || isContactPageActive || isAboutPageActive || isArticlesPageActive || isServicesPageActive) {
      setActiveServiceId(null);
      setIsContactPageActive(false);
      setIsAboutPageActive(false);
      setIsArticlesPageActive(false);
      setIsServicesPageActive(false);
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
      ) : isServicesPageActive ? (
        <ServicesPage
          onBackToHome={() => {
            setIsServicesPageActive(false);
            window.history.pushState(null, '', '/');
            setTimeout(() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
          onSelectService={handleSelectService}
          onOpenConsultation={() => handleOpenConsultation()}
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
            onOpenWhatsAppChoice={() => setIsWhatsAppChoiceOpen(true)}
          />

          <main>
            <Services
              onOpenConsultation={() => handleOpenConsultation()}
              activeServiceId={activeServiceId}
              onClearActiveService={() => setActiveServiceId(null)}
              onSelectService={handleSelectService}
              onViewAllServices={() => handleSelectSection('services-all')}
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
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenWhatsAppChoice={() => setIsWhatsAppChoiceOpen(true)}
        onSelectSection={handleSelectSection}
      />

      {/* Floating WhatsApp Circular Bubble (Bottom-Right Corner) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center group">
        <button
          id="floating-agro-whatsapp-bubble"
          onClick={() => setIsWhatsAppChoiceOpen(true)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#25D366] via-[#20ba5a] to-[#128C7E] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.55)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.75)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
          aria-label={language === 'id' ? 'Chat WhatsApp Konsultasi' : 'Chat WhatsApp Consultation'}
        >
          {/* Animated pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
          
          {/* Official WhatsApp SVG Logo */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 fill-current text-white drop-shadow-md"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>

        {/* Hover Tooltip */}
        <div className="absolute right-full mr-3 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-[#04242E]/95 text-white text-xs font-bold py-1.5 px-3 rounded-xl border border-teal-500/30 shadow-lg backdrop-blur-md">
          {language === 'id' ? 'Chat WhatsApp' : 'WhatsApp Chat'}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#04242E] rotate-45 border-r border-t border-teal-500/30" />
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        prefillMessage={prefillMessage}
        initialCategory={initialCategory}
      />

      {/* WhatsApp Choice Modal (Select between 08133034733 or 081295903430) */}
      <WhatsAppChoiceModal
        isOpen={isWhatsAppChoiceOpen}
        onClose={() => setIsWhatsAppChoiceOpen(false)}
      />

      </div>
    </div>
  );
}
