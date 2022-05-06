var g = 10
function clicar() {
    var v0 = document.getElementById("V").value;
    var valortempo = parseFloat(v0) / parseFloat(g);
    document.querySelector(".result").innerHTML = valortempo;
}

function clicar2() {
    var v0 = document.getElementById("V2").value;
    var hmax1 = (v0 ** 2);
    var hmax = parseFloat(hmax1) / 20;
    document.querySelector(".result2").innerHTML = hmax;
}