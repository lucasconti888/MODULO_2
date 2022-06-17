
function GenerateFibonacci(number){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }

function confirmar() {
    a = document.getElementById('a').value;
    var f = GenerateFibonacci(a);
    document.querySelector(".a").innerHTML = f;
    console.log(f);
} 