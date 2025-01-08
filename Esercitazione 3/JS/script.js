/*
let tom = document.getElementsByClassName("tom-1")[0]


let cursor = document.createElement("div");

cursor.style.width = "10px"
cursor.style.height = "10px"
cursor.style.position = "fixed"
cursor.style.zIndex = "100"

document.body.append(cursor)

document.addEventListener('mousemove', moveCursor)

function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
}


tom.addEventListener('mouseover', addAlt)

function addAlt(e) {
    const alt = document.createElement("p")
    try {
        document.getElementById("HH").remove()
    } catch (error) {
        console.log("HH not found")
    }
    alt.innerText = "HH"
    alt.id = "HH"
    alt.style.color = "var(--Flamingo-HEX)"
    alt.style.position = "fixed"
    alt.style.zIndex = "110"
    let x = e.clientX;
    let y = e.clientY;
    alt.style.left = `${x}px`;
    alt.style.top = `${y}px`;

    document.body.append(alt)
}*/


function play(e) {
    const audio = new Audio(`./WAV/${e.classList[0]}.wav`);
    audio.play();
}