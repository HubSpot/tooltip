<link rel="stylesheet" href="/tooltip/css/tooltip-theme-default.css" />
<script src="/tooltip/deps/tether/tether.min.js"></script>
<script src="/tooltip/deps/drop/drop.min.js"></script>
<script src="/tooltip/tooltip.min.js"></script>

## Tooltip

Tooltip is a javascript and CSS library for creating styleable tooltip elements.

Tooltip uses [Tether](http://github.hubspot.com/tether) and [Drop](http://github.hubspot.com/drop) to create and position itself.

### Dependencies

- jQuery
- Tether – [GitHub](https://github.com/HubSpot/tether), [Download](https://github.com/HubSpot/tether/releases)
- Drop – [GitHub](https://github.com/HubSpot/drop), [Download](https://github.com/HubSpot/drop/releases)

### Usage

#### Initialization

To initialize, simply create a `new Tooltip` object.

```coffeescript
new Tooltip
    el: targetElement
```

#### Changing the positioning

Tooltips can be attached to 12 locations around the target. When initializing, you may set the `attach` property to any of the following:

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

Currently there is only one default theme. We will be adding more soon!