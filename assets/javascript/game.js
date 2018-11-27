var counter = 0;
var targetNumber = 55;
var numberOptions = [10, 11, 12];
var increment = numberOptions[Math.round(Math.random())];

$("#randomNumber").text(targetNumber);

$(".crystal-image").on("click", function() {
    counter += increment;
    alert("your score is: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    }
    else if (counter >= targetNumber) {
        alert("You Lose");
    }
    console.log(counter);
});

