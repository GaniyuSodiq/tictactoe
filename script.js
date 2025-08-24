function Cell() {
    let value = null

    let position = 0

    const getValue = () => value

    const getPosition = () => position

    const addToken = (player) => {
        value = player
    }

    const addPosition = (newPosition)=>{
        position = newPosition
    }

    return { getValue, addToken, getPosition, addPosition }
}

function Gameboard() {
    let rows = 3
    let columns = 3
    const gameboard = []
    let positionAdder = 0

    for (let i = 0; i < rows; i++) {
        gameboard.push([])
        for (let j = 0; j < columns; j++) {
            gameboard[i].push(Cell())
            positionAdder ++
            gameboard[i][j].addPosition(positionAdder)
        }
    }

    const dropToken = (token, pos) => {
        const positionToPlayInto = gameboard.filter(row => row.filter(cell => cell.getPosition() == pos))
        console.log(positionToPlayInto)

        gameboard[0][1].addToken(token)
    }

    const printBoard = ()=>{
        const displayBoard = gameboard.map(row => row.map(cell => cell.getPosition()))
        console.log(displayBoard)
    }

    return {gameboard, rows, printBoard, dropToken}
}

const Players = {

}

const Gamecontroller = {

}

const game = Gameboard()

console.log(game.printBoard())

console.log(game.dropToken("A", 3))