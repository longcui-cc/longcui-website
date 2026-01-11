import { defineConfig } from 'vitepress'
import sidebar from '../sidebar.mts'

export default defineConfig({
  title: '珑萃科技',
  description: '北京珑萃科技工作室',
  lang: 'zh-CN',
  base: '/',
  cleanUrls: false,
  head: [
    ['link', { rel: 'canonical', href: 'https://longcui.cc' }],
    ['link', { rel: 'icon', media: '(prefers-color-scheme: light)', href: '/logo/longcui-logo-mini-light.svg' }],
    ['link', { rel: 'icon', media: '(prefers-color-scheme: dark)', href: '/logo/longcui-logo-mini-dark.svg' }]
  ],

  themeConfig: {
    logo: {
      light: '/logo/longcui-logo-mini-light.svg',
      dark: '/logo/longcui-logo-mini-dark.svg'
    },
    siteTitle: '珑萃科技',
    appearance: true,

    nav: [
      { text: '指南', link: '/us/what-is-vitepress', activeMatch: '/guide/' },
      { text: '参考', link: '/us/site-config', activeMatch: '/reference/' },
      {
        text: '2.0.0-alpha.15',
        items: [
          { text: '最新版本', link: 'https://github.com/vuejs/vitepress/releases' },
          { text: '历史版本', link: 'https://github.com/vuejs/vitepress/releases?page=2' }
        ]
      },
      { text: 'GitHub', icon: 'github', link: 'https://github.com/longcui-cc' }
    ],

    // 只保留这一行，引用抽离的侧边栏
    sidebar: sidebar,

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