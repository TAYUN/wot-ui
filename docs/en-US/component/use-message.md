# useDialog

Used to conveniently call the MessageBox dialog component.

## Alert Dialog

Alert dialog only has a confirm button, used for strong reminders.

```html
<wd-dialog></wd-dialog>
<wd-button @click="alert">alert</wd-button>
```

```ts
import { useDialog } from '@/uni_modules/wot-ui'
const message = useDialog()

function alert() {
  message.alert('Operation successful')
}
```

## Confirm Dialog

Used to prompt user actions.

```html
<wd-dialog />
<wd-button @click="confirm">confirm</wd-button>
```

```ts
import { useDialog } from '@/uni_modules/wot-ui'
const message = useDialog()

function confirm() {
  message
    .confirm({
      msg: 'Prompt text',
      title: 'Title'
    })
    .then(() => {
      console.log('Clicked confirm button')
    })
    .catch(() => {
      console.log('Clicked cancel button')
    })
}
```

## Prompt Dialog

Prompt will display an input box and can perform input validation.

```html
<wd-dialog />
<wd-button @click="prompt">prompt</wd-button>
```

```ts
import { useDialog } from '@/uni_modules/wot-ui'
const message = useDialog()

function prompt() {
  message
    .prompt({
      title: 'Please enter email',
      inputPattern: /.+@.+\..+/i,
      inputError: 'Invalid email format'
    })
    .then((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.log(error)
    })
}
```

## API

### Methods

| Method Name | Description           | Parameters    |
|--------|----------------|---------|
| show   | Show dialog       | options |
| alert  | Show Alert dialog | options |
| confirm| Show Confirm dialog| options |
| prompt | Show Prompt dialog| options |
| close  | Close dialog       | -       |

### Options

| Parameter | Description | Type | Optional Values | Default Value |
|-----|------|------|--------|--------|
| title | Title | string | - | - |
| msg | Message text | string | - | - |
| type | Dialog type | string | alert / confirm / prompt | alert |
| closeOnClickModal | Whether to support closing by clicking mask | boolean | - | true |
| inputType | Input box type when type is prompt | string | - | text |
| inputValue | Input box initial value when type is prompt | string / number | - | - |
| inputPlaceholder | Input box placeholder when type is prompt | string | - | Please enter content |
| inputPattern | Input box regex validation when type is prompt | RegExp | - | - |
| inputValidate | Input box validation function when type is prompt | function | - | - |
| inputError | Error prompt text when input box validation fails in prompt mode | string | - | Invalid input data |
| confirmButtonText | Confirm button text | string | - | Confirm |
| cancelButtonText | Cancel button text | string | - | Cancel |
| zIndex | Dialog z-index | number | - | 99 |
| selector | Specify unique identifier | string | - | '' |
