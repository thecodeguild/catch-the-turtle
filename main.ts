input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
let turtle_rain: game.LedSprite = null
let Player: game.LedSprite = null
game.startCountdown(12000000)
game.setScore(0)
Player = game.createSprite(2, 3)
basic.forever(function () {
    turtle_rain = game.createSprite(randint(0, 4), 0)
    if (game.score() <= 10) {
        for (let down = 0; down <= 4; down++) {
            turtle_rain.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
            if (turtle_rain.isTouching(Player)) {
                game.addScore(1)
            }
        }
        turtle_rain.delete()
    } else {
        if (game.score() > 10) {
            for (let down = 0; down <= 4; down++) {
                turtle_rain.change(LedSpriteProperty.Y, 1)
                basic.pause(200)
                if (turtle_rain.isTouching(Player)) {
                    game.addScore(1)
                }
            }
            turtle_rain.delete()
        }
    }
})
