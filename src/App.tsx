/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, lazy, Suspense } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemComparison } from './components/ProblemComparison';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { CommercialCTA } from './components/CommercialCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem } from './data/config';

const QuoteModal = lazy(() =>
  import('./components/QuoteModal').then((mod) => ({ default: mod.QuoteModal }))
);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
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
      {/* Opening Logo Click Animation */}
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Top Bar Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onExploreProjects={handleExploreProjects}
          introFinished={!showIntro}
        />

        {/* Section 2: O Problema (Before / After Comparison) */}
        <ProblemComparison />

        {/* Section 3: Como Funciona (3 Steps) */}
        <HowItWorks />

        {/* Section 4: Outros Serviços (Cardápios, Portfólio Artístico, etc.) */}
        <Services onSelectService={handleSelectService} />

        {/* Section 5: Chamada Comercial (Conversão) */}
        <CommercialCTA onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Pulsing Floating WhatsApp Button */}
      {!showIntro && !quoteModalOpen && <FloatingWhatsApp />}

      {/* Quote / Brief Modal (Lazy-loaded on demand) */}
      {quoteModalOpen && (
        <Suspense fallback={null}>
          <QuoteModal
            isOpen={quoteModalOpen}
            onClose={() => setQuoteModalOpen(false)}
            selectedService={selectedService}
          />
        </Suspense>
      )}
    </div>
  );
}
