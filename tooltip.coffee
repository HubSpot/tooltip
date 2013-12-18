DropTooltip = Drop.createContext()

defaults =
    attach: 'top center'

class Tooltip
    constructor: (@options) ->
        @options.attach ?= defaults.attach

        @drop = new DropTooltip
            target: @options.el
            className: 'drop-tooltip-theme-arrows'
            attach: @options.attach
            constrainToWindow: true
            constrainToScrollParent: false
            openOn: 'hover'
            content: @options.content ? @$target.attr('data-tooltip-content')

window.Tooltip = Tooltip
