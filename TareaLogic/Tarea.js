/*Segundo ejercicio*/
/*var n;
if (n<0 && n>7){
	console.log("numero invalido");
}
else if (n==1){console.log ("lunes");}
else if (n==2){console.log ("martes");}
else if (n==3){console.log ("miercoles");}

/***/
/*if (n<0 && n>7){
	console.log("numero invalido");
}

if (n==1){console.log ("lunes");}
if (n==2){console.log ("martes");}

/********/

/*var y

switch(y){
	case 1 : console.log("lunes");break;
	case 2 : console.log("martes");break;
	default: console.log("numero invalido");break;
}
/* uso el switch cuando conozco los valores que 
puede tener */

/*var (mes)

switch(mes){
	case "abril":console.log("mes tiene 30");break;
	case "junio":console.log("mes tiene 30");break;
	case "septiembre":console.log("mes tiene 30");break;
	case "noviembre":console.log("mes tiene 30");break;
    case "febrero":console.log("mes tiene 28");break;
}*/

/*
no me funcionaaaaa
var mes=prompt("ingrese el mes");
switch(mes){
	case 1: alert("Enero");break;
	case 2: alert("Febrero");break;
	case 3: alert("Marzo");break;
	case 4: console.log("Abril");break;
	case 5: console.log("Mayo");break;
	case 6: console.log("Junio");break;
	case 7: console.log("Julio");break;
	case 8: console.log("Agosto");break;
	case 9: console.log("Septiembre");break;
	case 10: console.log("Octubre");break;
	case 11: console.log("Nobiembre");break;
	case 12: console.log("Diciembre");break;
	default:console.log("numero de mes invalido");break;
} */

/*var letra=prompt("ingrese letra");

switch (letra){
       case "a":
       case "A":alert("es una vocal");break;
       case "e":alert("es una vocal");break;
       case "E":alert("es una vocal");break;
       case "i":alert("es una vocal");break;
       case "I":alert("es una vocal");break;
       case "o":alert("es una vocal");break;
       case "O":alert("es una vocal");break;
       case "u":alert("es una vocal");break;
       case "U":alert("es una vocal");break;
       default:alert("no es una vocal");break;
}*/

/*ejercicio 7*/
var sueldo = 40000;
var ant;
/* ant >10 = 10%+
   ant<20 y ant > 5 7%+
   3 < ant < 5 5%+
   ant < 3 3%+ */

if (ant > 10){ 
	sueldo + sueldo + 0.1*sueldo;
}
else if(ant <= 10 && ant >5){
    sueldo = sueldo + 0.5*sueldo;
}
else if (ant <=5 && ant > 3){}
else{
	sueldo = sueldo + 0.3*sueldo;
} 