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
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (target === 'about' || target === 'tentang-kami' || target === 'founder') {
        setIsAboutPageActive(true);
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
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
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
        setActiveServiceId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
        return;
      }

      if (path === 'about' || path === 'tentang-kami' || path === 'founder') {
        setIsAboutPageActive(true);
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
      } else {
        setActiveServiceId(null);
        setIsContactPageActive(false);
        setIsAboutPageActive(false);
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
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsContactPageActive(false);
    setIsAboutPageActive(false);
    setActiveServiceId(id);
    window.history.pushState(null, '', '/' + id);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  const handleBackToHome = () => {
    setActiveServiceId(null);
    setIsAboutPageActive(false);
    setIsContactPageActive(false);
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
      setActiveServiceId(null);
      window.history.pushState(null, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (sectionId === 'about') {
      setIsAboutPageActive(true);
      setIsContactPageActive(false);
      setActiveServiceId(null);
      window.history.pushState(null, '', '/founder');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      return;
    }

    if (activeServiceId || isContactPageActive || isAboutPageActive) {
      setActiveServiceId(null);
      setIsContactPageActive(false);
      setIsAboutPageActive(false);
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
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#222222]">
      
      {/* Agro Koi Farm Style Top Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onSelectService={handleSelectService}
        onSelectSection={handleSelectSection}
      />

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
      ) : (
        <>
          <Hero
            onOpenConsultation={() => handleOpenConsultation()}
            onViewFounder={() => handleSelectSection('about')}
            onViewServices={() => handleSelectSection('services')}
          />

          <main>
            <Services
              onOpenConsultation={() => handleOpenConsultation()}
              activeServiceId={activeServiceId}
              onClearActiveService={() => setActiveServiceId(null)}
              onSelectService={handleSelectService}
            />

            <WhyChooseUs />
            <FAQ />
          </main>
        </>
      )}

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Exact Agro Koi Farm Floating Bottom-Left Button */}
      <div className="fixed bottom-5 left-5 z-50 flex items-center gap-2">
        <a
          id="floating-agro-whatsapp-pill"
          href={contactData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 bg-[#1976D2] hover:bg-[#1565C0] text-white rounded-lg shadow-xl text-sm font-bold transition-transform hover:scale-105"
        >
          <span className="p-1 bg-[#25D366] text-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </span>
          <span>Whatsapp Kami</span>
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
  );
}
