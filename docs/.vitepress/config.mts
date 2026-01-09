import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站基础信息 - 你的工作室信息，直接用
  title: '北京珑萃科技工作室',
  description: '专注优质技术服务，匠心打造精品项目 · 一站式解决方案服务商',
  // 网站根路径（部署到Github Pages必配，URL干净无后缀）
  base: '/',
  // 主题核心配置：导航栏+底部版权，完美适配工作室官网
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '核心业务', link: '/service' },
      { text: '成功案例', link: '/cases' },
      { text: '联系我们', link: '/contact' }
    ],
    footer: {
      message: '© 2026 北京珑萃科技工作室 版权所有',
      copyright: '用心做好每一次技术服务'
    },
    // 右侧自动生成目录大纲，文档页必备
    outline: true,
    outlineTitle: '目录'
  },
  // 重中之重：中文友好极致优化，无标点错位、自动间距，不用额外配置
  markdown: {
    theme: 'github-light',
    lineNumbers: false
  },
  // 全局样式优化，适配中文显示
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }]
  ],
  // ========== 已添加：方案2 全局放行 所有域名/IP 无拦截 ==========
  vite: {
    server: {
      allowedHosts: true
    }
  }
})
