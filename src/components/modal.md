<script setup>
import Modal from '../../components/Modal.vue'
</script>

# Modal

Lorem ipsum dolor sit amet, consectetur adipiscing elit

## Basic Example

To use the component, just pass in the content as props to the Modal tag:

```twig
<modal
    title="Test Title"
    open-label="Open Modal"
    close-label="Close Modal"
/>
```

Here's what that should look like:
<Modal
    title="Test Title"
    openLabel="Open Modal"
    closeLabel="Close Modal"
/>

## Functionality

If you are modifying the styled component, the following are the props that can be passed into the base component to alter its funcitonality.

### hasOverscroll <Pill label="Prop" />

- **Type:** Boolean
- **Default:** true

This option toggles whether the modal scrolls or expands when content extends past the default size.

### initialFocus <Pill label="Prop" />

- **Type:** String
- **Default:** 'closeButtonRef'

This sets the ref that will focus when the modal is opened. By default, it focuses the element with `ref="closeButtonRef"`

## Styling

If you are modifying the styled component, the following are the props that can be passed into the base component to alter its styles.

### bgClasses <Pill label="Prop" />

- **Type:** String
- **Default:** true

This prop provides tailwind classes to style the background behind the main dialog panel

### containerClasses <Pill label="Prop" />

- **Type:** Boolean
- **Default:** true

This prop provides tailwind classes to define the style of the container div that encapsulates the dialog panel. This is unlikely to require a change.

### panelClasses <Pill label="Prop" />

- **Type:** Boolean
- **Default:** true

This prop provides tailwind classes to define the style of the dialog panel

### transitions <Pill label="Prop" />

- **Type:** Object
- **Default:**

```js
{
    enter: 'duration-200 ease-out',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'duration-200 ease-in',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
}
```

This option controls the transition when opening/closing the modal. See HeadlessUI's TransitionRoot for more information.

## Content

If you are modifying the styled component, the following are the slots into which content can be passed to alter content areas.

### open <Pill label="slot" />

Content for the open button for the modal. Make sure to pass the "open" function into the trigger button

```vue
<template #open="{ open }">
  <button
    @click="open"
    type="button"
    class="mt-s2 py-s2 px-s3 rounded border-solid border-[1px] border-white/0 bg-[var(--vp-c-bg-soft)] text-[var(--vp-button-alt-text)] hover:border-[var(--vp-c-brand-1)] transition"
    aria-label="Open modal"
  >
    {{ openLabel }}
  </button>
</template>
```

### close <Pill label="slot" />

Content for the open button for the modal. Make sure to pass the "close" function into the trigger button.

```vue
<template #close="{ close }">
  <button
    ref="closeButtonRef"
    class="absolute top-s8 right-s8"
    @click="close"
    type="button"
    aria-label="Close modal"
  >
    {{ closeLabel }}
  </button>
</template>
```

### content <Pill label="slot" />

Content for the dialog panel. This is where you are likely to include `DialogTitle` and `DialogDescription` (see Accessibility Notes for more info)

```vue
<template>
  <div class="modal-body">
    <div class="px-s8 py-s10 border-t-2 border-gray-200 group">
      <DialogTitle>{{ title }}</DialogTitle>
      <DialogDescription> Description </DialogDescription>
      <p>Other Body content</p>
    </div>
  </div>
</template>
```

## Accessibility Notes

- **Opening the modal**
  - When the modal opens, focus is trapped within the modal
  - When the modal opens, the close button is focused by default
    - The focused element can set with the initialFocus prop
- **The modal**
  - DialogTitle
  - DialogDescription
- **Closing the modal**
  - Pressing esc closes the modal
  - Clicking outside of the modal panel closes the modal
  - When the modal closes, focus is returned to the element that opened it
