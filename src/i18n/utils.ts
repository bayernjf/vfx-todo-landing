import { ui, type Lang, type UIKey } from './ui';

/** Translate a UI key for the given language, falling back to zh then the key itself. */
export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui.zh[key] ?? key;
}

/** Resolve a base path (e.g. '/features') to its localized form for the given language. */
export function localizedPath(lang: Lang, path: string): string {
  if (lang === 'zh') {
    return path === '/' ? '/zh' : `/zh${path}`;
  }
  return path;
}

/**
 * Given the current language and a localized path, return the equivalent path
 * in the OTHER language (used for hreflang alternates and the language switcher).
 */
export function alternatePath(currentLang: Lang, path: string): string {
  if (currentLang === 'en') {
    // currently en -> produce zh path
    return path === '/' ? '/zh' : `/zh${path}`;
  }
  // currently zh -> strip /zh prefix to get en path
  if (path === '/zh' || path === '/zh/') return '/';
  return path.replace(/^\/zh/, '');
}
