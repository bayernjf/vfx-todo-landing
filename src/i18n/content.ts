import { ui, type Lang } from './ui';

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface NavItem {
  href: string; // base path, language-agnostic
  label: string;
}

const ICONS = ['sparkles', 'monitor', 'zap', 'sliders', 'palette', 'search'] as const;

export function getFeatures(lang: Lang): Feature[] {
  const d = ui[lang];
  const keys: Array<[string, keyof typeof d, keyof typeof d]> = [
    ['sparkles', 'features.f1.title', 'features.f1.desc'],
    ['monitor', 'features.f2.title', 'features.f2.desc'],
    ['zap', 'features.f3.title', 'features.f3.desc'],
    ['sliders', 'features.f4.title', 'features.f4.desc'],
    ['palette', 'features.f5.title', 'features.f5.desc'],
    ['search', 'features.f6.title', 'features.f6.desc'],
  ];
  return keys.map(([icon, tk, dk]) => ({ icon, title: d[tk], desc: d[dk] }));
}

export function getFaqs(lang: Lang): Faq[] {
  const d = ui[lang];
  const items: Array<[keyof typeof d, keyof typeof d]> = [
    ['faq.q1', 'faq.a1'],
    ['faq.q2', 'faq.a2'],
    ['faq.q3', 'faq.a3'],
    ['faq.q4', 'faq.a4'],
    ['faq.q5', 'faq.a5'],
    ['faq.q6', 'faq.a6'],
  ];
  return items.map(([qk, ak]) => ({ q: d[qk], a: d[ak] }));
}

export function getNavItems(lang: Lang): NavItem[] {
  const d = ui[lang];
  return [
    { href: '/features', label: d['nav.features'] },
    { href: '/download', label: d['nav.download'] },
    { href: '/faq', label: d['nav.faq'] },
    { href: '/about', label: d['nav.about'] },
  ];
}

export const EFFECT_NAMES_ZH = ['弹幕', '粒子', '碎裂', '雨幕', '烟花', '涟漪', '激光', '故障'];
export const EFFECT_NAMES_EN = ['Danmaku', 'Particle', 'Shatter', 'Rain', 'Firework', 'Ripple', 'Laser', 'Glitch'];

export function getEffectNames(lang: Lang): string[] {
  return lang === 'zh' ? EFFECT_NAMES_ZH : EFFECT_NAMES_EN;
}
