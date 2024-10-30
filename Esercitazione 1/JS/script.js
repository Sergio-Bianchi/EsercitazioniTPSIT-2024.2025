/* Array globali */
let nomi = [];
let altezze = [];


/* Funzione che si occupa di modificare il paragrafo di output*/
function editOutput() {
    const output = document.getElementById("output") // Prende l'elemento dal DOM

    /* Variabili varie che servono alla funzione */
    let text = "";
    let maxLenght = 0;
    let averageLenght = 0;

    /* Ciclo che scorre attraverso tutti gli elementi dell'array (grazie a nomi.lenght, si potrebbe utilizare
    * anche un arrow function) */
    for (let i = 0; i < nomi.length; i++) {

        /* Costruisce la riga da poi copiare nel paragrafo */
        text += nomi[i] + ": " + altezze[i] + "<br>";

        averageLenght += parseInt(altezze[i]); // somma tutte le altezze

        /* Trova il numero più alto (per la lunghezza del lato)*/
        if (parseInt(altezze[i]) > maxLenght) {
            maxLenght = parseInt(altezze[i]);
        }
    }

    /* Divide la somma di tutte le altezze per il numero di altezze*/
    averageLenght = averageLenght / nomi.length;
    /* Fa l'inner del testo nel paragrafo*/
    output.innerHTML = text;
    /* Cambia lo stile di altezza e larghezza del paragrafo*/
    output.style.height = maxLenght + "px";
    output.style.width = maxLenght + "px";

    /* Cambia colore al background del paragrafo (gli if sono abbastanza intuitivi)*/
    if (averageLenght < 165) output.style.backgroundColor = "red"
    else if (averageLenght < 175) output.style.backgroundColor = "#20A949"
    else output.style.backgroundColor = "rgb(109, 160, 175)"


}

/* Aggiunge la persona agli array e chiama la funzione "editOutput" */
function addName() {
    /* Prende i due valori dagli input */
    const currentName = document.getElementById("name").value;
    const currentHeight = document.getElementById("altezza").value


    /* Se il nome è vuoto o se l'altezza è minore di 1, resituisce errore */
    if (currentName === "" || currentHeight < 1 || currentHeight > 300) {
        alert("Dati non validi")
        return
    }

    /* Appare il modale*/
    document.getElementById("modal").classList.remove("hidden")


    /* Aggiunge i valori ai corrispettivi array */
    nomi.push(currentName);
    altezze.push(currentHeight);
    editOutput();

}

function closeModal() {
    const modal = document.getElementById("modal")
    modal.classList.add("hidden")
}

function resetStorage() {
    nomi = [];
    altezze = [];
}

