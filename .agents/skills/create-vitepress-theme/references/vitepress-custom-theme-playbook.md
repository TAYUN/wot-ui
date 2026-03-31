# VitePress 自定义主题手册

本手册是 `create-vitepress-theme` 的补充，用于快速套用官方推荐做法。

## 1) 入口文件模板（扩展默认主题）

```ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    // app.component('MyComp', MyComp)
    // router.onAfterRouteChanged = (to) => { ... }
  },
} satisfies Theme
```

## 2) Layout 插槽注入模板

```ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import FooterExtra from './components/FooterExtra.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(FooterExtra),
    })
  },
} satisfies Theme
```

## 3) 样式变量策略

- 先覆写 `--vp-*` 变量，再写组件级样式
- 优先在 `:root` 和 `.dark` 统一定义，不在组件里散写品牌色

```css
:root {
  --vp-c-brand-1: #0f766e;
  --vp-c-brand-2: #115e59;
  --vp-c-brand-3: #134e4a;
}

.dark {
  --vp-c-brand-1: #5eead4;
  --vp-c-brand-2: #2dd4bf;
  --vp-c-brand-3: #14b8a6;
}
```

## 4) 覆盖默认内部组件（谨慎）

在 `.vitepress/config.*` 通过 alias 定向替换内部组件，按需覆盖：

```ts
import { fileURLToPath, URL } from 'node:url'

export default {
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/VPNavBar.vue', import.meta.url)),
        },
      ],
    },
  },
}
```

## 5) SSR 与浏览器 API

- 所有 `window`、`document`、`localStorage` 访问都要做客户端保护
- 仅客户端逻辑放在条件分支中执行

```ts
if (typeof window !== 'undefined') {
  // safe for browser only
}
```

## 6) 推荐验收清单

- 开发运行：`pnpm dev:docs`
- 生产构建：`pnpm build:docs`
- 关键页面：主页、文档页、搜索、导航抽屉、暗黑模式、404
- 多端检查：桌面端 + 移动端宽度
- 性能观察：首屏样式抖动、非必要 JS 注入、包体积变化

## 7) 官方资料

- Extending Default Theme
- Using a Custom Theme
- Runtime API (`useData`, `withBase`)
- SSR Compatibility
- 统一入口：<https://vitepress.dev/llms-full.txt>
