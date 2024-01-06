const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissor");
const msg = document.querySelector(".msg");
const com = document.querySelector("#compScore");
const me = document.querySelector("#yourScore");
const myMove=document.querySelector(".mine");
const compMove=document.querySelector(".comp");
let yourScore = 0; 
let compScore = 0;
let count=0;
let comp, yours;
let move = ["Rock", "Paper", "Scissors"];
let winner = () => {
    if (yours == comp) {
        msg.innerText = "Draw";
        msg.style.backgroundColor = "rgb(238, 174, 0)"
    } else if (yours === 1 && comp === 2 || yours === 2 && comp === 3 || yours === 3 && comp === 1) {
        msg.innerText = "Computer Won";
        msg.style.backgroundColor = "red"
        compScore++;
        com.innerText = compScore;
    } else {
        msg.innerText = "You Won";
        msg.style.backgroundColor = "green"
        yourScore++;
        me.innerText = yourScore;
    }
}
let moveText=(a,b)=>{
    compMove.innerText=move[a-1];
    myMove.innerText=move[b-1];
}
rock.addEventListener("click", () => {
    yours = 1;
    comp = 1 + Math.floor(Math.random() * 3);
    winner();
    moveText(comp,yours);
    count++;
})
paper.addEventListener("click", () => {
    yours = 2;
    comp = 1 + Math.floor(Math.random() * 3);    
    winner();
    moveText(comp,yours);
    count++;

})
scissors.addEventListener("click", () => {
    yours = 3;
    comp = 1 + Math.floor(Math.random() * 3);
    winner();
    moveText(comp,yours);
    count++;

})