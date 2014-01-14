{addClass, removeClass} = Tether.Utils

defaults =
  attach: 'top center'

class Tooltip
  constructor: (@options) ->
    @options.attach ?= @options.el.getAttribute('data-tooltip-attach') ? defaults.attach
    @options.content ?= @options.el.getAttribute('data-tooltip')

    @tip = document.createElement 'div'
    addClass @tip, 'tooltip-theme-arrows'

    content = document.createElement 'div'
    addClass content, 'tooltip-content'
    @tip.appendChild content

    if typeof @options.content is 'string'
      content.innerHTML = @options.content
    else
      content.appendChild @options.content

    @tether = new Tether
      target: @options.el
      element: @tip
      classPrefix: 'tooltip'
      enabled: false
      constraints: [
        to: 'window'
        pin: true
        attachment: 'together'
      ]

      attachment: @options.attach

    @options.el.addEventListener 'mouseover', => @open()
    @options.el.addEventListener 'mouseout', => @close()

  open: ->
    if not @tip.parentNode?
      document.body.appendChild @tip

    addClass @tip, 'tooltip-open'

    @tether.enable()

  close: ->
    removeClass @tip, 'tooltip-open'

    @tether.disable()

initialized = []
Tooltip.init = ->
  for el in document.querySelectorAll('[data-tooltip]') when el not in initialized
    new Tooltip {el}

    initialized.push el

document.addEventListener 'DOMContentLoaded', ->
  if Tooltip.autoinit isnt false
    Tooltip.init()

window.Tooltip = Tooltip
