import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

prismThemes.vsLight.plain.backgroundColor = "#f0f4c3" 

let today = new Date()

const config: Config = {
    title: 'mobx-render-engine',
    tagline: 'MobX based JSON driven React renderer',
    // favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://mobx-render-engine.hololinked.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    projectName: 'mobx-render-engine', // Usually your repo name.

    // onBrokenLinks: 'throw',
    // onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
    // Replace with your project's social card
        // image: 'img/docusaurus-social-card.jpg',
        navbar: {
        title: 'mobx-render-engine',
        // logo: {
        //     alt: 'My Site Logo',
        //     src: 'img/logo.svg',
        // },
        items: [
            { 
                label: 'Docs', 
                position: 'left',
                type: 'docSidebar',
                sidebarId: 'mobxRenderEngineDocSidebar',
            },
            {
                href: 'https://github.com/VigneshVSV/mobx-render-engine',
                label: 'GitHub',
                position: 'right',
            }
        ]},
        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} Vignesh Venkatasubramanian Vaidyanathan. Built with Docusaurus. Latest : \ 
                        ${today.toLocaleDateString()} - ${today.toLocaleTimeString().toUpperCase()}`,
        },
        prism: {
            theme: prismThemes.vsLight,
            darkTheme: prismThemes.vsDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
