import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CPA Bear",
  tagline: "Make the CPA exam bear-able",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: true,
  },

  // Production URL. The site is deployed to Cloudflare Workers (see wrangler.jsonc).
  url: "https://book.cpabear.com",
  baseUrl: "/",
  trailingSlash: false, // Don't add a trailing slash to the end of URLs

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root,
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/subwaymatch/cpabear-book/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.47/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-nH0MfJ44wi1dd7w6jinlyBgljjS8EJAh2JBoRad8a3VDw2K69vfaaqm4WnR+gXtA",
      crossorigin: "anonymous",
    },
  ],

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: "blueprint-2027",
      content:
        'Updated for the 2027 CPA Exam Blueprints. Testing before January 1, 2027? <a href="/blueprint/2027#testing-in-2026">This book still applies.</a>',
      backgroundColor: "#f7fee7",
      textColor: "#1a2e05",
      isCloseable: true,
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
      options: {
        themeVariables: {
          fontFamily: "Inter, Arial, sans-serif",
        },
      },
    },
    navbar: {
      title: "CPA Bear",
      logo: {
        alt: "CPA Bear Logo",
        src: "img/cpabear-logo-01.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "farSidebar",
          position: "left",
          label: "FAR",
        },
        {
          type: "docSidebar",
          sidebarId: "audSidebar",
          position: "left",
          label: "AUD",
        },
        {
          type: "docSidebar",
          sidebarId: "regSidebar",
          position: "left",
          label: "REG",
        },
        {
          type: "docSidebar",
          sidebarId: "barSidebar",
          position: "left",
          label: "BAR",
        },
        {
          type: "docSidebar",
          sidebarId: "iscSidebar",
          position: "left",
          label: "ISC",
        },
        {
          type: "docSidebar",
          sidebarId: "tcpSidebar",
          position: "left",
          label: "TCP",
        },
        {
          href: "https://github.com/subwaymatch/cpabear-book",
          label: "GitHub",
          position: "right",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "CPA Bear Project",
          items: [
            {
              label: "About",
              to: "/about",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "CPA Exam Blueprints 2027",
              to: "/blueprint/2027",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "GitHub Repository",
              href: "https://github.com/subwaymatch/cpabear-book",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CPA Bear.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
