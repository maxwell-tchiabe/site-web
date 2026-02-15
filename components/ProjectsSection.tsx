import React, { useState } from 'react';
// FIX: Add Variants to import from framer-motion to fix type errors.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { projectData } from '../constants';
import { ExternalLink, GitHub as GitHubIcon, X, Globe, Share } from './Icons';
import { Project } from '../types';

// FIX: Add Variants type annotation for type safety.
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

// FIX: Add Variants type annotation to fix type error for 'ease' property.
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col lg:flex-row relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Project Image */}
                <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden pointer-events-none" />
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                {project.comingSoon ? 'Work in Progress' : 'Project Detail'}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{project.title}</h3>

                        <div className="space-y-6 mb-10">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Overview</h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {project.overview || project.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {!project.comingSoon && project.link !== '#' && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/50 group"
                            >
                                <Globe className="w-5 h-5" />
                                <span>Live Website</span>
                                <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                        )}
                        {!project.comingSoon && project.githubLink && project.githubLink !== '#' && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-500/50 group"
                            >
                                <GitHubIcon className="w-5 h-5" />
                                <span>Source Code</span>
                                <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                        )}
                        {project.comingSoon && (
                            <div className="col-span-full py-4 text-center border-2 border-dashed border-gray-200 rounded-xl text-gray-400 font-medium italic">
                                Full case study and links coming soon...
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectsSection: React.FC = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const showMoreProjects = () => {
        setVisibleProjects(projectData.length);
    };

    return (
        <section id="projects" className="bg-[#f0f4ff] py-20 sm:py-28">
            <motion.div
                key={visibleProjects}
                className="container mx-auto px-6 lg:px-8 text-center"
                initial="hidden"
                whileInView="visible"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    My Recent Work
                </motion.h2>
                <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
                    Here are a few projects I've worked on recently in the Cloud, DevOps, and Fullstack space.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    <AnimatePresence>
                        {projectData.slice(0, visibleProjects).map((project) => (
                            <motion.div
                                key={project.id}
                                className={`relative flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer transform transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2`}
                                variants={itemVariants}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.comingSoon ? 'filter grayscale' : ''}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-white font-semibold flex items-center gap-2">
                                            View Details <ExternalLink className="w-4 h-4" />
                                        </span>
                                    </div>
                                    {project.comingSoon && (
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                Coming Soon
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-8 text-left flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 mb-6 flex-grow">{project.description}</p>
                                    <div className="pt-2 flex items-center text-indigo-600 text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                                        Explore Scope <Share className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {visibleProjects < projectData.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-16"
                    >
                        <button
                            onClick={showMoreProjects}
                            className="bg-indigo-600 text-white font-bold py-4 px-10 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-indigo-500/50"
                        >
                            See More Projects
                        </button>
                    </motion.div>
                )}
            </motion.div>

            {/* Modal Portal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;
