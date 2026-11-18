/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { SITE_CONFIG } from '../data/config';
import { Reveal } from './Reveal';
import { XCircle, CheckCircle2, ArrowLeftRight } from 'lucide-react';

export const ProblemComparison: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const stopAutoDemo = useCallback(() => {
    setHasInteracted(true);
  }, []);

  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = Math.round((clampedX / rect.width) * 100);
    setSliderPos(percentage);
  }, []);

  // Observe when the comparison frame enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth auto-sweep preview showing both sides until the user clicks or drags
  useEffect(() => {
    if (!isVisible || hasInteracted) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      // Smooth sine sweep between 14% and 86% revealing both sides clearly
      const nextPos = 50 + Math.sin(elapsed * 1.45) * 36;
      setSliderPos(Math.round(nextPos * 10) / 10);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, hasInteracted]);

  return (
    <section
      id="o-problema"
      className="relative scroll-mt-16 py-16 sm:py-24 bg-[#0D0F1D] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Lightweight background radial accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(36,87,255,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,104,79,0.12) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">
            <span>O Dilema da Bio</span>
            <span className="text-[#2457FF]">·</span>
            <span>Antes vs Depois</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight text-balance mb-4 sm:mb-5">
            Sua marca merece mais que uma lista de links.
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
            {SITE_CONFIG.problem.subtitle}
          </p>
        </Reveal>

        {/* Interactive Comparison Simulator */}
        <Reveal direction="scale" delay={100} className="max-w-[340px] sm:max-w-[390px] mx-auto mb-12 sm:mb-16">
          <div onPointerDown={stopAutoDemo}>
            {/* Clean Side Labels above comparison */}
            <div className="flex items-center justify-between px-1 mb-3">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 ${
                  sliderPos > 55 ? 'text-rose-300 scale-105' : 'text-rose-300/75'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Linktree genérico
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 ${
                  sliderPos < 45 ? 'text-white scale-105' : 'text-white/80'
                }`}
              >
                Clicaê
                <span className="w-2 h-2 rounded-full bg-[#2457FF]" />
              </span>
            </div>

            {/* Interactive Split Screen Container (9:16 Phone Proportions) */}
            <div
              ref={containerRef}
              onPointerDown={(e) => {
                stopAutoDemo();
                isDragging.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                handlePointerMove(e.clientX);
              }}
              onPointerMove={(e) => {
                if (isDragging.current) {
                  handlePointerMove(e.clientX);
                }
              }}
              onPointerUp={(e) => {
                isDragging.current = false;
                if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                  e.currentTarget.releasePointerCapture(e.pointerId);
                }
              }}
              onPointerCancel={() => {
                isDragging.current = false;
              }}
              className="relative w-full aspect-[9/16] rounded-[30px] sm:rounded-[34px] overflow-hidden border border-white/15 shadow-2xl select-none cursor-ew-resize bg-[#0E1015] touch-pan-y"
            >
              {/* RIGHT / BASE LAYER: Real Clicaê Experience Image */}
              <div className="absolute inset-0 bg-[#0E1015]">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-17_at_20.56.41_fdba96cb.jpeg"
                  alt="Página personalizada Clicaê — Metaforja Soluções Metálicas"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover object-top pointer-events-none select-none"
                />
              </div>

              {/* LEFT / CLIPPED LAYER: Generic Linktree layout (Uses clip-path so it never squishes) */}
              <div
                className="absolute inset-0 bg-[#212429] px-6 pt-12 pb-8 flex flex-col items-center justify-between overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <div className="w-full flex flex-col items-center text-center opacity-85">
                  <div className="w-16 h-16 rounded-full bg-slate-600 mb-3 flex items-center justify-center text-slate-200 font-bold text-sm">
                    MF
                  </div>
                  <span className="text-sm font-bold text-slate-200">@metaforja_go</span>
                  <p className="text-xs text-slate-400 mt-1 max-w-[230px]">
                    Soluções metálicas · Goiânia/GO
                  </p>

                  <div className="w-full space-y-3 mt-8">
                    <div className="p-3.5 rounded-full bg-white text-slate-900 text-xs font-semibold text-center shadow">
                      Solicitar orçamento
                    </div>
                    <div className="p-3.5 rounded-full bg-white text-slate-900 text-xs font-semibold text-center shadow">
                      Conheça a Metaforja (Site)
                    </div>
                    <div className="p-3.5 rounded-full bg-white text-slate-900 text-xs font-semibold text-center shadow">
                      Acompanhe no Instagram
                    </div>
                    <div className="p-3.5 rounded-full bg-white text-slate-900 text-xs font-semibold text-center shadow">
                      Galpões, Mezaninos e Pergolados
                    </div>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400">
                  Linktree genérico
                </span>
              </div>

              {/* Central Draggable Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#2457FF] via-white to-[#FF684F] shadow-[0_0_18px_rgba(36,87,255,0.75)] pointer-events-none z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="relative top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-[#2457FF]">
                  {!hasInteracted && (
                    <span className="absolute inset-0 rounded-full border-2 border-[#2457FF] animate-ping opacity-55" />
                  )}
                  <ArrowLeftRight className="w-4 h-4 text-[#2457FF] relative z-10" />
                </div>
              </div>
            </div>

            {/* Native Touch-Friendly Range Control below comparison */}
            <div className="mt-4 px-1">
              <input
                type="range"
                min={0}
                max={100}
                step={0.5}
                value={sliderPos}
                onPointerDown={stopAutoDemo}
                onChange={(e) => {
                  stopAutoDemo();
                  setSliderPos(Number(e.target.value));
                }}
                aria-label="Controle deslizante de comparação Antes e Depois"
                className="w-full accent-[#2457FF] h-2 bg-white/10 rounded-lg cursor-pointer"
              />
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5">
                <span>← Linktree genérico</span>
                <span className="text-slate-300 font-medium">
                  {hasInteracted ? 'Deslize para comparar' : 'Clique para parar e controlar'}
                </span>
                <span>Clicaê →</span>
              </div>

              {/* Dynamic Live Verdict Indicator */}
              <div className="mt-3 flex justify-center">
                <span
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                    sliderPos > 58
                      ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                      : sliderPos < 42
                        ? 'bg-[#2457FF]/15 text-blue-200 border-[#2457FF]/40 shadow-md shadow-[#2457FF]/20'
                        : 'bg-white/5 text-slate-300 border-white/10'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      sliderPos > 58
                        ? 'bg-rose-400'
                        : sliderPos < 42
                          ? 'bg-[#2457FF] animate-ping'
                          : 'bg-slate-400'
                    }`}
                  />
                  <span>
                    {sliderPos > 58
                      ? 'Visual genérico igual a milhares'
                      : sliderPos < 42
                        ? 'Identidade única feita pelo Clicaê'
                        : 'Arraste para revelar a diferença'}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Comparison Points Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {/* Card: Página Genérica */}
          <Reveal direction="left" delay={60}>
            <div className="h-full p-5 sm:p-8 rounded-3xl bg-[#141624] border border-rose-500/20 shadow-xl transition-transform duration-300 md:hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white">
                    {SITE_CONFIG.problem.generic.title}
                  </h3>
                  <span className="text-xs text-rose-400">
                    {SITE_CONFIG.problem.generic.subtitle}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 sm:space-y-3.5 mt-4 sm:mt-6 text-sm text-slate-300">
                {SITE_CONFIG.problem.generic.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-rose-400 mt-0.5 shrink-0">✕</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Card: Página Clicaê */}
          <Reveal direction="right" delay={140}>
            <div className="h-full relative overflow-hidden p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181C33] to-[#121424] border border-[#2457FF]/40 shadow-2xl glow-electric transition-transform duration-300 md:hover:-translate-y-1.5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] overflow-hidden"
              >
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#2457FF] to-[#FF684F] animate-shimmer-sweep" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#2457FF]/20 text-[#2457FF] shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#2457FF]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white">
                    {SITE_CONFIG.problem.clicae.title}
                  </h3>
                  <span className="text-xs text-blue-300">
                    {SITE_CONFIG.problem.clicae.subtitle}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 sm:space-y-3.5 mt-4 sm:mt-6 text-sm text-slate-200">
                {SITE_CONFIG.problem.clicae.points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2457FF] shrink-0 mt-1" />
                    <span className="font-medium text-white">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
