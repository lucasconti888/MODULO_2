var l = 0
function Confirmar() {
   l = document.getElementById("l").value;   
}

function somar() {
   l = parseInt(l) + parseInt(1);
   document.querySelector(".p").innerHTML = l;
}

function subtrair() {
    l = parseInt(l) - parseInt(1);
    document.querySelector(".p").innerHTML = l;
}