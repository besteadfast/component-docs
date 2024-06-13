<script setup>
import Modal from '../../components/Modal.vue'
</script>

# Modal

Lorem ipsum dolor sit amet, consectetur adipiscing elit

## The Basics

The implementation of the modal component has two parts: the modal and a button to trigger it. The modal itself can be created using the `<modal>` tag with a `modalId` and passing content into its slot.

```twig
<modal modal-id="exampleModal">
    //Modal Content
</modal>
```

You can do the button however you want, as long as it has the `openModal` method as a click handler and is passed the corresponding `modalId`.

```twig
<button @click="$store.modal.openModal('exampleModal)'> Open Modal </button>
```

The modal state is managed globally, via `$store.modal.activeModalId`, and a given modal will be shown when the value of `activeModalId` matches its `modalId`.
Here's what the modal looks like by default:

<div style="display:flex; justify-content:center; padding:40px;">
<Modal
    modal-id="exampleModal"
/>
<button @click="$modals.openModal('exampleModal')">Open Modal</button>

</div>

## Adding Custom Content

By default, the component only has a default slot where the displayed content of the modal should go. Make sure to use `<DialogTitle>` and `<DialogDescription>` if possible to ensure the modal is as accessible as possible.

For example, if you needed to display content in two columns, you could do something like this:

```vue
<modal modal-id="exampleModal">
    <div class="modal-body">
        <DialogTitle>Title</DialogTitle>
        <DialogDescription> Description </DialogDescription>
        <div class="two-columns">
            <div id="column1">
                <p>Column 1 content</p>
            </div>
            <div id="column2">
                <p>Column 2 content</p>
            </div>
        </div>
    </div>
</modal>
```

## Managing Overscroll

The `hasOverscroll` prop on the `modal` component decides whether the modal's panel extends or scrolls when the content is too long

<div style="display:flex; justify-content:center; padding:40px;">
<Modal
    modal-id="exampleOverscrollModal"
    hasOverscroll
>
    <div class="p-s9">
    <div class="h-[900px]">
    Starting Text
    </div>
    <div>
    Ending Text
    </div>
    </div>
</Modal>
<button @click="$modals.openModal('exampleOverscrollModal')" class=" px-s3 py-s2 rounded-[5px] border-[1px] border-solid border-gray-200">Open Modal</button>

</div>

## Setting initial focus

By default, the modal will focus its first interactable element. If there are none in your content, the close button will be focused by default.

::: warning
Changing this isn't as simple as it seems off-hand. HeadlessUI's `initialFocus` ref-based solution doesn't work with slots, so you may have to set the initially focused element manually
:::

## Multiple modals

Having multiple modals on the same page is as simple as defining the modals with unique IDs and creating open buttons that target the correct ID

## Hooking into modal open and close

Since state management occurs globally, you will have to modify the declaration of the `openModal` & `closeModal` functions to add any necessary sideeffects of opening/closing the modal

```js
//main.js
const modals = reactive({
  closeModal: () => {
    modals.activeModalId = null;
    //do stuff
  },
  openModal: (id) => {
    modals.activeModalId = id;
    //do stuff
  },
  activeModalId: null,
});
```

## Accessibility Notes

- **Opening the modal**
  - When the modal opens, focus is trapped within the modal
  - When the modal opens, the first focusable element is focused by default
- **The modal**
  - `<DialogTitle>` - A pre-loaded component that sets the title of the modal
  - `<DialogDescription>` - A pre-loaded component that sets a description of the modal
- **Closing the modal**
  - Pressing esc closes the modal
  - Clicking outside of the modal panel closes the modal
  - When the modal closes, focus is returned to the element that opened it
