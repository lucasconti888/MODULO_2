function noturno() {
    c= document.getElementById('n').value * 100
    if (document.getElementById('n').value > 50) {
        document.querySelector(".p").innerHTML = c * 2/10;
    }
    else {
        document.querySelector(".p").innerHTML = c;
    }

}
function diurno() {
    c= document.getElementById('n').value * 200
    if (document.getElementById('n').value > 50) {
        document.querySelector(".p").innerHTML = c * 4/10;
    }
    else {
        document.querySelector(".p").innerHTML = c;
    }
}
// a variável c guarda o valor pago e as estruturas de controle
// definem o valor pago se for ou não aplicado o desconto. 