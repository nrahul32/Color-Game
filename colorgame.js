"use strict";

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
                setColorForAllBoxes(colorToChoose);
            } else {
                this.style.backgroundColor = "white";
                result.innerText = "Try again";
            }
        })
    }
}

function resetColor(){
    colors = generateRandomColors(6);
    // A color is randomly chosen from the list and shown on screen
    const randomPick = Math.floor(Math.random()*6);
    colorToChoose = colors[randomPick];
    displayColor.innerText = colorToChoose;
}

function generateRandomColor(){
    const r = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    return `rgb(${r}, ${b}, ${g})`;
}

function generateRandomColors(count){
    let listOfColors = [];
    for(let i=0; i<count;i++){
        listOfColors.push(generateRandomColor());
    }
    return listOfColors;
}

function setColorForAllBoxes(color){
    for(let i=0; i<6; i++){
        squares[i].style.backgroundColor = color;
    }
}

let colors = generateRandomColors(6);

playAgainButton.addEventListener("click", playAgain);
playAgain();
