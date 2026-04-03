# Toast

Lightweight prompt component for message notifications, loading prompts, and operation result feedback. Supports component mounting point with `useToast()` for functional calls.

::: tip Tip
`Toast` supports controlling default styles through component `props` since `1.7.0`. When calling functionally, the passed `options` take priority over component `props`.

Global calling solution can refer to [wot-starter](https://starter.wot-ui.cn/guide/feedback.html), suitable for use in route guards or request interceptors.
:::

## Component Types

### Basic Usage

First place a `wd-toast` in the page as a mounting point, then call the prompt through `useToast()`.

::: code-group

```html [vue]
<wd-toast />
<wd-button @click="showToast">toast</wd-button>
```

```ts [ts]
import { useToast } from '@/uni_modules/wot-ui'

const toast = useToast()

function showToast() {
  toast.show('Prompt message')
}
```

:::

### Type Prompt

Supports four quick prompts: success, error, warning, and info.

```ts
toast.success('Operation successful')
toast.error('Mobile verification code input error, please re-enter')
toast.warning('Prompt message')
toast.info('Regular prompt message')
```

## Component States

### Loading Prompt

`loading()` does not auto-close by default, suitable for waiting for async requests to complete before manually calling `close()`.

```ts
toast.loading('Auto-close after 3s')

setTimeout(() => {
  toast.close()
}, 3000)
```

### Loading Type

Switch different loading styles through `loadingType`, supports `circular`, `spinner`, `dots`.

```ts
toast.loading({
  msg: 'Auto-close after 3s',
  loadingType: 'spinner',
  loadingColor: '#fff'
})
```

## Component Styles

### Use Icon

You can use built-in icons through `iconClass`, or use custom icons with `classPrefix`.

::: code-group

```ts [Built-in Icon]
toast.show({
  iconClass: 'star',
  msg: 'Using component library internal icon'
})
```

```ts [Custom Icon]
toast.show({
  iconClass: 'kehuishouwu',
  classPrefix: 'fish',
  msg: 'Using custom icon'
})
```

:::

### Prompt Position

Adjust prompt position through `position`, supports `top`, `middle-top`, `middle`, `bottom`.

```ts
toast.show({
  position: 'top',
  msg: 'Prompt message'
})

toast.show({
  position: 'middle',
  msg: 'Prompt message'
})

toast.show({
  position: 'bottom',
  msg: 'Prompt message'
})
```

### Layout Direction

Control horizontal or vertical layout through `direction`, often used for long text or loading prompts.

```ts
toast.success({
  msg: 'Vertical layout',
  direction: 'vertical'
})
```

## Toast Attributes

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| selector | Unique mounting identifier, used to distinguish different toasts in multi-instance scenarios | `string` | `''` |
| msg ^(1.7.0) | Default prompt text | `string` | `''` |
| direction ^(1.7.0) | Default layout direction, optional values are `horizontal`, `vertical` | `ToastDirection` | `horizontal` |
| icon-name ^(1.7.0) | Default icon type, optional values are `success`, `error`, `warning`, `loading`, `info` | `ToastIconType` | `''` |
| icon-size ^(1.7.0) | Default icon size | `number` | - |
| loading-type ^(1.7.0) | Default loading icon type, optional values are `circular`, `spinner`, `dots` | `ToastLoadingType` | `circular` |
| loading-color ^(1.7.0) | Default loading icon color | `string` | `#ffffff` |
| loading-size ^(1.7.0) | Default loading icon size | `number` | - |
| icon-color ^(1.7.0) | Default icon color | `string` | - |
| position ^(1.7.0) | Default prompt position, optional values are `top`, `middle-top`, `middle`, `bottom` | `ToastPositionType` | `middle` |
| z-index ^(1.7.0) | Default z-index level | `number` | `100` |
| cover ^(1.7.0) | Whether to show transparent mask layer | `boolean` | `false` |
| icon-class ^(1.7.0) | Default icon class name | `string` | `''` |
| class-prefix ^(1.7.0) | Icon class name prefix | `string` | `wd-icon` |
| opened ^(1.7.0) | Callback after fully displayed | `() => void` | - |
| closed ^(1.7.0) | Callback after fully closed | `() => void` | - |
| custom-class | Root node custom class name | `string` | `''` |
| custom-style | Root node custom style | `string` | `''` |

## Toast Options

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| msg | Prompt text | `string` | `''` |
| duration | Duration in milliseconds, `0` means no auto-close | `number` | `2000` |
| direction | Layout direction, optional values are `horizontal`, `vertical` | `ToastDirection` | `horizontal` |
| iconName | Icon type, optional values are `success`, `error`, `warning`, `loading`, `info` | `ToastIconType` | - |
| iconSize | Icon size | `number` | - |
| loadingType | Loading icon type, optional values are `circular`, `spinner`, `dots` | `ToastLoadingType` | - |
| loadingColor | Loading icon color | `string` | - |
| loadingSize | Loading icon size | `number` | - |
| iconColor | Icon color | `string` | - |
| position | Prompt position, optional values are `top`, `middle-top`, `middle`, `bottom` | `ToastPositionType` | `middle` |
| show | Whether to show, for internal state use only | `boolean` | - |
| zIndex | Z-index level | `number` | `100` |
| cover | Whether to show transparent mask layer | `boolean` | `false` |
| iconClass | Custom icon class name | `string` | `''` |
| classPrefix | Custom icon class name prefix | `string` | `wd-icon` |
| opened | Callback after fully displayed | `() => void` | - |
| closed | Callback after fully closed | `() => void` | - |

## Toast Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| show | Show regular prompt | `(options: ToastOptions \| string)` | - |
| success | Show success prompt | `(options: ToastOptions \| string)` | - |
| error | Show error prompt | `(options: ToastOptions \| string)` | - |
| warning | Show warning prompt | `(options: ToastOptions \| string)` | - |
| info | Show regular prompt | `(options: ToastOptions \| string)` | - |
| loading | Show loading prompt | `(options: ToastOptions \| string)` | - |
| close | Manually close current prompt | - | - |
