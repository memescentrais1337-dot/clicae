/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { PhoneMockup } from './PhoneMockup';
import { ArrowRight, ChevronDown, Layers, Palette, Zap } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreProjects: () => void;
  introFinished?: boolean;
}

interface HeroShowcaseModel {
  id: string;
  name: string;
  handle: string;
  category: string;
  bio: string;
  avatarText: string;
  videoUrl: string;
  videoAspectRatio: string;
  caption: string;
  glowRgba: string;
  theme: {
    bg: string;
    cardBg: string;
    text: string;
    primary: string;
    accent: string;
    border: string;
  };
}

const SHOWCASE_MODELS: HeroShowcaseModel[] = [
  {
    id: 'tocae',
    name: 'Tocaê',
    handle: '@tocae',
    category: 'Entretenimento & Música',
    bio: 'Experiência digital exclusiva criada sob medida para conectar fãs e agenda.',
    avatarText: 'TC',
    videoUrl: encodeURI('/video/tocaê.MP4'),
    videoAspectRatio: '1288 / 2404',
    caption: 'Tocaê — Página de bio personalizada em ação',
    glowRgba: 'rgba(36,87,255,0.22)',
    theme: {
      bg: '#0C0F1D',
      cardBg: '#161A2E',
      text: '#F5F6FA',
      primary: '#2457FF',
      accent: '#FF684F',
      border: 'rgba(36, 87, 255, 0.3)',
    },
  },
  {
    id: 'blackball',
    name: 'Blackball',
    handle: '@blackball',
    category: 'Marca & Entretenimento',
    bio: 'Visual marcante, links estratégicos e identidade única.',
    avatarText: 'BB',
    videoUrl: encodeURI('/video/Blackball.MP4'),
    videoAspectRatio: '1290 / 2376',
    caption: 'Blackball — Página de bio personalizada em ação',
    glowRgba: 'rgba(255,104,79,0.2)',
    theme: {
      bg: '#0C0D12',
      cardBg: '#191B24',
      text: '#F5F6FA',
      primary: '#FF684F',
      accent: '#2457FF',
      border: 'rgba(255, 104, 79, 0.3)',
    },
  },
  {
    id: 'onze-lounge',
    name: 'Onze Lounge',
    handle: '@onzelounge',
    category: 'Lounge & Gastrobar',
    bio: 'Gastronomia sofisticada, coquetelaria autoral e música ao vivo.',
    avatarText: '11',
    videoUrl: encodeURI('/video/Onze Lounge.MP4'),
    videoAspectRatio: '1290 / 2506',
    caption: 'Onze Lounge — Página de bio personalizada em ação',
    glowRgba: 'rgba(229,169,60,0.2)',
    theme: {
      bg: '#0F111A',
      cardBg: '#1A1D2E',
      text: '#F5F6FA',
      primary: '#E5A93C',
      accent: '#FF684F',
      border: 'rgba(229, 169, 60, 0.25)',
    },
  },
];

