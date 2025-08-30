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
                        let r1 = 0; let r2 = 0; let r3 = 0;
                        let c1 = 0; let c2 = 0; let c3 = 0;
                        let d1 = 0; let d2 = 0;
                        gameboard.forEach(row => {
                            row.forEach(column => {
                                // ROW 1 BEGINS
                                if ((column.getPosition() == 1 && column.getToken() == token)) {
                                    r1++
                                    if (r1 == 3) {
                                        console.log(`${switcher.getActivePlayer().name} with Token: ${token} is the winner`)

                                    }
                                }
                                if ((column.getPosition() == 2 && column.getToken() == token)) {
                                    r1++
                                    if (r1 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 3 && column.getToken() == token)) {
                                    r1++
                                    if (r1 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                // ROW 1 ENDS

                                // ROW 2 BEGINS
                                if ((column.getPosition() == 4 && column.getToken() == token)) {
                                    r2++
                                    if (r2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 5 && column.getToken() == token)) {
                                    r2++
                                    if (r2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 6 && column.getToken() == token)) {
                                    r2++
                                    if (r2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                // ROW 2 ENDS

                                // ROW 3 BEGINS
                                if ((column.getPosition() == 7 && column.getToken() == token)) {
                                    r3++
                                    if (r3 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 8 && column.getToken() == token)) {
                                    r3++
                                    if (r3 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 9 && column.getToken() == token)) {
                                    r3++
                                    if (r3 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                // ROW 3 ENDS

                                // COLUMN 1 BEGINS
                                if ((column.getPosition() == 1 && column.getToken() == token)) {
                                    c1++
                                    if (c1 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 4 && column.getToken() == token)) {
                                    c1++
                                    if (c1 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 7 && column.getToken() == token)) {
                                    c1++
                                    if (c1 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                // COLUMN 1 ENDS

                                // COLUMN 2 BEGINS
                                if ((column.getPosition() == 2 && column.getToken() == token)) {
                                    c2++
                                    if (c2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 5 && column.getToken() == token)) {
                                    c2++
                                    if (c2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 8 && column.getToken() == token)) {
                                    c2++
                                    if (c2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                // COLUMN 2 ENDS

                                // COLUMN 3 BEGINS
                                if ((column.getPosition() == 3 && column.getToken() == token)) {
                                    c3++
                                    if (c3 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 6 && column.getToken() == token)) {
                                    c3++
                                    if (c3 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 9 && column.getToken() == token)) {
                                    c3++
                                    if (c3 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                // COLUMN 3 ENDS

                                // DIAGONAL 1 BEGINS
                                if ((column.getPosition() == 1 && column.getToken() == token)) {
                                    d1++
                                    if (d1 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 5 && column.getToken() == token)) {
                                    d1++
                                    if (d1 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 9 && column.getToken() == token)) {
                                    d1++
                                    if (d1 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                // DIAGONAL 1 ENDS

                                // DIAGONAL 2 BEGINS
                                if ((column.getPosition() == 3 && column.getToken() == token)) {
                                    d2++
                                    if (d2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 5 && column.getToken() == token)) {
                                    d2++
                                    if (d2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                if ((column.getPosition() == 7 && column.getToken() == token)) {
                                    d2++
                                    if (d2 == 3) {
                                        console.log(`We have a winner: ${token} wins`)
                                    }
                                }
                                // DIAGONAL 2 ENDS

                                // DRAW

                            })
                        })
                        const drawer = function drawFinder() {
                            let draw = 0
                            gameboard.forEach(row => {
                                    row.forEach(column => {
                                        if (column.getToken() == null) {
                                            draw++
                                        }
                                    })
                            })
                            console.log(draw)
                            if(draw == 0){
                                console.log(`THIS ROUND IS A DRAW!!!`)
                            }
                        }()
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
    const getActivePlayer = () => activePlayer
    const switchPlayer = () => {
        activePlayer = activePlayer === getPlayers.player[0] ? getPlayers.player[1] : getPlayers.player[0]
        return { getActivePlayer }
    }
    return { switchPlayer, getActivePlayer }
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