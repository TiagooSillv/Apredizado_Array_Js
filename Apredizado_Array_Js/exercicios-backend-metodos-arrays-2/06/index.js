const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
const tamanhoPermitido = 8;

const verificadorDeCaracteres = cidades.filter((cidade)=>{
    return cidade.length <= tamanhoPermitido;
});
console.log(verificadorDeCaracteres.join(', '))