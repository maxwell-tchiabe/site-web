import React from 'react';
// FIX: Add Variants to import from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';
import { Phone, Play, Linkedin, Instagram, TwitterX, PhoneOff, MicOff, Share } from './Icons';

// Animation variants for Framer Motion
// FIX: Add Variants type annotation for type safety.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// FIX: Add Variants type annotation to fix type error for 'ease' property.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// FIX: Add Variants type annotation to fix type error for 'ease' property.
const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" }}
}

// FIX: Add Variants return type annotation to fix type error for 'ease' property.
const floatingVariants = (delay = 0): Variants => ({
    initial: { y: 0 },
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
        },
    },
});

// Helper Components defined outside the main component to prevent re-renders
const DoctorsCard: React.FC = () => (
    <motion.div variants={{...itemVariants, ...floatingVariants(0.5)}} className="absolute bottom-16 -left-12 md:bottom-24 md:-left-16 lg:bottom-16 lg:-left-20 xl:-left-10 w-60">
        <div className="bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-lg">
            <div className="flex items-center">
                <div className="flex -space-x-3">
                    {[10, 25, 30, 45, 50].map((imgId) => (
                         <img key={imgId} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/40?img=${imgId}`} alt={`Doctor ${imgId}`} />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                        +
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-600 mt-2 font-medium">More than <span className="font-bold text-gray-800">150+ experienced doctors</span> around the world</p>
        </div>
    </motion.div>
);

const ServiceCard: React.FC = () => (
     <motion.div variants={{...itemVariants, ...floatingVariants(0.8)}} className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-12 w-48">
        <div className="bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-lg flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
                <p className="text-[10px] text-gray-500 font-medium">24 hour service</p>
                <p className="text-sm font-bold text-gray-800">Available for remote work</p>
            </div>
        </div>
    </motion.div>
);


const HeroSection: React.FC = () => {
    return (
        <section className="mt-8">
            <div className="relative bg-gradient-to-br from-[#7C87F7] to-[#4E58C7] rounded-3xl lg:rounded-[50px] p-6 sm:p-10 lg:p-16 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/0.05)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
                
                <motion.div 
                    className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <motion.div variants={itemVariants} className="inline-block bg-white/20 text-white text-xs font-semibold py-1.5 px-4 rounded-full mb-4">
                            #1 AI & Fullstack development:Build the Future
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                            Loic Maxwell Tchiabe 
                        </motion.h1>
                        <motion.p variants={itemVariants} className="mt-6 text-base sm:text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                            I build modern, responsive, and high-performance web applications. Let's turn your ideas into reality.                        </motion.p>
                        <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-transparent border-2 border-white/80 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-colors duration-300">
                                See My Work
                            </button>
                            <button className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300">
                                Book a Discovery Call
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Content - Doctor Image and floating cards */}
                    <div className="relative h-[450px] sm:h-[550px] lg:h-full flex items-end justify-center">
                        <motion.div 
                            className="absolute top-4 right-1 flex gap-2 "
                            variants={itemVariants}
                        >
                            {[Linkedin, Instagram, TwitterX].map((Icon, index) => (
                                <motion.a 
                                    key={index} 
                                    href="#" 
                                    className="bg-white/20 p-2.5 rounded-full text-white hover:bg-white/30"
                                    whileHover={{scale: 1.1}}
                                    transition={{type: "spring", stiffness: 300}}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div 
                            className="relative w-full h-full"
                            variants={imageVariants}
                        >
                            <img 
                                src="../assets/Tchiabe Ngouabe_Loic Maxwell.png"
                                alt="Smiling maxwell tchiabe"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom h-full w-auto max-w-none" 
                            />
                             {/* Floating Cards relative to the doctor image */}
                            <ServiceCard/>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;