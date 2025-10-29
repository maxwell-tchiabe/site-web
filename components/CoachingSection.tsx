import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle } from './Icons';

const benefits = [
    "Personalized learning roadmap",
    "In-depth code reviews & best practices",
    "Career strategy & interview preparation",
    "Real-world project guidance & support",
    "Accountability and motivation"
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const CoachingSection: React.FC = () => {
    return (
        <section id="coaching" className="bg-white py-20 sm:py-28">
            <motion.div 
                className="container mx-auto px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="text-center mb-12">
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Unlock Your Full Potential
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Whether you're starting out, switching careers, or aiming for the next level, my personalized coaching is designed to give you the clarity, skills, and confidence you need to succeed.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Image / Decorative element */}
                    <motion.div 
                        className="relative flex items-center justify-center p-8"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                    >
                         <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl transform -rotate-6"></div>
                         <div className="relative bg-white p-6 rounded-2xl shadow-xl w-full">
                            <h3 className="font-bold text-gray-800 text-xl mb-3">My Coaching Philosophy</h3>
                            <p className="text-gray-600">
                                I believe in a hands-on, mentorship-driven approach. We'll work together to identify your goals, tackle real-world challenges, and build a portfolio that truly stands out. It's not just about learning to code; it's about learning to think and build like a professional developer.
                            </p>
                         </div>
                    </motion.div>

                    {/* Right Side: Benefits List */}
                    <motion.div 
                        variants={containerVariants}
                        className="space-y-4"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div 
                                key={index} 
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <CheckCircle className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{benefit}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    {/* Paid Option Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-gray-800 p-8 rounded-2xl text-white text-center flex flex-col"
                    >
                        <h3 className="text-2xl font-bold mb-3">1-on-1 Coaching</h3>
                        <p className="text-gray-300 mb-6 flex-grow">Get dedicated, personalized guidance to accelerate your career growth.</p>
                        <a 
                            href="#"
                            className="bg-indigo-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 w-full"
                        >
                            Book a Discovery Call
                        </a>
                    </motion.div>

                    {/* Free Option Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-indigo-50 p-8 rounded-2xl text-gray-800 text-center flex flex-col"
                    >
                        <h3 className="text-2xl font-bold mb-3">Join the Community</h3>
                        <p className="text-gray-600 mb-6 flex-grow">Access free resources, join discussions, and get weekly tips in my newsletter.</p>
                        <a 
                            href="https://maxwelltbtech.substack.com/embed"
                            className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 w-full"
                        >
                            Get Free Access
                        </a>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default CoachingSection;