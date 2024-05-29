<script setup>
import Dropdown from '../../components/Dropdown.vue'
</script>

# Dropdown

## Basic Example

```vue
<Dropdown
  :options="[
    {
      id: 'option',
      title: 'option one',
    },
    {
      id: 'option',
      title: 'option two',
    },
  ]"
>
</Dropdown>
```

Here's what that should look like:

<div>
<Dropdown :options="[{
        id: 'option',
        title: 'option one'
    },
    {
        id: 'option',
        title: 'option two'
    }
]">
</Dropdown>
</div>

## Functionality

## Styling

### buttonClasses <Pill label="Prop" />

- Type: String
- Default: "flex justify-between items-center w-full border rounded py-s2 px-s4 mb-s2 bg-transparent interact:bg-blue-100 transition duration-300"

### iconClasses <Pill label="Prop" />

- Type: String
- Default: "transform rotate-0 transition-all duration-300"

### iconOpenClasses <Pill label="Prop" />

- Type: String
- Default: "transform rotate-180 transition-all duration-300"

### optionsContainerClasses <Pill label="Prop" />

- Type: String
- Default: "border rounded"

### optionClasses <Pill label="Prop" />

- Type: String
- Default: "cursor-pointer w-full py-s2 px-s4 interact:bg-blue-100 interact:outline-none transition duration-300"

### optionActiveClasses <Pill label="Prop" />

- Type: String
- Default: "bg-blue-100"

### optionSelectedClasses <Pill label="Prop" />

- Type: String
- Default: "bg-blue-100"

## Content

### options <Pill label="Prop" />

- Type: Array
- Default: N/A

```js
[
  {
    id: 'option',
    title: 'option one',
    isDefault: true,
  },
  {
    id: 'option',
    title: 'option two',
    isUnavailable: true,
  },
];
```

This is an array of objects that represent selectable items for the dropdown, which can each have the following properties:

- id: String
- title: String
- isUnavailable: Boolean toggling whether an item will be unselectable.
- isDefault: Boolean toggling whether an item will be the default selection in the dropdown.

## Accessibility Notes
