let modal = new bootstrap.Modal(document.getElementById("gameModal"));
let replayButton = document.getElementById("replayButton");

function getFinalScore () {
    document.getElementById("finalScore").innerText = `${globals.score}/${totalNumberOfQuestions}`;
};

function replayGame() {
    location.reload();
}

replayButton.addEventListener("click", replayGame);