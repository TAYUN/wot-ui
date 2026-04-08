<template>
  <page-wraper :use-wx-ad="false" :use-reward-fab="true">
    <view class="page-about">
      <view class="page-about__header">
        <view class="page-about__title">{{ $t('guanYuWoMen') }}</view>
        <view class="page-about__desc">
          {{ $t('woShiBuRuMoYuQuYiGeQianDuanDaGongZiWoHeWoDeXiaoHuoBanMenZhengZaiZhiLiYuKaiFaQingLiangGaoXiaoDeUniappZuJianKu') }}
        </view>
      </view>
      <view class="page-about__body">
        <view class="core-team">
          <view class="core-team__title">{{ $t('heXinTuanDui') }}</view>
          <view class="core-team__list">
            <view v-for="(collaborator, index) in githubData.collaborators" :key="index" class="core-team__member">
              <image :src="collaborator.avatar_url" class="core-team__avatar" />
              <view class="core-team__name" :title="collaborator.login">{{ collaborator.login }}</view>
            </view>
          </view>
        </view>

        <view class="additional-links">
          <view class="additional-links__title">{{ $t('gengDuoXinXi') }}</view>
          <wd-cell-group border>
            <wd-cell
              :title="$t('yuYanQieHuan')"
              title-width="200px"
              :label="$t('dangQianYuYan') + ': ' + (currentLang === 'zh-CN' ? '中文' : 'English')"
              is-link
              @click="showLanguageSwitch = true"
            ></wd-cell>
            <!-- #ifndef MP-ALIPAY -->

            <wd-cell
              :title="$t('guanZhuGongZhongHao')"
              title-width="200px"
              :label="$t('uniappJiaoChengZuJianKuXunXiYiShouZhangWo')"
              @click="openWeChat"
              is-link
            ></wd-cell>
            <wd-cell
              :title="$t('juanZeng')"
              title-width="200px"
              :label="$t('meiYiFenJuanZengDuShiDuiWoMenMoDaDeGuLi')"
              @click="donate"
              is-link
            ></wd-cell>
            <!-- #ifdef MP-WEIXIN -->
            <wd-cell
              :title="$t('guanKanJiLiGuangGao')"
              title-width="200px"
              :label="$t('meiCiGuanKanDuShiDuiWoMenDeZhiChiXieXie')"
              @click="watchAd"
              is-link
            ></wd-cell>
            <!-- #endif -->
            <!-- #endif -->
          </wd-cell-group>
        </view>
      </view>
      <wd-action-sheet
        v-model="showLanguageSwitch"
        :actions="languageActions"
        :cancel-text="$t('qu-xiao')"
        :title="$t('yuYanQieHuan')"
        @select="handleLanguageSelect"
      />
    </view>
  </page-wraper>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useI18nSync } from '../../hooks/useI18nSync'

// 使用国际化钩子
const { setLocale, currentLang } = useI18nSync()

// 控制语言切换弹出层的显示
const showLanguageSwitch = ref(false)

// 语言切换选项
const languageActions = computed(() => [
  {
    name: '中文 🇨🇳',
    color: currentLang.value === 'zh-CN' ? '#0083ff' : ''
  },
  {
    name: 'English 🇺🇸',
    color: currentLang.value === 'en-US' ? '#0083ff' : ''
  }
])

// 处理语言选择
const handleLanguageSelect = ({ index }: { index: number }) => {
  const locale = index === 0 ? 'zh-CN' : 'en-US'
  switchLanguage(locale)
}

