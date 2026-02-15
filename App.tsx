import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CoachingSection from './components/CoachingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#f0f4ff] text-gray-800 overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4 sm:pb-6">
        <HeroSection />
      </main>
      <AboutSection />
      <ProjectsSection />
      <CoachingSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
