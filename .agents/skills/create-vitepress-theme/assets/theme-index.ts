import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles-vars.css'
import './styles-custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(Layout)
  },
  enhanceApp({ app, router }) {
    // Example:
    // app.component('GlobalDemo', GlobalDemo)
    // router.onAfterRouteChanged = (to) => { console.log('[vp-route]', to) }

    if (typeof window !== 'undefined') {
      // Browser-only logic goes here.
      void app
      void router
    }
  }
} satisfies Theme
