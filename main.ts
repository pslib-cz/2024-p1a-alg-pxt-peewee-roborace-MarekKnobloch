type IRC = {
    l: DigitalPin,
    c: DigitalPin,
    r: DigitalPin
}

const IR: IRC = {
    l: DigitalPin.P15,
    c: DigitalPin.P8,
    r: DigitalPin.P13
}

pins.setPull(IR.l, PinPullMode.PullNone);
pins.setPull(IR.c, PinPullMode.PullNone);
pins.setPull(IR.r, PinPullMode.PullNone);

basic.forever(function () {
    let left = pins.digitalReadPin(IR.l)
    let center = pins.digitalReadPin(IR.c)
    let right = pins.digitalReadPin(IR.r)
})


function forward() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 150)
}
function turnLeft() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 120)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 10)
}
function turnRight() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 10)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 120)
}
function stop() {
    PCAmotor.MotorStopAll()
}

basic.forever(function () {
    let left = pins.digitalReadPin(IR.l)
    let center = pins.digitalReadPin(IR.c)
    let right = pins.digitalReadPin(IR.r)

    // if (center == 0 && left == 1 && right == 1) {
    //     forward()
    // } else if (left == 0) {
    //     turnRight()
    // } else if (right == 0) {
    //     turnLeft()
    // } else {
    //     stop()
    // }
    if (center == 0) {
        forward()
    } else {
        stop()
    }

    basic.pause(10)
})
