import type { Theme, EnhanceAppContext } from 'vitepress'
import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './styles/vars.css'
import './styles/custom.css'

import Layout from './Layout.vue'
import SvgImage from './components/SvgImage.vue'
import ExternalLink from './components/ExternalLink.vue'
import ElementPlus, { ElMessageBox } from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 声明百度统计全局变量
declare global {
  interface Window {
    _hmt: any[]
  }
}

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component('SvgImage', SvgImage)
    app.component('ExternalLink',ExternalLink)
    app.component('Badge',VPBadge)
    app.use(ElementPlus as any)
    
    if (typeof window !== 'undefined') {
      // 检测是否为旧域名，只在页面首次加载时检测
      const checkSiteMigration = async () => {
        if (window.location.hostname === 'wot-design-uni.pages.dev') {
          try {
            // 使用 Element Plus 的 MessageBox 弹出确认对话框
            await ElMessageBox.confirm(
              '站点已迁移至新域名，为了获得更好的访问体验，建议您跳转到新站点。',
              '站点迁移通知',
              {
                confirmButtonText: '立即跳转',
                cancelButtonText: '稍后再说',
                type: 'warning',
                center: true
              }
            )
            // 用户点击确认后跳转
            // 保持当前路径，只替换域名
            const newUrl = `https://wot-ui.cn${window.location.pathname}${window.location.search}${window.location.hash}`
            window.location.href = newUrl
          } catch {
            // 用户点击取消或关闭对话框，不做任何操作
          }
        }
      }
      
      // 页面加载完成后检测
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkSiteMigration)
      } else {
        checkSiteMigration()
      }
      
      // 百度统计路由监听
      // 确保百度统计已加载
      const trackPageView = (path: string) => {
        if (window._hmt) {
          window._hmt.push(['_trackPageview', path])
        }
      }
      
      // 监听路由变化
      router.onAfterRouteChange = (to: string) => {
        // 延迟执行，确保页面已完全加载
        setTimeout(() => {
          trackPageView(to)
        }, 100)
      }
    }
  },
} satisfies Theme
