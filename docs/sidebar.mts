export default {
  '/us/': [
    {
      text: '入门',
      items: [
        { text: '什么是 VitePress？', link: '/us/what-is-vitepress' },
        { text: '快速开始', link: '/us/quickstart' },
        { text: '配置', link: '/us/configuration' }
      ]
    },
    {
      text: '写作',
      items: [
        { text: 'Markdown 基础', link: '/us/markdown-basics' },
        { text: 'Markdown 扩展', link: '/us/markdown-extensions' }
      ]
    },
    {
      text: '参考',
      items: [
        { text: '站点配置', link: '/us/site-config' },
        { text: '主题配置', link: '/us/theme-config' },
        { text: 'Frontmatter 配置', link: '/us/frontmatter-config' },
        { text: 'Markdown 配置', link: '/us/markdown' },
        {
          text: '默认主题配置',
          items: [
            { text: '基础配置', link: '/us/defaults/' },
            { text: '导航栏', link: '/us/defaults/navbar' },
            { text: '侧边栏', link: '/us/defaults/sidebar' }
          ]
        },
        { text: '运行时 API', link: '/us/runtime-api' }
      ]
    }
  ]
}