let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let del = document.getElementById("del");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let plus = document.getElementById("plus");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let minus = document.getElementById("minus");
let dot = document.getElementById("dot");
let zero = document.getElementById("zero");
let arrow = document.getElementById("arrow");
let x = document.getElementById("x");
let reset = document.getElementById("reset");
let equals = document.getElementById("eq");

let result = document.getElementById("result");
let counter = "";
let counter2 = "";
let operator = "";
let a = 0;
let b = 0;

reset.onclick = function() {
    result.innerText = " ";
    counter = "";
}

one.onclick = function() {
    counter = counter + "1";
    result.innerText = counter;
}

two.onclick = function() {
    counter = counter + "2";
    result.innerText = counter;
}

three.onclick = function() {
    counter = counter + "3";
    result.innerText = counter;
}

four.onclick = function() {
    counter = counter + "4";
    result.innerText = counter;
}

five.onclick = function() {
    counter =  counter + "5";
    result.innerText = counter;
}

six.onclick = function() {
    counter = counter + "6";
    result.innerText = counter;
}

seven.onclick = function() {
    counter = counter + "7";
    result.innerText = counter;
}

eight.onclick = function() {
    counter = counter + "8";
    result.innerText = counter;
}

nine.onclick = function() {
    counter = counter + "9";
    result.innerText = counter;
}

zero.onclick = function() {
    counter = counter + "0"
    result.innerText = counter;
}

dot.onclick = function() {
    counter = counter + ".";
    result.innerText = counter;
}

del.onclick = function() {
    console.log(counter.length);
    let x = counter.length;
    counter = counter.slice(0, x - 1);
    result.innerText = counter;
}

plus.onclick = function() {
    counter = Number(counter);
    a = counter;
    counter = "";
    operator = "+";
}

minus.onclick = function() {
    counter = Number(counter);
    a = counter;
    counter = ''; 
    operator = '-';
}

arrow.onclick = function() {
    counter = Number(counter);
    a = counter;
    counter = '';
    operator = '/';
}

x.onclick = function() {
    counter = Number(counter);
    a = counter;
    counter = '';
    operator = '*';
}

equals.onclick = function() {
    switch (operator) {
        case '+':
            b = Number(counter);
            counter = a + b;
            console.log("a " + a);
            console.log("b " + b);
            console.log(counter);
            result.innerText = counter;
            break;
        case '-':
            b = Number(counter);
            counter = a - b;
            result.innerText = counter;
            break;
        case '/':
            b = Number(counter);
            counter = a / b;
            result.innerText = counter;
            break;
        case '*':
            b = Number(counter);
            counter = a * b;
            result.innerText = counter;
            break;
    }
}
    

let style = document.getElementById("style");
let btn1 = document.getElementById("myRadio1");
let btn2 = document.getElementById("myRadio2");
let btn3 = document.getElementById("myRadio3");

btn1.onclick = function() {
    style.setAttribute("href", "style.css");
}

btn2.onclick = function() {
    style.setAttribute("href", "style2.css");
    console.log("style two");
}

btn3.onclick = function() {
    var sheet = "style3.css";
    style.setAttribute("href", sheet);
    console.log("style three");    
}