import type { ExtractPropTypes, PropType } from 'vue'
import { baseProps, makeBooleanProp, makeNumberProp, makeStringProp } from '../common/props'
import { type LoadingProps } from '../wd-loading/types'

export type ButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'
export type ButtonSize = 'mini' | 'small' | 'medium' | 'large'
export type ButtonLang = 'zh_CN' | 'zh_TW' | 'en'

export type ButtonOpenType =
  | 'feedback'
  | 'share'
  | 'getUserInfo'
  | 'contact'
  | 'getPhoneNumber'
  | 'getRealtimePhoneNumber'
  | 'launchApp'
  | 'openSetting'
  | 'chooseAvatar'
  | 'getAuthorize'
  | 'lifestyle'
  | 'contactShare'
  | 'openGroupProfile'
  | 'openGuildProfile'
  | 'openPublicProfile'
  | 'shareMessageToFriend'
  | 'addFriend'
  | 'addColorSign'
  | 'addGroupApp'
  | 'addToFavorites'
  | 'chooseAddress'
  | 'chooseInvoiceTitle'
  | 'login'
  | 'subscribe'
  | 'favorite'
  | 'watchLater'
  | 'openProfile'
  | 'agreePrivacyAuthorization'

export type ButtonScope = 'phoneNumber' | 'userInfo'

export const buttonProps = {
  ...baseProps,
  /**
   * 幽灵按钮
   */
  plain: makeBooleanProp(false),
  /**
   * 圆角按钮
   */
  round: makeBooleanProp(false),
  /**
   * 禁用按钮
   */
  disabled: makeBooleanProp(false),
  /**
   * 是否细边框
   */
  hairline: makeBooleanProp(false),
  /**
   * 块状按钮
   */
  block: makeBooleanProp(false),
  /**
   * 按钮类型，可选值：primary / success / info / warning / danger / text
   */
  type: makeStringProp<ButtonType>('primary'),
  /**
   * 按钮尺寸，可选值：mini / small / medium / large
   */
  size: makeStringProp<ButtonSize>('medium'),
  /**
   * 图标类名
   */
  icon: String,
  /**
   * 类名前缀，用于使用自定义图标，用法参考Icon组件
   */
  classPrefix: makeStringProp('wd-icon'),
  /**
   * 加载中按钮
   */
  loading: makeBooleanProp(false),
  /**
   * 加载图标颜色
   */
  loadingColor: String,
  /**
   * 开放能力
   */
  openType: String as PropType<ButtonOpenType>,
  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   */
  hoverStopPropagation: Boolean,
  /**
   * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
   */
  lang: String as PropType<ButtonLang>,
  /**
   * 会话来源，open-type="contact"时有效
   */
  sessionFrom: String,
  /**
   * 会话内消息卡片标题，open-type="contact"时有效
   */
  sendMessageTitle: String,
  /**
   * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
   */
  sendMessagePath: String,
  /**
   * 会话内消息卡片图片，open-type="contact"时有效
   */
  sendMessageImg: String,
  /**
   * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
   */
  appParameter: String,
  /**
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
   */
  showMessageCard: Boolean,
  /**
   * 按钮的唯一标识，可用于设置隐私同意授权按钮的id
   */
  buttonId: String,
  /**
   * 支付宝小程序，当 open-type 为 getAuthorize 时有效。
   * 可选值：'phoneNumber' | 'userInfo'
   */
  scope: String as PropType<ButtonScope>,
  /**
   * 加载配置项
   */
  loadingProps: Object as PropType<Partial<LoadingProps>>,
  /**
   * 点击按钮后，等待多少毫秒后出现点击态，单位毫秒
   */
  hoverStartTime: makeNumberProp(20),
  /**
   * 手指松开后，等待多少毫秒后移除点击态，单位毫秒
   */
  hoverStayTime: makeNumberProp(70)
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
