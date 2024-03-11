// create random number between 1 and 6
// Player one random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
// Player two random number
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// you can cut out the middle and just write it as one line:
// var randomDiceImage2 = "dice" + randomNumber2 + ".png";
// var randomImageSource2 = "images/" + randomDiceImage2;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Same for this one, you can cut out the middle and just write it as one line:
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Change the title to show the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩 ";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

