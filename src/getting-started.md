# Getting Started

Welcome to the component library!

## Installation

This component library is already built into the Carbon repo, so as long as you've followed the Carbon Docs to get that up and running, you will have all of these components out of the box.

## Filesystem

The components from this library are housed in `src > js > components > libraryname`

```
...
├─ libraryname
│  ├─ Modal.vue
│  ├─ Accordion.vue
│  ├─ Dropdown.vue
│  └─ primitives
│     ├─ BaseModal.vue
│     ├─ BaseAccordion.vue
│     └─ BaseDropdown.vue
...
```

- **libraryname**: root folder containing all component-related code. Files that are directly contained in this folder are components to be implemented by developers (and are automatically registered in vue)

- **primitives**: folder containing base components. These define the functionality of the components and should not be touched by developers

## Configuring the components

The components have some baseline style, but in order to fit them into a project, it will be necessary to modify the component files. Either at the beginning of the project or when they are first used, the following items should be modified:

### Outward-facing Props

Make sure any content that needs to come in from twig is able to be passed into the component.

For example, if a title needs to be passed in:

```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script>
const props = defineProps({ title: String });
</script>
```

This will allow you to use the compoenent in twig like so:

```twig
{% set entry = craft.entries().one() %}
<component title="{{entry.title}}"/>
```

### Styles

Using tailwind classes, modify `xClasses` props being passed into the base component and classes on the component itself to match the style of the design

### Content

Pass the proper content into slots to fill out content areas with the correct templating. This involve creating props to pass content in from twig.

## About the library

This is a library of components developed by Steadfast with the purpose of simplifying the development process for new sites. The goal is to save development time by eliminating the need to recreate components on every project. By leveraging HeadlessUI, we have created a library of customizable and accessible base layouts/styles for our most reused components.
