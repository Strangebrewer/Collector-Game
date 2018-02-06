var totalScore = 0;
var wins = 0;
var losses = 0;
var targetNumber = randomIntFromInterval(19, 120);
var blueCrystalNumber = randomIntFromInterval(1, 12);
var greenCrystalNumber = randomIntFromInterval(1, 12);
var orangeCrystalNumber = randomIntFromInterval(1, 12);
var purpleCrystalNumber = randomIntFromInterval(1, 12);

$("#target-number").text(targetNumber);
$("#wins").text(wins);
$("#losses").text(losses);
$("#total-score").text(totalScore);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function endConditions() {
  if (totalScore == targetNumber) {
    wins++;
    $("#wins").text(wins);
    reset();
    $("#game-outcome").text("You Win!");
    $("#game-outcome").css("animation", "opac 1.5s");
    $("#game-outcome").css("animationIterationCount", "1");
  }
  else if (totalScore > targetNumber) {
    losses++;
    $("#losses").text(losses);
    reset();
    $("#game-outcome").text("You Lose!");
    $("#game-outcome").css("animation", "opac 1.5s");
    $("#game-outcome").css("animationIterationCount", "1");
  }
}

function reset() {
  targetNumber = randomIntFromInterval(19, 120);
  blueCrystalNumber = randomIntFromInterval(1, 12);
  greenCrystalNumber = randomIntFromInterval(1, 12);
  orangeCrystalNumber = randomIntFromInterval(1, 12);
  purpleCrystalNumber = randomIntFromInterval(1, 12);
  totalScore = 0;
  $("#target-number").text(targetNumber);
  $("#total-score").text(totalScore);
}

function resetOutcome() {
  $("#game-outcome").text("");
  $("#game-outcome").css("animation", "none");
  $("#game-outcome").css("animationIterationCount", "0");
}

$("#button-one").on("click", function (event) {
  resetOutcome();
  totalScore += blueCrystalNumber;
  $("#total-score").text(totalScore);
  endConditions();
});

$("#button-two").on("click", function (event) {
  resetOutcome();
  totalScore += greenCrystalNumber;
  $("#total-score").text(totalScore);
  endConditions();
});

$("#button-three").on("click", function (event) {
  resetOutcome();
  totalScore += orangeCrystalNumber;
  $("#total-score").text(totalScore);
  endConditions();
});

$("#button-four").on("click", function (event) {
  resetOutcome();
  totalScore += purpleCrystalNumber;
  $("#total-score").text(totalScore);
  endConditions();
});