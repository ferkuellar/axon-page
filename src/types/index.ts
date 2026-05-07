export interface NavLink {
  label: string;
  target: string;
}

export interface Service {
  tag: string;
  name: string;
  description: string;
  chips: string[];
}

export interface ProcessStep {
  number: string;
  name: string;
  description: string;
}

export interface Plan {
  tag: string;
  name: string;
  price: string;
  note: string;
  highlighted: boolean;
  items: string[];
}

export interface Difference {
  number: string;
  title: string;
  body: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface Benefit {
  title: string;
  body: string;
}

export interface Brand {
  email: string;
  whatsapp: string;
  location: string;
}

export interface ContactFormOptions {
  services: string[];
  budgets: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  images: string[];
  video?: string;
  metrics: ProjectMetric[];
  year: string;
  client: string;
  links: ProjectLink[];
  tags: string[];
  featured: boolean;
  results: string[];
  accent: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
  result: string;
  category: string;
  technologies: string[];
  initials: string;
  featured?: boolean;
}
