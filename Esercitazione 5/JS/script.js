const canva_div = document.getElementById("DIV").getContext("2d")
const canva_arr = document.getElementById("ARR").getContext("2d")
const canva_lim = document.getElementById("LIM").getContext("2d")
const canva_att = document.getElementById("ATT").getContext("2d")
const canva_sal = document.getElementById("SAL").getContext("2d")
const canva_stp = document.getElementById("STP").getContext("2d")


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

/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/

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
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
/* ESPLODI OO*/
canva_lim.beginPath()
canva_lim.fillStyle = "black"
canva_lim.font = "120px Arial";
canva_lim.fillText("30", 85, 195)


canva_att.beginPath()

canva_att.moveTo(150, 30)
canva_att.lineTo(30, 270)
canva_att.lineTo(30, 270)

canva_att.lineTo(270, 270)
canva_att.lineTo(150, 30)
canva_att.fillStyle = "white"
canva_att.closePath()
canva_att.fill()


canva_att.beginPath()

canva_att.moveTo(150, 50)
canva_att.lineTo(50, 260)

canva_att.lineTo(250, 260)
canva_att.lineTo(150, 50)
canva_att.fillStyle = "red"
canva_att.closePath()
canva_att.fill()


canva_att.beginPath()

canva_att.moveTo(150, 90)
canva_att.lineTo(80, 242)
canva_att.lineTo(220, 242)
canva_att.lineTo(150, 90)
canva_att.fillStyle = "white"
canva_att.closePath()
canva_att.fill()

canva_att.fillStyle = "black"
canva_att.font = "140px Arial";
canva_att.fillText("!", 130, 230)


canva_sal.beginPath()

canva_sal.moveTo(150, 30)
canva_sal.lineTo(30, 270)
canva_sal.lineTo(30, 270)

canva_sal.lineTo(270, 270)
canva_sal.lineTo(150, 30)
canva_sal.fillStyle = "white"
canva_sal.closePath()
canva_sal.fill()


canva_sal.beginPath()

canva_sal.moveTo(150, 50)
canva_sal.lineTo(50, 260)

canva_sal.lineTo(250, 260)
canva_sal.lineTo(150, 50)
canva_sal.fillStyle = "red"
canva_sal.closePath()
canva_sal.fill()


canva_sal.beginPath()

canva_sal.moveTo(150, 90)
canva_sal.lineTo(80, 242)
canva_sal.lineTo(220, 242)
canva_sal.lineTo(150, 90)
canva_sal.fillStyle = "white"
canva_sal.closePath()
canva_sal.fill()

canva_sal.beginPath()
canva_sal.moveTo(85, 239)
canva_sal.lineTo(215, 239)
canva_sal.lineTo(108, 188)
canva_sal.lineTo(85, 239)
canva_sal.lineWidth = 1
canva_sal.fillStyle = "black"
canva_sal.closePath()
canva_sal.fill()

canva_sal.save();
canva_sal.translate(120, 190);
canva_sal.rotate(Math.PI / 6.8);

canva_sal.font = "35px Arial";
canva_sal.fillText("10%", 0, 0)
canva_sal.rotate(Math.PI / 10);
canva_sal.restore();

canva_sal.stroke()


canva_stp.beginPath();

octagon(canva_stp, 150, 150, 130)

canva_stp.closePath();
canva_stp.fillStyle = "white"
canva_stp.fill();


canva_stp.beginPath();
octagon(canva_stp, 150, 150, 120)
canva_stp.closePath();
canva_stp.fillStyle = "red"
canva_stp.fill();

canva_stp.fillStyle = "white"

canva_stp.font = "80px Arial";
canva_stp.fillText("STOP", 42.5, 180)


function octagon(e, centerX, centerY, radius) {
    for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 - Math.PI / 8;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        if (i === 0) {
            e.moveTo(x, y);
        } else {
            e.lineTo(x, y);
        }
    }
}

