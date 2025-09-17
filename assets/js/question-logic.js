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

let currentQuestionIndex = 0;
let totalNumberOfQuestions = questions.length;
/**
 * Loads current question depending on question number
 * @param {*} currentQuestionIndex 
 */
function loadQuestion(currentQuestionIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    let questionText = currentQuestion["question"];
    let answer1 = currentQuestion["choices"][0];
    let answer2 = currentQuestion["choices"][1];
    let answer3 = currentQuestion["choices"][2];
    let answer4 = currentQuestion["choices"][3];
    
    ////////////////////////////////////////////////////////////////////////
    // WIP structure wise, depending on HTML elements, basically pseudocode
    ////////////////////////////////////////////////////////////////////////
    let question = `
    Question ${currentQuestionIndex}: ${questionText}

    1: ${answer1}
    2: ${answer2}
    3: ${answer3}
    4: ${answer4}
    `
}

function nextQuestion() {
    if (currentQuestionIndex < totalNumberOfQuestions) {
        loadQuestion(currentQuestionIndex);
    } else {
        alert(`Tried to display question number ${currentQuestionIndex+1}, but there are only ${totalNumberOfQuestions} questions!`);
        throw(`Tried to display question number ${currentQuestionIndex+1}, but there are only ${totalNumberOfQuestions} questions!`);
    }
}