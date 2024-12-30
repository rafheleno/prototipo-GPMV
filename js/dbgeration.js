
/* 

    colaboradores

*/

function saveDataColaboradores(){
const colaboradores = [
    {
        "nome"                      : "Ana Santos",
        "email"                     : "ana.santos@viveiro.com",
        "funcao"                    : "Ajudante de viveiro",
        "setor"                     : "Distribuição",
        "horaInicio"                : "07:00",
        "horaFim"                   : "15:30",
        "plantoes": [
            {
                "dataPlantao"       : "2024-12-12",
                "atividade"         : "Distribuição"
            },
            {
                "dataPlantao"       : "2024-12-19",
                "atividade"         : "Carregamento"
            }
        ]
    },
    {
        "nome"                      : "Rafael Lima",
        "email"                     : "rafael.lima@viveiro.com",
        "funcao"                    : "Técnico agrícola",
        "setor"                     : "Plantio",
        "horaInicio"                : "07:00",
        "horaFim"                   : "16:48",
        "senha"                     : "12345",
        "plantoes": [
            {
                "dataPlantao"       : "2024-12-23",
                "atividade"         : "Plantio"
            },
            {
                "dataPlantao"       : "2024-12-14",
                "atividade"         : "Irrigação"
            }
        ]
    },
    {
        "nome"                      : "Carlos Oliveira",
        "email"                     : "carlos.oliveira@viveiro.com",
        "funcao"                    : "Tratorista",
        "setor"                     : "Tratorista",
        "horaInicio"                : "07:00",
        "horaFim"                   : "16:48",
        "senha"                     : "12345",
        "plantoes": [
            {
                "dataPlantao"       : "2024-12-10",
                "atividade"         : "Tratorista"
            },
            {
                "dataPlantao"       : "2024-12-18",
                "atividade"         : "Carregamento"
            }
        ]
    },
    {
        "nome"                      : "Mariana Costa",
        "email"                     : "mariana.costa@viveiro.com",
        "funcao"                    : "Operador de máquina",
        "setor"                     : "Operador de máquina",
        "horaInicio"                : "07:00",
        "horaFim"                   : "16:48",
        "senha"                     : "12345",
        "plantoes": [
            {
                "dataPlantao"       : "2024-12-15",
                "atividade"         : "Operador de máquina"
            },
            {
                "dataPlantao"       : "2024-12-22",
                "atividade"         : "Distribuição"
            }
        ]
    },
    {
        "nome"                      : "José Braga",
        "email"                     : "JoséBraga@viveiro.com",
        "funcao"                    : "Ajudante de viveiro",
        "setor"                     : "Irrigacao",
        "horaInicio"                : "07:00",
        "horaFim"                   : "15:30",
        "plantoes": [
            {
                "dataPlantao"       : "2024-12-12",
                "atividade"         : "Distribuição"
            },
            {
                "dataPlantao"       : "2024-12-19",
                "atividade"         : "Carregamento"
            }
        ]
    },
    {
        "nome"                      : "Clarice oliveira",
        "email"                     : "Clarice.oliveira@viveiro.com",
        "funcao"                    : "Ajudante de viveiro",
        "setor"                     : "Plantio",
        "horaInicio"                : "07:00",
        "horaFim"                   : "15:30",
        "plantoes": [
            {
                "dataPlantao"       : "2024-12-12",
                "atividade"         : "Distribuição"
            },
            {
                "dataPlantao"       : "2024-12-19",
                "atividade"         : "Carregamento"
            }
        ]
    },

    {
        "nome"                      : "Romualda Morgato",
        "email"                     : "romualda.morgato@viveiro.com",
        "funcao"                    : "Ajudante de viveiro",
        "setor"                     : "Plantio",
        "horaInicio"                : "07:00",
        "horaFim"                   : "15:30",
        "plantoes": [
            {
                "dataPlantao"       : "2024-12-11",
                "atividade"         : "Distribuição"
            },
            {
                "dataPlantao"       : "2024-12-18",
                "atividade"         : "Carregamento"
            }
        ]
    },
    {
        "nome"                      : "Gisele Coimbra",
        "email"                     : "gisele.coimbra@viveiro.com",
        "funcao"                    : "Ajudante de viveiro",
        "setor"                     : "Plantio",
        "horaInicio"                : "07:00",
        "horaFim"                   : "15:30",
        "plantoes": [
            {
                "dataPlantao"       : "2024-12-13",
                "atividade"         : "Distribuição"
            },
            {
                "dataPlantao"       : "2024-12-20",
                "atividade"         : "Carregamento"
            }
        ]
    }


];

salvarNoLocalStorage(colaboradores,'colaboradores');

}


