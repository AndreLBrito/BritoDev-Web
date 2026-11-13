import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist/britodev-web/browser');
const sourceHtml = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const origin = 'https://britodev.com.br';

const locales = [
  {
    directory: 'pt-br',
    lang: 'pt-BR',
    ogLocale: 'pt_BR',
    title: 'BritoDev | Desenvolvimento de software e integrações',
    description:
      'Desenvolvimento de sites, sistemas, APIs, automações e integrações com experiência em C#/.NET, Delphi e Lazarus.',
    socialDescription:
      'Desenvolvimento de software para empresas, profissionais, software houses e agências.',
    imageAlt: 'André Brito, desenvolvedor de software e fundador da BritoDev',
    organizationDescription: 'Desenvolvimento de sites, sistemas, APIs, automações e integrações.',
    jobTitle: 'Desenvolvedor de software',
    integrations: 'Integrações',
  },
  {
    directory: 'es',
    lang: 'es',
    ogLocale: 'es_ES',
    title: 'BritoDev | Desarrollo de software e integraciones',
    description:
      'Desarrollo de sitios, sistemas, API, automatizaciones e integraciones con experiencia en C#/.NET, Delphi y Lazarus.',
    socialDescription:
      'Desarrollo de software para empresas, profesionales, empresas de software y agencias.',
    imageAlt: 'André Brito, desarrollador de software y fundador de BritoDev',
    organizationDescription:
      'Desarrollo de sitios, sistemas, API, automatizaciones e integraciones.',
    jobTitle: 'Desarrollador de software',
    integrations: 'Integraciones',
  },
  {
    directory: 'en',
    lang: 'en',
    ogLocale: 'en_US',
    title: 'BritoDev | Software development and integrations',
    description:
      'Websites, systems, APIs, automations, and integrations backed by experience in C#/.NET, Delphi, and Lazarus.',
    socialDescription:
      'Software development for companies, professionals, software firms, and agencies.',
    imageAlt: 'André Brito, software developer and founder of BritoDev',
    organizationDescription: 'Websites, systems, APIs, automations, and integrations.',
    jobTitle: 'Software developer',
    integrations: 'Integrations',
  },
];

for (const locale of locales) {
  const url = `${origin}/${locale.directory}/`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        name: 'BritoDev',
        url: `${origin}/`,
        description: locale.organizationDescription,
        email: 'contato@britodev.com.br',
        founder: { '@id': `${origin}/#andre-brito` },
        sameAs: ['https://github.com/AndreLBrito', 'https://www.linkedin.com/in/andrel-brito'],
      },
      {
        '@type': 'Person',
        '@id': `${origin}/#andre-brito`,
        name: 'André Brito',
        jobTitle: locale.jobTitle,
        url,
        image: `${origin}/images/andre-brito.jpg`,
        email: 'contato@britodev.com.br',
        worksFor: { '@id': `${origin}/#organization` },
        knowsAbout: ['C#', '.NET', 'Angular', 'Delphi', 'Lazarus', 'APIs', locale.integrations],
        sameAs: ['https://github.com/AndreLBrito', 'https://www.linkedin.com/in/andrel-brito'],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: locale.title,
        description: locale.description,
        inLanguage: locale.lang,
        about: { '@id': `${origin}/#organization` },
      },
    ],
  };

  let html = sourceHtml
    .replace(/<html lang="[^"]+"([^>]*)>/i, `<html lang="${locale.lang}"$1>`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${locale.title}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/i, `$1${url}$2`);

  html = replaceMeta(html, 'name', 'description', locale.description);
  html = replaceMeta(html, 'property', 'og:locale', locale.ogLocale);
  html = replaceMeta(html, 'property', 'og:url', url);
  html = replaceMeta(html, 'property', 'og:title', locale.title);
  html = replaceMeta(html, 'property', 'og:description', locale.socialDescription);
  html = replaceMeta(html, 'property', 'og:image:alt', locale.imageAlt);
  html = replaceMeta(html, 'name', 'twitter:title', locale.title);
  html = replaceMeta(html, 'name', 'twitter:description', locale.socialDescription);
  html = replaceMeta(html, 'name', 'twitter:image:alt', locale.imageAlt);
  html = html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(structuredData)}</script>`,
  );

  const localeDirectory = path.join(outputDirectory, locale.directory);
  await mkdir(localeDirectory, { recursive: true });
  await writeFile(path.join(localeDirectory, 'index.html'), html, 'utf8');
}

function replaceMeta(html, attribute, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const expression = new RegExp(
    `(<meta\\s+${attribute}="${escapedKey}"\\s+content=")[^"]*("\\s*\\/?>)`,
    'i',
  );
  return html.replace(expression, `$1${content}$2`);
}
