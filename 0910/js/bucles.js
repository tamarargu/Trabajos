var n=0;
var suma=0;
var prom=0;

/* for*/
if (n>0){
for (i=1;i<=n;i+1){
	suma=suma+i;
}
prom=suma/n;
}

/*while*/
var i=1;
var total=0;
while (i<50){
	total=total+1;
	i++;
}
prom=total/50;

/*factorial de N*/

var n=10;
var fact=1;
for(var i=1;i<=n;i++){
     fact=fact*i;
}

console.log(fact)

/*array*/

var semana=[50,35,105,40,25];
var total=0;
var prom=0;
var dias=["Lun","Mar","Mier","Jue","Vier"];

for (var i=0;i<semana.length;i++){
     console.log(semana[i]);
     total+=semana[i];
     if (semana[i]>50){
     	console.log(dias[i]+":"+semana[i]);
     }
}
console.log(total);
prom=total/semana.length