/* 
    Ativos
*/

function saveDataAtivos() {



    const ativos = [
        {
            "tipoAtivo"             : "modulo",
            "nomeAtivo"             : "Mini Jardim 1",
            "responsavel"           : "Romualda Morgato",
            "dataAquisicao"         : "2014-05-01",
            "descricao"             : "Módulo para cultivo de metrizes",
            "fotoAtivo"             : "",
            "dadosEspecificos": {
                "areaModulo"        : 5000,
                "capacidadeModulo"  : 2000,
                "finalidadeModulo"  : "produção",
                "placaVeiculo"      : "",
                "modeloVeiculo"     : "",
                "anoVeiculo"        : 0,
                "kminicial"         : "",
                "combustivelVeiculo": "",   
                "espacoDeposito"    : 0,
                "estoqueDeposito"   : "",
                "capacidadeAgregado": 0                                           
            }
        },
        {
            "tipoAtivo"             : "modulo",
            "nomeAtivo"             : "Barracao de estaquia",
            "responsavel"           : "Carlos Oliveira",
            "dataAquisicao"         : "2014-05-01",
            "descricao"             : "Módulo para produção",
            "fotoAtivo"             : "",
            "dadosEspecificos": {
                "areaModulo"        : 200,
                "capacidadeModulo"  : 200,
                "finalidadeModulo"  : "produção",
                "placaVeiculo"      : "",
                "modeloVeiculo"     : "",
                "anoVeiculo"        : 0,
                "kminicial"         : "",
                "combustivelVeiculo": "",   
                "espacoDeposito"    : 0,
                "estoqueDeposito"   : "",
                "capacidadeAgregado": 0                
            }
        },
        {
            "tipoAtivo"             : "modulo",
            "nomeAtivo"             : "Casa de vegetação",
            "responsavel"           : "Mariana Costa",
            "dataAquisicao"         : "2014-05-01",
            "descricao"             : "Módulo para enraizamento",
            "fotoAtivo"             : "",
            "dadosEspecificos": {
                "areaModulo": 200,
                "capacidadeModulo": 10000,
                "finalidadeModulo": "produção",
                "placaVeiculo"      : "",
                "modeloVeiculo"     : "",
                "anoVeiculo"        : 0,
                "kminicial"         : "",
                "combustivelVeiculo": "",   
                "espacoDeposito"    : 0,
                "estoqueDeposito"   : "",
                "capacidadeAgregado": 0               
            }
        },
        {
            "tipoAtivo"             : "modulo",
            "nomeAtivo"             : "Modulo 1 - Casa de Sombra",
            "responsavel"           : "Carlos Oliveira",
            "dataAquisicao"         : "2014-05-01",
            "descricao"             : "Casa de sombra",
            "fotoAtivo"             : "",
            "dadosEspecificos": {
                "areaModulo"        : 200,
                "capacidadeModulo"  : 15000,
                "finalidadeModulo"  : "produção",
                "placaVeiculo"      : "",
                "modeloVeiculo"     : "",
                "anoVeiculo"        : 0,
                "kminicial"         : "",
                "combustivelVeiculo": "",   
                "espacoDeposito"    : 0,
                "estoqueDeposito"   : "",
                "capacidadeAgregado": 0                
            }
        }, 
        {
            "tipoAtivo"             : "modulo",
            "nomeAtivo"             : "Modulo 2 - Rustificação",
            "responsavel"           : "Carlos Oliveira",
            "dataAquisicao"         : "2014-05-01",
            "descricao"             : "Modulo de rustificação",
            "fotoAtivo"             : "",
            "dadosEspecificos": {
                "areaModulo"        : 200,
                "capacidadeModulo"  : 30000,
                "finalidadeModulo"  : "produção",
                "placaVeiculo"      : "",
                "modeloVeiculo"     : "",
                "anoVeiculo"        : 0,
                "kminicial"         : "",
                "combustivelVeiculo": "",   
                "espacoDeposito"    : 0,
                "estoqueDeposito"   : "",
                "capacidadeAgregado": 0                
            }
        }, 
        {
            "tipoAtivo"             : "veiculo",
            "nomeAtivo"             : "Trator 001",
            "responsavel"           : "Carlos Oliveira",
            "dataAquisicao"         : "2012-05-12",
            "descricao"             : "Veículo de transporte",
            "fotoAtivo"             : "trator yanmar 1185r.jpg",
            "dadosEspecificos": {
                "areaModulo"        : 0,
                "capacidadeModulo"  : 0,
                "finalidadeModulo"  : "",
                "placaVeiculo"      : "Isento",
                "modeloVeiculo"     : "Yanmar 1185",
                "anoVeiculo"        : 2011,
                "kminicial"         : "15000",
                "combustivelVeiculo": "Diesel",
                "espacoDeposito"    : 0,
                "estoqueDeposito"   : "",
                "capacidadeAgregado": 0                
            }
        },
        {
            "tipoAtivo"             : "reboque",
            "nomeAtivo"             : "Reboque para bandejas",
            "responsavel"           : "Rafael Lima",
            "dataAquisicao"         : "2024-07-30",
            "descricao"             : "Reboque de prteleiras para bandejas",
            "fotoAtivo"             : "",
            "dadosEspecificos": {
                "areaModulo"        : 0,
                "capacidadeModulo"  : 0,
                "finalidadeModulo"  : "",
                "placaVeiculo"      : "",
                "modeloVeiculo"     : "",
                "anoVeiculo"        : 0,
                "kminicial"         : "",
                "combustivelVeiculo": "",
                "espacoDeposito"    : 0,
                "estoqueDeposito"   : "",                
                "capacidadeAgregado": 100
            }
        },
        {
            "tipoAtivo"             : "reboque",
            "nomeAtivo"             : "Reboque prancha",
            "responsavel"           : "Rafael Lima",
            "dataAquisicao"         : "2024-07-30",
            "descricao"             : "Reboque para cargas em geral",
            "fotoAtivo"             : "",
            "dadosEspecificos": {
                "areaModulo"        : 0,
                "capacidadeModulo"  : 0,
                "finalidadeModulo"  : "",
                "placaVeiculo"      : "",
                "modeloVeiculo"     : "",
                "anoVeiculo"        : 0,
                "kminicial"         : "",
                "combustivelVeiculo": "",
                "espacoDeposito"    : 0,
                "estoqueDeposito"   : "",                
                "capacidadeAgregado": 100
            }
        },         
              
        {
            "tipoAtivo"             : "deposito",
            "nomeAtivo"             : "Depósito Z",
            "responsavel"           : "Ana Santos",
            "dataAquisicao"         : "2024-09-12",
            "descricao"             : "Depósito para materiais secos",
            "fotoAtivo"             : "",
            "dadosEspecificos": {
                "areaModulo"        : 0,
                "capacidadeModulo"  : 0,
                "finalidadeModulo"  : "",
                "placaVeiculo"      : "",
                "modeloVeiculo"     : "",
                "anoVeiculo"        : 0,
                "kminicial"         : "",
                "combustivelVeiculo": "",
                "espacoDeposito"    : 500,
                "estoqueDeposito"   : "Secos",              
                "capacidadeAgregado": 100
            }
        }
    ];

    salvarNoLocalStorage(ativos,'ativos');
}



