// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss'
  ],

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },

  css: ["~/assets/css/fonts.css"],

  site: {
    url: "https://picguard.org",
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  // https://stackoverflow.com/questions/67703133/how-to-use-env-variables-in-nuxt-2-or-3
  vite: {
    define: {
      "process.env.IMPRINT_STREET": JSON.stringify(process.env.IMPRINT_STREET),
      "process.env.IMPRINT_CITY": JSON.stringify(process.env.IMPRINT_CITY),
    },
  },

  i18n: {
    baseUrl: "https://picguard.org",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "no prefix",
    },
    pages: {
      privacy: false,
      terms: false,
      imprint: false,
      contact: false,
      news: false,
      changelog: false,
    },
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.json",
        name: "English",
        englishName: "English",
        isCatchallLocale: true,
      },
      {
        code: "zh",
        language: "zh-CN",
        file: "zh.json",
        name: "简体中文",
        englishName: "Chinese (Simplified)",
      },
    ],
  },
})