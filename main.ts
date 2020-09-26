basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 30) {
        basic.showString("\"T.ALTA\"")
    } else if (input.temperature() < 8) {
        basic.showString("\"T.BAJA\"")
    } else {
        basic.showString("T.NORMAL\"")
    }
    pins.analogWritePin(AnalogPin.P0, 140)
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showString("\"H.ALTA\"")
    } else if (pins.analogReadPin(AnalogPin.P0) > 200) {
        basic.showString("\"H.BAJA\"")
    } else {
        basic.showString("\"H.NORMAL\"")
    }
})
