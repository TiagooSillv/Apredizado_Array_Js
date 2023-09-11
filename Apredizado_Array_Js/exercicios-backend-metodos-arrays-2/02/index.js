const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
const limiteDeLetras = 5;

const verificadorDePalavras = palavras.some((palavra)=>{
    return palavra.length > limiteDeLetras;
});

const verificadorDeLetras = verificadorDePalavras ? 'existe palavra inválida':'array validado';

console.log(verificadorDeLetras);