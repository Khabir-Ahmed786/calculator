function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
