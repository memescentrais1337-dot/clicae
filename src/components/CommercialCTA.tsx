/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';
import { Reveal } from './Reveal';
import { MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CommercialCTAProps {
  onOpenQuote: () => void;
}

export const CommercialCTA: React.FC<CommercialCTAProps> = ({ onOpenQuote }) => {
  const [selectedNiche, setSelectedNiche] = useState<string>('Restaurante / Bar');
  const [brandInput, setBrandInput] = useState<string>('');
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  const niches = [
    'Restaurante / Bar',
    'Loja / E-commerce',
    'DJ / Artista / Eventos',
    'Clínica / Estética',
    'Serviços / Consultoria',
    'Outro Segmento',
  ];

  const handleWhatsAppDirect = () => {
    // Launch celebratory confetti effect!
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#2457FF', '#FF684F', '#F5F6FA', '#8B5CF6'],
      });
    } catch {
      // ignore
    }

    let customMsg = SITE_CONFIG.brand.whatsappDefaultMessage;
    if (brandInput.trim()) {
      customMsg = `Olá! Conheci o Clicaê pelo site e gostaria de saber mais sobre uma página personalizada para minha marca (${brandInput.trim()} - Segmento: ${selectedNiche}).`;
    }
    const url = getWhatsAppUrl(customMsg);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section id="contato" className="relative scroll-mt-16 py-16 sm:py-28 overflow-hidden">
      {/* Background High-Impact Gradient: Electric Blue, Purple & Coral */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F143A] via-[#231238] to-[#1F0E1E]" />
        {/* GPU-light radial glow spheres */}
        <div
          className="absolute -top-32 left-1/4 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(36,87,255,0.25) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,104,79,0.22) 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,13,23,0.7)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="scale" className="rounded-3xl sm:rounded-[40px] bg-[#121427]/95 sm:bg-[#121427]/85 sm:backdrop-blur-xl border border-white/20 p-6 sm:p-14 shadow-2xl shadow-black/80 relative overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2457FF] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF684F] to-transparent" />

          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 mb-4">
              <Sparkles className="w-4 h-4 text-[#FF684F]" />
              <span>Destaque-se no Instagram hoje mesmo</span>
            </div>

            <h2 className="text-2xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight text-balance mb-4 sm:mb-5">
              Pronto para transformar o link da sua bio?
            </h2>

            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal">
              Sua marca merece uma apresentação tão única quanto ela. Vamos criar uma experiência digital feita especialmente para o seu negócio.
            </p>
          </div>

          {/* Quick interactive brief builder before clicking WhatsApp */}
          <div className="max-w-xl mx-auto mb-8 sm:mb-10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0B0D17]/80 border border-white/10">
            <span className="text-xs font-semibold text-slate-300 block mb-3">
              Selecione seu segmento para agilizar seu atendimento:
            </span>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-4">
              {niches.map((n) => {
                const isSelected = selectedNiche === n;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setSelectedNiche(n)}
                    aria-pressed={isSelected}
                    className={`min-h-[46px] px-3 sm:px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-center leading-tight active:scale-95 ${
                      isSelected
                        ? 'bg-[#2457FF] text-white border-[#2457FF] shadow-md shadow-[#2457FF]/25 scale-[1.02]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 animate-pop-in" />}
                    <span>{n}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                value={brandInput}
                onChange={(e) => setBrandInput(e.target.value)}
                placeholder="Nome da sua marca ou @ do Instagram"
                className="flex-1 min-h-[48px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2457FF] transition-colors"
              />
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="relative overflow-hidden min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#2457FF] via-[#6D4AFF] to-[#FF684F] animate-gradient-flow hover:opacity-95 rounded-xl shadow-lg cursor-pointer whitespace-nowrap active:scale-95 transition-transform"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 animate-shimmer-sweep"
                />
                <span className="relative">Quero meu Clicaê</span>
                <MessageCircle className="relative w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Live animated message preview */}
            <div
              key={selectedNiche}
              className="animate-pop-in mt-3 px-3 py-2 rounded-xl bg-emerald-500/8 border border-emerald-500/20 flex items-center gap-2 text-[11px] text-emerald-200/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">
                Atendimento para <strong>{brandInput.trim() || 'sua marca'}</strong> ·{' '}
                {selectedNiche}
              </span>
            </div>
          </div>

          {/* Guarantee / Security points */}
          <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Atendimento humanizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Design 100% autoral</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sem fidelidade obrigatória</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
