function calc(e){
    var operacao = e.value;
    var n1=parseFloat(document.getElementById("1").value);
    var n2=parseFloat(document.getElementById("2").value);
    var calculo = eval(n1+operacao+n2);
 
    if(!isNaN(calculo)){
       alert(calculo);
    }
   
 }
 