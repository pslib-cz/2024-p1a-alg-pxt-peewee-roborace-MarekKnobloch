type IRC = {
    l: DigitalPin,
    c: DigitalPin,
    r: DigitalPin
}
const IR: IRC = {
    l: DigitalPin.P15,
    c: DigitalPin.P8,
    r: DigitalPin.P13,

}

pins.setPull(IR.l, PinPullMode.PullNone);
pins.setPull(IR.c, PinPullMode.PullNone);
pins.setPull(IR.r, PinPullMode.PullNone);

function forward() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 95)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 95)
}
function turnLeft() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 95)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 35)
}
function turnRight() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 35)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 95)
}
function stop() {
    PCAmotor.MotorStopAll()
}

basic.forever(function () {
    let left = pins.digitalReadPin(IR.l)
    let center = pins.digitalReadPin(IR.c)
    let right = pins.digitalReadPin(IR.r)

    if (center == 0 && left == 1 && right == 1) {
        forward()
    } else if (left == 0) {
        turnLeft()
    } else if (right == 0) {
        turnRight()
    } else {
        stop()
    }

    basic.pause(5)
})
