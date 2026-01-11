import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '珑萃科技',
  description: '北京珑萃科技工作室',
  lang: 'zh-CN',
  base: '/',
  cleanUrls: false,
  head: [
    ['link', { rel: 'canonical', href: 'https://longcui.cc' }],
    ['link', { rel: 'icon', media: '(prefers-color-scheme: light)', href: '/longcui-logo-mini-light.svg' }],
    ['link', { rel: 'icon', media: '(prefers-color-scheme: dark)', href: '/longcui-logo-mini-dark.svg' }]
  ],

  themeConfig: {
    logo: {
      light: '/longcui-logo-mini-light.svg',
      dark: '/longcui-logo-mini-dark.svg'
    },
    siteTitle: '珑萃科技',
    appearance: true,

    nav: [
      { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
      { text: '参考', link: '/reference/site-config', activeMatch: '/reference/' },
      {
        text: '2.0.0-alpha.15',
        items: [
          { text: '最新版本', link: 'https://github.com/vuejs/vitepress/releases' },
          { text: '历史版本', link: 'https://github.com/vuejs/vitepress/releases?page=2' }
        ]
      },
      { text: 'GitHub', icon: 'github', link: 'https://github.com/longcui-cc' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '什么是 VitePress？', link: '/guide/what-is-vitepress' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '配置', link: '/guide/configuration' }
          ]
        },
        {
          text: '写作',
          items: [
            { text: 'Markdown 基础', link: '/guide/markdown-basics' },
            { text: 'Markdown 扩展', link: '/guide/markdown-extensions' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '站点配置', link: '/reference/site-config' },
            { text: '主题配置', link: '/reference/theme-config' },
            { text: 'Frontmatter 配置', link: '/reference/frontmatter-config' },
            { text: 'Markdown 配置', link: '/reference/markdown' },
            {
              text: '默认主题配置',
              items: [
                { text: '基础配置', link: '/reference/defaults/' },
                { text: '导航栏', link: '/reference/defaults/navbar' },
                { text: '侧边栏', link: '/reference/defaults/sidebar' }
              ]
            },
            { text: '运行时 API', link: '/reference/runtime-api' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      placeholder: '搜索文档'
    },
    editLink: {
      pattern: 'https://github.com/longcui-cc/website-vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    footer: {
      copyright: '版权所有 © 2024-至今 北京珑萃科技工作室'
    },
    returnToTopLabel: '回到顶部',
    outlineTitle: '目录'
  },

  markdown: {
    headers: { level: [1, 2, 3, 4] },
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' }
  }
})