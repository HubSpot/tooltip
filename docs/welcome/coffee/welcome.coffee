isMobile = $(window).width() < 567

init = ->
    setupHero()

setupHero = ->
    $target = $('.tooltip-target-demo')

    positions = [
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
    ]

    if isMobile
        positions = [
            'top left'
            'bottom left'
            'bottom right'
            'top right'
        ]

    window.drops = {}

    for position in positions
        drops[position] = new Tooltip
            target: $target[0]
            position: position
            openOn: ''
            content: $.map(position.split(' '), (word) -> word.substr(0, 1).toUpperCase() + word.substr(1)).join(' ')
            constrainToWindow: false

    openIndex = 0
    frames = 0
    frameLengthMS = 10

    openAllDrops = ->
        for position, drop of drops
            drop.open()

    openNextDrop = ->
        for position, drop of drops
            drop.close()

        drops[positions[openIndex]].open()

        openIndex = (openIndex + 1) % positions.length

        if frames > 20
            return openAllDrops()

        frames += 1

        setTimeout openNextDrop, frameLengthMS * frames

    if isMobile
        drops['top left'].open()
        drops['bottom right'].open()

    else
        openNextDrop()

init()
