/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  iconName: string; // Lucide icon identifier
  image: string;
  description: string;
  details: string[];
  visi?: string;
  misi?: string;
  link?: string;
  whyChooseUs?: string[];
  servicesList?: {
    category: string;
    items?: string[];
    description?: string;
  }[];
  packages?: {
    name: string;
    items: string[];
  }[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Office' | 'Apartment' | 'Villa' | 'Restaurant' | 'Retail';
  location: string;
  area: string;
  style: string;
  year: number;
  image: string;
  beforeImage?: string; // For Before-After slider
  afterImage?: string; // For Before-After slider
  description: string;
  keyFeatures: string[];
}

export interface ProcessStep {
  step: string; // e.g. "01"
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
  image: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing' | 'Materials' | 'Warranty';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  category: string;
  date: string;
  image: string;
}
