var randomNumber = Math.floor(Math.random() * 6 + 1); // to generate random number in range (1 - 6)


// for dice 1
var imageSource1 = "images/dice" + randomNumber + ".png"; //to get random image of dice
var selector1 = document.querySelector(".dice .img1"); //selecting the dice
var pageSource = selector1.setAttribute('src', imageSource1); // set image source in 'src' 


// for dice 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1); 
var imageSource2 = "images/dice" + randomNumber2 + ".png"; //to get random image of dice
var selector2 = document.querySelector(".dice .img2"); //selecting the dice
var pageSource2 = selector2.setAttribute('src', imageSource2) // set image source in 'src' 


// Now Let's work on Title. 

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "😎 Player 1 Wins!";
} 
else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 😎";
}
else{
    document.querySelector("h1").innerHTML = "It's Draw! 🙌";
}
