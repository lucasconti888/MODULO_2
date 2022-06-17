function confirmar() {
    t = document.getElementById('t').value;

    // aqui guarda em um array todos os dígitos inseridos no input:
    arr = t.split("");

    document.querySelector(".a").innerHTML = 
    
    arr.reduce((a, b) => parseInt(a) + parseInt(b), 0)

//  ABAIXO EU DEIXEI COMENTADA A MINHA TENTATIVA ANTES DE DESCOBRIR O MÉTODO "REDUCE"

    // for 
    //     (let i=0; i<arr.length; i++) {
    //         soma = parseInt(arr[0])+parseInt(arr[1])+parseInt(arr[2]);
    //         document.querySelector(".a").innerHTML = soma
    // }
    
}