DropTooltip = Drop.createContext()

defaults =
  attach: 'top center'

class Tooltip
  constructor: (@options) ->
    @options.attach ?= @options.el.getAttribute('data-tooltip-attach') ? defaults.attach
    @options.content ?= @options.el.getAttribute('data-tooltip')

    @drop = new DropTooltip
      target: @options.el
      className: 'drop-tooltip-theme-arrows'
      attach: @options.attach
      constrainToWindow: true
      constrainToScrollParent: false
      openOn: 'hover'
      content: @options.content

initialized = []
Tooltip.init = ->
  for el in document.querySelectorAll('[data-tooltip]') when el not in initialized
    new Tooltip {el}

    initialized.push el

document.addEventListener 'DOMContentLoaded', ->
  Tooltip.init()
, false

window.Tooltip = Tooltip
