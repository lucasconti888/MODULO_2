function confirmar() {
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;

    const arr = [a, b, c];

    const sorted = arr.sort((a, b)=>{
        return a.localeCompare(b);
    }
    );
    
    document.querySelector(".a").innerHTML = sorted;
    
}