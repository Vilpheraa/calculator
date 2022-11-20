let display = document.querySelector("#display");
let eqaulto = document.querySelector("#eqaul");
let buttons = document.querySelectorAll('button');


function displayOn(clickVal) {
    document.querySelector("#display")  
    .value += clickVal;
    return clickVal
}



function clearScreen() {
    display.value="";
}
// document.querySelectorAll("button").addEventListener("click", function () {
//     document.querySelector("#display")
//     value += clickVal
//     return clickVal
// });
function result() {
    display.value=eval(display.value)
}

// btnEl.addEventListener("click", toogleDarkMode);

