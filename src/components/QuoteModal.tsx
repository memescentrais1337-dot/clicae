/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl, ServiceItem } from '../data/config';
import { X, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  const [brandName, setBrandName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [segment, setSegment] = useState('Bares & Restaurantes');
  const [serviceType, setServiceType] = useState('Bio Personalizada & Mini-Site');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'WhatsApp Direto',
    'Cardápio / Catálogo',
  ]);

  useEffect(() => {
    if (selectedService) {
      setServiceType(selectedService.title);
      setSegment(selectedService.quoteSegment);
      setSelectedFeatures(selectedService.quoteFeatures);
    }
  }, [selectedService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const serviceOptions = [
    'Bio Personalizada & Mini-Site',
    'Cardápios para Restaurantes & Bares',
    'Portfólio Artístico & Press Kit',
    'Vitrines & Catálogos de Produtos',
    'Páginas de Agendamento & Clínicas',
    'Páginas para Eventos & Lançamentos',
  ];

  const availableFeatures = [
    'WhatsApp Direto',
    'Cardápio / Catálogo',
    'Agendamentos / Reservas',
    'Localização (Waze/Maps)',
    'Player / Sets Musicais',
    'Fotos & Vídeos',
    'Avaliações no Google',
  ];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#2457FF', '#FF684F', '#F5F6FA'],
      });
    } catch {
      // ignore
    }

    const brandText = brandName.trim() ? `Marca: ${brandName.trim()}` : '';
    const instaText = instagram.trim() ? ` (Insta: ${instagram.trim()})` : '';
    const typeText = ` | Serviço: ${serviceType}`;
    const segText = ` | Segmento: ${segment}`;
    const featText = selectedFeatures.length > 0 ? ` | Recursos de interesse: ${selectedFeatures.join(', ')}` : '';

    const customMessage = `Olá! Conheci o Clicaê pelo site e gostaria de saber mais sobre um projeto personalizado. ${brandText}${instaText}${typeText}${segText}${featText}`;

    const url = getWhatsAppUrl(customMessage);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    onClose();
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#121424] border-t sm:border border-white/15 rounded-t-3xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 max-h-[92dvh] overflow-y-auto sm:my-8"
      >
        {/* Mobile sheet drag handle */}
        <div className="sm:hidden flex justify-center mb-3">
          <span className="w-10 h-1 rounded-full bg-white/20" aria-hidden="true" />
        </div>

        {/* Decorative corner glows */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 bg-[#2457FF]/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-48 h-48 bg-[#FF684F]/20 rounded-full blur-3xl" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 sm:mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#2457FF]/20 text-[#2457FF]">
              <Sparkles className="w-4 h-4 text-[#2457FF]" />
            </div>
            <div>
              <h3 id="quote-modal-title" className="text-lg font-bold font-display text-white">
                Seu Projeto Exclusivo
              </h3>
              <p className="text-xs text-slate-400">
                Conte-nos sobre sua marca para iniciarmos
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pb-2">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Tipo de Projeto / Serviço
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full min-h-[46px] bg-[#181B2E] border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-[#2457FF]"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Nome da sua Marca ou Negócio
            </label>
            <input
              type="text"
              required
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Ex: Villa Lounge, Dra. Camila, Verve Store"
              className="w-full min-h-[46px] bg-[#181B2E] border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2457FF]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Instagram da Marca (opcional)
              </label>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="Ex: @suamarca"
                className="w-full min-h-[46px] bg-[#181B2E] border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2457FF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Segmento de Atuação
              </label>
              <select
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                className="w-full min-h-[46px] bg-[#181B2E] border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-[#2457FF]"
              >
                <option value="Bares & Restaurantes">Bares & Restaurantes</option>
                <option value="Lojas & Moda">Lojas & Moda</option>
                <option value="DJs & Artistas">DJs & Artistas</option>
                <option value="Clínicas & Beleza">Clínicas & Beleza</option>
                <option value="Advogados & Consultores">Advogados & Consultores</option>
                <option value="Academias & Fitness">Academias & Fitness</option>
                <option value="Outros Serviços">Outro Segmento</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Quais recursos você gostaria de incluir?
            </label>
            <div className="flex flex-wrap gap-2">
              {availableFeatures.map((feat) => {
                const isSelected = selectedFeatures.includes(feat);
                return (
                  <button
                    key={feat}
                    type="button"
                    onClick={() => toggleFeature(feat)}
                    className={`min-h-[38px] px-3.5 py-2 text-xs rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#2457FF]/20 text-white border-[#2457FF]'
                        : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#2457FF]" />}
                    <span>{feat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2457FF] to-[#FF684F] hover:opacity-95 text-white text-sm font-bold shadow-xl shadow-[#2457FF]/30 active:scale-98 transition-all cursor-pointer"
            >
              <span>Enviar e Iniciar pelo WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2.5">
              Não se preocupe: você falará com uma pessoa real da nossa equipe para alinhar os detalhes.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
