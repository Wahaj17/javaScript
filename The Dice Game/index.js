var randomNumber1 = Math.floor((Math.random()*6)+1)
var randomNumber2 = Math.floor((Math.random()*6)+1)
var rollDice1 = "images/"+randomNumber1+".png";
var rollDice2 = "images/"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src", rollDice1)
document.querySelectorAll("img")[1].setAttribute("src", rollDice2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "👈Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!👉";
} else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}



