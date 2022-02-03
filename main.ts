/**
 * - the only code here calls the onStart function which contains the code necessary to start the game.
 */
/**
 * - this code in this block is run when the game starts
 */
function gameInstructions () {
    game.showLongText("Please answer the following questions related to your category.", DialogLayout.Full)
    game.showLongText("Each correct answer ears you points.", DialogLayout.Full)
    game.showLongText("The game will end once you answer three correct answers.", DialogLayout.Full)
}
// - this function contains all the lines of code needed to initiate the game
// - this shortens the code under the onStart block
// - the long text blocks introduced the game, the game then asks for an input from the user
// - this function creates the variable "category" as the number the user input
// - then, selection is used to assign the user the desired category
// - the functions within the selection initiates the game the user desired
// - this function uses the programming construct: sequence to ensure that the code is executed in order
function onStart () {
    game.showLongText("Welcome to the \"Trivia Game\" hosted by Sara and Caroline!", DialogLayout.Full)
    game.showLongText("Select Category: 0 for History; 1 for Geography; 2 for Movies", DialogLayout.Full)
    category = game.askForNumber("", 1)
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
}
function triviaCategory (num: number) {
    if (num == 0) {
        text_list = ["a", "b", "c"]
    } else if (num == 1) {
        text_list = ["a", "b", "c"]
    } else {
        text_list = ["a", "b", "c"]
    }
}
let text_list: string[] = []
let category = 0
onStart()
// - this iteration happens throughout the game
// - it constantly checks if the score of the user is 3
// - once the user's score equals 3, the user wins and the game ends
// - this iteration lessens the complexity by not having the program manually check the score after each progression of the game
forever(function () {
    if (info.score() >= 3) {
        game.over(true, effects.confetti)
    }
})
