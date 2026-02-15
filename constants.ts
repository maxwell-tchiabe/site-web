
import type { SocialLink, Project } from './types';
import { Youtube, Linkedin, GitHub } from './components/Icons';
import SparringPartnerImage from './assets/Projet_1_SparringPartner.png';
import FinedMentorImage from './assets/chat-feature.png';

export const skills: string[] = [
    "Java", "Spring Boot", "Python", "JavaScript", "Angular", "React", "TypeScript", "Node.js", "Tailwind CSS",
    "GraphQL", "PostgreSQL", "Docker", "Kubernetes", "Rancher", "Prometheus", "Grafana", "ArgoCD", "Jenkins",
    "RAG", "LLMs", "AI Integration", "Fullstack Development", "AWS", "Azure", "GCP"
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
        description: 'An advanced AI companion system built with Python and Next.js.',
        overview: 'This project is a sophisticated AI companion designed for interactive learning and personalized assistance. It features a graph-based memory system that allows for long-term context retention and adaptive conversations. Built with Python for the backend and Next.js for a smooth frontend experience.',
        imageUrl: SparringPartnerImage,
        link: 'https://github.com/maxwell-tchiabe/sparring-Partner',
        githubLink: 'https://github.com/maxwell-tchiabe/sparring-Partner',
    },
    {
        id: 2,
        title: 'Fined-mentor for Learning Finance',
        description: 'A platform for learning finance, investment, and real estate.',
        overview: 'A comprehensive educational platform focused on financial literacy, real estate, and investment strategies. It leverages RAG (Retrieval-Augmented Generation) and LLM agents to provide personalized learning paths and instant answers to complex financial questions. Features an interactive chat mentor and an adaptive assessment engine.',
        imageUrl: FinedMentorImage,
        link: 'https://fined-mentor.maxwelltbtech.com/',
        githubLink: 'https://github.com/maxwell-tchiabe/fined-mentor',
        comingSoon: false,
    },
    {
        id: 3,
        title: 'AI Agent',
        description: 'Autonomous AI agent for complex task automation.',
        overview: 'This project explores the development of autonomous AI agents capable of broken-down complex tasks into manageable steps. It focuses on task planning, tool usage, and self-correction mechanisms to achieve high reliability in automated workflows.',
        imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop',
        link: '#',
        githubLink: '#',
        comingSoon: true,
    },
];
