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
                    if (column.getToken() == null) {
                        column.addToken(token)
                        // check for winner
                    } else {
                        console.log(`Position: ${pos} is not empty, play into another position`)
                        switcher.switchPlayer()
                    }
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

function players(playerOne = "Player One", playerTwo = "Player Two") {
    const player = [{ name: playerOne, token: "X" }, { name: playerTwo, token: "O" }]
    return { player }
}


const switcher = (function passPlayers() {
    const getPlayers = players()
    let activePlayer = getPlayers.player[1]
    const switchPlayer = () => {
        activePlayer = activePlayer === getPlayers.player[0] ? getPlayers.player[1] : getPlayers.player[0]
        const getActivePlayer = () => activePlayer
        return { getActivePlayer }
    }
    return { switchPlayer }
})()

//console.log(switcher.switchPlayer().getActivePlayer())
//console.log(switcher.switchPlayer().getActivePlayer())

function Gamecontroller() {
    const board = Gameboard()
    // const getPlayers = players()
    // let activePlayer = getPlayers.player[0]
    // const switchPlayer = () => {
    //     activePlayer = activePlayer === getPlayers.player[0] ? getPlayers.player[1] : getPlayers.player[0]
    // }
    let activeP = switcher.switchPlayer().getActivePlayer()
    const getSwitchPlayer = () => activeP = switcher.switchPlayer().getActivePlayer()

    const playRound = (position) => {
        console.log(`${activeP.name} played into ${position} with ${activeP.token}`)
        board.dropToken(activeP.token, position)
        board.printBoard()
        getSwitchPlayer()
        console.log(`Next player is ${activeP.name}`)
    }

    return { playRound }
}

const game = Gamecontroller()

// game.dropToken("X", 3)

// game.printBoard()

// const playrs = getPlayers("Wale", "Jade")
// console.log(playrs.player[0].name)