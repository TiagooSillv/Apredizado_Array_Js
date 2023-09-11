const frutas = ["côco", "UVA", "abacaxi", "banaNA", "MAçã"];

const organizadorDeNomes = frutas.map((fruta, index) => {
    const palavras = fruta.toLowerCase().split(' ');

    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1);
    }

    return `${palavras.join('')}${index}`;
});

console.log(organizadorDeNomes);
