/*var numeros = [1,2,3,4,5,7];
var numerosMultiplicados = numeros.map (function (numero) {
    return numero * 2 ;
    
});

console.log ("Array original: " + numeros);
console.log("array x 2: "+ numerosMultiplicados);*/
 // array hasta 1000


 var lista = [];
  for (i = 1; i <= 1000 ; i++){
      lista.push(i);

  }
 console.log(lista);

var listasun

var listasum = lista.map(function(numero){
      return numero + 10 ;
  });

  console.log(listasum);

var lista = ["a","b","c","d","e","f","g","h"];

var listaMay = lista.map(function(letra){
    return letra.toUpperCase();
    
});

console.log(listaMay);