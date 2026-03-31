# Button

Buttons are used to trigger an action, such as submitting a form or opening a link.

## Component Type

### Type

```html
<wd-button>Primary Button</wd-button>
<wd-button type="success">Success Button</wd-button>
<wd-button type="info">Info Button</wd-button>
<wd-button type="warning">Warning Button</wd-button>
<wd-button type="danger">Danger Button</wd-button>
```

## Component State

### Disabled

Set the `disabled` attribute.

```html
<wd-button disabled>Default Button</wd-button>
```

### Loading

Set the `loading` attribute to make the button enter the loading state. A loading button is not clickable.

```html
<wd-button loading>Loading</wd-button>
```

## Component Variant

### Plain

Set `variant="plain"`.

```html
<wd-button variant="plain">Primary Button</wd-button>
```

### Dashed

Set `variant="dashed"`.

```html
<wd-button variant="dashed">Primary Button</wd-button>
```

### Text

Set `variant="text"`.

```html
<wd-button variant="text">Text Button</wd-button>
```

## Component Style

### Size

Set the `size` attribute. Supported values are 'mini', 'small', 'medium', and 'large'. Default is 'medium'.

```html
<wd-button size="mini">Mini Button</wd-button>
<wd-button size="small">Small Button</wd-button>
<wd-button size="medium">Medium Button</wd-button>
<wd-button size="large">Large Button</wd-button>
```

### Hairline and Round

Set `hairline` and `round`.

```html
<wd-button variant="plain" hairline>Hairline Button</wd-button>
<wd-button variant="plain" round>Round Button</wd-button>
```

## Special Style

### custom-class Shadow

Use `custom-class` and `custom-style` to customize button styles. Here `custom-class` is used to apply a `Material Design 3` style `box-shadow`.

```html
<view class="page-class">
  <wd-button custom-class="custom-shadow">Primary Button</wd-button>
  <wd-button type="success" custom-class="custom-shadow">Success Button</wd-button>
  <wd-button type="info" custom-class="custom-shadow">Info Button</wd-button>
  <wd-button type="warning" custom-class="custom-shadow">Warning Button</wd-button>
  <wd-button type="danger" custom-class="custom-shadow">Danger Button</wd-button>
</view>
```

```scss
.page-class {
  :deep() {
    .custom-shadow {
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
  }
}
```

## Content Form

### Icon-only Button

Set the `icon` attribute to render an icon-only button.

```html
<wd-button icon="edit-outline"></wd-button>
```

### Button with Icon and Text

Use both `icon` and button content. Combine with `classPrefix` to use custom icons. See [Icon Custom Icons](/component/icon#custom-icons).

```html
<wd-button icon="download">Download</wd-button>
<wd-button classPrefix="fish" icon="kehuishouwu">Recyclable</wd-button>
```

## Layout

### Block Button

Set the `block` attribute.

```html
<wd-button block>Primary Button</wd-button>
```

## Attributes

<!-- prettier-ignore -->
| Parameter | Description | Type | Accepted Values | Default | Min Version |
| --- | --- | --- | --- | --- | --- |
| type | Button type | string | primary/success/info/warning/danger | primary | - |
| variant | Button variant | string | base/plain/dashed/text | base | - |
| size | Button size | string | mini/small/medium/large | medium | - |
| round | Round button | boolean | - | false | - |
| disabled | Disabled button | boolean | - | false | - |
| hairline | Hairline border | boolean | - | false | - |
| block | Block button | boolean | - | false | - |
| loading | Loading state | boolean | - | false | - |
| text | Button text | string | - | - | - |
| icon | Icon class name | string | - | - | - |
| classPrefix | Icon class prefix | string | - | wd-icon | 0.1.27 |
| loading-color | Loading icon color | string | - | - | - |
| loading-props | Loading options | `Partial<LoadingProps>` | - | - | - |
| open-type | WeChat open capability | ButtonOpenType | See ButtonOpenType below | - | - |
| hover-stop-propagation | Prevent ancestor click state | boolean | - | false | - |
| lang | User info language | string | zh_CN/zh_TW/en | - | - |
| session-from | Session source | string | - | - | - |
| send-message-title | Message card title | string | - | Current title | - |
| send-message-path | Message card path | string | - | Current share path | - |
| send-message-img | Message card image | string | - | Screenshot | - |
| app-parameter | Parameters passed when launching APP | string | - | - | - |
| show-message-card | Show message card in customer service chat | boolean | - | false | - |
| button-id | Unique button identifier | string | - | - | 1.3.6 |
| scope | Alipay authorization scope | ButtonScope | phoneNumber/userInfo | - | 1.3.14 |

### ButtonOpenType Open Capabilities

WeChat Mini Program open capabilities, see [WeChat Mini Program Button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html).

<!-- prettier-ignore -->
| Value | Description |
| --- | --- |
| feedback | Open the feedback page |
| share | Trigger sharing |
| getUserInfo | Get user information |
| contact | Open customer service chat |
| getPhoneNumber | Get phone number |
| getRealtimePhoneNumber | Get phone number in real time (WeChat only) |
| launchApp | Launch APP from Mini Program |
| openSetting | Open authorization settings |
| chooseAvatar | Get user avatar |
| getAuthorize | Alipay authorization with `scope` |
| lifestyle | Follow lifestyle account (Alipay) |
| contactShare | Share to contacts (Alipay) |
| agreePrivacyAuthorization | User agrees to privacy policy |

## Events

<!-- prettier-ignore -->
| Event Name | Description | Parameters | Min Version |
| --- | --- | --- | --- |
| click | Click event | `event` | - |
| getuserinfo | Get user information | `detail` | - |
| contact | Customer service callback (`open-type=contact`) | `detail` | - |
| getphonenumber | Phone number callback (`open-type=getPhoneNumber`) | `detail` | - |
| getrealtimephonenumber | Real-time phone callback (`open-type=getRealtimePhoneNumber`) | `detail` | - |
| error | Error callback (`open-type=launchApp`) | `detail` | - |
| launchapp | APP launch success callback (`open-type=launchApp`) | `detail` | - |
| opensetting | Settings page callback (`open-type=openSetting`) | `detail` | - |
| chooseavatar | Avatar callback (`open-type=chooseAvatar`) | `detail` | - |
| agreeprivacyauthorization | Privacy agreement callback (`open-type=agreePrivacyAuthorization`) | `detail` | - |

## External Style Classes

| Class Name   | Description     | Min Version |
| ------------ | --------------- | ----------- |
| custom-class | Root node style | -           |
