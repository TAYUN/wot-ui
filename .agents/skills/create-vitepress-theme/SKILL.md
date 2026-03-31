---
name: create-vitepress-theme
description: "在 VitePress 项目中创建或改造自定义主题。用于 vitepress 自定义主题、extends DefaultTheme、Layout 插槽、enhanceApp、主题样式变量、主题组件覆盖等场景。"
argument-hint: "说明目标页面/风格、是否扩展默认主题、是否需要注册全局组件或路由行为"
---

# 创建 VitePress 自定义主题

用于在已有 VitePress 文档站中，新增或重构自定义主题实现，优先采用可维护的“扩展默认主题”方案。

## 适用场景

- 需要在 `.vitepress/theme/index.ts` 中接管主题入口
- 需要通过 `Layout` 插槽注入页头、页脚、侧边栏增强块
- 需要通过 `enhanceApp` 注册全局组件、插件或路由行为
- 需要统一主题样式变量（品牌色、字体、间距）并保证可持续扩展
- 需要局部覆盖默认主题内部组件（如 `VPNavBar`、`VPSidebar`）

## 输入参数建议

- 目标与范围：要改首页、文档页、导航区、侧边栏区，还是全站
- 主题策略：`extends DefaultTheme` 还是完全自定义 `Layout`
- 交互需求：是否要加全局组件、统计、弹窗、A/B 区块
- 风格约束：品牌色、字体、圆角、间距、暗黑模式策略

## Assets 模板目录

当项目需要快速起步或重构主题入口时，优先复用以下模板：

- [主题入口模板](./assets/theme-index.ts)
- [Layout 模板](./assets/Layout.vue)
- [主题变量模板](./assets/styles-vars.css)
- [主题样式模板](./assets/styles-custom.css)

推荐拷贝目标（按项目实际目录调整）：

- `docs/.vitepress/theme/index.ts`
- `docs/.vitepress/theme/Layout.vue`
- `docs/.vitepress/theme/styles/vars.css`
- `docs/.vitepress/theme/styles/custom.css`

## 标准流程

1. 优先判断是否可用 assets 模板快速搭建主题骨架。
2. 识别当前项目结构与已有主题实现。
3. 选择实现模式：
   - 默认优先 `extends DefaultTheme`
   - 仅在默认主题无法满足时才使用完整自定义 `Layout`
4. 搭建或调整主题入口文件：
   - `docs/.vitepress/theme/index.ts`
   - 按需引入 `styles/vars.css`、`styles/custom.css`
5. 用 Layout 插槽实现结构增强：
   - 常见插槽：`layout-top`、`layout-bottom`、`home-hero-after`、`aside-outline-after`
6. 在 `enhanceApp` 注册全局能力：
   - `app.component(...)`
   - `app.use(...)`
   - 路由钩子监听（如 `router.onAfterRouteChanged`）
7. 对需要深度定制的默认内部组件，用 `vite.resolve.alias` 替换到本地实现。
8. 做 SSR 安全处理：
   - 浏览器 API 访问必须包裹 `typeof window !== 'undefined'`
   - 对仅客户端可用代码做条件加载
9. 校验与回归：
   - `pnpm dev:docs`
   - `pnpm build:docs`
   - 验证导航、布局、暗黑模式、移动端、无障碍和性能

## Slash Prompt 入口

可通过以下 prompt 直接触发“目标风格 + 改造范围”的自动执行流程：

- [Create VitePress Theme Prompt](../../../.github/prompts/create-vitepress-theme.prompt.md)

## 质量门禁

- 不破坏默认主题核心导航与文档阅读体验
- 样式变量集中管理，避免硬编码色值散落
- 插件与全局注册具备可回滚性
- 客户端逻辑不影响 SSG/SSR 构建
- 主题代码结构清晰：入口、组件、样式、覆盖逻辑边界明确

## 常见决策点

- 是否覆盖内部组件？
  - 仅当插槽和样式变量无法满足时覆盖
- 是否引入 UI 库到主题层？
  - 能不用就不用；若必须用，评估包体积、SSR兼容与样式冲突
- 是否把交互逻辑放 `enhanceApp`？
  - 全站级行为放 `enhanceApp`；页面级行为放对应组件

## 产出物

- 可工作的主题入口与结构化样式层
- 主题扩展点清单（已使用插槽、已覆盖组件、全局注册项）
- 构建通过且关键页面视觉与交互稳定

## 参考资料

- [VitePress 自定义主题与默认主题扩展手册](./references/vitepress-custom-theme-playbook.md)
- 官方 LLM 文档：<https://vitepress.dev/llms-full.txt>
