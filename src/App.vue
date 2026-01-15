<!--
 * @Author: weisheng
 * @Date: 2024-10-12 13:07:08
 * @LastEditTime: 2026-01-09 16:23:31
 * @LastEditors: weisheng
 * @Description: 
 * @FilePath: /wot-design-uni/src/App.vue
 * 记得注释
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide, onThemeChange } from '@dcloudio/uni-app'
import { useDark } from './store'
import { useI18nSync } from './hooks/useI18nSync'
import { useIframeMessage } from './hooks/useIframeMessage'
import { getSystemInfo } from './uni_modules/wot-design-uni/components/common/util'

// 初始化国际化
const darkMode = useDark()
const { setLocale } = useI18nSync() // 禁用内置的iframe消息监听，使用专门的hook处理

// 使用专门的iframe消息处理hook
useIframeMessage({
  onLocaleChange: (locale) => {
    setLocale(locale)
  },
  onThemeChange: (isDark) => {
    darkMode.setDark(isDark)
  }
})

onThemeChange((option) => {
  darkMode.setDark(option.theme === 'dark')
})

onLaunch(() => {
  const systemInfo = getSystemInfo()
  darkMode.setDark(systemInfo.theme === 'dark')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@use '@/iconfont/index.css';

@use './uni_modules/wot-design-uni/components/styles/theme/index.scss' as *;

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

page {
  margin: 0;
  padding: 0;
  font-family: San Francisco, Rotobo, arial, PingFang SC, Noto SansCJK, Microsoft Yahei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 13px;
  background: #f8f9fa;
  --wot-blue-1: #e6f4ff;
  --wot-blue-2: #bae0ff;
  --wot-blue-3: #91caff;
  --wot-blue-4: #69b1ff;
  --wot-blue-5: #4096ff;
  --wot-blue-6: #1677ff;
  --wot-blue-7: #0958d9;
  --wot-blue-8: #003eb3;
  --wot-blue-9: #002c8c;
  --wot-blue-10: #001d66;
}
</style>
