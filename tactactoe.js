let buttons = Array.from(document.querySelectorAll(".game button"));
let isXTurn = true;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerHTML === "") {
            button.innerHTML = isXTurn ? "X" : "O";
            button.style.color = isXTurn ? "black" : "red";
            isXTurn = !isXTurn;
            checkWinner();
        }
    });
});

function checkWinner(){
    const winningcorrd = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 3, 7], [2, 4, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    winningcorrd.forEach((coord)=>{
        const [a, b, c] = coord;
        if(
            buttons[a].innerHTML !== "" &&
            buttons[a].innerHTML === buttons[b].innerHTML &&
            buttons[a].innerHTML === buttons[c].innerHTML
        ){
            alert(`${buttons[a].innerHTML} won the game`);
            clearboard();
        }
    });

    if(buttons.every((button) => button.innerHTML !== "")){
        alert("it's a draw");
        clearboard();
    }
}

function clearboard(){
    buttons.forEach((button) => {
        button.innerHTML=  "";
    }); 
}