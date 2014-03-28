{addClass, removeClass, extend} = Tether.Utils

_Drop = Drop.createContext
  classPrefix: 'tooltip'

defaults =
  position: 'top center'
  openOn: 'hover'
  classes: 'tooltip-theme-arrows'
  constrainToWindow: true
  constrainToScrollParent: false

class Tooltip
  constructor: (@options) ->
    if not @options.target
      throw new Error "Tooltip Error: You must provide a target for Tooltip to attach to"

    @options.position ?= @options.target.getAttribute('data-tooltip-position')
    @options.content ?= @options.target.getAttribute('data-tooltip')

    @options = extend {}, defaults, @options

    @drop = new _Drop @options

  close: ->
    @drop.close()

  open: ->
    @drop.open()

  toggle: ->
    @drop.toggle()

  remove: ->
    @drop.remove()

  destory: ->
    @drop.destroy()

  position: ->
    @drop.position()

initialized = []
Tooltip.init = ->
  for el in document.querySelectorAll('[data-tooltip]') when el not in initialized
    new Tooltip {target: el}

    initialized.push el

document.addEventListener 'DOMContentLoaded', ->
  if Tooltip.autoinit isnt false
    Tooltip.init()

window.Tooltip = Tooltip
