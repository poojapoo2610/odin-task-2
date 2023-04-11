// to display the game status message
const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector("#message").innerHTML = message
    }
    return {
        renderMessage
    }
})();


const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square} </div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick)
        })
    }

    const update = (index, value) => {
        gameboard[index] = value
        render()
    }

    const getGameboard = () => gameboard;

    return {
        render,
        update,
        getGameboard
    }

})();

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            {
                name: document.querySelector('#player1').value,
                mark: "X"
            },
            {
                name: document.querySelector('#player2').value,
                mark: "O"
            }
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", handleClick)
        })
    }

    const handleClick = (event) => {
        if (gameOver) {
            return
        }
        let index = parseInt(event.target.id.split('-')[1])
        // gameboard = ["X","","","","","",""."",""]
        if (Gameboard.getGameboard()[index] !== "") // if index value is available then return or else continue
            return;

        Gameboard.update(index, players[currentPlayerIndex].mark)

        if (checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)) {
            gameOver = true;
            displayController.renderMessage(`${players[currentPlayerIndex].name} won!`)
        } else if (checkForTie(Gameboard.getGameboard())) {
            gameOver = true;
            displayController.renderMessage("It's a Tie!")
        }
        
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0

    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            Gameboard.update(i, "")
        }
        Gameboard.render();
        gameOver = false;
        document.querySelector("#message").innerHTML = "";
    }

    return {
        start,
        handleClick,
        restart
    }

})();

const checkForWin = (board) => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]]

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i]; // const [a,b,c] = [0, 1, 2];
        //board = ["X","","","","","",""."",""]
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

const checkForTie = (board) => {
    console.log(board.every);
    return board.every(cell => cell !== "")
}

const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener("click", () => {
    Game.restart()
})

// 1st execution of the script
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
})