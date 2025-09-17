let buttonIDs = ["btnA", "btnB", "btnC", "btnD"];

initialiseButtons();

/* Get all buttons and add event listeners to them */
function initialiseButtons() {
    let buttons;
    buttons = globals.buttonIDs.map(id => document.getElementById(id));
    buttons.forEach(addClickListener);
}

function addClickListener(item) {
    item.addEventListener("click", function() {
        buttonClicked(item.id);
    });
}

/* Pass the index of the button to check the answer */
function buttonClicked(buttonID) {
    let result = globals.buttonIDs.indexOf(buttonID); 
    checkAnswer(result);
}

/* TODO : Increment the score */ 
function checkAnswer(selectedAnswer)
{
    if (selectedAnswer === questions[currentQuestionIndex]["answer"]) {
        alert("Correct!");}
        nextQuestion(++currentQuestionIndex);
}