export const Hero: React.FC<HeroProps> = ({
  onOpenQuote,
  onExploreProjects,
  introFinished = true,
}) => {
  const [percentCount, setPercentCount] = useState(100);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [activeModelId, setActiveModelId] = useState<string>('tocae');
  const [showModelSelector, setShowModelSelector] = useState<boolean>(false);

  const activeModel =
    SHOWCASE_MODELS.find((m) => m.id === activeModelId) || SHOWCASE_MODELS[0];

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId = 0;
    const duration = 900;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercentCount(Math.round(40 + eased * 60));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: Math.round(-ny * 9 * 10) / 10,
      ry: Math.round(nx * 11 * 10) / 10,
    });
  };

  const quickNavItems = [
    { label: 'Antes vs Depois', href: '#o-problema' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <section className="relative lg:min-h-[90vh] pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden flex items-center">
      {/* Background Ambient Lighting & Neon Aura (GPU-light radial gradients) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/4 w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] rounded-full animate-float-slow"
          style={{ background: 'radial-gradient(circle, rgba(36,87,255,0.16) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-24 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full animate-float-counter"
          style={{ background: 'radial-gradient(circle, rgba(255,104,79,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(229,169,60,0.1) 0%, transparent 70%)' }}
        />
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
            <div
              className="animate-fade-up inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wide uppercase text-[#A5B4FC] mb-3 sm:mb-4"
              style={{ animationDelay: '40ms' }}
            >
              <span className="text-[#2457FF] font-bold animate-pulse">●</span>
              <span>A evolução do link na bio</span>
              <span className="text-white/30">/</span>
              <span className="text-[#FF684F]">Muito mais que um link</span>
            </div>

            {/* Main Headline */}
            <h1
              className="animate-fade-up text-[2rem] sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1] text-balance mb-4 sm:mb-6"
              style={{ animationDelay: '100ms' }}
            >
              Sua marca é única.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2457FF] via-[#A855F7] to-[#FF684F] animate-gradient-flow">
                Sua bio também deveria ser.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-up text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal"
              style={{ animationDelay: '160ms' }}
            >
              {SITE_CONFIG.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div
              className="animate-fade-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-10"
              style={{ animationDelay: '220ms' }}
            >
              <button
                onClick={onOpenQuote}
                className="group relative overflow-hidden min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#2457FF] via-[#6D4AFF] to-[#FF684F] animate-gradient-flow hover:opacity-95 rounded-2xl shadow-xl shadow-[#2457FF]/30 hover:shadow-[#2457FF]/50 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 animate-shimmer-sweep"
                />
                <span className="relative">{SITE_CONFIG.hero.ctaPrimary}</span>
                <ArrowRight className="relative w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreProjects}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>{SITE_CONFIG.hero.ctaSecondary}</span>
                <ChevronDown className="w-4 h-4 text-slate-400 animate-bounce" style={{ animationDuration: '2.4s' }} />
              </button>
            </div>

            {/* Mobile Quick Jump Strip (Easy 1-tap navigation right from the first screen) */}
            <div
              className="animate-fade-up lg:hidden w-full mb-6"
              style={{ animationDelay: '260ms' }}
            >
              <span className="text-[11px] font-medium text-slate-400 block mb-2">
                Navegue rápido:
              </span>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {quickNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3.5 py-2 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl whitespace-nowrap shrink-0 transition-colors active:scale-95"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Value Indicators */}
            <div
              className="animate-fade-up pt-5 sm:pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-3 sm:gap-4"
              style={{ animationDelay: '300ms' }}
            >
              <div>
                <span className="block text-lg sm:text-2xl font-bold font-display text-white tabular-nums">
                  {percentCount}%
                </span>
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

          {/* Right Column: Interactive Model Showcase Smartphone (Default: Tocaê) */}
          <div
            onMouseMove={handleStageMouseMove}
            onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
            className="lg:col-span-6 relative flex flex-col items-center justify-center pt-2 lg:pt-0 lg:min-h-[540px]"
          >
            {/* Ambient Lighting Glow Behind the Phone (Zero blur filter) */}
            <div
              className="absolute w-[300px] sm:w-[420px] h-[460px] sm:h-[560px] rounded-[60px] pointer-events-none transition-all duration-500"
              style={{
                background: `radial-gradient(circle at 50% 45%, ${activeModel.glowRgba} 0%, rgba(36,87,255,0.12) 45%, transparent 75%)`,
              }}
            />

            {/* Smartphone Container (Matches exact real video aspect ratio) */}
            <div
              className="relative w-full max-w-[260px] sm:max-w-[295px] lg:max-w-[310px] flex flex-col items-center"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: 'transform 220ms ease-out',
              }}
            >
              {/* Floating Orbit Card Top-Left */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#141729]/95 border border-white/15 shadow-xl absolute -left-14 top-16 z-30 animate-float-counter pointer-events-none">
                <span className="p-1.5 rounded-lg bg-[#2457FF]/20 text-[#2457FF]">
                  <Palette className="w-3.5 h-3.5" />
                </span>
                <div className="text-left leading-tight">
                  <span className="block text-[11px] font-bold text-white">Design Autoral</span>
                  <span className="block text-[10px] text-slate-400">Identidade exclusiva</span>
                </div>
              </div>

              {/* Floating Orbit Card Bottom-Right */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#141729]/95 border border-white/15 shadow-xl absolute -right-12 bottom-32 z-30 animate-float-slow pointer-events-none">
                <span className="p-1.5 rounded-lg bg-[#FF684F]/20 text-[#FF684F]">
                  <Zap className="w-3.5 h-3.5" />
                </span>
                <div className="text-left leading-tight">
                  <span className="block text-[11px] font-bold text-white">Experiência Real</span>
                  <span className="block text-[10px] text-slate-400">Links em 1 toque</span>
                </div>
              </div>

              <div className="w-full animate-float-slow">
                <PhoneMockup
                  compact
                  brandName={activeModel.name}
                  handle={activeModel.handle}
                  category={activeModel.category}
                  bio={activeModel.bio}
                  theme={activeModel.theme}
                  actions={[]}
                  avatarText={activeModel.avatarText}
                  screenVideoUrl={activeModel.videoUrl}
                  videoAspectRatio={activeModel.videoAspectRatio}
                  playWhenVisible={introFinished}
                  className="w-full"
                />
              </div>

              {/* Sleek Subtitle Caption Below Phone */}
              <div className="mt-4 sm:mt-5 flex items-center gap-2 text-xs text-slate-300 font-medium text-center">
                <span
                  className="w-2 h-2 rounded-full animate-pulse shrink-0 transition-colors"
                  style={{ backgroundColor: activeModel.theme.primary }}
                />
                <span>{activeModel.caption}</span>
              </div>

              {/* "Ver outros modelos" Button + Selector Drawer */}
              <div className="mt-3.5 w-full flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setShowModelSelector((prev) => !prev)}
                  aria-expanded={showModelSelector}
                  className="min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/8 hover:bg-white/14 border border-white/15 hover:border-[#2457FF]/50 text-xs font-semibold text-white shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-[#2457FF]" />
                  <span>Ver outros modelos</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-300 transition-transform duration-200 ${
                      showModelSelector ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showModelSelector && (
                  <div className="mt-3 w-full max-w-[330px] p-2 rounded-2xl bg-[#121526]/95 border border-white/15 shadow-2xl animate-pop-in">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 text-center mb-2">
                      Escolha um modelo para visualizar
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {SHOWCASE_MODELS.map((model) => {
                        const isSelected = model.id === activeModel.id;
                        return (
                          <button
                            key={model.id}
                            type="button"
                            onClick={() => setActiveModelId(model.id)}
                            aria-pressed={isSelected}
                            className={`min-h-[42px] px-2 py-2 rounded-xl text-[11px] font-bold transition-all duration-200 flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95 ${
                              isSelected
                                ? 'bg-[#2457FF] text-white shadow-md shadow-[#2457FF]/30 border border-[#2457FF]'
                                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                            }`}
                          >
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{
                                backgroundColor: isSelected ? '#FFFFFF' : model.theme.primary,
                              }}
                            />
                            <span className="truncate max-w-full">{model.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
