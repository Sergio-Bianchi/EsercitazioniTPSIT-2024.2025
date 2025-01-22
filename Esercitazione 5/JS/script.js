const canva_div = document.getElementById("DIV").getContext("2d")
const canva_arr = document.getElementById("ARR").getContext("2d")
const canva_lim = document.getElementById("LIM").getContext("2d")
const canva_att = document.getElementById("ATT").getContext("2d")


canva_div.beginPath()


canva_div.arc(150, 150, 100, 0, 2 * Math.PI)
canva_div.lineWidth = 1
canva_div.fillStyle = "blue"
canva_div.fill()
canva_div.stroke()

canva_div.beginPath()

canva_div.arc(150, 150, 100, 0, 2 * Math.PI)
canva_div.lineWidth = 20
canva_div.strokeStyle = "red"
canva_div.stroke()


canva_div.beginPath()

canva_div.moveTo(80, 80)
canva_div.lineTo(220, 220)
canva_div.stroke()


canva_div.beginPath()

canva_div.moveTo(80, 220)
canva_div.lineTo(220, 80)
canva_div.stroke()



canva_arr.beginPath()

canva_arr.arc(150, 150, 110, 0, 2 * Math.PI)
canva_arr.lineWidth = 1
canva_arr.fillStyle = "blue"
canva_arr.fill()

canva_arr.beginPath()

canva_arr.arc(150, 150, 110, 0, 2 * Math.PI)
canva_arr.lineWidth = 10
canva_arr.strokeStyle = "white"
canva_arr.stroke()

canva_arr.beginPath()


canva_arr.rect(80, 135, 80, 30)
canva_arr.fillStyle = "white"

canva_arr.fill()


canva_arr.beginPath()
canva_arr.lineWidth = 1

canva_arr.moveTo(160, 105)
canva_arr.lineTo(160, 195)
canva_arr.lineTo(220, 150)
canva_arr.lineTo(160, 105)
canva_arr.closePath()
canva_arr.fill()


canva_lim.beginPath()


canva_lim.arc(150, 150, 100, 0, 2 * Math.PI)
canva_lim.lineWidth = 1
canva_lim.fillStyle = "white"
canva_lim.fill()
canva_lim.stroke()

canva_lim.beginPath()

canva_lim.arc(150, 150, 100, 0, 2 * Math.PI)
canva_lim.lineWidth = 20
canva_lim.strokeStyle = "red"
canva_lim.stroke()

canva_lim.beginPath()
canva_lim.fillStyle = "black"
canva_lim.font = "120px Arial";
canva_lim.fillText("30", 85, 190)




canva_att.beginPath()

canva_att.moveTo(140, 40)
canva_att.lineTo(30, 270)
canva_att.lineTo(30, 270)
canva_att.bezierCurveTo(40, 270, 40, 290, 210, 140)

canva_att.lineTo(270, 270)
canva_att.lineTo(160, 40)


canva_att.lineWidth = 10
canva_att.stroke()




