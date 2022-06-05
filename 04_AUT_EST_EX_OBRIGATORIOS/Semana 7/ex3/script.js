function confirmar() {
    t = document.getElementById('t').value;

    // aqui guarda em um array todos os dígitos inseridos no input:
    arr = t.split("");
    
    if (
    
    //aqui verifica se os parênteses e o traço foram inseridos corretamente:
    arr[0] == '(' && arr[3] == ')' && arr[9] == '-' &&

    //aqui verifica se foram usados apenas números:
    !isNaN(arr[1]) &
    !isNaN(arr[2]) &
    !isNaN(arr[4]) &
    !isNaN(arr[5]) &
    !isNaN(arr[6]) &
    !isNaN(arr[7]) &
    !isNaN(arr[8]) &
    !isNaN(arr[10]) &
    !isNaN(arr[11]) &
    !isNaN(arr[12]) &
    !isNaN(arr[13]) 
    ) 
    
    {
        document.querySelector(".a").innerHTML = "Tudo certo!"
    }
    else {
        document.querySelector(".a").innerHTML = "Não foi isso que eu pedi :("
    }
}
