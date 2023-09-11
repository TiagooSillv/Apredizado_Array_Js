const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const buscadorDeLivros = livros.findIndex((livro)=>{
    return livro === nomeDoLivro;
});

const resultadoDabusca = buscadorDeLivros === -1 ? 'Não achei esse livro no estoque': `O livro que você quer esta na posição ${buscadorDeLivros}`;

console.log(resultadoDabusca);