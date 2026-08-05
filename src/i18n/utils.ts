import { ui, type Lang, type UIKey } from './ui';

/** Translate a UI key for the given language, falling back to zh then the key itself. */
export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui.zh[key] ?? key;
}

/** Resolve a base path (e.g. '/features') to its localized form for the given language. */
export function localizedPath(lang: Lang, path: string): string {
  if (lang === 'en') {
    return path === '/' ? '/en' : `/en${path}`;
  }
  return path;
}

/**
 * Given the current language and a localized path, return the equivalent path
 * in the OTHER language (used for hreflang alternates and the language switcher).
 */
export function alternatePath(currentLang: Lang, path: string): string {
  if (currentLang === 'zh') {
    // currently zh -> produce en path
    return path === '/' ? '/en' : `/en${path}`;
  }
  // currently en -> strip /en prefix to get zh path
  if (path === '/en' || path === '/en/') return '/';
  return path.replace(/^\/en/, '');
}
