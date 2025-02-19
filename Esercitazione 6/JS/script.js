const canvas = document.getElementById('functionCanvas');
const ctx = canvas.getContext('2d');

function validateInputs() {
    const xmin = parseFloat(document.getElementById('xmin').value);
    const xmax = parseFloat(document.getElementById('xmax').value);

    let isValid = true;

    if (xmax <= xmin) {
        document.getElementById('xError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('xError').style.display = 'none';
    }

    return isValid;
}

function loadExample(func) {
    document.getElementById('function').value = func;
    switch(func) {
        case 'tan(x)':
            document.getElementById('xmin').value = -1.51;
            document.getElementById('xmax').value = 1.5;
            break;
        case '1/x':
        case 'log(x)':
        case 'sqrt(x)':
            document.getElementById('xmin').value = -1;
            document.getElementById('xmax').value = 10;
            break;
        case 'exp(x)':
            document.getElementById('xmin').value = -5;
            document.getElementById('xmax').value = 5;
            break;
        case 'cos(x)':
            document.getElementById('xmin').value = -1;
            document.getElementById('xmax').value = 5;
            break;
        case 'sin(x)':
            document.getElementById('xmin').value = -1;
            document.getElementById('xmax').value = 5;
            break;
        case '1/x':
            document.getElementById('xmin').value = 0;
            document.getElementById('xmax').value = 5;
            break;
        default:
            document.getElementById('xmin').value = -5;
            document.getElementById('xmax').value = 5;
    }
    updateGraph();
}

function findYRange(f, xmin, xmax) {
    const steps = 1000;
    const dx = (xmax - xmin) / steps;
    let ymin = Infinity;
    let ymax = -Infinity;
    let lastY = null;
    const values = [];

    for (let i = 0; i <= steps; i++) {
        const x = xmin + i * dx;
        try {
            const y = f.evaluate({x: x});
            if (!isNaN(y) && isFinite(y)) {
                // Rileva se si interrompe, come si chiama più? Discontinuità? 
                if (lastY !== null && Math.abs(y - lastY) > Math.abs(lastY) * 10) {
                    continue;
                }
                values.push(y);
                lastY = y;
            }
        } catch (error) {
            continue;
        }
    }

    // Since non ricordo cosa faccia questa roba, grazie copilot 
    values.sort((a, b) => a - b);
    const q1 = values[Math.floor(values.length * 0.1)];
    const q9 = values[Math.floor(values.length * 0.9)];
    const iqr = q9 - q1;

    ymin = q1 - iqr * 0.5;
    ymax = q9 + iqr * 0.5;

    if (Math.abs(ymin) < Math.abs(ymax) * 0.1) ymin = Math.min(ymin, 0);
    if (Math.abs(ymax) < Math.abs(ymin) * 0.1) ymax = Math.max(ymax, 0);

    return [ymin, ymax];
}

function transformX(x, xmin, xmax) {
    return (x - xmin) / (xmax - xmin) * canvas.width;
}

function transformY(y, ymin, ymax) {
    return canvas.height - ((y - ymin) / (ymax - ymin) * canvas.height);
} 



/** Questa in realtà fa schifissimo, è orrenda, ma ci va bene così */
function drawGrid(xmin, xmax, ymin, ymax) {
    ctx.beginPath();
    ctx.strokeStyle = '#cdd6fe';
    ctx.lineWidth = 1;

    // Linee verticali
    for (let x = Math.floor(xmin); x <= Math.ceil(xmax); x++) {
        const canvasX = transformX(x, xmin, xmax);
        ctx.moveTo(canvasX, 0);
        ctx.lineTo(canvasX, canvas.height);
    }

    // Linee orizzontali
    for (let y = Math.floor(ymin); y <= Math.ceil(ymax); y++) {
        const canvasY = transformY(y, ymin, ymax);
        ctx.moveTo(0, canvasY);
        ctx.lineTo(canvas.width, canvasY);
    }

    ctx.stroke();
}

function drawAxes(xmin, xmax, ymin, ymax) {
    ctx.beginPath();
    ctx.strokeStyle = '#89b4fa';
    ctx.lineWidth = 3;

    // Asse X
    if (ymin <= 0 && ymax >= 0) {
        const y0 = transformY(0, ymin, ymax);
        ctx.moveTo(0, y0);
        ctx.lineTo(canvas.width, y0);
    }

    // Asse Y
    if (xmin <= 0 && xmax >= 0) {
        const x0 = transformX(0, xmin, xmax);
        ctx.moveTo(x0, 0);
        ctx.lineTo(x0, canvas.height);
    }

    ctx.stroke();
}

function drawFunction() {
    const xmin = parseFloat(document.getElementById('xmin').value);
    const xmax = parseFloat(document.getElementById('xmax').value);
    const functionString = document.getElementById('function').value;

    try {
        const f = math.compile(functionString);
        const [ymin, ymax] = findYRange(f, xmin, xmax);

        drawGrid(xmin, xmax, ymin, ymax);
        drawAxes(xmin, xmax, ymin, ymax);

        ctx.beginPath();
        ctx.strokeStyle = '#f38ba8';
        ctx.lineWidth = 3;

        const steps = 1000;
        const dx = (xmax - xmin) / steps;

        let isFirstPoint = true;
        let lastY = null;

        for (let i = 0; i <= steps; i++) {
            const x = xmin + i * dx;
            try {
                const y = f.evaluate({x: x});

                if (!isNaN(y) && isFinite(y) && Math.abs(y) < 1000) {
                    // Rileva discontinuità
                    if (lastY !== null && Math.abs(y - lastY) > Math.abs(lastY) * 10) {
                        isFirstPoint = true;
                        lastY = y;
                        continue;
                    }

                    const canvasX = transformX(x, xmin, xmax);
                    const canvasY = transformY(y, ymin, ymax);

                    if (isFirstPoint) {
                        ctx.moveTo(canvasX, canvasY);
                        isFirstPoint = false;
                    } else {
                        ctx.lineTo(canvasX, canvasY);
                    }

                    lastY = y;
                } else {
                    isFirstPoint = true;
                }
            } catch (error) {
                isFirstPoint = true;
                continue;
            }
        }

        ctx.stroke();
        document.getElementById('functionError').style.display = 'none';
    } catch (error) {
        document.getElementById('functionError').style.display = 'block';
    }
}

function updateGraph() {
    if (!validateInputs()) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFunction();
}

updateGraph();
