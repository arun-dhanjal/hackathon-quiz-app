let buttonIDs = ["btnA", "btnB", "btnC", "btnD"];

initialiseButtons();

/* Get all buttons and add event listeners to them */
function initialiseButtons() {
    let buttons;
    buttons = buttonIDs.map(id => document.getElementById(id));
    buttons.forEach(addClickListener);
}

function addClickListener(item) {
    item.addEventListener("click", function() {
        buttonClicked(item.id);
    });
}

/* TODO Need to add passing the result to the appropriate receiver */
function buttonClicked(buttonID) {
    let result = buttonIDs.indexOf(buttonID); 
}
