import React from 'react';

export interface SocialLink {
  icon: React.ElementType;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  overview?: string;
  imageUrl: string;
  link: string;
  githubLink?: string;
  comingSoon?: boolean;
}

export interface Skills {
  skills: string[];
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

