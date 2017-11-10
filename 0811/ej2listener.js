//array con elementos, cuando hago click llamo
// a una funcion y lo agrego en la lista (li)

var letras=["a","b","c"];
var btnListar = document.getElementById('listar');
btnListar.addEventListener('click',cargar); 
//el primero es el evento el segundo es la funcion

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
function color() {
    btnListar.style.color="red"; 
    btnListar.style.height = "100px";
    btnListar.style.width = "100px";   
}
function colorout(){
    btnListar.style.color = "black"; 
    btnListar.style.height="40px";
    btnListar.style.width ="60px";

}