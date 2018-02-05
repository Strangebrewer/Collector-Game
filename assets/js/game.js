

// each crystal will need a random number assigned at the beginning of each game

// Target number randomly generated beginning each game

// each crystal click will add its value to the total score... so...
// totalScore = totalScore + crystalCurrentValue

// winning condition would be totalScore === targetNumber

var totalScore = 0;
var targetNumber;
var wins = 0;
var losses = 0;
var blueCrystalNumber;
var greenCrystalNumber;
var orangeCrystalNumber;
var purpleCrystalNumber;

function endConditions() {
  if (totalScore === targetNumber) {
    wins++;
    resetNumbers();
    $("#wins").text(wins);
  } else if (totalScore > targetNumber) {
    losses++;
    resetNumbers();
    $("#losses").text(losses);
  }
  console.log(totalScore);
  console.log(totalScore === targetNumber);
  console.log(wins);
}

function blockEnter() {
  document.onkeydown = function (event) {
    if (event.keyCode === 32 || 13) {
      event.preventDefault();
    }
  }
}

function resetNumbers() {
  blueCrystalNumber = 0;
  greenCrystalNumber = 0;
  orangeCrystalNumber = 0;
  purpleCrystalNumber = 0;
}

function reset() {
  totalScore = 0;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNumbers() {
  targetNumber = randomIntFromInterval(19, 120);
  blueCrystalNumber = randomIntFromInterval(1, 12);
  greenCrystalNumber = randomIntFromInterval(1, 12);
  orangeCrystalNumber = randomIntFromInterval(1, 12);
  purpleCrystalNumber = randomIntFromInterval(1, 12);
  $("#target-number").text(targetNumber);
  $("#total-score").text(totalScore);

}

function newGame() {
  $("#wins").text(wins);
  $("#losses").text(losses);
  reset();
  getNumbers();
  mainGame();
}

function mainGame() {
  $("#button-one").on("click", function (event) {
    blockEnter();
    totalScore += blueCrystalNumber;
    $("#total-score").text(totalScore);
    endConditions();
  });

  $("#button-two").on("click", function (event) {
    blockEnter();
    totalScore += greenCrystalNumber;
    $("#total-score").text(totalScore);
    endConditions();
  });

  $("#button-three").on("click", function (event) {
    blockEnter();
    totalScore += orangeCrystalNumber;
    $("#total-score").text(totalScore);
    endConditions();
  });

  $("#button-four").on("click", function (event) {
    blockEnter();
    totalScore += purpleCrystalNumber;
    $("#total-score").text(totalScore);
    endConditions();
  });

}

$("#game-begin").on("click", function (event) {
  newGame();
});