var randomNumber1 = 6;
var result1 = Math.floor(Math.random() * randomNumber1 + 1);
var result2 = Math.floor(Math.random() * randomNumber1 + 1);

document
  .querySelector(".dice .img1")
  .setAttribute("src", "./images/dice" + result1 + ".png");

document
  .querySelector(".dice .img2")
  .setAttribute("src", "./images/dice" + result2 + ".png");

if (result1 === result2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (result1 > result2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
