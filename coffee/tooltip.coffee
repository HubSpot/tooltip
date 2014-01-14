{addClass, removeClass} = Tether.Utils

_Drop = Drop.createContext
  classPrefix: 'tooltip'

defaults =
  position: 'top center'

class Tooltip
  constructor: (@options) ->
    @options.position ?= @options.el.getAttribute('data-tooltip-position') ? defaults.position
    @options.content ?= @options.el.getAttribute('data-tooltip')
    console.log @options

    new _Drop
      target: @options.el
      content: @options.content
      classes: 'tooltip-theme-arrows tooltip'
      position: @options.position
      constrainToWindow: true
      openOn: 'hover'

initialized = []
Tooltip.init = ->
  for el in document.querySelectorAll('[data-tooltip]') when el not in initialized
    new Tooltip {el}

    initialized.push el

document.addEventListener 'DOMContentLoaded', ->
  if Tooltip.autoinit isnt false
    Tooltip.init()

window.Tooltip = Tooltip
