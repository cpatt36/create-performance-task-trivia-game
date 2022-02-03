// - The gameInstructions function decreases the complexity of the program. 
// - Since each category will require the same instructions, rewriting the code each time would increase the lines of code. 
// - This function also makes it simpler to alter the code if there are changes that need to made or if there is a bug. 
function gameInstructions () {
    game.showLongText("Please answer the following questions related to your category.", DialogLayout.Full)
    game.showLongText("Each correct answer earns you points.", DialogLayout.Full)
    game.showLongText("The game will end once you answer all 5 questions related to the category.", DialogLayout.Full)
    game.showLongText("You will then see a score.", DialogLayout.Full)
    game.showLongText("To answer select 0 for TRUE and 1 for FALSE.", DialogLayout.Full)
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
        historyQuestions = [
        "The First World War began on September 1st, 1914.",
        "Submarines were used in the American Civil War.",
        "California and Texas were once apart of Mexico.",
        "The Declaration of Independence was signed in 1876.",
        "The Great Chicago Fire was started when a cow knocked over a lantern"
        ]
        historyAnswers = [
        "1",
        "0",
        "0",
        "1",
        "1"
        ]
        for (let index = 0; index < 5; index++) {
            let list: number[] = []
            list.push(game.askForNumber("", 1))
        }
    } else if (num == 1) {
        geographyQuestions = [
        "a",
        "b",
        "c",
        "",
        ""
        ]
        geographyAnswers = [
        "a",
        "b",
        "c",
        "",
        ""
        ]
    } else {
        moviesQuestions = [
        "a",
        "b",
        "c",
        "",
        ""
        ]
        moviesAnswers = [
        "a",
        "b",
        "c",
        "",
        ""
        ]
    }
}
let moviesAnswers: string[] = []
let moviesQuestions: string[] = []
let geographyAnswers: string[] = []
let geographyQuestions: string[] = []
let historyAnswers: string[] = []
let historyQuestions: string[] = []
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
