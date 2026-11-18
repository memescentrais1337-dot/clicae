/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { PhoneMockup } from './PhoneMockup';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreProjects }) => {
  const quickNavItems = [
    { label: 'Antes vs Depois', href: '#o-problema' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Para quem é', href: '#para-quem' },
  ];

  return (
    <section className="relative lg:min-h-[90vh] pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden flex items-center">
      {/* Background Ambient Lighting & Neon Aura */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] bg-[#2457FF]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-24 w-[380px] sm:w-[450px] h-[380px] sm:h-[450px] bg-[#FF684F]/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] bg-[#E5A93C]/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0D17]/80 to-[#0B0D17]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tag / Micro Kicker */}
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wide uppercase text-[#A5B4FC] mb-3 sm:mb-4">
              <span className="text-[#2457FF] font-bold">●</span>
              <span>A evolução do link na bio</span>
              <span className="text-white/30">/</span>
              <span className="text-[#FF684F]">Muito mais que um link</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1] text-balance mb-4 sm:mb-6">
              Sua marca é única.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2457FF] via-[#A855F7] to-[#FF684F]">
                Sua bio também deveria ser.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal">
              {SITE_CONFIG.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-10">
              <button
                onClick={onOpenQuote}
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#2457FF] via-[#1F4EF5] to-[#FF684F] hover:opacity-95 rounded-2xl shadow-xl shadow-[#2457FF]/30 hover:shadow-[#2457FF]/50 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>{SITE_CONFIG.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={onExploreProjects}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>{SITE_CONFIG.hero.ctaSecondary}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mobile Quick Jump Strip (Easy 1-tap navigation right from the first screen) */}
            <div className="lg:hidden w-full mb-6">
              <span className="text-[11px] font-medium text-slate-400 block mb-2">
                Navegue rápido:
              </span>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {quickNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3.5 py-2 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl whitespace-nowrap shrink-0 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Value Indicators */}
            <div className="pt-5 sm:pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-3 sm:gap-4">
              <div>
                <span className="block text-lg sm:text-2xl font-bold font-display text-white">100%</span>
                <span className="text-xs text-slate-400">Personalizado</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-bold font-display text-white">Zero</span>
                <span className="text-xs text-slate-400">Padrão Linktree</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-bold font-display text-white">Instantâneo</span>
                <span className="text-xs text-slate-400">No Instagram</span>
              </div>
            </div>
          </div>

          {/* Right Column: Single Prominent Onze Lounge Smartphone Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center pt-2 lg:pt-0 lg:min-h-[540px]">
            {/* Ambient Lighting Glow Behind the Phone */}
            <div className="absolute w-[280px] sm:w-[360px] h-[440px] sm:h-[520px] bg-gradient-to-b from-[#2457FF]/25 via-[#E5A93C]/20 to-[#FF684F]/15 rounded-[60px] blur-3xl pointer-events-none" />

            {/* Smartphone Container (Visual Only) */}
            <div className="relative w-full max-w-[270px] sm:max-w-[335px] lg:max-w-[360px] flex flex-col items-center">
              <PhoneMockup
                compact
                brandName="Onze Lounge"
                handle="@onzelounge"
                category="Lounge & Gastrobar"
                bio="Gastronomia sofisticada, coquetelaria autoral e música ao vivo."
                theme={{
                  bg: '#0F111A',
                  cardBg: '#1A1D2E',
                  text: '#F5F6FA',
                  primary: '#E5A93C',
                  accent: '#FF684F',
                  border: 'rgba(229, 169, 60, 0.25)',
                }}
                actions={[]}
                avatarUrl="/imagem/onze_lounge.jpg"
                avatarText="11"
                screenVideoUrl="/video/ONZExCLICAE.mp4"
                videoTitle="Onze Lounge · Bio Personalizada"
                className="w-full transform hover:scale-[1.01] transition-transform duration-300"
              />

              {/* Sleek Subtitle Caption Below Phone */}
              <div className="mt-4 sm:mt-5 flex items-center gap-2 text-xs text-slate-300 font-medium text-center">
                <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse shrink-0" />
                <span>Onze Lounge — Página de bio personalizada em ação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
