let buttonIDs = ["btnA", "btnB", "btnC", "btnD"];

initialiseButtons();

/* Get all buttons and add event listeners to them */
function initialiseButtons() {
    let buttons;
    buttons = globals.buttonIDs.map(id => document.getElementById(id));
    buttons.forEach(addClickListener);
}

function addClickListener(item) {
    item.addEventListener("click", function () {
        buttonClicked(item.id);
    });
}

/* Pass the index of the button to check the answer and go to the next question */
function buttonClicked(buttonID) {
    let result = globals.buttonIDs.indexOf(buttonID);
    checkAnswer(result);
    nextQuestion(++currentQuestionIndex);
}

/*Check if the answer is correct */
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestionIndex]["answer"]) {
        incrementScore();
        globals.correctSound.play();
    }   else {
        globals.wrongSound.play();}

}