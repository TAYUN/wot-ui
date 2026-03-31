# Curtain

Generally used for announcement-type image popups.

## Basic Usage

Set display and hide through the `v-model` property, which is required.

`src` is the curtain image URL (only online URLs are supported), value type is `string`, required.

`to` is the link to visit when clicking the curtain, value type is `string`, optional.

Set `width`, the default height is calculated based on the original image ratio and the input `width`, required.

```html
<wd-button @click="handleClick">Show Curtain</wd-button>
<wd-curtain v-model="value" :src="img" :to="link" :width="280"></wd-curtain>
```

```typescript
import { ref } from 'vue'

const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
```

## Modify Close Button Position

Set `close-position`, default is 'inset', available values are `top`, `bottom`, `top-left`, `top-right`, `bottom-left`, `bottom-right`.

```html
<wd-button @click="handleClick1">Top Left</wd-button>
<wd-button @click="handleClick2">Top</wd-button>
<wd-button @click="handleClick3">Top Right</wd-button>

<wd-curtain v-model="value1" :src="img" :to="link" close-position="top-left" :width="280"></wd-curtain>
<wd-curtain v-model="value2" :src="img" :to="link" close-position="top" :width="280"></wd-curtain>
<wd-curtain v-model="value3" :src="img" :to="link" close-position="top-right" :width="280"></wd-curtain>
```

```typescript
import { ref } from 'vue'

const value1 = ref<boolean>(false)
const value2 = ref<boolean>(false)
const value3 = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick1() {
  value1.value = true
}
function handleClick2() {
  value2.value = true
}
function handleClick3() {
  value3.value = true
}
```

## Set Mask Click to Close Curtain

Set the `close-on-click-modal` property.

```html
<wd-button @click="handleClick">Close on Mask Click</wd-button>
<wd-curtain v-model="value" :src="img" :to="link" close-position="bottom-right" :width="280" close-on-click-modal></wd-curtain>
```

```typescript
import { ref } from 'vue'

const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
```

## Custom Close Button

By using `close` slot you can customize close position.

```html
<wd-button @click="handleClick">Custom Close Button</wd-button>
<wd-curtain v-model="value" :src="img" :width="280">
  <template #close>
    <view class="custom-close" @click="handleClose">Close</view>
  </template>
</wd-curtain>
```

```typescript
import { ref } from 'vue'

const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')

function handleClick() {
  value.value = true
}

function handleClose() {
  value.value = false
}
```

```css
.custom-close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ffffff;
  font-size: 16px;
}
```

## Attributes

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model / modelValue | Binding value, show/hide curtain ^(1.7.0) | boolean | `false` |
| value | Binding value, show/hide curtain (deprecated, use modelValue) | boolean | `false` |
| src | Curtain image URL, must use online URL | string | - |
| width | Curtain image width, default unit px | number | - |
| to | Curtain image click link | string | - |
| close-position | Close button position, available values are `inset`, `top`, `bottom`, `top-left`, `top-right`, `bottom-left`, `bottom-right` | string | `inset` |
| close-on-click-modal | Close on mask click | boolean | `false` |
| hide-when-close | Hide popup layer when closed (display: none) | boolean | `true` |
| z-index | Set layer level ^(1.4.0) | number | `10` |
| root-portal | Whether to detach from the page, used to solve various fixed positioning issues ^(1.11.0) | boolean | `false` |
| show-menu-by-longpress | Enable long press image to show Mini Program code recognition menu, only supported in WeChat Mini Program ^(1.13.0) | boolean | `false` |
| close-on-click | Whether clicking the image should close the curtain ^(1.13.0) | boolean | `true` |

## Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| click | Triggered when clicking the curtain | - |
| close | Triggered when popup layer closes | - |
| closed | Triggered after popup layer closes | - |
| click-modal | Triggered when clicking the mask | - |
| beforeenter | Triggered before enter | - |
| enter | Triggered during enter | - |
| afterenter | Triggered after enter | - |
| beforeleave | Triggered before leave | - |
| leave | Triggered during leave | - |
| afterleave | Triggered after leave | - |
| load | Image load complete event | event |
| error | Image load failure event, if image fails to load, curtain component won't show even if `modelValue` is `true` | - |

## Slots

| Name | Description |
| --- | --- |
| close | Close button slot ^(1.5.0) |

## External Classes

| Class Name | Description |
| --- | --- |
| custom-class | Root node style |
| custom-close-class | Close button style ^(1.5.0) |
| custom-close-style | Close button style ^(1.5.0) |