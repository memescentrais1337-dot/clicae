/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SITE_CONFIG } from '../data/config';

interface IntroLoaderProps {
  onComplete: () => void;
}

type IntroPhase = 'approach' | 'clicking' | 'burst' | 'exit';

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<IntroPhase>('approach');
  const skippedRef = useRef(false);
  const skipTimerRef = useRef<number | null>(null);

  const handleSkip = useCallback(() => {
    if (skippedRef.current) return;
    skippedRef.current = true;
    setPhase('exit');
    skipTimerRef.current = window.setTimeout(onComplete, 320);
  }, [onComplete]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      onComplete();
      return;
    }

    const t1 = window.setTimeout(() => {
      if (!skippedRef.current) setPhase('clicking');
    }, 820);
    const t2 = window.setTimeout(() => {
      if (!skippedRef.current) setPhase('burst');
    }, 1020);
    const t3 = window.setTimeout(() => {
      if (!skippedRef.current) setPhase('exit');
    }, 1460);
    const t4 = window.setTimeout(() => {
      if (!skippedRef.current) onComplete();
    }, 1940);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
      if (skipTimerRef.current !== null) {
        window.clearTimeout(skipTimerRef.current);
      }
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [handleSkip, onComplete]);

  const isPressed = phase === 'clicking';
  const hasClicked = phase === 'burst' || phase === 'exit';
  const isExiting = phase === 'exit';

  return (
    <div
      aria-hidden={isExiting}
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0D17] select-none transition-all duration-500 ease-out ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100 cursor-pointer'
      }`}
    >
      {/* Subtle radial ambient glow behind logo */}
      <div
        className="pointer-events-none absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full transition-transform duration-500"
        style={{
          background: hasClicked
            ? 'radial-gradient(circle, rgba(36,87,255,0.28) 0%, rgba(255,104,79,0.16) 45%, transparent 72%)'
            : 'radial-gradient(circle, rgba(36,87,255,0.16) 0%, transparent 70%)',
          transform: hasClicked ? 'scale(1.25)' : 'scale(1)',
        }}
      />

      {/* Centered Logo + Cursor Stage */}
      <div className="relative flex flex-col items-center animate-pop-in">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          {/* Expanding Click Ripple Rings */}
          {hasClicked && (
            <>
              <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#2457FF] animate-intro-ripple" />
              <span className="pointer-events-none absolute inset-0 rounded-full border border-[#FF684F] animate-intro-ripple-delayed" />
            </>
          )}

          {/* Clicaê Logo Emblem */}
          <div
            className="relative w-full h-full rounded-full p-[3px] shadow-2xl transition-transform duration-200 ease-out"
            style={{
              background:
                'linear-gradient(135deg, #2457FF 0%, #A855F7 50%, #FF684F 100%)',
              transform: isPressed
                ? 'scale(0.9)'
                : hasClicked
                  ? 'scale(1.07)'
                  : 'scale(1)',
              boxShadow: hasClicked
                ? '0 0 45px rgba(36, 87, 255, 0.55), 0 0 25px rgba(255, 104, 79, 0.35)'
                : '0 15px 40px rgba(0, 0, 0, 0.7)',
            }}
          >
            <img
              src={SITE_CONFIG.brand.logoUrl}
              alt="Logo Clicaê"
              width={128}
              height={128}
              decoding="sync"
              className="w-full h-full rounded-full object-cover bg-[#0B0D17]"
            />
          </div>

          {/* Outer Glide Wrapper: handles mouse cursor arrival onto the logo */}
          <div className="pointer-events-none absolute z-30 left-1/2 top-1/2 animate-intro-cursor">
            {/* Inner Press Wrapper: handles click depression & spring-back without animation override */}
            <div
              className="relative"
              style={{
                transform: isPressed
                  ? 'translate3d(-1px, -1px, 0) scale(0.76)'
                  : 'translate3d(0, 0, 0) scale(1)',
                transition: 'transform 140ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transformOrigin: '4px 3px',
              }}
            >
              {/* Click impact spark under pointer tip */}
              {hasClicked && (
                <span className="pointer-events-none absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#FF684F]/80 animate-intro-tip-flash" />
              )}
              <svg
                width="34"
                height="38"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.75)]"
              >
                <path
                  d="M3.5 2.5L24.5 14.2L14.8 17.1L19.2 26.8L15.4 28.5L11 18.8L4.2 24.4L3.5 2.5Z"
                  fill="#FFFFFF"
                  stroke="#0B0D17"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Brand Wordmark */}
        <div
          className={`mt-5 flex flex-col items-center transition-all duration-300 ${
            hasClicked ? 'opacity-100 translate-y-0' : 'opacity-85 translate-y-0.5'
          }`}
        >
          <span className="text-xl sm:text-2xl font-black tracking-tight font-display text-white">
            CLICA<span className="text-[#FF684F]">Ê</span>
          </span>
          <span className="text-[11px] text-slate-400 tracking-wide mt-1">
            Muito mais que um link na bio
          </span>
        </div>
      </div>
    </div>
  );
};
