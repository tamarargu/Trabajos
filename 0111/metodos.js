var planetas = ["mercurio",
                "venus",
                "marte",
                "tierra",
                "jupiter",
                "saturno",
                "urano",
                "neptuno",
                "pluton",];

/*console.log(planetas.push(["ofiuco","luna"]));
console.log(planetas);


var lunadestroyed = planetas[8].pop();
console.log("saco luna: ", lunadestroyed);
console.log(planetas);*/
// es para arrays y lo hacer POR CADA ELEMENTO
/*planetas.forEach(function(planeta){
    console.log(planeta);
});*/
//planetas.forEach(function(planeta,indice) {
    planetas.forEach((planeta,indice,Array)=>{
    console.log("el planeta es" , planeta, "y esta ubicado en ",indice);
    
});

