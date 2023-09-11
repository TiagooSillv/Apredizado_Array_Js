const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
numeros.sort((primeiro,segundo)=>{
    return primeiro - segundo
});
numeros.sort((primeiro,segundo)=>{
    return segundo - primeiro;
});
numeros.sort();
console.log(numeros);


const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

    frutas.sort((primeiro,segundo)=>{
    return primeiro.localeCompare(segundo);
});


frutas.sort((primeiro,segundo)=>{

    return primeiro.length - segundo.length;
});

frutas.sort((primeiro,segundo)=>{

    return segundo.length - primeiro.length;
});

console.log(frutas);
