// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluar la expresión usando math.js
        const result = math.evaluate(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
