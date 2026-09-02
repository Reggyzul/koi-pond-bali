/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  Translations,
  translations,
  bilingualServicesData,
  bilingualWhyChooseUsData,
  bilingualFaqData,
  bilingualArticlesData
} from '../locales/translations';
import { Service, WhyChooseUsItem, FAQItem, Article } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  servicesData: Service[];
  whyChooseUsData: WhyChooseUsItem[];
  faqData: FAQItem[];
  articlesData: Article[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('koi_pond_lang');
        if (saved === 'id' || saved === 'en') return saved;
      } catch (e) {
        console.warn('localStorage not accessible:', e);
      }
    }
    return 'id';
  });

  const setLanguage = (lang: Language) => {
    const validLang: Language = lang === 'en' ? 'en' : 'id';
    setLanguageState(validLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('koi_pond_lang', validLang);
        document.documentElement.lang = validLang;
      } catch (e) {
        console.warn('localStorage write failed:', e);
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const currentLang: Language = language === 'en' ? 'en' : 'id';

  const value: LanguageContextType = {
    language: currentLang,
    setLanguage,
    toggleLanguage,
    t: translations[currentLang] || translations.id,
    servicesData: bilingualServicesData[currentLang] || bilingualServicesData.id || [],
    whyChooseUsData: bilingualWhyChooseUsData[currentLang] || bilingualWhyChooseUsData.id || [],
    faqData: bilingualFaqData[currentLang] || bilingualFaqData.id || [],
    articlesData: bilingualArticlesData[currentLang] || bilingualArticlesData.id || []
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
