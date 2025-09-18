// Setting DOM elements
let questionElement = document.querySelector("#question");
let answerElements = document.querySelectorAll(".answer");

// Set Questions
let questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "What is the percentage of the Earth covered by water?",
        choices: ["51%", "61%", "71%", "81%"],
        answer: 2
    },
    {
        question: "What is the main ingredient of gnocchi?",
        choices: ["Rice", "Potato", "Pasta", "Chocolate"],
        answer: 1
    }
];
let totalNumberOfQuestions = questions.length;

// Question Functions
/**
 * Loads and displays the next question if the index is within range.
 * Throws an error and alerts the user if the index exceeds the total number of questions.
 *
 * @param {number} currentQuestionIndex - The index of the question to load.
 */
function nextQuestion(currentQuestionIndex) {
    if (currentQuestionIndex < totalNumberOfQuestions) {
        loadQuestion(currentQuestionIndex);
    } else if (currentQuestionIndex = totalNumberOfQuestions) {
        getFinalScore();
        modal.show();
    } else {
        alert(`Tried to display question number ${currentQuestionIndex+1}, but there are only ${totalNumberOfQuestions} questions!`);
        throw(`Tried to display question number ${currentQuestionIndex+1}, but there are only ${totalNumberOfQuestions} questions!`);
    }
}

/**
 * Displays the question and its answer choices for the given index.
 * Updates the DOM to show the current question and possible answers.
 * 
 * @param {number} currentQuestionIndex - The index of the question to display.
 */
function loadQuestion(currentQuestionIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    let questionText = currentQuestion["question"];
    let answers = currentQuestion["choices"]
    
    questionElement.innerHTML = `Question ${currentQuestionIndex+1}: ${questionText}`;
    let answerIndex = 0;
    let answerLetter = ["A", "B", "C", "D"]
    for (let answerElement of answerElements) {
        answerElement.innerHTML = `${answerLetter[answerIndex]}: ${answers[answerIndex]}`;
        answerIndex++;
    }
}

let currentQuestionIndex = 0;
function runGame() {
    nextQuestion(0)
}
runGame()