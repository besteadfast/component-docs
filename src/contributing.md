# Contributing

## Component Overview

A component is generally made up of 2 parts,

- a **primitive**, or base component, which encapsulates the functionality and should not have to be modified by a developer using the component
- a **pre-styled component**, which will sit directly in Carbon's 'components' folder and should be modified/duplicated as necessary by a developer using the component

## Naming

- primitives - folder containing primitives (base components)
- Base[component] - naming convention for primitives (e.g. BaseAccordion)
- [component] - naming convention for pre-styled components (e.g. Accordion)

## API Development

- Abstract away as much of HeadlessUI as possible, and only require direct import of items that sit inside modifiable sections
  - For example: in a modal, we can abstract away the Dialog and DialogPanel, just providing API access to the css. However, the DialogTitle and DialogDescription components sit inside an abstract "content area" of the modal, so an implementation of that component should import those directly from HeadlessUI and use them as needed.
- Use slots for content areas, and props for consistent variables
  - Where to draw this line is up to the Dev's discretion

## Documentation
