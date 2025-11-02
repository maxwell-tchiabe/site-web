import React, { useState, FormEvent, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { socialLinks } from '../constants';
import { FormState, FormErrors } from '../types';

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
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined });
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            setSubmitMessage('EmailJS credentials are not set in the environment variables.');
            setIsSubmitting(false);
            return;
        }

        if (form.current) {
            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then(() => {
                    setSubmitMessage('Thank you for your message! I will get back to you soon.');
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({});
                }, (error) => {
                    console.log(error.text);
                    setSubmitMessage('Something went wrong. Please try again later.');
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };

    return (
        <section id="contact" className="bg-gray-50 py-20 sm:py-28">
            <motion.div 
                className="container mx-auto px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="text-center mb-16">
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Let's Connect
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
                        Have a project in mind, a question, or just want to say hello? My inbox is always open.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Side: Contact Details & Socials */}
                        <div className="p-8 md:p-12 bg-indigo-600 text-white">
                            <motion.div variants={containerVariants} className="space-y-10">
                                <motion.div variants={itemVariants}>
                                    <h3 className="text-2xl font-bold mb-3">Contact Information</h3>
                                    <p className="text-indigo-200">Fill up the form and I will get back to you within 24 hours.</p>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <a href="mailto:maxwelltb4@gmail.com" className="flex items-center gap-4 text-indigo-100 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        maxwelltb4@gmail.com
                                    </a>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <div className="flex items-center gap-5 mt-6">
                                      {socialLinks.map((social, index) => (
                                        <motion.a 
                                            key={index} 
                                            href={social.href} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, y: -3 }}
                                            className="text-indigo-200 hover:text-white transition-colors"
                                        >
                                            <social.icon className="w-6 h-6" />
                                        </motion.a>
                                    ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-8 md:p-12">
                            <motion.form
                                ref={form}
                                className="space-y-6"
                                variants={containerVariants}
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 transition-shadow ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}`} />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 transition-shadow ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}`} />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 transition-shadow ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}`}></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-indigo-600 text-white cursor-pointer font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 w-full disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : 'Send Message'}
                                    </button>
                                </motion.div>
                                {submitMessage && (
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={`text-sm mt-4 ${submitMessage.includes('wrong') ? 'text-red-500' : 'text-green-600'}`}
                                    >
                                        {submitMessage}
                                    </motion.p>
                                )}
                            </motion.form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
