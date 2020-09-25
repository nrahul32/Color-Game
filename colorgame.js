"use strict";

const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
]
let colorToChoose;

// Elements
const squares = document.querySelectorAll(".box");
const displayColor = document.querySelector("span");
const result = document.querySelector("#result");
const playAgainButton = document.querySelector("#play_again");

// Helper functions
function playAgain(){
    resetColor();
    playGame();
}

function playGame(){
    for(let i=0; i<6; i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor === colorToChoose){
                // User clicked on the right color
                result.innerText = "Congrats!";
            } else {
                this.style.backgroundColor = "white";
                result.innerText = "Try again";
            }
        })
    }
}

function resetColor(){
    // A color is randomly chosen from the list and shown on screen
    const randomPick = Math.floor(Math.random()*6);
    colorToChoose = colors[randomPick];
    displayColor.innerText = colorToChoose;
}

playAgainButton.addEventListener("click", playAgain);
playAgain();
