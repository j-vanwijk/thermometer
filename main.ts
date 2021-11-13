let temperatuur = 0
input.onButtonPressed(Button.B, function () {
    if (temperatuur > 21) {
        basic.showString("Warm korte broek")
    } else if (temperatuur > 15) {
        basic.showString("Lekker weer! T-shirt")
    } else if (temperatuur < 15) {
        basic.showString("Brrr! Warme trui!")
    }
})
basic.forever(function () {
    temperatuur = input.temperature() - 8
})
