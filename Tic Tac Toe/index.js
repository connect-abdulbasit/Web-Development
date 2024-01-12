const boxes = document.querySelectorAll(".box");
const msg = document.querySelector(".winner");
const reset = document.querySelector(".button button");
const input=document.querySelector("input");
let mark = ["X", "O"];
let count = 0;
let win = () => {
    if (boxes[0].innerText === boxes[1].innerText && boxes[1].innerText === boxes[2].innerText && boxes[2].innerText != "") {
        return 1;
    }
    if (boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText && boxes[8].innerText != "") {
        return 1;
    }
    if (boxes[0].innerText === boxes[3].innerText && boxes[3].innerText === boxes[6].innerText && boxes[6].innerText != "") {
        return 1;
    }
    if (boxes[1].innerText === boxes[4].innerText && boxes[4].innerText === boxes[7].innerText && boxes[7].innerText != "") {
        return 1;
    }
    if (boxes[3].innerText === boxes[4].innerText && boxes[4].innerText === boxes[5].innerText && boxes[5].innerText != "") {
        return 1;
    }
    if (boxes[2].innerText === boxes[5].innerText && boxes[5].innerText === boxes[8].innerText && boxes[8].innerText != "") {
        return 1;
    }
    if (boxes[6].innerText === boxes[7].innerText && boxes[7].innerText === boxes[8].innerText && boxes[8].innerText != "") {
        return 1;
    }
    if (boxes[2].innerText === boxes[4].innerText && boxes[4].innerText === boxes[6].innerText && boxes[6].innerText != "") {
        return 1;
    }
    for (let index = 0; index < 9; index++) {
        if (boxes[index].innerText=="") {
            return 0;
        }
    }
    return -1;
}
let click = (e) => {
    if (e.target.innerText == "") {
        e.target.innerText = mark[count];
        count++;
    }
    if (win() === 1) {
        msg.innerText = "Player ".concat(count, " Won");
        msg.style.backgroundColor = "green";
        boxes.forEach(box => {
            box.removeEventListener("click", click);
        })
    } else if(win()===0){
        msg.innerText = "Player ".concat((count%2)+1, " turn");
    } else{
        msg.innerText = "Draw";
    }
    count %= 2;
    console.log(count);
}
boxes.forEach(box => {
    box.addEventListener("click", click);
});
reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.addEventListener("click", click);
        box.innerText = "";
    })
    msg.innerText = "Player 1 turn";
    msg.style.backgroundColor = "blue";
    count = 0;
})
input.addEventListener("blur",()=>{
console.log("123");

})