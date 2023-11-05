import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Juridict.io',
  tagline: 'Le site communautaire pour les étudiants francophones en droit belge',
  favicon: 'img/favicon.ico',

  url: 'https://juridict.io',

  baseUrl: '/',

  organizationName: 'favorlive', // Usually your GitHub org/user name.
  projectName: 'juridict.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. 

  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Favorlive/juridictio',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          editUrl:
            'https://github.com/Favorlive/juridictio',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Juridict.io',
      logo: {
        alt: 'Logo du site juridict.io',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Théories juridiques',
        },
        {to: '/blog', label: 'Actualités juridiques', position: 'right'},
        {
          href: 'https://github.com/Favorlive/juridict.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Base de connaissances',
          items: [
            {
              label: 'Théorie juridique',
              to: '/docs/introduction-au-droit',
            },
          ],
        },
        {
          title: 'Réseaux sociaux',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/juridict.io',
            },
            {
              label: 'Instragram',
              href: 'https://instagram.com/juridict.io',
            },
            {
              label: 'Linkedin',
              href: 'https://linkedin.com/company/juridictio',
            },
          ],
        },
        {
          title: 'Plus',
          items: [
            {
              label: 'Actualités juridiques',
              to: '/blog',
            },
            /*{
              label: 'GitHub',
              href: 'https://github.com/favorlive/juridictio',
            },*/
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} All rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
