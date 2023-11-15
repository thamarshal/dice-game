//document.querySelector("button").style.backgroundColor = "red";
//document.querySelector("button").classList.add("btn");
//document.querySelector("h1").classList.toggle("huge");
//document.querySelector("h1").innerHTML = "<em>sodiq</em>"
//document.querySelector("h1").innerHTML = "sodiq" // is not aligned withthe inner html of my element
//document.querySelector("h1").textContent = "sodiq"
//document.querySelector("h1").textContent = "<em>sodiq</em>" // text content cant take elements tag intp them

//document.querySelector("a").setAttribute("href","https://www.bing.com");


function dice() {
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + dice1 + ".svg.png";
var randomImageSource2 = "images/dice" + dice2 + ".svg.png"; 

var player1 =document.querySelector("#player1");
var player2 =document.querySelector("#player2");

player1.setAttribute("src",randomImageSource1);
player2.setAttribute("src",randomImageSource2);



var heading = document.querySelector("#heading");

if (dice1 > dice2) {
    heading.innerHTML = "🚩 Player 1 wins!";
}
else if (dice2 > dice1) {
    heading.innerHTML = "🚩 Player 2 wins!";
}
else if (dice1 === dice2) {
    heading.innerHTML = "Draw 🤝!!!";
}
else{
    heading.innerHTML = "Refresh Me!";
}
}
dice()
