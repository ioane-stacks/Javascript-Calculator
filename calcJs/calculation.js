var ValueBox = document.getElementById('valueBox');
var Result = 0;
var operatorCounter = false;
var dotCounter = false;
var hasDot = false;

function Numbers(number) {
    ValueBox.value += number;
    operatorCounter = true;
    dotCounter = true;
    if (hasDot == true) {
        dotCounter = false;
    }
}

function Operator(operator) {
    if (operatorCounter == true) {
        valueBox.value += " " + operator + " ";
        operatorCounter = false;
        dotCounter = false;
        hasDot = false;
    }
}

function Dot() {
    if (dotCounter == true) {
        ValueBox.value += '.';
        dotCounter = false;
        operatorCounter = false;
        hasDot = true;
    }
}

function Clear() {
    ValueBox.value = '';
    dotCounter = false;
    operatorCounter = false;
    hasDot = false;
}


function Calc() {
    if (!ValueBox.value) {
        ValueBox.innerHTML = "Result: " + 0;
    }
    else {
        Result = eval(ValueBox.value);
        // Answer.innerHTML = "Result: " + Result;

        var P = document.createElement('p');
        P.className = 'navbar-brand col-12';
        P.style.fontSize = "18px";
        P.innerHTML = "<strong>" + ValueBox.value + "</strong>" + " = " + Result;
        document.getElementById('newP').appendChild(P);
    }

}
