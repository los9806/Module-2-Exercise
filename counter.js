let count = 0;

let addElement = document.getElementById("add");
let subElement = document.getElementById("sub");
let numberElement = document.getElementById("number");

function addButton() {
    count++;
    numberElement.innerText = count;
}

function subButton() {
    count--;
    numberElement.innerText = count;
}

addElement.addEventListener("click", addButton);
subElement.addEventListener("click", subButton);
