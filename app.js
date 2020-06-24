const gameBoard = document.querySelector('.game-board table');
const playAgainBtn = document.querySelector('.play-again');
const okayBtn = document.querySelector('.alert button');
const alertDiv = document.querySelector('.alert');
const gameCells = document.querySelectorAll("td");
const newGameDiv = document.querySelector('.new-game');
const WINNING_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let counter = 0;

// New Game Function
const checkDraw = () => {
    let i = 0;
    gameCells.forEach(cell => {
        // Check each cell
        if(cell.className === "") {
            i++;
            return i;
        }
    });
    if (i === 0) {        
        newGameDiv.classList.toggle("hidden");
    }
}
const checkDraw2 = () => {
    if ( gameCells.every( (cell) => {
        return cell.className === "player-one" || cell.className === "player-two";
    })) {
        console.log("what?");
    }
}

// Check winner function
const checkWinner = () => {
    // gameCells.some()
}
const placeToken = e => {
    const clicked = e.target;
    


    // Place token function
    if (clicked.className === "") {
        if (counter % 2 === 0) {
            clicked.classList.toggle('player-one');
            checkWinner();
            checkDraw();
        }
        else {
            clicked.classList.toggle('player-two');
            checkWinner();
            checkDraw();
        }
        counter++;
    }
    else {
        alertDiv.classList.toggle("hidden");
    }
}
const clearBoard = () => {    
    gameCells.forEach(element => {
        element.classList = "";
    });
    counter = 0;
    newGameDiv.classList.toggle("hidden");
}

gameBoard.addEventListener("click", placeToken);
playAgainBtn.addEventListener("click", clearBoard);
okayBtn.addEventListener("click", () =>{
    alertDiv.classList.add("hidden");
})