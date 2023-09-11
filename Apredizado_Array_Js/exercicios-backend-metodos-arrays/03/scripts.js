const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;


function buscadorDeCarro(listaDeCarros, localParaRemover){
    let carrosAchados = listaDeCarros.slice(localParaRemover,localParaRemover * 2)
    console.log(carrosAchados);
}

buscadorDeCarro(nomes,posicao)