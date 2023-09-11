const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00222444, rua: "Rua Augusta" },
    { cep: 131656110, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];
  let cepParaBuscar = 00222444;

  const verificadorDeCep = enderecos.find((endereco)=>{
    return endereco.cep === cepParaBuscar;
  });

console.log(verificadorDeCep.rua);