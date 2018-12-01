$(document).ready(function() {

var userTotal = 0;
var wins = 0;
var loss = 0;

// var numberOptions = Math.floor(Math.random()* 12) + 1;
var targetNumber = Math.floor(Math.random()*101) + 19;

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + loss);

$("#randomNumber").text(targetNumber);
console.log(targetNumber);

function restartGame() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text(targetNumber);
    userTotal = 0;
    $("#totalScore").text(userTotal);

}

function winning() {
    alert("We've got a champion!");
    wins++;
    $("#wins").text("Wins: " + wins);
    restartGame();
}

function losing() {
    alert("Sucks to be a loser. Try again!");
    loss++;
    $("#losses").text("Losses: " + loss);
    restartGame();
}

$(".crystal-image").on("click", function() {
    var numberOptions = Math.floor(Math.random()* 12) + 1;
    userTotal = userTotal + numberOptions;
    $("#totalScore").text(userTotal);
        if (userTotal == targetNumber) {
            winning();
        }
        else if (userTotal > targetNumber) {
            losing();
        }
    });
   

   
});

