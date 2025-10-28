import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Linkedin, GitHub, Instagram } from './Icons';

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

const ContactSection: React.FC = () => {
    return (
        <section className="bg-white py-20 sm:py-28">
            <motion.div 
                className="container mx-auto px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="text-center mb-12">
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Have a project in mind, a question, or just want to say hello? My inbox is always open.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Side: Contact Details & Socials */}
                    <motion.div 
                        className="lg:col-span-1 space-y-8"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Details</h3>
                            <a href="mailto:hello@medme.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                                hello@medme.com
                            </a>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Follow Me</h3>
                            <div className="flex items-center gap-4">
                                <motion.a href="#" whileHover={{ scale: 1.1, y: -2 }} className="text-gray-600 hover:text-indigo-600"><Linkedin className="w-6 h-6" /></motion.a>
                                <motion.a href="#" whileHover={{ scale: 1.1, y: -2 }} className="text-gray-600 hover:text-indigo-600"><GitHub className="w-6 h-6" /></motion.a>
                                <motion.a href="#" whileHover={{ scale: 1.1, y: -2 }} className="text-gray-600 hover:text-indigo-600"><Instagram className="w-6 h-6" /></motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.form 
                        className="lg:col-span-2 space-y-6"
                        variants={containerVariants}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <motion.div variants={itemVariants}>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"></textarea>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-indigo-500/50 w-full sm:w-auto"
                            >
                                Send Message
                            </button>
                        </motion.div>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;