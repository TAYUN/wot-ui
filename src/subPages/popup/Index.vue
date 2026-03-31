<template>
  <page-meta :page-style="`overflow:${popupState.lockScroll ? 'hidden' : 'visible'};`"></page-meta>
  <page-wraper>
    <view class="page-popup">
      <demo-group transparent title="组件类型">
        <demo-group-item no-padding :title="$t('ji-chu-yong-fa-0')">
          <wd-cell-group>
            <wd-cell :title="$t('dan-chu-ceng')" is-link @click="openPopup('basic')" />
          </wd-cell-group>
        </demo-group-item>
        <demo-group-item no-padding :title="$t('dan-chu-wei-zhi')">
          <wd-cell-group border>
            <wd-cell v-for="item in positionItems" :key="item.key" :title="$t(item.titleKey)" is-link @click="openPopup(item.key)" />
          </wd-cell-group>
        </demo-group-item>
      </demo-group>

      <demo-group transparent title="组件状态">
        <demo-group-item no-padding :title="$t('guan-bi-an-niu')">
          <wd-cell-group border>
            <wd-cell :title="$t('guan-bi-an-niu-0')" is-link @click="openPopup('closable')" />
          </wd-cell-group>
        </demo-group-item>
        <demo-group-item no-padding :title="$t('jin-yong-zhe-zhao-dian-ji')">
          <wd-cell-group border>
            <wd-cell :title="$t('jin-yong-zhe-zhao-dian-ji-0')" is-link @click="openPopup('blockModal')" />
          </wd-cell-group>
        </demo-group-item>
        <demo-group-item no-padding :title="$t('jin-yong-zhe-zhao')">
          <wd-cell-group border>
            <wd-cell :title="$t('jin-yong-zhe-zhao-0')" is-link @click="openPopup('noModal')" />
          </wd-cell-group>
        </demo-group-item>
      </demo-group>

      <demo-group transparent title="组件样式">
        <demo-group-item no-padding :title="$t('kai-qi-di-bu-an-quan-qu')">
          <wd-cell-group border>
            <wd-cell :title="$t('kai-qi-di-bu-an-quan-qu-0')" is-link @click="openPopup('safeArea')" />
          </wd-cell-group>
        </demo-group-item>
      </demo-group>

      <demo-group transparent title="特殊样式">
        <demo-group-item no-padding :title="$t('suo-ding-gun-dong')">
          <wd-cell-group border>
            <wd-cell :title="$t('suo-ding-gun-dong-0')" is-link @click="openPopup('lockScroll')" />
          </wd-cell-group>
        </demo-group-item>
        <demo-group-item no-padding title="嵌套弹窗与 root-portal">
          <wd-cell-group border>
            <wd-cell title="嵌套弹窗测试" is-link @click="openPopup('nested')" />
          </wd-cell-group>
        </demo-group-item>
      </demo-group>

      <wd-popup v-model="popupState.basic" custom-style="border-radius: 32rpx;" @close="closePopup('basic')">
        <text class="custom-txt">{{ $t('dan-dan-dan') }}</text>
      </wd-popup>
      <wd-popup v-model="popupState.top" position="top" custom-style="height: 200px;" @close="closePopup('top')"></wd-popup>
      <wd-popup v-model="popupState.right" position="right" custom-style="width: 200px;" @close="closePopup('right')"></wd-popup>
      <wd-popup v-model="popupState.bottom" position="bottom" custom-style="height: 200px;" @close="closePopup('bottom')"></wd-popup>
      <wd-popup v-model="popupState.left" position="left" custom-style="width: 200px;" @close="closePopup('left')"></wd-popup>
      <wd-popup v-model="popupState.closable" position="bottom" closable custom-style="height: 200px;" @close="closePopup('closable')"></wd-popup>
      <wd-popup
        v-model="popupState.blockModal"
        position="bottom"
        :close-on-click-modal="false"
        closable
        custom-style="height: 200px;"
        @close="closePopup('blockModal')"
      ></wd-popup>
      <wd-popup
        v-model="popupState.noModal"
        position="bottom"
        :modal="false"
        closable
        custom-style="height: 200px;"
        @close="closePopup('noModal')"
      ></wd-popup>
      <wd-popup
        v-model="popupState.safeArea"
        position="bottom"
        :safe-area-inset-bottom="true"
        custom-style="height: 200px;"
        @close="closePopup('safeArea')"
      ></wd-popup>
      <wd-popup
        v-model="popupState.lockScroll"
        lock-scroll
        position="bottom"
        :safe-area-inset-bottom="true"
        custom-style="height: 200px;"
        @close="closePopup('lockScroll')"
      ></wd-popup>

      <wd-popup v-model="popupState.nested" position="center" custom-style="padding: 20px; border-radius: 16px;" @close="closeNestedPopup">
        <view class="nested-popup-content">
          <text class="nested-title">父弹窗（普通模式）</text>
          <text class="nested-desc">点击下方按钮，分别打开普通子弹窗和启用 root-portal 的子弹窗。</text>
          <view class="nested-buttons">
            <wd-button type="primary" size="small" @click="openChildPopup(false)">打开普通子弹窗</wd-button>
            <wd-button type="success" size="small" @click="openChildPopup(true)">打开传送子弹窗</wd-button>
          </view>
        </view>

        <wd-popup v-model="popupState.child" position="center" custom-style="padding: 20px; border-radius: 16px;" @close="closePopup('child')">
          <view class="nested-popup-content">
            <text class="nested-title">子弹窗（普通模式）</text>
            <text class="nested-desc">这个子弹窗和父弹窗处于同一层级。</text>
            <wd-button type="primary" size="small" @click="closePopup('child')">关闭</wd-button>
          </view>
        </wd-popup>

        <wd-popup
          v-model="popupState.childPortal"
          root-portal
          position="center"
          custom-style="padding: 20px; border-radius: 16px;"
          @close="closePopup('childPortal')"
        >
          <view class="nested-popup-content">
            <text class="nested-title">子弹窗（传送模式）</text>
            <text class="nested-desc">开启 root-portal 后，子弹窗会脱离父层级渲染。</text>
            <wd-button type="success" size="small" @click="closePopup('childPortal')">关闭</wd-button>
          </view>
        </wd-popup>
      </wd-popup>
    </view>
  </page-wraper>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const popupState = reactive({
  basic: false,
  top: false,
  right: false,
  bottom: false,
  left: false,
  closable: false,
  blockModal: false,
  noModal: false,
  safeArea: false,
  lockScroll: false,
  nested: false,
  child: false,
  childPortal: false
})

