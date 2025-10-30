import React from 'react';

export interface SocialLink {
  icon: React.ElementType;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  comingSoon?: boolean;
}

export interface Skills {
  skills: string[];
}