/* 
    Bandejas de Mudas
*/

function saveDataBandejas() {
    const bandejas = [
        {
            "codigo"                : "1000053",
            "capacidade"            : 150,
            "cor"                   : "Preto",
            "estado"                : "novo",
            "genetica"              : "xr-6549",
            "tipoPlantio"           : "semeadura",
            "datacad"               : "2024-05-01",
            "lote"                  : "0000000001",
            "localizacao"           : "Módulo 1",
            "latitude"              : "",
            "longitude"             : ""
            
        },
        {
            "codigo"                : "1000054",
            "capacidade"            : 150,
            "cor"                   : "Preto",
            "estado"                : "novo",
            "genetica"              : "xr-6549",
            "tipoPlantio"           : "estaqueamento",
            "datacad"               : "2024-06-15",
            "lote"                  : "0000000001",
            "localizacao"           : "Módulo 2",
            "latitude"              : "",
            "longitude"             : ""
            
        },
        {
            "codigo"                : "2000067",
            "capacidade"            : 150,
            "cor"                   : "Preto",
            "estado"                : "novo",
            "genetica"              : "xr-6549",
            "tipoPlantio"           : "estaqueamento",
            "datacad"               : "2024-06-15",
            "lote"                  : "0000000001",
            "localizacao"           : "Módulo 2",
            "latitude"              : "",
            "longitude"             : ""
            
        },    
        {
            "codigo"                : "3000088",
            "capacidade"            : 150,
            "cor"                   : "Preto",
            "estado"                : "novo",
            "genetica"              : "xr-6549",
            "tipoPlantio"           : "estaqueamento",
            "datacad"               : "2024-06-15",
            "lote"                  : "0000000001",
            "localizacao"           : "Módulo 2",
            "latitude"              : "",
            "longitude"             : ""
            
        },   
        {
            "codigo"                : "2000032",
            "capacidade"            : 150,
            "cor"                   : "Preto",
            "estado"                : "novo",
            "genetica"              : "xr-6549",
            "tipoPlantio"           : "estaqueamento",
            "datacad"               : "2024-06-15",
            "lote"                  : "0000000001",
            "localizacao"           : "Módulo 2",
            "latitude"              : "",
            "longitude"             : ""
            
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
            "dataCriacao"           : "2024-11-15",
            "idLote"                : "0000000001",
            "responsavel"           : "Ana Santos",
            "localizacao"           : "Barracao de estaquia",
            "maximoItens"           : 50,
            "bandejas": [
                { "id": "1000053", "genetica": "xr-6549", "dataProducao": "14/11/2024", "responsavel": "Gisele Coimbra" },
                { "id": "1000054", "genetica": "xr-6549", "dataProducao": "14/11/2024", "responsavel": "Romualda Morgato" },
                { "id": "2000067", "genetica": "xr-6549", "dataProducao": "14/11/2024", "responsavel": "Gisele Coimbra"},
                { "id": "3000088", "genetica": "xr-6549", "dataProducao": "14/11/2024", "responsavel": "Romualda Morgato"},
                { "id": "2000032", "genetica": "xr-6549", "dataProducao": "14/11/2024", "responsavel": "Gisele Coimbra"}
            ],
            "tarefas": [
                { "atividade": "Transporte", "data": "2024-11-16" },
                { "atividade": "Irrigação" , "data": "2024-11-18" }
            ]
        },

        {
            "dataCriacao"           : "2024-11-10",
            "idLote"                : "0000000002",
            "responsavel"           : "Ana Santos",
            "localizacao"           : "Modulo 1 - Casa de Sombra",
            "maximoItens"           : 40,
            "bandejas": [
                { "id": "2012345", "genetica": "SP-367", "dataProducao": "14/11/2024" }
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
            "tipoTarefa"            : "transporte",
            "identificacaoLote"     : "0000000001",
            "qtd"                   : 50,
            "genetica"              : "xr-6549",
            "origemMaterial"        : "Mini Jardim 1",
            "equipamentos"          : ["Trator 001","Reboque para bandejas"],
            "localOrigem"           : "Barracao de estaquia",
            "localDestino"          : "Casa de vegetação",
            "colaboradorOrigem"     : "Ana Santos",
            "colaboradorDestino"    : "Rafael Lima",
            "prioridade"            : 3,
            "vencimento"            : "2024-11-18",
            "observacao"            : "Realizar transporte de bandejas da estaquia para casa de vegetação."
        },
        {
            "tipoTarefa"            : "plantio",
            "identificacaoLote"     : "0000000002",
            "qtd"                   : 100,
            "genetica"              : "xr-6549",
            "origemMaterial"        : "Mini Jardim 1",
            "equipamentos"          : [null],
            "localOrigem"           : null,
            "localDestino"          : null,
            "colaboradorOrigem"     : "José Braga",
            "colaboradorDestino"    : "Maria Oliveira",
            "prioridade"            : 1,
            "vencimento"            : "2024-11-20",
            "observacao"            : "Plantio das unidades da genética xr-6549 no barracão de estaquia."
        },
        {
            "tipoTarefa"            : "plantio",
            "identificacaoLote"     : "0000000002",
            "qtd"                   : 100,
            "genetica"              : "xr-6549",
            "origemMaterial"        : "Mini Jardim 1",
            "equipamentos"          : [null],
            "localOrigem"           : null,
            "localDestino"          : null,
            "colaboradorOrigem"     : "José Braga",
            "colaboradorDestino"    : "Gisele Coimbra",
            "prioridade"            : 2,
            "vencimento"            : "2024-11-20",
            "observacao"            : ""
        },        
        {
            "tipoTarefa"            : "manutencao",
            "identificacaoLote"     : null,
            "qtd"                   : 0,
            "genetica"              : null,
            "origemMaterial"        : null,
            "equipamentos"          : ["Trator Agrale 01"],
            "localOrigem"           : null,
            "localDestino"          : null,
            "colaboradorOrigem"     : "Carlos Mendes",
            "colaboradorDestino"    : "Carlos Oliveira",
            "prioridade"            :  2,
            "vencimento"            : "2024-11-22",
            "observacao"            : "Manutenção preventiva no trator Agrale 02 no módulo 3."
        },
        {
            "tipoTarefa"            : "transporte",
            "identificacaoLote"     : "0000000002",
            "qtd"                   : 30,
            "genetica"              : "xr-6549",
            "origemMaterial"        : null,
            "equipamentos"          : ["Trator Agrale 01","Reboque para bandejas"],
            "localOrigem"           : "Casa de vegetação",
            "localDestino"          : "Modulo 1 - Casa de Sombra",
            "colaboradorOrigem"     : "Ana Costa",
            "colaboradorDestino"    : "João Almeida",
            "prioridade"            : 5,
            "vencimento"            : "2024-11-25",
            "observacao"            : "Transportar bandejas do módulo 3 para o módulo 2 com a carreta transportadora 1."
        },
        {
            "tipoTarefa"            : "espedicao",
            "identificacaoLote"     : "0000000001",
            "qtd"                   : 50,
            "genetica"              : null,
            "origemMaterial"        : null,
            "equipamentos"          : ["Trator 001","Reboque prancha"],
            "localOrigem"           : "Modulo 2 - Rustificação",
            "localDestino"          : null,
            "colaboradorOrigem"     : "Ana Santos",
            "colaboradorDestino"    : "Rafael Lima",
            "prioridade"            : 3,
            "vencimento"            : "2024-11-18",
            "observacao"            : "Realizar expedição de bandejas do módulo 2"
        },
        {
            "tipoTarefa"            : "carregamento",
            "identificacaoLote"     : null,
            "qtd"                   : 240,
            "genetica"              : "xr-6549",
            "origemMaterial"        : null,
            "equipamentos"          : ["Trator 001","Reboque prancha"],
            "localOrigem"           : "Modulo 2 - Rustificação",
            "localDestino"          : null,
            "colaboradorOrigem"     : "Ana Santos",
            "colaboradorDestino"    : "Rafael Lima",
            "prioridade"            : 3,
            "vencimento"            : "2024-11-18",
            "observacao"            : "Realizar expedição de bandejas do módulo 2"
        }



    ];
    
    salvarNoLocalStorage(tarefas, 'tarefa');

}



function salvarNoLocalStorage(dbdata,nomedb) {
    localStorage.setItem(nomedb, JSON.stringify(dbdata, null, 2));
   // alert("Registros salvos no Local Storage!");
}
