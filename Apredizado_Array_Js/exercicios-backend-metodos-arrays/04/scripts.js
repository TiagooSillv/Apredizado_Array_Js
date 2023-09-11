const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let pacienteAtendido = [];

function atendimento(pacientes,tipoDaColsulta,nome){
    if (tipoDaColsulta == 'agendar'){
        pacientes.push(nome);
        console.log(pacientes)
    }else if(tipoDaColsulta == 'atender'){
        pacientes.unshift(nome);
        console.log(pacientes)
        
    }
}
atendimento(pacientes,'atender','tiago')