function confirmar() {
    t = document.getElementById('t').value;

    // aqui guarda em um array todos os dígitos inseridos no input:
    arr = t.split("");

    if (
    
        //aqui verifica se os parênteses e o traço foram inseridos corretamente:
        arr[0] % 2 == 0
        ) 
        
        {
            document.querySelector(".a").innerHTML = "O dígito da centena é par"
        }
        else {
            document.querySelector(".a").innerHTML = "O digito da centena é ímpar"
        }
    
}