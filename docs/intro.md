<link rel="stylesheet" href="/tooltip/dist/css/tooltip-theme-arrows.css" />
<script src="/tooltip/bower_components/tether/dist/js/tether.js"></script>
<script src="/tooltip/bower_components/tether-drop/dist/js/drop.js"></script>
<script src="/tooltip/dist/js/tooltip.min.js"></script>

## Tooltip

Tooltip is a javascript and CSS library for creating styleable tooltip elements.

Tooltip uses [Tether](http://github.hubspot.com/tether) and [Drop](http://github.hubspot.com/drop) for reliable and efficient positioning.

### Dependencies

Tether

Drop

### Browser Support

IE9+ and everything modern

### Usage

- Include the js and theme:

```html
<link rel="stylesheet" href="css/tooltip-theme-arrows.css" />
<script src="tether.min.js"></script>
<script src="drop.min.js"></script>
<script src="tooltip.min.js"></script>
```

- Add `data-tooltip`, and optionally `data-tooltip-position` to any element.

```html
<a href=# data-tooltip="Weeeeee" data-tooltip-position="top center">I'm a link!</a>
```

#### Manual Initialization

To manually create a tooltip, create a `new Tooltip` object:

```coffeescript
new Tooltip
  target: targetElement
  position: 'top left'
  content: "My awesome <b>content</b>."
  classes: 'my-tether-theme'
```

You can also pass a DOM node as `content`.

#### Changing the positioning

Tooltips can be attached to 12 locations around the target. When initializing, you may set the `position` property to any of the following:

```coffeescript
'top left'
'left top'
'left middle'
'left bottom'
'bottom left'
'bottom center'
'bottom right'
'right bottom'
'right middle'
'right top'
'top right'
'top center'
```

### Themes

Currently there are two themes. If you would like to contribute your own themes, feel free to open pull requests and we'll be happy to include them in our library.
