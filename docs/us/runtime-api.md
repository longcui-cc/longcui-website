# 运行时 API
VitePress 提供了运行时 API，可在 Vue 组件或 Markdown 中获取页面信息、操作路由等。

## `useData()`
获取当前页面的元数据：
```vue
<script setup>
import { useData } from 'vitepress'

// 获取页面数据
const {
  page,       // 页面路由信息
  theme,      // 主题配置
  frontmatter // 页面Frontmatter
} = useData()
</script>

<template>
  <div>当前页面标题：{{ frontmatter.title }}</div>
</template>