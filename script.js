const num1 = document.getElementById('num1');
const den1 = document.getElementById('den1');
const operation = document.getElementById('operation');
const num2 = document.getElementById('num2');
const den2 = document.getElementById('den2');
const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', calculate);

function calculate() {
    const n1 = parseInt(num1.value);
    const d1 = parseInt(den1.value);
    const op = operation.value;
    const n2 = parseInt(num2.value);
    const d2 = parseInt(den2.value);

    if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2)) {
        result.textContent = 'Please enter valid numbers';
        return;
    }

    if (d1 === 0 || d2 === 0) {
        result.textContent = 'Denominator cannot be zero';
        return;
    }

    let resultFraction;
    switch (op) {
        case '+':
            resultFraction = addFractions(n1, d1, n2, d2);
            break;
        case '-':
            resultFraction = subtractFractions(n1, d1, n2, d2);
            break;
        case '*':
            resultFraction = multiplyFractions(n1, d1, n2, d2);
            break;
        case '/':
            resultFraction = divideFractions(n1, d1, n2, d2);
            break;
    }

    resultFraction = simplify(resultFraction.num, resultFraction.den);
    if (resultFraction.den === 1) {
        result.textContent = resultFraction.num;
    } else {
        result.textContent = `${resultFraction.num}/${resultFraction.den}`;
    }
}

function addFractions(a, b, c, d) {
    return { num: a * d + c * b, den: b * d };
}

function subtractFractions(a, b, c, d) {
    return { num: a * d - c * b, den: b * d };
}

function multiplyFractions(a, b, c, d) {
    return { num: a * c, den: b * d };
}

function divideFractions(a, b, c, d) {
    return { num: a * d, den: b * c };
}

function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y !== 0) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function simplify(num, den) {
    const g = gcd(num, den);
    return { num: num / g, den: den / g };
}