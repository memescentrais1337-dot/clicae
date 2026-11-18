/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';
import { Instagram, ArrowUpRight, MessageCircle, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070912] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-2xl font-black tracking-tight text-white font-display mb-3 group"
            >
              <img
                src={SITE_CONFIG.brand.logoUrl}
                alt="Logo Clicaê"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="w-10 h-10 rounded-full object-cover ring-1 ring-white/20 shadow-lg shrink-0"
              />
              <span>CLICA<span className="text-[#FF684F]">Ê</span></span>
            </a>

            <p className="text-sm font-semibold text-slate-300 mb-2">
              {SITE_CONFIG.brand.tagline}
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
              Transformamos o link da sua bio em uma experiência digital exclusiva, respeitando a identidade da sua marca e conectando você a tudo que importa.
            </p>

            {/* Social & Domain Quick Links */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-2 text-xs"
                title="Instagram @clicaebio"
              >
                <Instagram className="w-4 h-4 text-[#FF684F]" />
                <span>{SITE_CONFIG.brand.instagramHandle}</span>
              </a>

              <a
                href={`https://${SITE_CONFIG.brand.domain}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-2 text-xs"
              >
                <Globe className="w-4 h-4 text-[#2457FF]" />
                <span>{SITE_CONFIG.brand.domain}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-1 gap-x-4 text-sm md:text-xs text-slate-400">
              <li>
                <a href="#" className="inline-flex items-center min-h-[40px] md:min-h-0 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#o-problema" className="inline-flex items-center min-h-[40px] md:min-h-0 hover:text-white transition-colors">
                  Antes vs Depois
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="inline-flex items-center min-h-[40px] md:min-h-0 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#servicos" className="inline-flex items-center min-h-[40px] md:min-h-0 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="inline-flex items-center min-h-[40px] md:min-h-0 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">
                Atendimento & Contato
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Quer saber como podemos criar uma página exclusiva para o seu negócio?
              </p>

              <div className="space-y-2 mb-6">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[40px] md:min-h-0 text-xs text-slate-300 hover:text-white group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp · {SITE_CONFIG.brand.whatsappDisplay}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Mail className="w-4 h-4 text-[#2457FF]" />
                  <span>{SITE_CONFIG.brand.email}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#2457FF] to-[#1E40AF] hover:from-[#3366FF] hover:to-[#2457FF] text-white text-xs font-bold shadow-lg shadow-[#2457FF]/20 cursor-pointer"
            >
              <span>Quero minha bio personalizada</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE_CONFIG.brand.name} ({SITE_CONFIG.brand.domain}). Todos os direitos reservados.
          </p>

          <p className="text-[11px] text-slate-500">
            Muito mais que um link na bio.
          </p>
        </div>
      </div>
    </footer>
  );
};
