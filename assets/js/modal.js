let modal = new bootstrap.Modal(document.getElementById("gameModal"));

function getFinalScore () {
    document.getElementById("finalScore").innerText = `${globals.score}/${totalNumberOfQuestions}`;
};