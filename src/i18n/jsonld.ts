import { ui, type Lang } from './ui';
import { getFaqs } from './content';

const SITE_URL = 'https://vfx-todo.pages.dev';

/** SoftwareApplication schema — used on home, features, download pages. */
export function softwareApplicationJsonLd(lang: Lang) {
  const d = ui[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VFX Todo',
    applicationCategory: 'DesktopApplication',
    operatingSystem: 'macOS, Windows, Linux',
    description: d['site.desc'],
    url: SITE_URL,
    downloadUrl: SITE_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    screenshot: `${SITE_URL}/screenshots/hero.jpg`,
  };
}

/** FAQPage schema — used on the FAQ page. */
export function faqPageJsonLd(lang: Lang) {
  const faqs = getFaqs(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

/** AboutPage schema — used on the about page. */
export function aboutPageJsonLd(lang: Lang) {
  const d = ui[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: d['about.title'],
    description: d['about.subtitle'],
    url: lang === 'en' ? `${SITE_URL}/about` : `${SITE_URL}/zh/about`,
  };
}