const githubData = ref<any>({
  collaborators: [
    {
      login: '不如摸鱼去',
      avatar_url: 'https://avatars.githubusercontent.com/u/26426873?v=4'
    },
    {
      login: 'jasper-ops',
      avatar_url: 'https://avatars.githubusercontent.com/u/85024227?v=4'
    },
    {
      login: '二狗',
      avatar_url: 'https://avatars.githubusercontent.com/u/50100966?v=4'
    },
    {
      login: 'RJQingHuan',
      avatar_url: 'https://avatars.githubusercontent.com/u/53939074?v=4'
    },
    {
      login: 'skiyee',
      avatar_url: 'https://avatars.githubusercontent.com/u/120664167?v=4'
    }
  ],
  contributors: [
    {
      login: 'contributor1',
      avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4'
    },
    {
      login: 'contributor2',
      avatar_url: 'https://avatars.githubusercontent.com/u/87654321?v=4'
    }
  ]
})

// 切换语言
const switchLanguage = (locale: string) => {
  setLocale(locale)
}

// 打开公众号二维码
const openWeChat = () => {
  uni.previewImage({
    urls: ['https://wot-ui.cn/wechatPublicAccount.png']
  })
}

// 打开捐赠二维码
const donate = () => {
  uni.previewImage({
    urls: ['https://wot-ui.cn/weixinQrcode.jpg']
  })
  // 打开捐赠页面
}

const watchAd = () => {
  uni.navigateTo({
    url: '/subPages/wxRewardAd/Index'
  })
}
</script>

<style lang="scss" scoped>
.page-about {
  &__header {
    padding: var(--wot-padding-large) var(--wot-padding-large) 0 var(--wot-padding-super-loose);
  }

  &__title {
    text-align: left;
    font-size: var(--wot-typography-title-size-extra-large);
    font-weight: var(--wot-font-weight-medium);
    line-height: var(--wot-typography-title-line--height-size-extra-large);
    color: var(--wot-text-main);
  }

  &__desc {
    margin-top: var(--wot-spacing-super-loose);
    text-align: left;
    font-size: var(--wot-typography-body-size-main);
    line-height: var(--wot-typography-body-line--height-size-main);
    color: var(--wot-text-secondary);
  }

  &__intro {
    margin-top: var(--wot-spacing-main);
    text-align: left;
    font-size: var(--wot-typography-body-size-main);
    line-height: var(--wot-typography-body-line--height-size-main);
    color: var(--wot-text-secondary);
  }

  &__body {
    padding: 0 var(--wot-padding-large) var(--wot-padding-spacious) var(--wot-padding-super-loose);
    user-select: none;
    border-radius: var(--wot-radius-main);
  }
}

.core-team {
  margin-top: var(--wot-spacing-super-loose);

  &__title {
    margin-bottom: var(--wot-spacing-main);
    font-size: var(--wot-typography-title-size-main);
    font-weight: var(--wot-font-weight-semibold);
    line-height: var(--wot-typography-title-line--height-size-main);
    color: var(--wot-text-main);
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__member {
    flex: 1 1 25%;
    max-width: 25%;
    box-sizing: border-box;
    margin-bottom: var(--wot-spacing-main);
    text-align: center;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__avatar {
    width: var(--wot-n-60);
    height: var(--wot-n-60);
    margin: 0 auto;
    border: var(--wot-stroke-blod) solid var(--wot-primary-6);
    border-radius: var(--wot-radius-radius-full);
  }

  &__name {
    margin: 0 auto;
    margin-top: var(--wot-spacing-super-tight);
    font-size: var(--wot-typography-body-size-main);
    line-height: var(--wot-typography-body-line--height-size-main);
    color: var(--wot-text-main);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

// 移除了不再需要的language-switch相关样式

.additional-links {
  margin-top: var(--wot-spacing-super-loose);

  &__title {
    margin-bottom: var(--wot-spacing-main);
    font-size: var(--wot-typography-title-size-main);
    font-weight: var(--wot-font-weight-semibold);
    line-height: var(--wot-typography-title-line--height-size-main);
    color: var(--wot-text-main);
  }

  &__icon {
    width: var(--wot-n-24);
    height: var(--wot-n-24);
    margin-right: var(--wot-spacing-main);
  }
}
</style>
