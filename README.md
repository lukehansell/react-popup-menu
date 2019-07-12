# Popup Menu

Controlled popup menu with an anchor element. Clicking outside of the menu or the anchor closes the menu.

## Install

`npm i --save popup-menu`

## How to use it

In order to use this you must render a Container component. Inside that component should be at least one Anchor and a Menu Component. Render the MenuItems to display within the Menu.

### Example

```
import { Container, Anchor, Menu, MenuItem } from 'popup-menu'

export default => (
  <Container>
    <Anchor>A Dropdown Menu</Anchor>
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
    </Menu>
  </Container>
)
```

![Example image from the above code]()

### Component Hierarchy

- Container
  - Anchor
  - Menu
    - MenuItem
    - MenuItem

### Functionality

1. If the menu is closed - clicking on an Anchor opens the Menu
2. If the menu is open - clicking on an Anchor closes the Menu
3. Clicking on a MenuItem closes the menu
4. Clicking outside the Container closes the menu

### Potential future functionality

1. Passing `autoClose={false}` to a MenuItem means it does not close the Menu on click


## Component Props
### Container
Responsible for containing the menu and maintaining it's state.

### Anchor
The element used to open a menu.

### Menu
Contains each of the menu items.

### MenuItem
The individual action elements.

-------

## Contributing
Please feel free to submit any PRs or issues to this repo. I'll get to them as soon as I can.

### Running the tests

`npm t`


## Current Maintainers
- Luke Hansell - [Twitter](https://twitter.com/luke_hansell), [GitHub](https://github.com/lukehansell)