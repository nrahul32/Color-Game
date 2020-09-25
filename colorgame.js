const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
]

const squares = document.querySelectorAll(".box");
// A color is randomly chosen from the list and shown on screen
const colorToChoose = colors[Math.round(Math.random()*10)%6];
const span = document.querySelector("span");
span.innerText = colorToChoose;

for(let i=0; i<6; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor === colorToChoose){
            // User clicked on the right color
            alert("Congrats!");
        } else {
            this.style.backgroundColor = "white";
            alert("Try again");
        }
    })
}
