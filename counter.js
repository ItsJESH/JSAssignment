let num;
num = 0;

let discon = document.getElementById("counter-display");

function inc(){
    num++;
    document.getElementById("counter-display").textContent = num;
}
function dec(){
    num--;
    document.getElementById("counter-display").textContent = num;
}
function res(){
    num = 0;
    document.getElementById("counter-display").textContent = num;
}