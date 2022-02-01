game.showLongText("Welcome to the \"Trivia Game\" hosted by Sara and Caroline!", DialogLayout.Full)
forever(function () {
    if (info.score() >= 5) {
        game.over(true, effects.confetti)
    }
})
