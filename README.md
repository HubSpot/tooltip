## Tooltip

[![GitHub
version](https://badge.fury.io/gh/HubSpot%2Ftooltip.svg)](http://badge.fury.io/gh/HubSpot%2Ftooltip)

Tooltip.js is a Javascript and CSS library for creating styleable tooltips.


## Install

__Dependencies__

* __[Tether](https://github.com/HubSpot/tether)__
* __[Drop](https://github.com/HubSpot/drop)__

Installing via `npm` and `bower` will bring in the above dependencies as well.


__npm__
```sh
$ npm install tether-tooltip
```

__bower__
```sh
$ bower install tether-tooltip
```

## Usage

```javascript
let tooltipInstance = new Tooltip({
  target: document.querySelector('.tooltip-target'),
  content: "My awesome <b>content</b>.",
  classes: 'tooltip-tether-arrows',
  position: 'top left'
})
```

[API Documentation](http://github.hubspot.com/tooltip)

[Demo](http://github.hubspot.com/tooltip/docs/welcome)


## Contributing

We encourage contributions of all kinds. If you would like to contribute in some way, please review our [guidelines for contributing](CONTRIBUTING.md).


## License
Copyright &copy; 2015 HubSpot - [MIT License](LICENSE)
