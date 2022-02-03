function triviaCategory (num: number) {
	
}
game.showLongText("Welcome to the \"Trivia Game\" hosted by Sara and Caroline!", DialogLayout.Full)
game.showLongText("Select Category: 0 for History; 1 for Geography; 2 for Movies", DialogLayout.Full)
let category = game.askForNumber("", 1)
if (category == 0) {
    triviaCategory(0)
} else if (category == 1) {
    triviaCategory(1)
} else if (category == 2) {
    triviaCategory(2)
} else {
    game.splash("Choose a category that exists.")
    game.reset()
}
forever(function () {
    if (info.score() >= 5) {
        game.over(true, effects.confetti)
    }
})