type PopupStateKey = keyof typeof popupState

const positionItems = [
  { key: 'top', titleKey: 'ding-bu' },
  { key: 'right', titleKey: 'you-ce' },
  { key: 'bottom', titleKey: 'di-bu' },
  { key: 'left', titleKey: 'zuo-ce' }
] as const

function openPopup(key: PopupStateKey) {
  popupState[key] = true
}

function closePopup(key: PopupStateKey) {
  popupState[key] = false
}

function closeNestedPopup() {
  popupState.nested = false
  popupState.child = false
  popupState.childPortal = false
}

function openChildPopup(useRootPortal: boolean) {
  if (useRootPortal) {
    popupState.childPortal = true
  } else {
    popupState.child = true
  }
}
</script>

<style lang="scss" scoped>
.page-popup {
  .custom-txt {
    color: black;
    width: 400rpx;
    height: 400rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40rpx;
    border-radius: 32rpx;
  }

  .nested-popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20rpx;
  }

  .nested-title {
    color: black;
    font-size: 36rpx;
    font-weight: bold;
    text-align: center;
  }

  .nested-desc {
    color: #666;
    font-size: 28rpx;
    text-align: center;
    line-height: 1.5;
    margin: 10rpx 0;
  }

  .nested-buttons {
    display: flex;
    gap: 20rpx;
    margin-top: 20rpx;
  }
}

.wot-theme-dark {
  .page-popup {
    .custom-txt,
    .nested-title {
      color: $-dark-color;
    }

    .nested-desc {
      color: $-dark-color3;
    }
  }
}
</style>
