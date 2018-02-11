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
$("#button-one").attr("value", blueCrystalNumber);
$("#button-two").attr("value", greenCrystalNumber);
$("#button-three").attr("value", orangeCrystalNumber);
$("#button-four").attr("value", purpleCrystalNumber);

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
  $("#button-one").attr("value", blueCrystalNumber);
  $("#button-two").attr("value", greenCrystalNumber);
  $("#button-three").attr("value", orangeCrystalNumber);
  $("#button-four").attr("value", purpleCrystalNumber);
  totalScore = 0;
  $("#target-number").text(targetNumber);
  $("#total-score").text(totalScore);
}

function resetOutcome() {
  $("#game-outcome").text("");
  $("#game-outcome").css("animation", "none");
  $("#game-outcome").css("animationIterationCount", "0");
}

$(".button").on("click", function () {
  resetOutcome();
  totalScore += parseInt(this.value);
  $("#total-score").text(totalScore);
  endConditions();
});