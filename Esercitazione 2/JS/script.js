class Player {
    constructor(name) {
        this.name = name.toString();
        this.points = 0;
    }
}


class Game {
    constructor() {
        this.playerSelected = 1;
        this.board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
        this.move = 0;
        this.players = [
            new Player("Player ONE"),
            new Player("Player TWO")
        ]
    }

    addPoint(p) {
        this.players[p].points++;
    }


    selectPlayer(p) {
        this.playerSelected = p;

        let playerDivs = document.getElementsByClassName(`player-${p}`);

        try {
            for(let i = 0; i < 2; i++) {
                console.log(i)
                playerDivs[i].classList.add("underline");
            }

            if(p === 1) {
                playerDivs = document.getElementsByClassName("player-2")
            }
            else {
                playerDivs = document.getElementsByClassName("player-1")

            }

            console.log(playerDivs)
            for(let i = 0; i < 2; i++) {
                playerDivs[i].classList.remove("underline")
            }
        } catch (err) {
            console.log(err)
        }


    }

    setWinner(p) {
        this.showModal();
        let winnerElement = document.getElementById("modalWinner")
        if (p === 2) {
            winnerElement.innerText = "Tie!"
            return;
        }

        this.addPoint(p)
        winnerElement.innerText = this.players[p].name + " wins!"
    }

    showModal() {
        let modalDiv = document.getElementById("modalBackground")
        modalDiv.classList.remove("hidden")
    }

    hideModal() {
        let modalDiv = document.getElementById("modalBackground")
        modalDiv.classList.add("hidden")
        game.resetBoard();
    }

    updateScore() {
        let scores = document.getElementsByClassName("playerScore");
        for (let i = 0; i < scores.length; i++) {
            scores[i].innerText = this.players[i].points;
        }
    }

    resetBoard() {
        this.move = 0;
        const tris = document.getElementById("tris");
        for (let slot in this.board) {
            this.board[slot] = -1;
        }
        for (let slot in tris.children) {
            tris.children[slot].removeAttribute("class")
        }
    }

    resetPoints() {
        this.players[0].points = 0;
        this.players[1].points = 0;
        this.updateScore();
    }

    resetNames() {
        this.players[0].name = "Player ONE"
        this.players[1].name = "Player TWO"
    }

    resetGame() {
        this.resetNames();
        this.resetPoints();
        this.resetBoard();
    }


}


let game = new Game()


function setName(p) {

}


function addCross(ele, index) {
    let win = 0;

    if (ele.classList.contains("selected")) {
        return;
    }

    game.board[index] = game.playerSelected;
    console.log(game.board)

    if (game.playerSelected === 1) {



        ele.classList.add("greenElement", "selected")
        let audio = new Audio("../IMG/player-1.wav");
        audio.play();
        game.selectPlayer(2)


    } else if (game.playerSelected === 2) {

        ele.classList.add("redElement", "selected")
        let audio = new Audio("../IMG/player-2.wav");
        audio.play();
        game.selectPlayer(1)
    }



    game.move++;

    for (let i = 0; i < 8; i += 3) {
        if (game.board[i] < 1) {
        } else if (game.board[i] === game.board[i + 1] && game.board[i] === game.board[i + 2]) {
            win = game.board[i]
        }
    }
    for (let i = 0; i < 3; i++) {
        if (game.board[i] < 1) {
        } else if (game.board[i] === game.board[i + 3] && game.board[i] === game.board[i + 6]) {
            win = game.board[i]
        }

    }
    if (game.board[0] > 0) {
        if (game.board[0] === game.board[4] && game.board[0] === game.board[8]) {
            win = game.board[0]
        }
    }
    if (game.board[6] > 0) {
        if (game.board[6] === game.board[4] && game.board[6] === game.board[2]) {
            win = game.board[6]
        }
    }

    if (win !== 0) {
        game.setWinner(win - 1);
        game.updateScore();
        return;
    }

    if (game.move === 9) {
        game.setWinner(2)
    }


}