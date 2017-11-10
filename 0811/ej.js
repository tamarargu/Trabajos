//array con elementos, cuando hago click llamo
// a una funcion y lo agrego en la lista (li)

var letras=["a","b","c"];

function cargar(){
    var lista = document.getElementById('lista');
    for(i=0; i <letras.length; i++){
        var li = document.createElement('li');
        li.textContent = letras[i];
        lista.appendChild(li);
    }
 
}

function limpiar(){
    var lista = document.getElementById("lista");
    var lis=document.getElementsByTagName('li');
    for(i=0;i<letras.length;i++){
        lista.removeChild(lis[0]);
        lista.removeChild(lis[i]);
    }

}