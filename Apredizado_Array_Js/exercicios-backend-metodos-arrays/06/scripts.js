let pet = 'Salsicha'
const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
    
]

function buscadorDeDono(usuarios,pet){
    for (let i = 0; i < usuarios.length; i++) {
        
        let posicaoDoDono = usuarios[i].pets.indexOf(pet);
        if(posicaoDoDono != - 1){
            console.log(`O dono(a) do ${pet} é o(a) ${usuarios[i].nome}`)
            break;
        }
        
    }
}
buscadorDeDono(usuarios,pet)