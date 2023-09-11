const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let nome = 'tiago'

function agendarPaciente (pacientes,nome){
    pacientes.push(nome);
    imprimirLista();
}
function atenderPaciente (pacientes){
    pacientes.shift();
    imprimirLista();
}
function cancelarAtendimento(pacientes,nome){
    pacientes.splice(pacientes.indexOf(nome),1);
    imprimirLista();
}

function imprimirLista(){
    pacientes.join();
    console.log(`${pacientes}`)
}

agendarPaciente(pacientes,nome)
atenderPaciente(pacientes);
cancelarAtendimento(pacientes,'Joana');