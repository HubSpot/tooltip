_Drop = Drop.createContext()

defaults =
  attach: 'top center'

class Tooltip
  constructor: (@options) ->
    @options.attach ?= @options.el.getAttribute('data-tooltip-attach') ? defaults.attach
    @options.content ?= @options.el.getAttribute('data-tooltip')

    @drop = new _Drop
      target: @options.el
      className: 'tooltip tooltip-theme-arrows'
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

window.Tooltip = Tooltip
