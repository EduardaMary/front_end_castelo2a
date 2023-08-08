var nome = document.getElementById("imputNome");
var caloria = document.getElementById("calorias");
var lista = document.getElementById("lista");
var total = document.getElementById("total");

function adicionar(){
    var nomeAlimento = nome.ariaValue;
    var valorCaloria = parseInt(calorias.value);

    var li = document.createElement('li');
    li.innerHTML = `${nomeAlimento}: ${valorCaloria} cal`;

    lista.appendChild(li);

};