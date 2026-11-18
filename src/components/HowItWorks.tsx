/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { Palette, Smartphone, Share2, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = SITE_CONFIG.howItWorks.steps;

  const stepVisuals = [
    {
      icon: Palette,
      shortLabel: '01 · Marca',
      badge: 'Etapa 01 · Imersão & Identidade',
      title: 'Mapeamento Completo da Marca',
      desc: 'Analisamos seus elementos gráficos para manter a coerência estética absoluta.',
      highlights: [
        'Paleta de cores oficial (hex/rgb)',
        'Logotipos e variações em alta resolução',
        'Tipografia e estilo visual da marca',
        'Lista dos canais e links prioritários',
      ],
      previewGraphic: (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#121422] border border-white/10 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#2457FF]" />
            <span className="w-3 h-3 rounded-full bg-[#FF684F]" />
            <span className="w-3 h-3 rounded-full bg-[#F5F6FA]" />
            <span className="text-xs text-slate-400 font-mono ml-2">Cores da sua marca</span>
          </div>
          <div className="h-9 rounded-lg bg-white/5 border border-white/5 flex items-center px-3 text-xs text-slate-300">
            Logotipo & Tipografia Identificada
          </div>
          <div className="h-9 rounded-lg bg-white/5 border border-white/5 flex items-center px-3 text-xs text-[#A5B4FC]">
            ✓ WhatsApp, Cardápio, Reservas e Maps
          </div>
        </div>
      ),
    },
    {
      icon: Smartphone,
      shortLabel: '02 · Criação',
      badge: 'Etapa 02 · Design & Desenvolvimento',
      title: 'Construção Sob Medida',
      desc: 'Criamos uma interface única, pensada para encantar seus clientes e facilitar contatos.',
      highlights: [
        'Design 100% autoral, sem templates prontos',
        'Botões com ações diretas e mensagens no WhatsApp',
        'Microinterações suaves e carregamento ultrarrápido',
        'Revisão e alinhamento de detalhes com você',
      ],
      previewGraphic: (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#121422] border border-[#2457FF]/30 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-white">Layout Exclusivo</span>
            <span className="text-[11px] text-[#A5B4FC] font-semibold">100% Artesanal</span>
          </div>
          <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#2457FF] to-[#1E40AF] text-white text-xs font-semibold flex justify-between">
            <span>Botão Personalizado</span>
            <span>→</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex justify-between">
            <span>Galeria & Cardápio Integrados</span>
            <span>★</span>
          </div>
        </div>
      ),
    },
    {
      icon: Share2,
      shortLabel: '03 · No ar',
      badge: 'Etapa 03 · Publicação & Conexão',
      title: 'Sua Bio Oficial no Ar',
      desc: 'Você recebe o link exclusivo da sua página pronto para divulgar em todos os pontos de contato.',
      highlights: [
        'Link personalizado no seu domínio ou Clicaê',
        'Pronto para colar na bio do Instagram e TikTok',
        'Geração de QR Code para mesas, balcões e impressos',
        'Suporte contínuo para manter tudo atualizado',
      ],
      previewGraphic: (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#121422] border border-white/10 space-y-2.5">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block">Página Ativa e Online</span>
              <span className="text-emerald-300/80 font-mono text-[11px]">clicae.com.br/suamarca</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
            <span>Bio do Instagram Atualizada</span>
            <span className="text-[#FF684F] font-semibold">Pronta para converter</span>
          </div>
        </div>
      ),
    },
  ];

  const ActiveMobileIcon = stepVisuals[activeStep].icon;

  return (
    <section
      id="como-funciona"
      className="relative scroll-mt-16 py-16 sm:py-24 bg-[#0B0D17] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">
            <span>Processo Criativo</span>
            <span className="text-[#2457FF]">·</span>
            <span>Simples e Transparente</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight text-balance mb-4 sm:mb-5">
            {SITE_CONFIG.howItWorks.title}
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
            {SITE_CONFIG.howItWorks.subtitle}
          </p>
        </div>

        {/* MOBILE VIEW: Unified Stepper Tabs + Active Card (No scrolling past 3 stacked cards) */}
        <div className="lg:hidden max-w-xl mx-auto">
          <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-[#141627] border border-white/10 rounded-2xl mb-4">
            {stepVisuals.map((item, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={item.shortLabel}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`min-h-[44px] px-2 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isCurrent
                      ? 'bg-gradient-to-r from-[#2457FF] to-[#1E40AF] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#181C33] to-[#121424] border border-[#2457FF]/40 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF684F] block mb-1">
                  {stepVisuals[activeStep].badge}
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  {steps[activeStep].title}
                </h3>
              </div>
              <div className="p-3 rounded-2xl bg-[#2457FF] text-white shadow-lg shadow-[#2457FF]/40 shrink-0">
                <ActiveMobileIcon className="w-5 h-5" />
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="space-y-2.5 pt-1">
              {stepVisuals[activeStep].highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#2457FF] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {stepVisuals[activeStep].previewGraphic}
          </div>
        </div>

        {/* DESKTOP VIEW: 3 Step Cards + Detail Preview */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const isCurrent = activeStep === index;
              const Icon = stepVisuals[index].icon;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-gradient-to-b from-[#181C33] to-[#121424] border-[#2457FF]/60 shadow-2xl shadow-[#2457FF]/20 -translate-y-1'
                      : 'bg-[#121422] border-white/10 hover:border-white/20 hover:bg-[#161829]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`text-2xl font-black font-display tracking-tight tabular-nums ${
                          isCurrent
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#2457FF] to-[#FF684F]'
                            : 'text-slate-500'
                        }`}
                      >
                        {step.number}
                      </span>
                      <div
                        className={`p-3 rounded-2xl ${
                          isCurrent
                            ? 'bg-[#2457FF] text-white shadow-lg shadow-[#2457FF]/40'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-display text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">{step.detail}</span>
                    <span
                      className={`font-semibold ${
                        isCurrent ? 'text-[#2457FF]' : 'text-slate-500'
                      }`}
                    >
                      {isCurrent ? 'Etapa selecionada' : 'Ver detalhes →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Interactive Preview Card for the Selected Step */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#141627] border border-white/15 p-10 shadow-2xl">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF684F] block mb-2">
                  {stepVisuals[activeStep].badge}
                </span>
                <h4 className="text-2xl font-bold font-display text-white mb-3">
                  {stepVisuals[activeStep].title}
                </h4>
                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                  {stepVisuals[activeStep].desc}
                </p>

                <div className="space-y-2.5">
                  {stepVisuals[activeStep].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#2457FF] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-5">
                {stepVisuals[activeStep].previewGraphic}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
