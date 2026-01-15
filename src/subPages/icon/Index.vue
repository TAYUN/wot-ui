<template>
  <view>
    <page-wraper>
      <view class="icon">
        <view style="position: sticky; top: 0; z-index: 2">
          <wd-search hide-cancel :placeholder="$t('cha-zhao-tu-biao')" light v-model="keyword" @search="handleSearch" @clear="handleClear" />
        </view>
        <view v-for="(cat, category) in showCategorized" :key="category">
          <view class="icon-category-title">{{ cat.title }}</view>
          <view class="icon-list">
            <view v-for="(icon, index) in cat.list" :key="index" class="icon-item" @click="handleClick(icon)">
              <view><wd-icon :name="icon" size="22px" custom-class="icon-item-class" /></view>
              <view class="icon-item-name">{{ icon }}</view>
            </view>
          </view>
        </view>
        <wd-status-tip v-if="isEmpty" image="search" :tip="$t('dang-qian-wu-xiang-guan-tu-biao')" />
      </view>
    </page-wraper>
  </view>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useNotify } from '@/uni_modules/wot-design-uni'
import { useI18n } from 'vue-i18n'
const { showNotify } = useNotify()

const { t } = useI18n()
const keyword = ref<string>('')

const categorizedIcons = ref<Record<string, { title: string; list: string[] }>>({
  direction: {
    title: '方向类图标',
    list: [
      'arrow-down',
      'arrow-fall',
      'arrow-left',
      'arrow-right',
      'arrow-rise',
      'arrow-up',
      'caret-down',
      'caret-left',
      'caret-right',
      'caret-up',
      'double-down',
      'double-left',
      'double-right',
      'double-up',
      'down',
      'down-circle',
      'drag-arrow',
      'expand',
      'left',
      'left-circle',
      'menu-fold',
      'menu-unfold',
      'right',
      'right-circle',
      'rotate-left',
      'rotate-right',
      'shrink',
      'swap',
      'to-bottom',
      'to-left',
      'to-right',
      'to-top',
      'up',
      'up-circle'
    ]
  },
  edit: {
    title: '编辑类图标',
    list: [
      'align-center',
      'align-left',
      'align-right',
      'bg-colors',
      'bold',
      'brush',
      'circular',
      'copy',
      'delete',
      'deleteall',
      'edit',
      'eraser',
      'filter',
      'find-replace',
      'font-colors',
      'formula',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'h7',
      'highlight',
      'italic',
      'line-height',
      'link',
      'number',
      'oblique-line',
      'ordered-list',
      'original-size',
      'paste',
      'quote',
      'redo',
      'scissor',
      'sort',
      'sort-ascending',
      'sort-descending',
      'strikethrough',
      'textarea',
      'underline',
      'undo',
      'unordered-list',
      'zoom-in',
      'zoom-out'
    ]
  },
  general: {
    title: '通用类图标',
    list: [
      'Fire',
      'application',
      'apps',
      'archive',
      'book',
      'branch',
      'bug',
      'bulb',
      'calendar-line',
      'camera',
      'cloud',
      'command',
      'common',
      'compass',
      'copyright',
      'dashboard',
      'desktop',
      'dice',
      'drag-dot',
      'drag-dot-vertical',
      'drive-file',
      'ear',
      'email',
      'empty',
      'experiment',
      'face-frown-fill',
      'face-meh-fill',
      'face-smile-fill',
      'file',
      'file-audio',
      'file-image',
      'file-pdf',
      'file-video',
      'folder',
      'folder-add',
      'folder-delete',
      'gift',
      'idcard',
      'image',
      'image-close',
      'interaction',
      'language',
      'layout',
      'loading',
      'location',
      'lock',
      'loop',
      'man',
      'menu',
      'mind-mapping',
      'mobile',
      'moon',
      'moon-fill',
      'mosaic',
      'nav',
      'notification',
      'notification-close',
      'old-version',
      'pen',
      'pen-fill',
      'phone',
      'printer',
      'public',
      'pushpin',
      'qrcode',
      'robot',
      'robot-add',
      'safe',
      'shake',
      'skin',
      'stamp',
      'storage',
      'store',
      'subscribe',
      'subscribe-add',
      'subscribed',
      'sun',
      'sun-fill',
      'tag',
      'tags',
      'thunderbolt',
      'time-line',
      'tool',
      'trophy',
      'unlock',
      'user',
      'user-add',
      'user-group',
      'video-camera',
      'wifi',
      'woman'
    ]
  },
  'interactive-button': {
    title: '交互类图标',
    list: [
      'Export',
      'Launch',
      'at',
      'barcode',
      'buble-circle-fill',
      'clock-circle-fill',
      'cloud-download',
      'code',
      'code-block',
      'code-square',
      'download',
      'eye',
      'eye-fill',
      'eye-invisible',
      'eye-invisible-fill',
      'headset',
      'headset-fill',
      'headset-off',
      'headset-off-fill',
      'heart',
      'heart-fill',
      'history',
      'home',
      'home-fill',
      'import',
      'lightning-circle-fill',
      'list',
      'message',
      'message-banned',
      'mfill',
      'mic',
      'more',
      'more-vertical',
      'poweroff',
      'refresh',
      'reply',
      'save',
      'scan',
      'search-line',
      'select-all',
      'send',
      'settings',
      'share-alt',
      'share-external',
      'share-internal',
      'star',
      'star-fill',
      'sync',
      'thumb-down',
      'thumb-down-fill',
      'thumb-up',
      'thumb-up-fill',
      'translate',
      'upload',
      'voice'
    ]
  },
  media: {
    title: '媒体类图标',
    list: [
      'backward',
      'forward',
      'fullscreen',
      'fullscreen-exit',
      'live-broadcast',
      'music',
      'mute',
      'mute-fill',
      'pause',
      'pause-circle',
      'pause-circle-fill',
      'play-arrow',
      'play-arrow-fill',
      'play-circle',
      'play-circle-fill',
      'record',
      'record-stop',
      'skip-next',
      'skip-next-fill',
      'skip-previous',
      'skip-previous-fill',
      'sound',
      'sound-fill'
    ]
  },
  tips: {
    title: '提示类图标',
    list: [
      'check',
      'check-circle',
      'check-circle-fill',
      'check-circle-radio-fill',
      'check-square',
      'check-square-fill',
      'clock-circle',
      'close',
      'close-circle',
      'close-circle-fill',
      'exclamation',
      'exclamation-circle',
      'exclamation-circle-fill',
      'exclamation-polygon-fill',
      'info',
      'info-circle',
      'info-circle-fill',
      'minus',
      'minus-circle',
      'minus-circle-fill',
      'plus',
      'plus-circle',
      'plus-circle-fill',
      'question',
      'question-circle',
      'question-circle-fill',
      'stop',
      'uncheck-circle',
      'uncheck-square'
    ]
  }
})

