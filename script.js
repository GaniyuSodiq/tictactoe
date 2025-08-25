function Cell() {
    let value = null

    let position = 0

    const getToken = () => value

    const getPosition = () => position

    const addToken = (player) => {
        value = player
    }

    const addPosition = (newPosition) => {
        position = newPosition
    }

    return { getToken, addToken, getPosition, addPosition }
}

function Gameboard() {
    const rows = 3
    const columns = 3
    const gameboard = []
    let positionAdder = 0

    for (let i = 0; i < rows; i++) {
        gameboard.push([])
        for (let j = 0; j < columns; j++) {
            gameboard[i].push(Cell())
            positionAdder++
            gameboard[i][j].addPosition(positionAdder)
        }
    }

    const displayBoard = gameboard.map(row => row.map(cell => cell.getPosition()))
    console.log(displayBoard)

    const dropToken = (token, pos) => {
        gameboard.forEach(row => {
            row.forEach(column => {
                if (column.getPosition() == pos) {
                    column.addToken(token)
                }
            })
        })
    }

    const printBoard = () => {
        const displayBoard = gameboard.map(row => row.map(cell => cell.getToken()))
        console.log(displayBoard)
    }

    return { printBoard, dropToken }
}

function getPlayers (playerOne = "Player One", playerTwo = "Player Two") {
    const player = [{name: playerOne, token: "X"}, {name: playerTwo, token: "O"}]
    return { player }
}

const Gamecontroller = {

}

const game = Gameboard()

game.dropToken("X", 3)

game.printBoard()

// getPlayers("Wale", "Jade")
console.log(getPlayers("Wale", "Jade").player[0].name)