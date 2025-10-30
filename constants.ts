
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
        title: 'Telemedicine Mobile App',
        description: 'A cross-platform mobile app for virtual consultations, prescription management, and secure messaging between patients and healthcare providers.',
        imageUrl: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: 3,
        title: 'Mental Wellness Dashboard',
        description: 'An analytics dashboard for corporate clients to monitor team well-being and access mental health resources seamlessly.',
        imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: 4,
        title: 'Healthcare CRM System',
        description: 'A custom CRM for managing patient relationships, medical records, and billing, built for a large hospital network.',
        imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: 5,
        title: 'E-commerce for Medical Supplies',
        description: 'A full-featured e-commerce site for B2B medical supply distribution with inventory management and secure payments.',
        imageUrl: 'https://images.unsplash.com/photo-1618932260643-4c72a4439761?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: 6,
        title: 'Project Six',
        description: 'Description for project six.',
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: 7,
        title: 'Project Seven',
        description: 'Description for project seven.',
        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: 8,
        title: 'Project Eight',
        description: 'Description for project eight.',
        imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop',
        link: '#',
    }
];
