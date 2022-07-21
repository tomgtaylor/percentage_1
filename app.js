`use strict`

function percentage_1() {
    let percent = document.getElementByID("percent").value;
    let num = document.getElementById("num").value;
    document.getElementByID("value1").value = (num/100)*percent;
}
function percentage_2() {
    let num1 = document.getElementByID("num1").value;
    let num2 = document.getElementByID("num2").value;
    document.getElementByID("value2").value = (num1*100)/num2+"%";
}

// percentage_1();
// percentage_2();