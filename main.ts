input.onButtonPressed(Button.A, function () {
    Counter += 1
    music.playMelody("C5 - - - - - - - ", 1000)
    basic.showNumber(Counter)
})
input.onButtonPressed(Button.AB, function () {
    Counter = 0
    basic.showNumber(Counter)
})
input.onButtonPressed(Button.B, function () {
    Counter += -1
    music.playMelody("C5 - - - - - - - ", 1000)
    basic.showNumber(Counter)
})
let Counter = 0
Counter = 0
basic.showNumber(Counter)
