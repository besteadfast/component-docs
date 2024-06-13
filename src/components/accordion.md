<script setup>
import Accordion from '../../components/Accordion.vue'
import AccordionItem from '../../components/AccordionItem.vue'
import Pill from '../../components/Pill.vue';
</script>

# Accordion

## Basic Usage

The accordion component is composed of a parent `Accordion` and a slot containing any number of `AccordionItem` children.

```twig
<accordion>
    <accordion-item />
    <accordion-item />
</accordion>
```

That bare-bones example renders like so:

<div>
<Accordion>
    <AccordionItem></AccordionItem>
    <AccordionItem></AccordionItem>
</Accordion>
</div>

## Adding Custom Content

Out of the box, each `<AccordionItem>` has multiple slots that allow for custom content

### Button <Pill label="slot" />

The Button slot controls the content of the `summary` element, including the title and icon. By default, the entire button content must be passed into the slot when overwriting the default content

```twig
...
<template #button>
    New Accordion Title
    <div
        class="transition duration-300"
        :class="open ? 'rotate-0' : 'rotate-45'"
    >
        <Icon name="plus">
    </div>
</template>
...
```

If you want to modify parts separately or keep parts (e.g. the icon) the same across instances, you just have to limit the scope of the slot in `AccordionItem.vue`, like so:

```vue
...
<slot name="button-title"></slot>
<div class="transition duration-300" :class="open ? 'rotate-0' : 'rotate-180'">
    <Icon name="chevron" />
</div>
...
```

### Content <Pill label="slot" />

This slot contains the content pane of the accordion.

## Controlling the state of the accordion

### defaultOpen <Pill label="slot" />

Setting the default state of an accordion (i.e. which of its children are open) is as simple as setting the `defaultOpen` prop to an array containing the open items' indexes

```vue
//Open the first accordion item by default
<Accordion :defaultOpen="[0]">
    <AccordionItem />
</Accordion>
```

:::info
This is overridden by [state found in the url](#maintaining-state-on-reload) by default
:::

### exclusiveOpen <Pill label="prop" />

In many cases, you will want to allow only one accordion item to be open at a time. Setting the `exclusiveOpen` prop to true will cause the accordion to automatically close any other items when a new one is opened.

### scrollOnOpen <Pill label="prop" />

In some cases (e.g. when each accordion item contains a lot of content), you may want to have the viewport scroll to an accordion item when it opens. Setting the `scrollOnOpen` prop to true will scroll to 20px above the element by default.

:::warning
This does not play nicely with `exclusiveOpen`. The way it is currently set up, if another element closes while the scroll is occurring, the viewport will be out of position when it reaches the destination. This could be handled by a delaying the scroll, and an `isOpening` state has been added to the component that could be used to handle this.
:::

## Maintaining state on reload

Whenever an item is opened/closed, the state of the component is pushed to a query parameter in the url, in the form "accordion-<em>ID</em>=0,1", where ID is the id of the accordion and the value of the query parameter is a comma-separated list of the currently open items of that accordion. On page load, the state of each accordion is loaded from its corresponding query parameter, if possible.

:::info
This value overrides the [defaultOpen](#defaultopen) by default.
:::

## Hooking into accordion open and close

This copmponent already utilizes the closing process to animate the height, so we've included `isOpening` and `isClosing` state to each accordion item that could be used to execute side-effects when an item starts a change, is undergoing a change, or finishes a change of state.

```js
onMounted(() => {
    ...
    accPanelRef.value.addEventListener('transitionend', (e) => {
        if (isClosing.value) {
            isClosing.value = false;
            // item has finished closing
        }
        else if (isOpening.value) {
            isOpening.value = false;
            // item has finished opening
        }
    });
})
...
watch(open, (open, oldOpen) => {
    if(open){
        isOpening.value = true
        // item has started opening
    } else {
        isClosing.value = true
        // item has started closing
    }
})
```

## Accessibility Notes
