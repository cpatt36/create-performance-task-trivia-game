// - The gameInstructions function decreases the complexity of the program.
// - Since each category will require the same instructions, rewriting the code each time would increase the lines of code.
// - This function also makes it simpler to alter the code if there are changes that need to made or if there is a bug.
function gameInstructions () {
    game.showLongText("You will be given questions related to the category of your choosing.", DialogLayout.Full)
    game.showLongText("Each correct answer earns you points.", DialogLayout.Full)
    game.showLongText("You will see your score once you've answered all the questions.", DialogLayout.Full)
    game.showLongText("To answer select 0 for TRUE and 1 for FALSE.", DialogLayout.Full)
}
// The purpose of this code is to simplify the process of ending the game. The function is called in each of the three categories in the trviaCategory function once the user has answered all five questions in order to decrease the amount of code in the triviaCategory function. 
// The user is notified that the game has ended and of their score. They are also able to reset the game and play again!
function endGame () {
    game.showLongText("Congratulations! You finished with a score of....", DialogLayout.Full)
    game.splash(score, "%")
    game.showLongText("Press A to reset game.", DialogLayout.Center)
    game.reset()
}
// - this function contains all the lines of code needed to initiate the game
// - this shortens the code under the onStart block
// - the long text blocks introduced the game, the game then asks for an input from the user
// - this function creates the variable "category" as the number the user input
// - then, selection is used to assign the user the desired category
// - the functions within the selection initiates the game the user desired
// - this function uses the programming construct: sequence to ensure that the code is executed in order
function onStart () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d c c c c c c c c c c c d d 
        d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d 
        `)
    game.showLongText("Welcome to the \"Trivia Game!\"", DialogLayout.Full)
    gameInstructions()
    game.showLongText("Select Category: 0 for History; 1 for Geography; 2 for Sports", DialogLayout.Full)
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
// The intention behind the triviaCategory function is to streamline the process between the user choosing their category and being asked questions related to the category. Each category is represented by a number, which the user selects. This sets the questions as well as the answers, which is stored in (categoryname)Questions and (categoryname)Answers
function triviaCategory (num: number) {
    if (num == 0) {
        historyQuestions = [
        "The First World War began in 1914.",
        "Submarines were used in the American Civil War.",
        "California and Texas were once a part of Mexico.",
        "The Declaration of Independence was signed in 1876.",
        "The Great Chicago Fire was started when a cow knocked over a lantern"
        ]
        historyAnswers = [
        0,
        0,
        0,
        1,
        1
        ]
        userAnswersHistory = []
        for (let index = 0; index <= 4; index++) {
            game.showLongText(historyQuestions[index], DialogLayout.Center)
            userAnswersHistory.push(game.askForNumber("", 1))
        }
        for (let index2 = 0; index2 <= 4; index2++) {
            if (historyAnswers[index2] == userAnswersHistory[index2]) {
                score += 20
            }
        }
        endGame()
    } else if (num == 1) {
        geographyQuestions = [
        "The US is the country with the largest population in the world.",
        "The capital of Mexico is Mexico City.",
        "Mars is the planet closest to the Sun.",
        "Egypt is the driest continent on earth.",
        "Alaska is the most northern state in the US."
        ]
        geographyAnswers = [
        1,
        0,
        1,
        1,
        0
        ]
        userAnswersGeography = []
        for (let index3 = 0; index3 <= 4; index3++) {
            game.showLongText(geographyQuestions[index3], DialogLayout.Center)
            userAnswersGeography.push(game.askForNumber("", 1))
        }
        for (let index4 = 0; index4 <= 4; index4++) {
            if (geographyAnswers[index4] == userAnswersGeography[index4]) {
                score += 20
            }
        }
        endGame()
    } else {
        sportsQuestions = [
        "The NBA stands for the National Basketball Allegiance.",
        "In football, each touchdown is 7 points.",
        "The term \"stale fish\" is used in snowboarding.",
        "A NFL football weighs 1 pound.",
        "A soccer field is called \"a pitch\"."
        ]
        sportsAnswers = [
        1,
        1,
        0,
        0,
        0
        ]
        userAnswersSports = []
        for (let index5 = 0; index5 <= 4; index5++) {
            game.showLongText(sportsQuestions[index5], DialogLayout.Center)
            userAnswersSports.push(game.askForNumber("", 1))
        }
        for (let index6 = 0; index6 <= 4; index6++) {
            if (sportsAnswers[index6] == userAnswersSports[index6]) {
                score += 20
            }
        }
        endGame()
    }
}
let userAnswersSports: number[] = []
let sportsAnswers: number[] = []
let sportsQuestions: string[] = []
let userAnswersGeography: number[] = []
let geographyAnswers: number[] = []
let geographyQuestions: string[] = []
let userAnswersHistory: number[] = []
let historyAnswers: number[] = []
let historyQuestions: string[] = []
let category = 0
let score = 0
onStart()
