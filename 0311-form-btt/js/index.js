
       function changeColor(otrocolor){
        var e = document.getElementById('test');
        e.style.color = otrocolor ;
     }
     // Formulario
function validar(){
var user = document.getElementById('user');
var pass = document.getElementById('pass');

if (user.value == " " || pass.value.length == 0){
alert("ambos campos son obligatorios");
}
}