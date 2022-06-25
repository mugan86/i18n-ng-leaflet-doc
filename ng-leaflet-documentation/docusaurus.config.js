const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Angular Leaflet Map',
  tagline: 'Documentation about all options and configurations',
  url: 'https://mugan86.github.io/ng-leaflet/',
  baseUrl: '/ng-leaflet/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mugan86', // Usually your GitHub org/user name.
  projectName: 'i18n-ng-leaflet-doc', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Angular Leaflet Map',
        logo: {
          alt: 'Angular Leaflet Map Library',
          src: 'img/map_icon.png',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/es/README', label: 'Español', position: 'left'},*/
          {
            href: 'https://github.com/mugan86/ng-leaflet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial - Español',
                to: '/es/summary',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/mugan86',
              },
              {
                label: 'Discord',
                href: 'https://cursos.anartz-mugika.com/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mugan86',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Leaflet',
                href: 'https://leafletjs.com/',
              },
              {
                label: 'Curso Leaflet desde 0 GRATIS',
                href: 'https://cursos.anartz-mugika.com/leaflet-from-scratch',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Angular Leaflet Map, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
    }),
});
