import React from 'react';
import { FixImages } from "./FixImages";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { MiniCustomizer } from './components/MiniCustomizer';
import { QualitySection } from './components/QualitySection';
import { Gallery } from './components/Gallery';
import { ArtistsSection } from './components/ArtistsSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="texture-bg min-h-screen">
      <FixImages />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <MiniCustomizer />
        <QualitySection />
        <Gallery />
        <ArtistsSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
