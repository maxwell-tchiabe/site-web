
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Asterisk, Menu, X } from './Icons';
import CodeTechFree from '../assets/CodeTechFree_original.png';

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="w-full bg-white/80 backdrop-blur-md rounded-full shadow-md py-3 px-6">
                    <div className="flex items-center justify-between">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2">
                            <div className="w-10 h-10 text-white p-2 rounded-full">
                                <img 
                                        src={CodeTechFree}
                                        alt="Smiling Maxwell Tchiabe"
                                    />
                            </div>
                            <span className="font-bold text-l text-gray-800">Maxwell TB Tech</span>
                        </motion.div>

                        <nav className="hidden lg:flex items-center gap-6">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * i }}
                                    onClick={() => scrollToSection(link.href.substring(1))}
                                    className="text-sm font-medium text-gray-600 cursor-pointer hover:text-indigo-600 transition-colors bg-transparent">
                                    {link.name}
                                </motion.button>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            <motion.button 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('coaching')}
                                className="hidden sm:block cursor-pointer bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm">
                                Book a Discovery Call   
                            </motion.button>
                            <div className="lg:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 z-50">
                                    {isMenuOpen ? <X/> : <Menu />}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden mt-4"
                            >
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <button key={link.name} onClick={() => scrollToSection(link.href.substring(1))} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors block text-center py-2 bg-transparent">{link.name}</button>
                                    ))}
                                    <button onClick={() => scrollToSection('coaching')} className="sm:hidden bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm w-40 mx-auto">
                                        Book a Discovery Call
                                    </button>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Header;
