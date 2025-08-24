function Cell() {
    let value = 0

    const getValue = () => value

    const addToken = (player)=>{
        value = player
    }

    return {getValue, addToken}
}

const Gameboard = {
    gameboard: [],
}

const Players = {

}

const Gamecontroller = {

}