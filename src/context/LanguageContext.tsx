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
      const saved = localStorage.getItem('koi_pond_lang');
      if (saved === 'id' || saved === 'en') return saved;
    }
    return 'id';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('koi_pond_lang', lang);
      document.documentElement.lang = lang;
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

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    servicesData: bilingualServicesData[language],
    whyChooseUsData: bilingualWhyChooseUsData[language],
    faqData: bilingualFaqData[language],
    articlesData: bilingualArticlesData[language]
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
