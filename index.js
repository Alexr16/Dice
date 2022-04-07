var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// Opcional
// var randomDiceImage="dice"+ randomNumber1 + ".png";
// var randomSource="images" + randomDiceImage;
// document.querySelector(".img1").setAttribute('src', randomSource);

document.querySelector(".img1").setAttribute('src', randomImages[randomNumber1]);
document.querySelector(".img2").setAttribute('src', randomImages[randomNumber2]);


if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Refresh Me";
}
