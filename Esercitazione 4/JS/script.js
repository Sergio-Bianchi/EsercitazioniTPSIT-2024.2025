const canva_it = document.getElementById("IT").getContext("2d")
const canva_fr = document.getElementById("FR").getContext("2d")
const canva_de = document.getElementById("DE").getContext("2d")
const canva_se = document.getElementById("SE").getContext("2d")
const canva_jp = document.getElementById("JP").getContext("2d")




canva_it.fillStyle = "green"
canva_it.fillRect(0, 0, 100, 180);
canva_it.fillStyle = "white"
canva_it.fillRect(100, 0, 100, 180);
canva_it.fillStyle = "red"
canva_it.fillRect(200, 0, 100, 180);


canva_fr.fillStyle = "blue"
canva_fr.fillRect(0, 0, 100, 180);
canva_fr.fillStyle = "white"
canva_fr.fillRect(100, 0, 100, 180);
canva_fr.fillStyle = "red"
canva_fr.fillRect(200, 0, 100, 180);


canva_de.fillStyle = "black"
canva_de.fillRect(0, 0, 300, 60);
canva_de.fillStyle = "red"
canva_de.fillRect(0, 60, 300, 60);
canva_de.fillStyle = "yellow    "
canva_de.fillRect(0, 120, 300, 60);


canva_se.fillStyle = "blue"
canva_se.fillRect(0, 0, 300, 180);
canva_se.fillStyle = "yellow"
canva_se.fillRect(80, 0, 35, 180);
canva_se.fillRect(0, 75, 300, 35);



canva_jp.fillStyle = "white"
canva_jp.fillRect(0, 0, 300, 150);
canva_jp.fillStyle = "red"
canva_jp.beginPath()
canva_jp.arc(125, 75, 50, 0, Math.PI * 2);
canva_jp.fill()