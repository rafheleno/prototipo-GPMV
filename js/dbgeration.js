
/* 

    colaboradores

*/

function saveDataColaboradores(){
const colaboradores = [
    {
        "nome": "Ana Santos",
        "email": "ana.santos@viveiro.com",
        "funcao": "Ajudante de viveiro",
        "setor": "Distribuição",
        "horaInicio": "07:00",
        "horaFim": "15:30",
        "plantoes": [
            {
                "dataPlantao": "2024-04-12",
                "atividade": "Distribuição"
            },
            {
                "dataPlantao": "2024-07-19",
                "atividade": "Carregamento"
            }
        ]
    },
    {
        "nome": "Rafael Lima",
        "email": "rafael.lima@viveiro.com",
        "funcao": "Técnico agrícola",
        "setor": "Plantio",
        "horaInicio": "07:00",
        "horaFim": "16:48",
        "senha": "12345",
        "plantoes": [
            {
                "dataPlantao": "2024-01-23",
                "atividade": "Plantio"
            },
            {
                "dataPlantao": "2024-11-14",
                "atividade": "Irrigação"
            }
        ]
    },
    {
        "nome": "Carlos Oliveira",
        "email": "carlos.oliveira@viveiro.com",
        "funcao": "Tratorista",
        "setor": "Tratorista",
        "horaInicio": "07:00",
        "horaFim": "16:48",
        "senha": "12345",
        "plantoes": [
            {
                "dataPlantao": "2024-05-10",
                "atividade": "Tratorista"
            },
            {
                "dataPlantao": "2024-09-18",
                "atividade": "Carregamento"
            }
        ]
    },
    {
        "nome": "Mariana Costa",
        "email": "mariana.costa@viveiro.com",
        "funcao": "Operador de máquina",
        "setor": "Operador de máquina",
        "horaInicio": "07:00",
        "horaFim": "16:48",
        "senha": "12345",
        "plantoes": [
            {
                "dataPlantao": "2024-03-15",
                "atividade": "Operador de máquina"
            },
            {
                "dataPlantao": "2024-06-22",
                "atividade": "Distribuição"
            }
        ]
    },



    {
        "nome": "Clarice oliveira",
        "email": "Clarice.oliveira@viveiro.com",
        "funcao": "Ajudante de viveiro",
        "setor": "Plantio",
        "horaInicio": "07:00",
        "horaFim": "15:30",
        "plantoes": [
            {
                "dataPlantao": "2024-12-12",
                "atividade": "Distribuição"
            },
            {
                "dataPlantao": "2024-12-19",
                "atividade": "Carregamento"
            }
        ]
    },
    {
        "nome": "Romualda Morgato",
        "email": "romualda.morgato@viveiro.com",
        "funcao": "Ajudante de viveiro",
        "setor": "Plantio",
        "horaInicio": "07:00",
        "horaFim": "15:30",
        "plantoes": [
            {
                "dataPlantao": "2024-12-11",
                "atividade": "Distribuição"
            },
            {
                "dataPlantao": "2024-12-18",
                "atividade": "Carregamento"
            }
        ]
    },
    {
        "nome": "Gisele Coimbra",
        "email": "gisele.coimbra@viveiro.com",
        "funcao": "Ajudante de viveiro",
        "setor": "Plantio",
        "horaInicio": "07:00",
        "horaFim": "15:30",
        "plantoes": [
            {
                "dataPlantao": "2024-12-13",
                "atividade": "Distribuição"
            },
            {
                "dataPlantao": "2024-12-20",
                "atividade": "Carregamento"
            }
        ]
    }


];

salvarNoLocalStorage(colaboradores,'colaboradores');

}





/*


    ativos

*/

/* 
    Ativos
*/

