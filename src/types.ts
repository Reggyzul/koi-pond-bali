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

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
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
  feedback: string;
  image: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing' | 'Materials' | 'Warranty';
}

export interface MaterialSample {
  id: string;
  name: string;
  category: 'Wood' | 'Stone' | 'Fabric' | 'Metal' | 'Glass';
  textureUrl: string;
  description: string;
  sustainable: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
}
