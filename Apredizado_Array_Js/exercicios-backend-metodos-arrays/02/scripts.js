const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
let tamanhoDeNomes = nomes.length
const tamanhoDoGrupo = 4;
let valorRemover = tamanhoDeNomes - tamanhoDoGrupo
let grupoExtra = [];

if (tamanhoDeNomes > tamanhoDoGrupo){
    
    grupoExtra = nomes.slice(tamanhoDoGrupo)
    nomes.splice(tamanhoDoGrupo,valorRemover)
  
            
}

console.log(grupoExtra)
console.log(nomes)