# Empty

Generally used for fallback placeholder display.

## Content Form

Set `icon` to modify the display placeholder image or icon, default is `empty`. Supports built-in common icon names like `no-result`, `no-wifi`, `no-content`, `no-collection`, `no-comment`, `failpayment`, `no-message`. You can set `tip` to control the display prompt text.

```html
<wd-empty icon="no-result" tip="No search results" />
<wd-empty icon="no-wifi" tip="This page is currently inaccessible" />
<wd-empty icon="no-content" tip="No content" />
<wd-empty icon="no-collection" tip="No collections" />
<wd-empty icon="no-comment" tip="No contact list currently~" />
<wd-empty icon="failpayment" tip="Payment failed, please reorder" />
<wd-empty icon="no-message" tip="Subscribed to all messages" />
```

## Component Style

### Custom Size

Customize the image or icon size through the `icon-size` property, default unit is `px`.

```html
<wd-empty :icon-size="140" icon="no-result" tip="No search results" />
```

## Special Style

### Custom Image

When you need to customize an external image, you can pass a full image URL in the `icon` property.

```html
<wd-empty icon="https://wot-ui.cn/assets/panda.jpg" tip="View my avatar" />
```

### Custom Image Content

Use the `image` slot to completely customize the content rendered in the image area.

```html
<wd-empty tip="Custom image content">
  <template #image>
    <wd-icon name="sun-fill" size="100px"></wd-icon>
  </template>
</wd-empty>
```

### Custom Bottom Content

Use the `bottom` slot to render custom content at the bottom of the prompt text (e.g., action buttons). It’s recommended to wrap slot content with a container for layout and spacing control.

```html
<wd-empty icon="no-content" tip="No search results">
  <template #bottom>
    <view class="bottom-actions">
      <wd-button type="info">Reload</wd-button>
    </view>
  </template>
</wd-empty>
```

Suggested styles (add to page or global styles):

```css
.bottom-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}
```

## Attributes

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Default icon name or image URL | string | `empty` |
| icon-size | Image or icon size, default unit is px | string / number | - |
| tip | Prompt text | string | - |

## Slots

| Name | Description |
| --- | --- |
| image | Custom image area content ^(1.3.12) |
| bottom | Custom bottom content ^(1.14.0) |

## External Classes

| Class Name | Description |
| --- | --- |
| custom-class | Root node style |
| custom-style | Root node style |