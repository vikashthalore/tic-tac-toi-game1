const gameCells = document.querySelectorAll('.cell');
const Player1 = document.querySelector('.player1');
const Player2 = document.querySelector('.player2');
const restartBtn = document.querySelector('.restartBtn');
const alertBox = document.querySelector('.alertBox');

// making variables
let currentPlayer = "X";
let nextPlayer = "O";
let playerTurn = currentPlayer;

Player1.textContent = `player 1: ${currentPlayer}`;
Player2.textContent = `player 2: ${nextPlayer}`;

// Function to start your game
const startGame = () => {
    gameCells.forEach(cell => {
        cell.addEventListener('click', handleClick )
            
        });
    }
const handleClick = (e) => {
    if (e.target.textContent === "") {
                e.target.textContent = playerTurn
                if (checkWin()) {
                    // console.log(`${playerTurn} is a winner!...`)
                    showAlert(`${playerTurn} is a winner!...`)
                    disableCells()
                }
                else if (checkTie()) {
                    // console.log("It's a Tie");
                    showAlert("It's a Tie");
                    disableCells();
                } else {
                    changePlayerTurn();
                    showAlert(`Turn for player: ${playerTurn}`)
                }
            }
        }



// Function to change player's turn
const changePlayerTurn = () => {
    // if (playerTurn === currentPlayer) {
    //     playerTurn = nextPlayer;
    // } else {
    //     playerTurn = changePlayerTurn;
    // }
    playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
}

// function to chek win..
const checkWin = () => {
    const winningCondition =
        [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    for (let i = 0; i < winningCondition.length; i++) {
        const [post1, post2, post3] = winningCondition[i];

        if (gameCells[post1].textContent !== '' &&
            gameCells[post1].textContent === gameCells[post2].textContent &&
            gameCells[post2].textContent === gameCells[post3].textContent) {
            return true;
        }
    }
}

// function to check for a tie
const checkTie = () => {
    let emptyCellsCount = 0;
    gameCells.forEach(cell => {
        if (cell.textContent === '') {
            emptyCellsCount++;
        }
    });
    return emptyCellsCount === 0 && !checkWin();
}

// function to disable game-board cells after a win or tie
const disableCells = () => {
    gameCells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
        cell.classList.add('disabled');
    });
}

// function to start game
const restartGame = () =>{
    gameCells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('disabled');
    });
    startGame();
}

const showAlert = (msg) =>{
    alertBox.style.display = "block"
    alertBox.textContent = msg;
    setTimeout(() =>{
    alertBox.style.display = "none"
    }, 3000);
}

// adding event listener to restart button
restartBtn.addEventListener('click', restartGame);

// calling taart game function
startGame();