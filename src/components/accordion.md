<script setup>
import Accordion from '../../components/Accordion.vue'
import Pill from '../../components/Pill.vue';
</script>

# Accordion

## Basic Example

```twig
<accordion>
    <template #title>
        Test Accordion
    </template>
    <template #icon>
        <svg></svg>
    </template>
    <template #content>
        Test Content
    </template>
</accordion>
```

<div>
<Accordion>
    <template #title>
        Test Accordion
    </template>
    <template #icon>
    <svg fill="#000000" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
</svg>
    </template>
    <template #content>
        Test Content
    </template>

</Accordion>
</div>

## Functionality

## Styling

### containerClasses <Pill label="Prop" />

- Type: String
- Default: "border-x border-b border-gray-200 first:rounded-t last:rounded-b first:border-t "

### buttonClasses <Pill label="Prop" />

- Type: String
- Default: "flex justify-between items-center w-full px-s4 py-s2 bg-transparent interact:bg-blue-100 interact:outline-none transition duration-300"

### panelClasses <Pill label="Prop" />

- Type: String
- Default: "p-s4"

### iconClasses <Pill label="Prop" />

- Type: String
- Default: "rotate-0 transition duration-300"

### iconTransitionClasses <Pill label="Prop" />

- Type: String
- Default: "rotate-180 transition duration-300"

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

This option controls the transition when opening/closing the accordion.

## Content

## Accessibility Notes
