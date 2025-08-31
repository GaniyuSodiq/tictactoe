const Tictactoe = (function () {

    const board = Gameboard()

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

    let activeP = switcher.switchPlayer().getActivePlayer()
    const getSwitchPlayer = () => activeP = switcher.switchPlayer().getActivePlayer()

    // CACHE DOM
    const container = document.querySelector("#container")
    // btns
    const box1 = container.querySelector("#column-one")
    const box2 = container.querySelector("#column-two")
    const box3 = container.querySelector("#column-three")
    const box4 = container.querySelector("#column-four")
    const box5 = container.querySelector("#column-five")
    const box6 = container.querySelector("#column-six")
    const box7 = container.querySelector("#column-seven")
    const box8 = container.querySelector("#column-eight")
    const box9 = container.querySelector("#column-nine")
    // statuses
    const playStatus = container.querySelector("#play-status")
    const roundStatus = container.querySelector("#round-status")
    // players score
    const player1 = container.querySelector("#player1-score-value")
    const player2 = container.querySelector("#player2-score-value")
    

    box1.addEventListener("click", () => {
        console.log("button 1 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 1)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })

        box2.addEventListener("click", () => {
        console.log("button 2 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 2)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })
    
        box3.addEventListener("click", () => {
        console.log("button 3 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 3)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })

        box7.addEventListener("click", () => {
        console.log("button 7 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 7)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })

        box7.addEventListener("click", () => {
        console.log("button 7 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 7)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })

        box7.addEventListener("click", () => {
        console.log("button 7 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 7)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })

        box7.addEventListener("click", () => {
        console.log("button 7 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 7)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })

        box7.addEventListener("click", () => {
        console.log("button 7 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 7)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })

        box7.addEventListener("click", () => {
        console.log("button 7 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 7)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })

        box7.addEventListener("click", () => {
        console.log("button 7 is pressed")
        if (box7.textContent === "") {
            box7.textContent = switcher.getActivePlayer().token
        }
        console.log(`😊 ${switcher.getActivePlayer().name} PLAYED INTO POSITION 7 WITH ${switcher.getActivePlayer().token}`)
        board.dropToken(switcher.getActivePlayer().token, 7)
        board.printBoard()
        switcher.switchPlayer()
        console.log(`                                           `)
        console.log(`🎭 NEXT PLAYER IS ${switcher.getActivePlayer().name}`)
        playStatus.textContent = `It's ${switcher.getActivePlayer().name}'s turn`
    })



    // CELL TO CONTROL THE CONTENT IN EACH BOX
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

        const wins = (playerName, playerToken) => {
            console.log(`🍾🎈🥂🎆 HURRAY HURRAY HURRAY 🍾🎈🥂🎆`)
            console.log(`🥇🥇🥇 ${playerName} WITH TOKEN: ${playerToken} IS THE WINNER 🥇🥇🥇`)
            printBoard()
            gameboard.forEach(row => {
                row.forEach(column => {
                    column.addToken(null)
                })
            })
            roundAdder++
            roundStatus.textContent = `Round ${roundAdder}`
            console.log(`                                           `)
            console.log(`📍📍📍 WE ARE NOW IN ROUND ${roundAdder} 📍📍📍`)
        }

        function dropToken(token, pos) {
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
                                // console.log(draw)
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

    function players(playerOne = "player One", playerTwo = "Player Two") {
        const player = [{ name: playerOne, token: "✖️" }, { name: playerTwo, token: "⭕" }]
        return { player }
    }

    function Gamecontroller() {
        //const board = Gameboard()
        // let activeP = switcher.switchPlayer().getActivePlayer()
        // const getSwitchPlayer = () => activeP = switcher.switchPlayer().getActivePlayer()

        const playRound = (position) => {
            console.log(`😊 ${activeP.name} PLAYED INTO POSITION ${position} WITH ${activeP.token}`)
            board.dropToken(activeP.token, position)
            board.printBoard()
            getSwitchPlayer()
            console.log(`                                           `)
            console.log(`🎭 NEXT PLAYER IS ${activeP.name}`)
        }

        return { playRound }
    }

    return { Gamecontroller }
    // const game = Gamecontroller()
})()


