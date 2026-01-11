---
layout: home
title: 珑萃科技
titleTemplate: 北京珑萃科技工作室
editLink: true
lastUpdated: true
hero:
  name: 站点建设中，敬请期待！
  text: 北京珑萃科技工作室
  tagline: 专业二次开发及系统集成
  description: 北京珑萃科技工作室，专业二次开发及系统集成服务。
  image:
    src: /logo-large.webp
    alt: 北京珑萃科技工作室
    class: hero-image-container
  actions:
    - theme: brand
      text: 关于我们
      link: /guide/what-is-vitepress
    - theme: alt
      text: 开发者文档
      link: /guide/quickstart
    - theme: alt
      text: GitHub
      link: https://github.com/longcui-cc

features:
  - icon: 📝
    title: 专注互联网技术
    details: 基于SpringBoot和Vue3实现，提供完善的二次开发及系统集成服务。
  - icon: ⚡️
    title: CAS单点登录服务
    details: 基于CAS协议实现，支持多种认证方式，如用户名密码、手机号验证码、邮箱验证码等。
  - icon: 🖖
    title: 客服WebIM
    details: 基于Vue3和Socket.io实现，提供实时的客服聊天功能。
  - icon: 🚀
    title: 客服外呼系统
    details: 基于Vue3和Socket.io实现，提供客服外呼功能。
---

<style>
/* 官网原版 标题紫蓝渐变 - 最高优先级 */
:root .VPHomeHero > .container > h1 {
  background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

/* 官网原版 LOGO背景 彩色模糊渐变 + 内边距 完全一致 */
.hero-image-container {
  background: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  filter: blur(44px);
  border-radius: 50%;
  padding: 2rem;
  margin: 0 auto;
}

/* 功能卡片图标 彩色高亮 官网同款紫色 */
:root .VPFeature .VPFeatureIcon {
  color: #8b5cf6;
  font-size: 1.6rem;
}
</style>