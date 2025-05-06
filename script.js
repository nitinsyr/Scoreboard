let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

document.getElementById("clearScores").addEventListener("click", () => {
  guestScoreEl.textContent = 0;
  homeScoreEl.textContent = 0;
  homeScore = 0;
  guestScore = 0;
});

let allButtons = document.querySelectorAll(".btn");
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    var team = btn.dataset.team;
    var points = btn.dataset.points;
    updateUI(team, parseInt(points));
  });
});

function updateUI(team, points) {
  if (team === "home") {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
  } else {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
  }
  homeScoreEl.classList.remove("leader");
  guestScoreEl.classList.remove("leader");

  if (homeScore > guestScore) {
    homeScoreEl.classList.add("leader");
  } else if (homeScore < guestScore) {
    guestScoreEl.classList.add("leader");
  }
}
