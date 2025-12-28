
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import InterviewTips from './components/InterviewTips';
import About from './components/About';
import Footer from './components/Footer';
import DevelopmentDisclaimer from './components/DevelopmentDisclaimer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DevelopmentDisclaimer />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <SuccessStories />
        <Testimonials />
        <InterviewTips />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
