// Setting DOM elements
let questionElement = document.querySelector('#question');
let answerElements = document.querySelectorAll('.answer');
let progressBarElement = document.querySelector('.progress-bar');
let trackQuestionNumberElement = document.getElementById('track-question-number');

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
    } else if (currentQuestionIndex === totalNumberOfQuestions) {
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
    
    // Update question tracker to show current question number
    updateQuestionTracker(currentQuestionIndex);
    
    questionElement.innerHTML = `${questionText}`;
    let answerIndex = 0;
    let answerLetter = ["A", "B", "C", "D"]
    for (let answerElement of answerElements) {
        answerElement.innerHTML = `${answerLetter[answerIndex]}: ${answers[answerIndex]}`;
        answerIndex++;
    }
}

function updateQuestionTracker(currentQuestionIndex) {
    let questionNumber = currentQuestionIndex + 1;
    trackQuestionNumberElement.textContent = questionNumber;
    
    // Update progress bar based on Question Number
    updateProgressBar(questionNumber);
}

function updateProgressBar(questionNumber) {
    switch(questionNumber) {
        case 1:
            progressBarElement.style.width = '20%';
            progressBarElement.setAttribute('aria-valuenow', '1');
            break;
        case 2:
            progressBarElement.style.width = '40%';
            progressBarElement.setAttribute('aria-valuenow', '2');
            break;
        case 3:
            progressBarElement.style.width = '60%';
            progressBarElement.setAttribute('aria-valuenow', '3');
            break;
        case 4:
            progressBarElement.style.width = '80%';
            progressBarElement.setAttribute('aria-valuenow', '4');
            break;
        case 5:
            progressBarElement.style.width = '100%';
            progressBarElement.setAttribute('aria-valuenow', '5');
            break;
        default:
            progressBarElement.style.width = '0%';
            progressBarElement.setAttribute('aria-valuenow', '0');
    }
}

function runGame() {
    nextQuestion(0)
}
runGame()