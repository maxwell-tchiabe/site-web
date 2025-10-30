
import type { SocialLink, Project } from './types';
import { Youtube, Linkedin, GitHub } from './components/Icons';

export const skills: string[] = [
    "Java","Spring Boot", "Python", "JavaScript", "HTML", "CSS", "Angular", "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", 
    "GraphQL", "PostgreSQL", "Docker", "RAG", "LLMs", "AI Integration","AWS", "Azure", "GCP"
];

export const socialLinks: SocialLink[] = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/loic-maxwell-tchiabe-softwareentwickler-cloud-ai-java-python-angular/' },
    { icon: GitHub, href: 'https://github.com/maxwell-tchiabe' },
    { icon: Youtube, href: 'https://www.youtube.com/@MaxwellTBTech' },
];

export const projectData: Project[] = [
    {
        id: 1,
        title: 'AI companion system',
        description: 'An advanced AI companion system built with Python and Next.js that provides interactive learning, conversation, and personalized assistance. The platform uses a sophisticated graph-based memory system and multiple AI modules to create an engaging and adaptive user experience.',
        imageUrl: './public/assets/Projet-1-SparringPartner.png',
        link: 'https://github.com/maxwell-tchiabe/sparring-Partner',
    },
    {
        id: 2,
        title: 'Web App for Learning Finance',
        description: 'A web application for learning finance, investment, and real estate, using RAG or LLM agent.',
        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
        link: '#',
        comingSoon: true,
    },
    {
        id: 3,
        title: 'AI Agent',
        description: 'Creating an AI agent.',
        imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop',
        link: '#',
        comingSoon: true,
    },
];
