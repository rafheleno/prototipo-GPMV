function diaSemana(data){

    const hoje = new Date(data);

    
    const diasDaSemana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    
    return diasDaSemana[hoje.getDay()];

}

