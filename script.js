const display = document.getElementById("display");

function press(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function invert() {
    try {
        const current = parseFloat(display.innerText);
        display.innerText = String(current * -1);
    } catch {
        display.innerText = "Error";
    }
}

function percent() {
    try {
        const current = parseFloat(display.innerText);
        display.innerText = String(current / 100);
    } catch {
        display.innerText = "Error";
    }
}

function calculate() {
    try {
        const result = eval(display.innerText);
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
}

function scientific(type) {
    let value = parseFloat(display.innerText);

    if (isNaN(value) && type !== "pi" && type !== "e") {
        display.innerText = "Error";
        return;
    }

    switch (type) {
        case "sin":
            display.innerText = Math.sin(value);
            break;
        case "cos":
            display.innerText = Math.cos(value);
            break;
        case "tan":
            display.innerText = Math.tan(value);
            break;
        case "sqrt":
            display.innerText = Math.sqrt(value);
            break;
        case "log":
            display.innerText = Math.log10(value);
            break;
        case "ln":
            display.innerText = Math.log(value);
            break;
        case "pow2":
            display.innerText = value ** 2;
            break;
        case "pow3":
            display.innerText = value ** 3;
            break;
        case "pi":
            display.innerText = Math.PI;
            break;
        case "e":
            display.innerText = Math.E;
            break;
        case "inv":
            display.innerText = 1 / value;
            break;
        case "fact":
            if (!Number.isInteger(value) || value < 0) {
                display.innerText = "Error";
                break;
            }
            let r = 1;
            for (let i = 1; i <= value; i++) r *= i;
            display.innerText = r;
            break;
    }
}