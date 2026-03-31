<template>
  <page-wraper>
    <view class="page-empty">
      <demo-group title="内容形态">
        <demo-group-item v-for="(item, index) in emptyTypes" :key="index" :title="$t(item.title)">
          <wd-empty :icon="item.icon" :tip="item.tip" />
        </demo-group-item>
      </demo-group>

      <demo-group title="组件样式">
        <demo-group-item :title="$t('zi-ding-yi-da-xiao')">
          <wd-empty :icon-size="140" icon="no-result" :tip="$t('dang-qian-sou-suo-wu-jie-guo')" />
        </demo-group-item>
      </demo-group>

      <demo-group title="特殊样式">
        <demo-group-item :title="$t('zi-ding-yi-tu-pian')">
          <wd-empty :icon="blackMao" tip="查看我的头像" />
        </demo-group-item>

        <demo-group-item :title="$t('cha-cao-zi-ding-yi-tu-pian-nei-rong')">
          <wd-empty :tip="$t('cha-cao-zi-ding-yi-tu-pian-nei-rong')">
            <template #image>
              <wd-icon name="sun-fill" size="100px"></wd-icon>
            </template>
          </wd-empty>
        </demo-group-item>

        <demo-group-item :title="$t('di-bu-cha-cao')">
          <wd-empty icon="no-content" tip="当前搜索无结果">
            <template #bottom>
              <view class="bottom-actions">
                <wd-button type="info">重新加载</wd-button>
              </view>
            </template>
          </wd-empty>
        </demo-group-item>
      </demo-group>
    </view>
  </page-wraper>
</template>

<script setup lang="ts">
import blackMao from '../img/black_mao.png'

const emptyTypes = [
  { icon: 'no-result', tip: '当前搜索无结果', title: 'sou-suo-wu-jie-guo' },
  { icon: 'no-wifi', tip: '当前网络不可用，请检查你的网络设置', title: '404-ye-mian' },
  { icon: 'no-content', tip: '暂无内容', title: 'ye-mian-zan-wu-nei-rong' },
  { icon: 'no-collection', tip: '暂无收藏', title: 'wo-de-shou-cang-wei-kong' },
  { icon: 'no-comment', tip: '暂无评论', title: 'wo-de-ping-lun-wei-kong' },
  { icon: 'failpayment', tip: '支付失败，请重新订购', title: 'zhi-fu-shi-bai' },
  { icon: 'no-message', tip: '已订阅全部消息', title: 'yi-ding-yue-quan-bu-xiao-xi' }
] as const
</script>

<style lang="scss" scoped>
.page-empty {
  .bottom-actions {
    margin-top: var(--wot-empty-bottom-margin-top, 20px);
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>
