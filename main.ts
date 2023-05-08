let degrees = 0
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
/**
 * ej-microbit-compass-01-4egtaj
 */
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (degrees < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (degrees < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (degrees < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
