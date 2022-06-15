api = 'http://localhost:1324/';
var getDBResDiv = "#getDBResDiv";

function TestGETDB(){
    var url = "http://127.0.0.1:1324/formuser";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    for (let i=0; i<resposta.length; i++) {
        $(getDBResDiv).append(/*"<br /><br />" + */`<br>${resposta[i].Formacao}<br>`);

    }
   // $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
   
    

    //console.log(xhttp.responseText);
}


var user = {
insert() {
    var Formacao = document.getElementById("Formacao").value;
    if (Formacao) {
        // if (Formacao.trim() != '') {
            $.ajax({
                type: 'POST',
                url: api + 'forminsert',
                data: {Formacao: Formacao},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        // }

        window.onload()
    }
}
}
// update(userId, oldTitle) {
//     var title = prompt('Digite o novo nome:', oldTitle);
//     if (title) {
//         if (title.trim() != '') {
//             $.ajax({
//                 type: 'POST',
//                 url: api + '/userupdate',
//                 data: {title: title, userId: userId},
//             }).done(function () {
//                 users.list();
//             }).fail(function (msg) {
//                 //console.log('FAIL');
//             }).always(function (msg) {
//                 //console.log('ALWAYS');
//             });
//         }
//     }
// } 
//