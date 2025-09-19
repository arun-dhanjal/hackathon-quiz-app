let modal = new bootstrap.Modal(document.getElementById("game-modal"));
let replayButton = document.getElementById("replay-button");

function getFinalScore () {
    document.getElementById("final-score").innerText = `${globals.score}/${totalNumberOfQuestions}`;
};

function replayGame() {
    location.reload();
}

replayButton.addEventListener("click", replayGame);