## index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="btn" onclick="clearDisplay()">C</button>
            <button class="btn" onclick="appendCharacter('(')">(</button>
            <button class="btn" onclick="appendCharacter(')')">)</button>
            <button class="btn operator" onclick="appendCharacter('/')">÷</button>
            <button class="btn" onclick="appendCharacter('7')">7</button>
            <button class="btn" onclick="appendCharacter('8')">8</button>
            <button class="btn" onclick="appendCharacter('9')">9</button>
            <button class="btn operator" onclick="appendCharacter('*')">×</button>
            <button class="btn" onclick="appendCharacter('4')">4</button>
            <button class="btn" onclick="appendCharacter('5')">5</button>
            <button class="btn" onclick="appendCharacter('6')">6</button>
            <button class="btn operator" onclick="appendCharacter('-')">−</button>
            <button class="btn" onclick="appendCharacter('1')">1</button>
            <button class="btn" onclick="appendCharacter('2')">2</button>
            <button class="btn" onclick="appendCharacter('3')">3</button>
            <button class="btn operator" onclick="appendCharacter('+')">+</button>
            <button class="btn" onclick="appendCharacter('0')">0</button>
            <button class="btn" onclick="appendCharacter('.')">.</button>
            <button class="btn equal" onclick="calculateResult()">=</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

```
## styles.css
```
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #b92093;
    margin: 0;
    font-family: 'Arial', sans-serif;
}

.calculator {
    background-color: #333;
    width: 320px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 10px;
}

.display {
    background-color: #222;
    color: white;
    font-size: 2em;
    padding: 20px;
    text-align: right;
    border-radius: 10px;
    margin-bottom: 10px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

.btn {
    background-color: #444;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 20px;
    font-size: 1.5em;
    cursor: pointer;
}

.btn:hover {
    background-color: #555;
}

.operator {
    background-color: #37a193;
    color: white;
}

.operator:hover {
    background-color: #31a880;
}

.equal {
    background-color: #0e8cbe;
    color: white;
    grid-column: span 2;
}

.equal:hover {
    background-color: #ff5722;
}

```
## script.js
```
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

```
output
