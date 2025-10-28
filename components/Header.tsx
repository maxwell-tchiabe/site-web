
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Asterisk, Menu, X } from './Icons';

const navLinks = ["Home", "About", "Projects", "Contact", "Blog"];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white/80 backdrop-blur-md rounded-full shadow-md py-3 px-6 sticky top-4 z-50">
            <div className="flex items-center justify-between">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2">
                    <div className="w-10 h-10 text-white p-2 rounded-full">
                        <img 
                                src="../assets/CodeTechFree original.png"
                                alt="Smiling Maxwell Tchiabe"
                            />
                    </div>
                    <span className="font-bold text-l text-gray-800">Maxwell TB Tech</span>
                </motion.div>

                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link, i) => (
                         <motion.a 
                            key={link}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            href="#" 
                            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                            {link}
                         </motion.a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <motion.button 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:block bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm">
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
                                <a key={link} href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors block text-center py-2">{link}</a>
                            ))}
                            <button className="sm:hidden bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm w-full">
                                Book a Discovery Call
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
