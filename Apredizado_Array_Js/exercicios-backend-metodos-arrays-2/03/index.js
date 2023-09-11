const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"];
let produtosProibido = ['vodka','cerveja']
const verificadorDeProdutos = palavras.some((produto)=>{

    for (const produtoProibido of produtosProibido) {
        return produto === produtoProibido;
    }
    
});

if(verificadorDeProdutos){
    console.log('revise sua lista, joão. possui bebida com venda proibida!');
}else{
    console.log('tudo certo, vamos as compras!');
}