import React, { useState } from 'react';
// FIX: Add Variants to import from framer-motion to fix type errors.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { projectData } from '../constants';

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

const ProjectsSection: React.FC = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);

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
                    Here are a few projects I've worked on recently. Want to see more? Just ask.
                </motion.p>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    <AnimatePresence>
                        {projectData.slice(0, visibleProjects).map((project) => (
                            <motion.a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white rounded-xl shadow-md overflow-hidden group transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
                                variants={itemVariants}
                            >
                                <div className="relative h-56">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm">{project.description}</p>
                                </div>
                            </motion.a>
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
                            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-indigo-500/50"
                        >
                            See More Projects
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default ProjectsSection;
