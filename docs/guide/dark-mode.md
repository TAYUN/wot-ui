# 深色模式

我们内置了对深色模式的支持，开发者只需进行简单的配置即可在项目中使用，官网右上角可以切换至深色模式进行体验。

## 开启深色模式
通过 `wd-config-provider` 组件包裹应用或页面入口，并将 `theme` 设置为 `dark`，可以让当前 `wd-config-provider` 包裹范围内的 Wot 组件切换为深色风格。

```html
<wd-config-provider theme="dark">
  <wd-button type="primary">深色模式按钮</wd-button>
</wd-config-provider>
```
 
 ## 更多功能

 参见 [ConfigProvider](/component/config-provider) 组件。