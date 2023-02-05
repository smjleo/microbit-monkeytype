let cont = true

function toggleLed() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            led.toggle(i, j)
        }
    }
}

input.onButtonPressed(Button.A, () => {
    cont = true
    toggleLed()
    while (cont) {
        let a = serial.readLine()
        keyboard.sendString(a)
        keyboard.sendString(' ')
    }
})

input.onButtonPressed(Button.B, () => {
    cont = false
    toggleLed()
})


keyboard.startKeyboardService()

