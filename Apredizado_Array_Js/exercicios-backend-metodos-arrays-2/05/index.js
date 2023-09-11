const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

  const verificadorDeIdade = usuarios.filter((pessoa)=>{
    return pessoa.idade >= 18 && pessoa.idade <= 65;
  });

  const verificadorDeCnh = verificadorDeIdade.some((pessoa)=>{
    return pessoa.habilitado === false;
  });
  console.log(verificadorDeIdade);

  if (verificadorDeCnh){
    console.log('todos precisam estar habilitados');
  }else{
    console.log('todos passaram no teste');
  }