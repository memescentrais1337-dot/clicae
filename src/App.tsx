/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemComparison } from './components/ProblemComparison';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { AudienceSegments } from './components/AudienceSegments';
import { CommercialCTA } from './components/CommercialCTA';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceItem } from './data/config';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Smooth reveal animations on section entry
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('section').forEach((section, index) => {
        if (index === 0) return;
        gsap.fromTo(
          section,
          { opacity: 0.9, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleOpenQuote = () => {
    setSelectedService(null);
    setQuoteModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  const handleExploreProjects = () => {
    const beforeAfterEl = document.getElementById('o-problema');
    if (beforeAfterEl) {
      beforeAfterEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D17] text-[#F5F6FA] flex flex-col font-sans selection:bg-[#2457FF] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onExploreProjects={handleExploreProjects}
        />

        {/* Section 2: O Problema (Before / After Comparison) */}
        <ProblemComparison />

        {/* Section 3: Como Funciona (3 Steps) */}
        <HowItWorks />

        {/* Section 4: Outros Serviços (Cardápios, Portfólio Artístico, etc.) */}
        <Services onSelectService={handleSelectService} />

        {/* Section 5: Para quem é o Clicaê? */}
        <AudienceSegments onOpenQuote={handleOpenQuote} />

        {/* Section 6: Chamada Comercial (Conversão) */}
        <CommercialCTA onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Quote / Brief Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
