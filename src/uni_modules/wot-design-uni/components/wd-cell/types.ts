import type { ExtractPropTypes } from 'vue'
import { baseProps, makeBooleanProp, makeStringProp, makeNumericProp, numericProp } from '../common/props'

export type CellAsteriskPosition = 'start' | 'end'

export type CellLayout = 'horizontal' | 'vertical'

export type CellValueAlign = 'left' | 'right' | 'center'

export type CellArrowDirection = 'left' | 'up' | 'down' | 'right'

export const cellProps = {
  ...baseProps,
  /**
   * 标题
   */
  title: String,
  /**
   * 右侧内容
   */
  value: makeNumericProp(''),
  /**
   * 占位符
   */
  placeholder: String,
  /**
   * 图标类名
   */
  icon: String,
  /**
   * 图标大小
   */
  iconSize: numericProp,
  /**
   * 类名前缀，用于使用自定义图标
   */
  iconPrefix: makeStringProp('wd-icon'),
  /**
   * 描述信息
   */
  label: String,
  /**
   * 跳转地址
   */
  to: String,
  /**
   * 跳转时是否替换栈顶页面
   */
  replace: makeBooleanProp(false),
  /**
   * 是否开启点击反馈
   */
  clickable: makeBooleanProp(false),
  /**
   * 是否展示右侧箭头并开启点击反馈
   */
  isLink: makeBooleanProp(false),
  /**
   * 设置单元格大小，可选值：large
   */
  size: String,
  /**
   * 是否展示边框线
   */
  border: makeBooleanProp(void 0),
  /**
   * 设置左侧标题宽度
   */
  titleWidth: String,
  /**
   * 是否使内容垂直居中，默认顶部居中
   */
  center: makeBooleanProp(false),
  /**
   * 是否必填
   */
  required: makeBooleanProp(false),
  /**
   * 表单布局方式，可选值：horizontal、vertical
   */
  layout: makeStringProp<CellLayout>('horizontal'),
  /**
   * value 文字对齐方式，可选值：left、right、center
   */
  valueAlign: makeStringProp<CellValueAlign>('right'),
  /**
   * 是否超出隐藏，显示省略号
   */
  ellipsis: makeBooleanProp(false),
  /**
   * 是否启用title插槽，默认启用，用来解决插槽传递时v-slot和v-if冲突问题。
   * 问题见：https://github.com/dcloudio/uni-app/issues/4847
   */
  useTitleSlot: makeBooleanProp(true),
  /**
   * 必填星号位置，可选值：start（title前）、end（title后）
   */
  asteriskPosition: makeStringProp<CellAsteriskPosition>('start'),
  /**
   * 是否隐藏必填星号
   */
  hideAsterisk: makeBooleanProp(false),
  /**
   * 箭头方向,可选值:left、up、down、right,只在 is-link 为 true 时生效
   */
  arrowDirection: makeStringProp<CellArrowDirection>('right'),
  /**
   * icon 使用 slot 时的自定义样式
   */
  customIconClass: makeStringProp(''),
  /**
   * label 使用 slot 时的自定义样式
   */
  customLabelClass: makeStringProp(''),
  /**
   * value 使用 slot 时的自定义样式
   */
  customValueClass: makeStringProp(''),
  /**
   * title 使用 slot 时的自定义样式
   */
  customTitleClass: makeStringProp('')
}

export type CellProps = ExtractPropTypes<typeof cellProps>
