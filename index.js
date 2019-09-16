var number1 = Math.ceil((Math.random() * 6));
var number2 = Math.ceil((Math.random() * 6));

var img = document.querySelectorAll("img");

img[0].setAttribute("src", "images/dice" + number1 + ".png");
img[1].setAttribute("src", "images/dice" + number2 + ".png");

// Set result message
var msg = "Draw!";
if (number1 > number2) {
  msg = "Player 1 wins!";
} else if (number2 > number1) {
  msg = "Player 2 wins!";
}

document.querySelector("h1").textContent = msg;
