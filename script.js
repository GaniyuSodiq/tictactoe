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
    let positionAdder = 0
    let roundAdder = 1
    const gameboard = []

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

    const wins = (playerName, playerToken)=>{
        console.log(`                                           `)
        console.log(`🥇🥇🥇 ${playerName} WITH TOKEN: ${playerToken} IS THE WINNER 🥇🥇🥇`)
        gameboard.forEach(row => {
            row.forEach(column => {
                column.addToken(null)
            })
        })
        roundAdder++
        console.log(`                                           `)
        console.log(`📍📍📍 WE ARE NOW IN ROUND ${roundAdder} 📍📍📍`)
    }

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
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 2 && column.getToken() == token)) {
                                    r1++
                                    if (r1 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 3 && column.getToken() == token)) {
                                    r1++
                                    if (r1 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                // ROW 1 ENDS

                                // ROW 2 BEGINS
                                if ((column.getPosition() == 4 && column.getToken() == token)) {
                                    r2++
                                    if (r2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 5 && column.getToken() == token)) {
                                    r2++
                                    if (r2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 6 && column.getToken() == token)) {
                                    r2++
                                    if (r2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                // ROW 2 ENDS

                                // ROW 3 BEGINS
                                if ((column.getPosition() == 7 && column.getToken() == token)) {
                                    r3++
                                    if (r3 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 8 && column.getToken() == token)) {
                                    r3++
                                    if (r3 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 9 && column.getToken() == token)) {
                                    r3++
                                    if (r3 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                // ROW 3 ENDS

                                // COLUMN 1 BEGINS
                                if ((column.getPosition() == 1 && column.getToken() == token)) {
                                    c1++
                                    if (c1 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 4 && column.getToken() == token)) {
                                    c1++
                                    if (c1 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 7 && column.getToken() == token)) {
                                    c1++
                                    if (c1 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                // COLUMN 1 ENDS

                                // COLUMN 2 BEGINS
                                if ((column.getPosition() == 2 && column.getToken() == token)) {
                                    c2++
                                    if (c2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 5 && column.getToken() == token)) {
                                    c2++
                                    if (c2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 8 && column.getToken() == token)) {
                                    c2++
                                    if (c2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                // COLUMN 2 ENDS

                                // COLUMN 3 BEGINS
                                if ((column.getPosition() == 3 && column.getToken() == token)) {
                                    c3++
                                    if (c3 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 6 && column.getToken() == token)) {
                                    c3++
                                    if (c3 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 9 && column.getToken() == token)) {
                                    c3++
                                    if (c3 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                // COLUMN 3 ENDS

                                // DIAGONAL 1 BEGINS
                                if ((column.getPosition() == 1 && column.getToken() == token)) {
                                    d1++
                                    if (d1 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 5 && column.getToken() == token)) {
                                    d1++
                                    if (d1 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 9 && column.getToken() == token)) {
                                    d1++
                                    if (d1 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                // DIAGONAL 1 ENDS

                                // DIAGONAL 2 BEGINS
                                if ((column.getPosition() == 3 && column.getToken() == token)) {
                                    d2++
                                    if (d2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 5 && column.getToken() == token)) {
                                    d2++
                                    if (d2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
                                    }
                                }
                                if ((column.getPosition() == 7 && column.getToken() == token)) {
                                    d2++
                                    if (d2 == 3) {
                                        wins(switcher.getActivePlayer().name, token)
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
                            if (draw == 0) {
                                console.log(`                                           `)
                                console.log(` 🫂🫂🫂 THIS ROUND IS A DRAW!!! 🫂🫂🫂`)
                            }
                        }()
                    } else {
                        console.log(`                                           `)
                        console.log(`✋ POSITION: ${pos} IS NOT EMPTY, PLAY INTO ANOTHER POSITION`)
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

function players(playerOne = "PLAYER ONE", playerTwo = "PLAYER TWO") {
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
        console.log(`                                           `)
        console.log(`${activeP.name} PLAYED ${position} WITH ${activeP.token}`)
        board.dropToken(activeP.token, position)
        board.printBoard()
        getSwitchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${activeP.name}`)
    }

    return { playRound }
}

const game = Gamecontroller()

// game.dropToken("X", 3)

// game.printBoard()

// const playrs = getPlayers("Wale", "Jade")
// console.log(playrs.player[0].name)