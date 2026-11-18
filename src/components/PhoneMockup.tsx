/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  MessageCircle,
  Menu as MenuIcon,
  Calendar,
  MapPin,
  Music,
  ShoppingBag,
  Instagram,
  Star,
  FileText,
  Sparkles,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

export interface PhoneAction {
  iconName: 'whatsapp' | 'menu' | 'calendar' | 'map' | 'music' | 'shopping' | 'instagram' | 'star' | 'file';
  title: string;
  subtitle?: string;
  badge?: string;
  url?: string;
  isPrimary?: boolean;
}

interface PhoneMockupProps {
  brandName: string;
  handle: string;
  category: string;
  bio: string;
  theme: {
    bg: string;
    cardBg: string;
    text: string;
    primary: string;
    accent: string;
    border: string;
  };
  actions: PhoneAction[];
  avatarUrl?: string;
  avatarText?: string;
  mediaBanner?: {
    title: string;
    imageUrl?: string;
    videoUrl?: string;
    badge?: string;
  };
  screenVideoUrl?: string;
  videoTitle?: string;
  compact?: boolean;
  className?: string;
  onActionClick?: (actionTitle: string) => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  brandName,
  handle,
  category,
  bio,
  theme,
  actions,
  avatarUrl,
  avatarText,
  mediaBanner,
  screenVideoUrl,
  videoTitle,
  compact = false,
  className = '',
  onActionClick,
}) => {
  const getIcon = (name: PhoneAction['iconName']) => {
    const iconClass = 'w-4 h-4 shrink-0';
    switch (name) {
      case 'whatsapp':
        return <MessageCircle className={iconClass} />;
      case 'menu':
        return <MenuIcon className={iconClass} />;
      case 'calendar':
        return <Calendar className={iconClass} />;
      case 'map':
        return <MapPin className={iconClass} />;
      case 'music':
        return <Music className={iconClass} />;
      case 'shopping':
        return <ShoppingBag className={iconClass} />;
      case 'instagram':
        return <Instagram className={iconClass} />;
      case 'star':
        return <Star className={iconClass} />;
      case 'file':
        return <FileText className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div
      className={`relative rounded-[42px] p-[10px] bg-gradient-to-b from-[#32364D] via-[#1B1D2D] to-[#111320] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-white/10 ${className}`}
      style={{
        boxShadow: `0 20px 50px -10px rgba(0,0,0,0.7), 0 0 30px -5px ${theme.primary}25`,
      }}
    >
      {/* Outer titanium edge buttons */}
      <div className="absolute -left-[12px] top-[90px] w-[3px] h-[26px] bg-slate-600 rounded-l-sm" />
      <div className="absolute -left-[12px] top-[125px] w-[3px] h-[45px] bg-slate-600 rounded-l-sm" />
      <div className="absolute -left-[12px] top-[180px] w-[3px] h-[45px] bg-slate-600 rounded-l-sm" />
      <div className="absolute -right-[12px] top-[120px] w-[3px] h-[60px] bg-slate-600 rounded-r-sm" />

      {/* Screen Frame */}
      <div
        className={`relative w-full rounded-[34px] overflow-hidden flex flex-col transition-colors duration-500 select-none ${
          compact ? 'min-h-[440px] sm:min-h-[480px]' : 'min-h-[465px] sm:min-h-[580px]'
        }`}
        style={{
          backgroundColor: theme.bg,
          color: theme.text,
        }}
      >
        {/* Subtle glass reflection gradient */}
        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />

        {/* Status Bar */}
        <div className="relative z-20 flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-medium text-white/80">
          <span>09:41</span>
          {/* Dynamic Island */}
          <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2 gap-1.5 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-[#1e2338]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#2457FF]/80 animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold">5G</span>
            <div className="w-4 h-2 border border-white/60 rounded-xs p-0.5 flex items-center">
              <div className="w-full h-full bg-white/80 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Full-Screen Video Display Mode */}
        {screenVideoUrl ? (
          <div className="relative flex-1 w-full h-full overflow-hidden flex flex-col justify-between z-10 pointer-events-none">
            {/* The Video in Infinite Loop */}
            <video
              src={screenVideoUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Subtle scrim at the top and bottom */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

            {/* Top mini indicator */}
            <div className="relative z-20 pt-2 px-4 flex justify-between items-center">
              <span className="text-[9px] font-semibold text-white/90 bg-black/60 px-2.5 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1.5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C] animate-pulse" />
                <span>Onze Lounge</span>
              </span>
            </div>

            {/* Bottom floating badge */}
            <div className="relative z-20 mt-auto pb-4 px-4 flex flex-col items-center gap-1.5">
              <div className="px-3.5 py-1.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-xl text-center">
                <span>{videoTitle || `${brandName} — Bio Personalizada`}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Standard Scrollable Screen Content */
          <div className="relative z-10 flex-1 px-4 pt-3 pb-6 flex flex-col items-center overflow-y-auto no-scrollbar">

            {/* Brand Header */}
            <div className="flex flex-col items-center text-center mt-2 mb-4 w-full">
            {/* Avatar / Logo */}
            <div
              className="w-16 h-16 rounded-full p-0.5 mb-2.5 shadow-lg relative group transition-transform duration-300"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#161827] flex items-center justify-center">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={brandName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <span
                    className="text-lg font-bold font-display"
                    style={{ color: theme.primary }}
                  >
                    {avatarText || brandName.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                <CheckCircle2 className="w-4 h-4 text-[#2457FF]" />
              </div>
            </div>

            {/* Brand Title & Category */}
            <h3 className="text-base font-bold font-display tracking-tight text-white flex items-center gap-1.5">
              <span>{brandName}</span>
            </h3>
            <span
              className="text-[11px] font-medium tracking-wide mt-0.5 opacity-80"
              style={{ color: theme.primary }}
            >
              {handle} · {category}
            </span>

            {/* Bio text */}
            <p className="text-[11px] leading-relaxed text-white/70 max-w-[240px] mt-2 font-normal">
              {bio}
            </p>
          </div>

          {/* Media / Highlight Banner (if any) */}
          {mediaBanner && (
            <div
              className="w-full mb-3 rounded-2xl overflow-hidden relative p-3 border transition-all"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.border,
              }}
            >
              {mediaBanner.videoUrl ? (
                <div className="w-full h-24 mb-2 rounded-xl overflow-hidden relative">
                  <video
                    src={mediaBanner.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {mediaBanner.badge && (
                    <span className="absolute top-2 left-2 text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                      {mediaBanner.badge}
                    </span>
                  )}
                </div>
              ) : mediaBanner.imageUrl ? (
                <div className="w-full h-24 mb-2 rounded-xl overflow-hidden relative">
                  <img
                    src={mediaBanner.imageUrl}
                    alt={mediaBanner.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {mediaBanner.badge && (
                    <span className="absolute top-2 left-2 text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                      {mediaBanner.badge}
                    </span>
                  )}
                </div>
              ) : null}
              <div className="flex items-center justify-between text-[11px] font-medium text-white">
                <span className="truncate pr-2">{mediaBanner.title}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
              </div>
            </div>
          )}

          {/* Action Buttons List */}
          <div className="w-full space-y-2 mt-1">
            {actions.map((action, index) => {
              const isPrimary = action.isPrimary;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => onActionClick?.(action.title)}
                  className={`w-full group flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 text-left cursor-pointer active:scale-98 ${
                    isPrimary
                      ? 'shadow-lg'
                      : 'hover:bg-white/5'
                  }`}
                  style={{
                    backgroundColor: isPrimary ? theme.primary : theme.cardBg,
                    borderColor: isPrimary ? 'transparent' : theme.border,
                    color: isPrimary ? '#FFFFFF' : theme.text,
                  }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`p-2 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isPrimary
                          ? 'bg-black/20 text-white'
                          : 'bg-white/5'
                      }`}
                      style={{ color: isPrimary ? '#FFFFFF' : theme.primary }}
                    >
                      {getIcon(action.iconName)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[12px] font-semibold truncate block">
                          {action.title}
                        </span>
                      </div>
                      {action.subtitle && (
                        <span
                          className={`text-[10px] block truncate ${
                            isPrimary ? 'text-white/80' : 'text-white/50'
                          }`}
                        >
                          {action.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    {action.badge && (
                      <span
                        className="text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-tight"
                        style={{
                          backgroundColor: isPrimary ? 'rgba(255,255,255,0.25)' : `${theme.primary}20`,
                          color: isPrimary ? '#FFFFFF' : theme.primary,
                        }}
                      >
                        {action.badge}
                      </span>
                    )}
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
                        isPrimary ? 'text-white' : 'text-white/40'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Micro Footer inside screen */}
          <div className="mt-auto pt-4 flex flex-col items-center text-center">
            <span className="text-[9px] text-white/35 font-medium tracking-wider flex items-center gap-1">
              Desenvolvido por <strong className="text-white/60">CLICAÊ</strong>
            </span>
          </div>
        </div>
        )}

        {/* Home Indicator Bar */}
        <div className="relative z-20 pb-2 pt-1 flex justify-center">
          <div className="w-28 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};
