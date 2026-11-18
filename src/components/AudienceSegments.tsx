/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  UtensilsCrossed,
  Sparkles,
  ShoppingBag,
  Mic2,
  Stethoscope,
  Dumbbell,
  Scale,
  Camera,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface AudienceSegmentsProps {
  onOpenQuote: () => void;
}

export const AudienceSegments: React.FC<AudienceSegmentsProps> = ({ onOpenQuote }) => {
  const segments = [
    {
      id: 'gastronomia',
      title: 'Restaurantes, Bares & Cafés',
      description: 'Cardápios interativos, reservas instantâneas pelo WhatsApp, endereço Waze/Maps e fotos irresistíveis dos pratos.',
      icon: UtensilsCrossed,
      color: '#EAB308',
      accentBg: 'rgba(234, 179, 8, 0.1)',
      borderColor: 'rgba(234, 179, 8, 0.25)',
      exampleFeature: 'Cardápio digital que não precisa de download',
    },
    {
      id: 'clinicas',
      title: 'Clínicas & Estética Avançada',
      description: 'Apresentação refinada de procedimentos corporais/faciais, bios da equipe médica e agendamento direto com a recepção.',
      icon: Stethoscope,
      color: '#F472B6',
      accentBg: 'rgba(244, 114, 182, 0.1)',
      borderColor: 'rgba(244, 114, 182, 0.25)',
      exampleFeature: 'Canal de agendamento prioritário',
    },
    {
      id: 'artistas',
      title: 'DJs, Músicos & Produtores',
      description: 'Player de sets no Spotify/SoundCloud, agenda de turnês, fotos de alta qualidade para imprensa e canal de booking.',
      icon: Mic2,
      color: '#2457FF',
      accentBg: 'rgba(36, 87, 255, 0.1)',
      borderColor: 'rgba(36, 87, 255, 0.25)',
      exampleFeature: 'Press Kit e Rider Técnico sempre à mão',
    },
    {
      id: 'varejo',
      title: 'Lojas, Boutiques & E-commerce',
      description: 'Destaque para o drop da semana, catálogos em imagem, cupons de desconto exclusivos e atendimento direto.',
      icon: ShoppingBag,
      color: '#FF684F',
      accentBg: 'rgba(255, 104, 79, 0.1)',
      borderColor: 'rgba(255, 104, 79, 0.25)',
      exampleFeature: 'Lançamentos e links de compras rápidos',
    },
    {
      id: 'profissionais',
      title: 'Advogados, Consultores & Médicos',
      description: 'Credibilidade imediata com áreas de especialidade, artigos publicados, agendamento de reuniões e contatos corporativos.',
      icon: Scale,
      color: '#38BDF8',
      accentBg: 'rgba(56, 189, 248, 0.1)',
      borderColor: 'rgba(56, 189, 248, 0.25)',
      exampleFeature: 'Apresentação séria e institucional',
    },
    {
      id: 'fitness',
      title: 'Academias, Studios & Personais',
      description: 'Grade de aulas, planos de matrícula, cálculo de IMC/planilhas e canal de contato com a equipe de recepção.',
      icon: Dumbbell,
      color: '#10B981',
      accentBg: 'rgba(16, 185, 129, 0.1)',
      borderColor: 'rgba(16, 185, 129, 0.25)',
      exampleFeature: 'Agendamento de aula experimental',
    },
  ];

  return (
    <section id="para-quem" className="relative scroll-mt-16 py-16 sm:py-24 bg-[#0B0D17] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">
            <span>Para Quem É o Clicaê?</span>
            <span className="text-[#2457FF]">·</span>
            <span>Versatilidade Estratégica</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight text-balance mb-4 sm:mb-5">
            Se sua marca tem identidade, sua bio também pode ter.
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
            Não importa seu nicho: se você quer passar uma imagem profissional, organizada e atraente para quem visita seu perfil, o Clicaê foi feito para você.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.id}
                className="p-5 sm:p-7 rounded-3xl bg-[#141627] border transition-all duration-300 md:hover:-translate-y-1 group flex flex-col justify-between"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = seg.borderColor;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 15px 35px -10px ${seg.color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div
                      className="p-3 rounded-2xl transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: seg.accentBg,
                        color: seg.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: seg.color }}
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2">
                    {seg.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {seg.description}
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-white/5 flex items-center justify-between gap-2 text-xs">
                  <span className="text-slate-400 truncate">{seg.exampleFeature}</span>
                  <span
                    className="font-semibold transition-transform group-hover:translate-x-1 shrink-0"
                    style={{ color: seg.color }}
                  >
                    Sob medida →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout button */}
        <div className="text-center">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#2457FF] to-[#FF684F] rounded-2xl shadow-lg hover:opacity-95 transition-all cursor-pointer"
          >
            <span>Descubra como o Clicaê se adapta ao seu negócio</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