function saveDataAtivos() {



    const ativos = [
        {
            "tipoAtivo": "modulo",
            "nomeAtivo": "Mini Jardim 1",
            "responsavel": "Romualda Morgato",
            "dataAquisicao": "2014-05-01",
            "descricao": "Módulo para cultivo de metrizes",
            "fotoAtivo": "",
            "dadosEspecificos": {
                "areaModulo": 5000,
                "capacidadeModulo": 2000,
                "finalidadeModulo": "produção"
            }
        },
        {
            "tipoAtivo": "modulo",
            "nomeAtivo": "Barracao de estaquia",
            "responsavel": "Carlos Oliveira",
            "dataAquisicao": "2014-05-01",
            "descricao": "Módulo para produção",
            "fotoAtivo": "",
            "dadosEspecificos": {
                "areaModulo": 200,
                "capacidadeModulo": 200,
                "finalidadeModulo": "produção"
            }
        },
        {
            "tipoAtivo": "modulo",
            "nomeAtivo": "Casa de vegetação",
            "responsavel": "Mariana Costa",
            "dataAquisicao": "2014-05-01",
            "descricao": "Módulo para enraizamento",
            "fotoAtivo": "",
            "dadosEspecificos": {
                "areaModulo": 200,
                "capacidadeModulo": 10000,
                "finalidadeModulo": "produção"
            }
        },
        {
            "tipoAtivo": "modulo",
            "nomeAtivo": "Modulo 1",
            "responsavel": "Carlos Oliveira",
            "dataAquisicao": "2014-05-01",
            "descricao": "Casa de sombra",
            "fotoAtivo": "",
            "dadosEspecificos": {
                "areaModulo": 200,
                "capacidadeModulo": 15000,
                "finalidadeModulo": "produção"
            }
        }, 



        
        {
            "tipoAtivo": "veiculo",
            "nomeAtivo": "Trator 001",
            "responsavel": "Rafael Lima",
            "dataAquisicao": "2012-05-12",
            "descricao": "Veículo de transporte",
            "fotoAtivo": "trator yanmar 1185r.jpg",
            "dadosEspecificos": {
                "placaVeiculo": "Isento",
                "modeloVeiculo": "Yanmar 1185",
                "anoVeiculo": 2011,
                "kminicial": "15000",
                "combustivelVeiculo": "Diesel"
            }
        },

        {
            "tipoAtivo": "reboque",
            "nomeAtivo": "Reboque Y",
            "responsavel": "Rafael Lima",
            "dataAquisicao": "2024-07-30",
            "descricao": "Reboque para carga pesada",
            "fotoAtivo": "",
            "dadosEspecificos": {
                " capacidadeAgregado": 100
            }
        },       
        {
            "tipoAtivo": "deposito",
            "nomeAtivo": "Depósito Z",
            "responsavel": "Ana Santos",
            "dataAquisicao": "2024-09-12",
            "descricao": "Depósito para materiais secos",
            "fotoAtivo": "",
            "dadosEspecificos": {
                "espacoDeposito": 500,
                "estoqueDeposito": "Secos"
            }
        }
    ];

    salvarNoLocalStorage(ativos,'ativos');
}



/*

    bandejas

*/


/* 
    Bandejas de Mudas
*/

function saveDataBandejas() {
    const bandejas = [
        {
            "codigo": "Bandeja001",
            "capacidade": 150,
            "cor": "Azul",
            "estado": "novo",
            "genetica": "Genética A",
            "tipoPlantio": "semeadura",
            "datacad": "2024-05-01",
            "lote": "Lote123",
            "localizacao": "Módulo 1",
            "posicao": "Região Norte",
            "estagioMaturidade": "80%"
        },
        {
            "codigo": "Bandeja002",
            "capacidade": 200,
            "cor": "Verde",
            "estado": "lotado",
            "genetica": "Genética B",
            "tipoPlantio": "estaqueamento",
            "datacad": "2024-06-15",
            "lote": "Lote124",
            "localizacao": "Módulo 2",
            "posicao": "Região Sul",
            "estagioMaturidade": "70%"
        }
    ];

    salvarNoLocalStorage(bandejas, 'bandejas');
}

