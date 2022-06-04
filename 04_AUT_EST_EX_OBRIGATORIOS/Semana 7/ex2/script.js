
function trocar() {
    b = document.getElementById('s').value
    // cria-se uma variável para armazenar o valor inicial inserido em "s"
    document.getElementById('s').value = document.getElementById('p').value;
    // realiza-se a troca, de forma com que o valor inicial de "s" deixa de existir em si
    document.getElementById('p').value = b;
    // como ele deixou de existir em si, é usada a variável criada, que guardou seu valor antes
    // da troca ser feita na linha 5 deste código
}