const showCategorized = ref<Record<string, { title: string; list: string[] }>>({})
const isEmpty = computed(() => Object.values(showCategorized.value).every((v) => !v.list.length))

onMounted(() => {
  showCategorized.value = categorizedIcons.value
})

function handleSearch() {
  const key = keyword.value
  if (!key) {
    showCategorized.value = categorizedIcons.value
    return
  }
  const result: Record<string, { title: string; list: string[] }> = {}
  const source = categorizedIcons.value
  Object.keys(source).forEach((cat) => {
    const list = source[cat].list.filter((str) => str.includes(key))
    if (list.length) result[cat] = { title: source[cat].title, list }
  })
  showCategorized.value = result
}

function handleClear() {
  keyword.value = ''
  showCategorized.value = categorizedIcons.value
}

function handleClick(icon: string) {
  // #ifdef H5
  uni.setClipboardData({
    data: `<wd-icon name="${icon}" size="22px"></wd-icon>`,
    showToast: false,
    success: () => {
      showNotify({
        type: 'success',
        duration: 1500,
        message: t('fu-zhi-cheng-gong') + `<wd-icon name="${icon}" size="22px"></wd-icon>`
      })
    }
  })

  // #endif
}
</script>
<style lang="scss" scoped>
$-light-color: #999;

.wot-theme-dark {
  .icon-list {
    background: $-dark-background2;
    :deep(.icon-item-class) {
      color: $-dark-color;
    }
  }
  .icon-item-name {
    color: $-dark-color3;
  }
}

.icon {
  position: relative;
  height: 100vh;
  overflow: auto;
  height: calc(100vh - var(--window-top));
  height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom));
  height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
}

.icon-list {
  box-sizing: border-box;
  display: flex;
  padding: 15px;
  flex-wrap: wrap;
  background: #fff;
}
.icon-category-title {
  padding: 10px 15px 0 15px;
  font-size: 14px;
  color: $-light-color;
  background: #fff;
}
.icon-item {
  width: 25%;
  padding: 15px 0;
  text-align: center;
}

:deep(.icon-item-class) {
  color: $-light-color;
}

.icon-item-name {
  margin: 10px 0;
  color: $-light-color;
}
</style>
