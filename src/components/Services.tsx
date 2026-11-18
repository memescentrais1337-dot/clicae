/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG, ServiceItem } from '../data/config';
import {
  UtensilsCrossed,
  Palette,
  Link2,
  ShoppingBag,
  CalendarCheck,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = SITE_CONFIG.services;
  const [expandedId, setExpandedId] = useState<string>(services[0]?.id ?? '');

  const getServiceIcon = (iconName: ServiceItem['iconName'], color: string) => {
    const props = { className: 'w-5 h-5', style: { color } };
    switch (iconName) {
      case 'utensils':
        return <UtensilsCrossed {...props} />;
      case 'palette':
        return <Palette {...props} />;
      case 'link':
        return <Link2 {...props} />;
      case 'shopping':
        return <ShoppingBag {...props} />;
      case 'calendar':
        return <CalendarCheck {...props} />;
      case 'sparkles':
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section
      id="servicos"
      className="relative scroll-mt-16 py-16 sm:py-24 bg-[#0D0F1D] border-t border-white/5 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] bg-[#2457FF]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] bg-[#FF684F]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">
            <span>Nossos Serviços</span>
            <span className="text-[#2457FF]">·</span>
            <span>Soluções Sob Medida</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight text-balance mb-4 sm:mb-5">
            Muito além do link na bio: páginas feitas para o seu objetivo.
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
            Criamos desde bios exclusivas até cardápios digitais interativos para restaurantes, portfólios artísticos e catálogos sob medida para a sua marca.
          </p>
        </div>

        {/* Mobile View: Vertical Expandable List (All options clearly visible, zero horizontal scroll) */}
        <div className="md:hidden space-y-3">
          {services.map((service) => {
            const isOpen = expandedId === service.id;
            return (
              <article
                key={service.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#16192C] border-white/20 shadow-xl'
                    : 'bg-[#131525] border-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? '' : service.id)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[68px] p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className="p-2.5 rounded-xl border border-white/10 shrink-0"
                      style={{ backgroundColor: `${service.accentColor}18` }}
                    >
                      {getServiceIcon(service.iconName, service.accentColor)}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-slate-400 block">
                        {service.number} · {service.subtitle}
                      </span>
                      <h3 className="text-sm font-bold font-display text-white leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-white/10 space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed pt-2">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: service.accentColor }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2457FF] hover:bg-[#1E40AF] text-white text-xs font-bold shadow-lg shadow-[#2457FF]/25 cursor-pointer active:scale-98 transition-all"
                    >
                      <span>Solicitar este formato</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Tablet & Desktop View: Multi-column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group p-8 rounded-3xl bg-[#141627] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Top row: Editorial Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span className="font-display font-bold text-white/90 tabular-nums">
                      {service.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{service.subtitle}</span>
                  </div>

                  <div
                    className="p-3 rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.accentColor}15` }}
                  >
                    {getServiceIcon(service.iconName, service.accentColor)}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-[#F5F6FA] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-7">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] text-slate-300">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: service.accentColor }}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Footer */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="min-h-[40px] inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#A5B4FC] transition-colors cursor-pointer py-1"
                >
                  <span>Solicitar este formato</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: service.accentColor }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
