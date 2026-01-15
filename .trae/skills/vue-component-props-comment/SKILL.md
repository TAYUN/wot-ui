---
name: vue-component-props-comment
description: 统一 Vue 组件 props 注释格式，确保注释风格一致，便于维护和文档生成。
---

# Vue 组件 Props 注释规范

统一 Vue 组件 props 的注释格式，确保代码注释风格一致，提高代码可读性和维护性，便于自动生成组件文档。

## 命令
当需要统一 Vue 组件 props 的注释格式时使用此技能。

## 使用场景
1. 维护现有 Vue 组件库的代码规范
2. 新开发 Vue 组件时确保注释格式一致
3. 整理组件文档前统一注释格式

## 注释规范

### 基本格式
```typescript
/**
 * 属性简短描述
 * 可选值: 值1 | 值2 | 值3
 * 默认值: xxx
 */
```

### 具体规则
1. 使用多行 JSDoc 格式（`/** ... */`）
2. 第一行：简短描述该属性的作用
3. 第二行：如果有枚举值，使用 `可选值:` 列出所有可选值
4. 第三行：如果有默认值，使用 `默认值:` 说明默认值
5. 使用英文冒号（`:`）而非中文冒号（`：`）
6. 保持描述简洁明了，使用完整的句子

### 特殊情况处理
- 对于简单属性，可以使用单行注释格式
- 对于继承自父组件的属性，默认值说明为 `继承自 xxx`
- 对于没有默认值的属性，可以省略默认值行

## 示例

### 组件组（Group）的 Props 注释
```typescript
export const radioGroupProps = {
  ...baseProps,
  /**
   * 会自动选中value对应的单选框
   */
  modelValue: [String, Number, Boolean],
  /**
   * 单选框类型
   * 可选值: 'dot' | 'circle' | 'square' | 'button'
   * 默认值: circle
   */
  type: makeStringProp<RadioType>('circle'),
  /**
   * 选中的颜色
   * 默认值: #4D80F0
   */
  checkedColor: String,
  /**
   * 是否禁用
   * 默认值: false
   */
  disabled: makeBooleanProp(false)
}
```

### 基础组件的 Props 注释
```typescript
export const radioProps = {
  ...baseProps,
  /**
   * 选中时的值
   */
  value: makeRequiredProp([String, Number, Boolean]),
  /**
   * 是否禁用
   * 默认值: 继承自 radio-group
   */
  disabled: {
    type: Boolean,
    default: void 0
  },
  /**
   * 布局方向
   * 可选值: 'horizontal' | 'vertical'
   * 默认值: 继承自 radio-group
   */
  direction: String as PropType<RadioDirection>
}
```

## 输出解释
执行此技能后，将按照上述规范统一修改 Vue 组件的 props 注释格式，确保：
- 所有 props 都有清晰的描述
- 枚举值和默认值说明完整
- 注释风格一致
- 便于后续维护和文档生成