/*

    bandejas

*/

/* 
    Lotes de Produção
*/

function salvardataLote() {
    const lotes = [
        {
            "dataCriacao": "2024-11-15",
            "idLote": "Lote001",
            "responsavel": "Fulano de Tal da Silva",
            "localizacao": "mod1",
            "maximoItens": 50,
            "bandejas": [
                { "id": 23453, "genetica": "6549", "dataProducao": "14/11/2024" },
                { "id": 23454, "genetica": "6549", "dataProducao": "14/11/2024" },
                { "id": 34567, "genetica": "6549", "dataProducao": "14/11/2024" }
            ],
            "tarefas": [
                { "atividade": "Transporte", "data": "2024-11-16" },
                { "atividade": "Irrigação", "data": "2024-11-18" }
            ]
        },
        {
            "dataCriacao": "2024-11-10",
            "idLote": "Lote002",
            "responsavel": "Sinclano Bajulador dos chefes",
            "localizacao": "mod2",
            "maximoItens": 40,
            "bandejas": [
                { "id": 12345, "genetica": "6549", "dataProducao": "14/11/2024" }
            ],
            "tarefas": [
                { "atividade": "Carregamento", "data": "2024-11-12" }
            ]
        }
    ];

    salvarNoLocalStorage(lotes, 'lotes');
}


function salvardatatarefa() {

    

    const tarefas = [
        {
            "tipoTarefa": "transporte",
            "identificacaoLote": "Lote001",
            "qtd": 50,
            "genetica": "6549",
            "origemMaterial": "mod1",
            "equipamento": "Trator Agrale 01",
            "localOrigem": "mod1",
            "localDestino": "mod2",
            "colaboradorOrigem": "Fulano de Tal da Silva",
            "colaboradorDestino": "Sinclano Bajulador",
            "prioridade": 3,
            "vencimento": "2024-11-18",
            "observacao": "Realizar transporte de bandejas do módulo 1 para o módulo 2."
        },
        {
            "tipoTarefa": "plantio",
            "identificacaoLote": "Lote002",
            "qtd": 100,
            "genetica": "1234",
            "origemMaterial": "mod2",
            "equipamento": null,
            "localOrigem": "mod2",
            "localDestino": "mod1",
            "colaboradorOrigem": "José Silva",
            "colaboradorDestino": "Maria Oliveira",
            "prioridade": 4,
            "vencimento": "2024-11-20",
            "observacao": "Plantio das unidades da genética 1234 no módulo 0."
        },
        {
            "tipoTarefa": "manutencao",
            "identificacaoLote": "Lote003",
            "qtd": 0,
            "genetica": null,
            "origemMaterial": null,
            "equipamento": "Trator Agrale 02",
            "localOrigem": "mod3",
            "localDestino": "mod4",
            "colaboradorOrigem": "Carlos Mendes",
            "colaboradorDestino": "Luana Souza",
            "prioridade": 2,
            "vencimento": "2024-11-22",
            "observacao": "Manutenção preventiva no trator Agrale 02 no módulo 3."
        },
        {
            "tipoTarefa": "transporte",
            "identificacaoLote": "Lote004",
            "qtd": 30,
            "genetica": "9876",
            "origemMaterial": "mod4",
            "equipamento": "Carreta transportadora 1",
            "localOrigem": "mod4",
            "localDestino": "mod2",
            "colaboradorOrigem": "Ana Costa",
            "colaboradorDestino": "João Almeida",
            "prioridade": 5,
            "vencimento": "2024-11-25",
            "observacao": "Transportar bandejas do módulo 3 para o módulo 2 com a carreta transportadora 1."
        }
    ];
    
    salvarNoLocalStorage(tarefas, 'tarefa');

}





function salvarNoLocalStorage(dbdata,nomedb) {
    localStorage.setItem(nomedb, JSON.stringify(dbdata, null, 2));
   // alert("Registros salvos no Local Storage!");
}
