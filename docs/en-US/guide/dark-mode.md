# Dark Mode

We have built-in support for dark mode. Developers only need simple configuration to use it in projects. You can switch to dark mode in the upper right corner of the official website to experience it.

## Enable Dark Mode
By wrapping the application or page entry with the `wd-config-provider` component and setting `theme` to `dark`, Wot components within the scope wrapped by the current `wd-config-provider` can be switched to dark style.

```html
<wd-config-provider theme="dark">
  <wd-button type="primary">Dark Mode Button</wd-button>
</wd-config-provider>
```
 
 ## More Features

 See [ConfigProvider](/component/config-provider) component.
