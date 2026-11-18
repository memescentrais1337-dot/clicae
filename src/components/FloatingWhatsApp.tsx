/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed right-4 sm:right-6 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-3 animate-pop-in">
      {/* Desktop subtle quick prompt */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#121424]/95 border border-emerald-500/30 text-xs font-semibold text-white shadow-xl backdrop-blur-md hover:border-emerald-400/60 transition-all duration-200"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Fale no WhatsApp</span>
      </a>

      {/* Pulsing Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp ${SITE_CONFIG.brand.whatsappDisplay}`}
        title={`WhatsApp ${SITE_CONFIG.brand.whatsappDisplay}`}
        className="group relative inline-flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_34px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Outer pulsing rings */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/45 animate-ping"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1.5 rounded-full border border-[#25D366]/45 animate-pulse"
        />

        {/* Crisp WhatsApp Glyph */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="relative z-10 w-7 h-7 sm:w-7.5 sm:h-7.5 drop-shadow-sm transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.256.59 4.458 1.71 6.398L3.09 28.8l6.554-1.718a12.754 12.754 0 0 0 6.36 1.692h.006c7.06 0 12.8-5.74 12.8-12.804 0-3.418-1.33-6.632-3.748-9.05A12.716 12.716 0 0 0 16.004 3.2Zm7.454 18.21c-.314.884-1.842 1.69-2.548 1.794-.65.098-1.472.14-2.376-.148-.548-.174-1.252-.406-2.154-.796-3.79-1.636-6.264-5.458-6.454-5.712-.19-.254-1.542-2.054-1.542-3.918 0-1.864.974-2.78 1.32-3.16.346-.38.754-.474 1.006-.474.252 0 .504.002.724.014.232.012.544-.088.85.648.314.756 1.068 2.616 1.162 2.806.094.19.156.412.03.666-.126.254-.19.412-.378.634-.19.222-.398.496-.568.666-.19.19-.388.396-.166.776.22.38.982 1.62 2.108 2.626 1.448 1.292 2.668 1.692 3.048 1.882.38.19.6.158.822-.096.22-.254.944-1.102 1.196-1.482.252-.38.504-.316.85-.19.346.126 2.202 1.04 2.58 1.23.378.19.63.284.724.442.094.158.094.918-.22 1.802Z" />
        </svg>
      </a>
    </div>
  );
};
