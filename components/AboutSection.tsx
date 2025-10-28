import React from 'react';
// FIX: Add Variants to import from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';

const skills = [
    "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", 
    "GraphQL", "PostgreSQL", "Docker", "Framer Motion", "UI/UX Design"
];

// FIX: Add Variants type annotation for type safety.
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

// FIX: Add Variants type annotation to fix type error for 'ease' property.
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const AboutSection: React.FC = () => {
    return (
        <section className="bg-white py-20 sm:py-28">
            <motion.div 
                className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Left Side: Text Content */}
                <div className="text-center lg:text-left">
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        About Me
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-4">
                        As a passionate full-stack developer, I thrive on turning complex problems into elegant, user-centric digital experiences. My journey in tech is driven by a mission to build software that is not only functional and scalable but also a joy to use.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-8">
                        My core values are rooted in continuous learning, collaboration, and a commitment to quality. I believe the best products are born from a deep understanding of user needs and a transparent, iterative development process.
                    </motion.p>

                    <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-gray-800 mb-5">
                        Key Skills
                    </motion.h3>
                    <motion.div 
                        className="flex flex-wrap gap-3 justify-center lg:justify-start"
                        variants={containerVariants} // Re-using container for staggering children
                    >
                        {skills.map(skill => (
                            <motion.span 
                                key={skill} 
                                className="bg-indigo-100 text-indigo-700 font-medium text-sm px-4 py-2 rounded-full"
                                variants={itemVariants}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Right Side: Image */}
                <motion.div 
                    className="flex justify-center"
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] } }
                    }}
                >
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7C87F7] to-[#4E58C7] rounded-full transform -rotate-12"></div>
                        <img 
                            src="../assets/Tchiabe Ngouabe_Loic Maxwell_BF.png"
                            alt="Profile Avatar"
                            className="relative object-cover w-full h-full rounded-full border-8 border-white shadow-2xl"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;