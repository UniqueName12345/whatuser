score = 0

async function checkIfUserExistsOnScratch(username) {
    const url = `https://scratch.mit.edu/users/${username}`;
    const response = await fetch(url);
    if (response.ok) {
        return "Exists";
    }
    return "Doesn't Exist";
}

const syncVisibleScoreWithScore = () => {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = score.toString();
};

function modifyScore(posOrNeg, amount) {
    score = posOrNeg === "plus" ? score + amount : score - amount;
    syncVisibleScoreWithScore();
}

function addEventToResultsList(username, outcome) {
    const resultsElement = document.getElementById("results");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `${username}: ${outcome}`;
    resultsElement.appendChild(newParagraph);
}
