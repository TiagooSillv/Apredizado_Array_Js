const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]


const maiorString = cidades.reduce((acumulador,valorAtual)=>{
    let maior = acumulador[0].length;

    if (acumulador.length > maior){
        maior = valorAtual;
    }
    return maior
});
console.log(maiorString);


