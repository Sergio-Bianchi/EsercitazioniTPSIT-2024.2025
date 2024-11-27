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
        this.sound = false
        this.themes = [
            "DEFAULT", "LATTE", "PEACH", "CHERRY"
        ]
        this.theme = 0;
    }

    addPoint(p) {
        this.players[p].points++;
    }


    selectPlayer(p) {
        this.playerSelected = p;

        let playerDivs = document.getElementsByClassName(`player-${p}`);

        try {
            for (let i = 0; i < 2; i++) {
                console.log(i)
                playerDivs[i].classList.add("underline");
            }

            if (p === 1) {
                playerDivs = document.getElementsByClassName("player-2")
            } else {
                playerDivs = document.getElementsByClassName("player-1")

            }

            console.log(playerDivs)
            for (let i = 0; i < 2; i++) {
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
        winnerElement.innerText = this.getPlayerName(p + 1) + " wins!"
    }


    getPlayerName(p) {
        let output = document.getElementById(`player-${p}.name`).value

        if (!output) {
            output = this.players[p - 1].name;
        }
        return output
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
            try {
                tris.children[slot].removeAttribute("class")
            } catch (err) {
                console.log("Useless operation baka")
            }

        }
    }

    resetPoints() {
        this.players[0].points = 0;
        this.players[1].points = 0;
        this.updateScore();
    }

    resetNames() {
        let inputs = document.getElementsByClassName("playerEdit")
        for (let i in inputs) {
            try {
                inputs[i].value = ""
            } catch (err) {
                console.log("Name wasn't specified")
            }
        }
    }

    resetGame() {
        this.resetBoard();
        this.resetNames();
        this.resetPoints();
        this.playerSelected = 1;
    }

    toggleSound(ele) {
        if (this.sound) {
            ele.innerText = "SOUND OFF"
            this.sound = false
        } else {
            ele.innerText = "SOUND ON"
            this.sound = true
        }
    }



    /* * Cambia il tema selezionato */
    switchTheme(button) {

        /* * Prende tutti gli elementi nella pagina*/
        let elements = document.getElementsByTagName("*")

        /* * Se il tema è l'ultimo, torna all'inzio*/
        if (this.theme >= this.themes.length - 1) {
            this.theme = 0;

            /* * Prova a togliere la classe dell'ultimo tema da ogni elemento */
            for (let i in elements) {
                try {
                    elements[i].classList.remove(`theme-${this.themes.length - 1}`)
                    console.log("Removed theme-" + j);

                } catch (err) {
                    console.log("Class not found")
                }
            }

            /* * Imposta nel bottone di selezione del tema il default, ed esci dalla funzione*/
            button.innerText = "THEME: " + this.themes[this.theme];
            return;


        } else {
            this.theme++

            /* * Per ogni elemento, prova a rimuovere la classe del tema precedente*/
            for (let i in elements) {
                try {
                    elements[i].classList.remove(`theme-${this.theme - 1}`)
                } catch (err) {
                    console.log("Class not found")
                }
            }
        }

        /* * Modifica il testo nel campo di selezione del tema*/
        button.innerText = "THEME: " + this.themes[this.theme];

        /* * Aggiunge il tema selezionato ad ogni elemento nella pagina*/
        for (let i in elements) {
            elements[i].classList.add(`theme-${this.theme}`)
        }
    }

    setName(p) {
    }


}


let game = new Game()


function addCross(ele, index) {
    let win = 0;

    if (ele.classList.contains("selected")) {
        return;
    }

    game.board[index] = game.playerSelected;
    console.log(game.board)

    if (game.playerSelected === 1) {

        if (game.sound) {
            let audio = new Audio("JS/player-1.mp3");
            audio.play();
        }

        ele.classList.add("greenElement", "selected")
        game.selectPlayer(2)


    } else if (game.playerSelected === 2) {

        if (game.sound) {
            let audio = new Audio("JS/player-2.mp3");
            audio.play();
        }

        ele.classList.add("redElement", "selected")
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