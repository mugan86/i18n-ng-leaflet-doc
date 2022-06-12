
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags','d7a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','1ad'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/aspectos-basicos/centrar-en-ubicacion',
        component: ComponentCreator('/es/aspectos-basicos/centrar-en-ubicacion','6f1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/aspectos-basicos/mapa-basico',
        component: ComponentCreator('/es/aspectos-basicos/mapa-basico','604'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/aspectos-basicos/personalizar-tamano',
        component: ComponentCreator('/es/aspectos-basicos/personalizar-tamano','027'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/demos-ejemplos',
        component: ComponentCreator('/es/demos-ejemplos','2df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/markers/intro',
        component: ComponentCreator('/es/markers/intro','3d8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/markers/one-marker',
        component: ComponentCreator('/es/markers/one-marker','73a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/markers/random-markers-default-zoom',
        component: ComponentCreator('/es/markers/random-markers-default-zoom','789'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/markers/random-markers-select-zoom',
        component: ComponentCreator('/es/markers/random-markers-select-zoom','e45'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/markers/two-or-more-markers',
        component: ComponentCreator('/es/markers/two-or-more-markers','2c7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/README',
        component: ComponentCreator('/es/README','612'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/SUMMARY',
        component: ComponentCreator('/es/SUMMARY','866'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/zoom/levels',
        component: ComponentCreator('/es/zoom/levels','e51'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/es/zoom/positions-btn-texts',
        component: ComponentCreator('/es/zoom/positions-btn-texts','0d8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/congratulations',
        component: ComponentCreator('/tutorial-basics/congratulations','4b2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tutorial-basics/create-a-blog-post','93c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-document',
        component: ComponentCreator('/tutorial-basics/create-a-document','58e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-page',
        component: ComponentCreator('/tutorial-basics/create-a-page','e6a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tutorial-basics/deploy-your-site','317'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/markdown-features',
        component: ComponentCreator('/tutorial-basics/markdown-features','04e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tutorial-extras/manage-docs-versions','975'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tutorial-extras/translate-your-site','ac7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
