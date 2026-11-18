/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, Math.max(0, y / maxScroll)) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Antes vs Depois', hint: 'Por que somos diferentes', href: '#o-problema' },
    { label: 'Como Funciona', hint: '3 passos simples', href: '#como-funciona' },
    { label: 'Serviços', hint: 'Cardápios, portfólios e bios', href: '#servicos' },
    { label: 'Contato', hint: 'Fale com a equipe', href: '#contato' },
  ];

  const handleCtaClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      const link = document.createElement('a');
      link.href = getWhatsAppUrl();
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0B0D17]/95 sm:bg-[#0B0D17]/90 sm:backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-2.5 sm:py-3.5'
          : 'bg-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Brand Wordmark & Logo */}
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-white font-display whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457FF] rounded-lg"
          >
            <img
              src={SITE_CONFIG.brand.logoUrl}
              alt="Logo Clicaê"
              width={36}
              height={36}
              decoding="async"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-1 ring-white/20 shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
            />
            <span className="relative flex items-center">
              CLICA<span className="text-[#FF684F]">Ê</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F5F6FA]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#2457FF] after:to-[#FF684F] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 min-h-[40px] text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-[#2457FF] to-[#1E40AF] hover:from-[#3366FF] hover:to-[#2457FF] rounded-xl shadow-lg shadow-[#2457FF]/25 hover:shadow-[#2457FF]/45 transition-all duration-300 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Quero minha bio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457FF]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Reading Progress Bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#2457FF] via-[#A855F7] to-[#FF684F]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          opacity: scrolled ? 0.9 : 0,
          transition: 'opacity 200ms ease',
        }}
      />

      {/* Mobile Drawer + Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 top-[64px] bg-black/70 z-40"
            aria-hidden="true"
          />
          <div className="animate-step-in lg:hidden fixed inset-x-0 top-[64px] z-50 bg-[#0E101D] border-b border-white/10 px-4 py-5 shadow-2xl max-h-[calc(100dvh-64px)] overflow-y-auto">
            <nav className="flex flex-col divide-y divide-white/5">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className="animate-fade-up flex items-center justify-between py-3.5 px-2 min-h-[48px] text-slate-100 hover:text-white active:bg-white/5 rounded-xl transition-colors"
                >
                  <div>
                    <span className="block text-base font-semibold font-display">
                      {link.label}
                    </span>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      {link.hint}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </a>
              ))}
            </nav>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-[#2457FF] to-[#FF684F] rounded-xl shadow-lg shadow-[#2457FF]/30 active:scale-95 transition-transform"
              >
                <span>Quero minha bio personalizada</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
                <span>{SITE_CONFIG.brand.domain}</span>
                <span>{SITE_CONFIG.brand.instagramHandle}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
