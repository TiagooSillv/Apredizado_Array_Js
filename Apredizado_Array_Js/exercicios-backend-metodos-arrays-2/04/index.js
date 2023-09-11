const numeros = [0, 122, 4, 6, 9, 8, 44];

const verificadorDeNumeros = numeros.some((numero)=>{
    return numero % 2 != 0;
});

if(verificadorDeNumeros){
    console.log('array inválido');
}else{
    console.log('array válido');
}