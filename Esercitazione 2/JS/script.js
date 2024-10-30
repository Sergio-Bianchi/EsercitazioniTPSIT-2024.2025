let player = 1;
let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]

function setWinner(win) {


}



function addCross(ele, index) {

    if (ele.classList.contains("selected")) {
        return
    }

    board[index] = player;
    console.log(board)
    if (player === 1) {
        ele.classList.add("greenElement", "selected")
        player = 2
    } else if (player === 2) {
        ele.classList.add("redElement", "selected")
        player = 1
    }

    for (let i = 0; i < 8; i +=3) {
        if (board[i] < 1) {
        } else if (board[i] === board[i + 1] && board[i] === board[i + 2]) {
            alert(board[i])
        }
    }
    for (let i = 0; i < 3; i++) {
        if (board[i] < 1) {
        } else if (board[i] === board[i + 3] && board[i] === board[i + 6]) {
            alert(board[i])
        }

    }
    if (board[0] > 0 ) {
        if (board[0] === board[4] && board[0] === board[8]) alert(board[0])
    }
    if (board[6] > 0 ) {
        if (board[6] === board[4] && board[6] === board[2]) alert(board[6])
    }


}