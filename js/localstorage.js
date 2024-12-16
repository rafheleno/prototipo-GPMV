class LoteManager {
    constructor(storageKey = "padrao") {
        this.storageKey = storageKey; 
    }

    /* Salva o registro inteiro*/
    salvarRegistro(loteData) {
        const lotes = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        lotes.push(loteData);
        localStorage.setItem(this.storageKey, JSON.stringify(lotes));
        alert("Registro salvo com sucesso!");
    }

    /* Salva apenas os itens de bandejas em um lote específico*/
    salvarItens(index, bandejas) {
        const lotes = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        if (lotes[index]) {
            lotes[index].bandejas = bandejas;
            localStorage.setItem(this.storageKey, JSON.stringify(lotes));
            alert(`Itens salvos no lote ${index + 1}!`);
        } else {
            alert("Lote não encontrado.");
        }
    }

    /* Mostra os itens de bandejas de um lote específico*/
    mostrarItens(index) {
        const lotes = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        if (lotes[index]) {
            return lotes[index].bandejas || [];
        } else {
            alert("Lote não encontrado.");
            return [];
        }
    }

    // Carrega o registro inteiro
    carregarRegistro(index) {
        const lotes = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        if (lotes[index]) {
            return lotes[index];
        } else {
            alert("Lote não encontrado.");
            return null;
        }
    }

    carregarLote() {
        
        const lotes = JSON.parse(localStorage.getItem(this.storageKey)) || [];  
        return lotes;  
    }

    // Carrega um item específico das bandejas
    carregarItem(index, itemIndex) {
        const lotes = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        if (lotes[index] && lotes[index].bandejas && lotes[index].bandejas[itemIndex]) {
            return lotes[index].bandejas[itemIndex];
        } else {
            alert("Item não encontrado.");
            return null;
        }
    }

    // Apaga um registro completo
    apagarRegistro(index) {
        const lotes = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        if (lotes[index]) {
            lotes.splice(index, 1); // Remove o registro no índice especificado
            localStorage.setItem(this.storageKey, JSON.stringify(lotes));
            alert(`Registro ${index + 1} apagado com sucesso!`);
        } else {
            alert("Lote não encontrado.");
        }
    }

    // Apaga um item específico de bandejas em um lote
    apagarItem(loteIndex, itemIndex) {
        const lotes = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        if (lotes[loteIndex] && lotes[loteIndex].bandejas && lotes[loteIndex].bandejas[itemIndex]) {
            lotes[loteIndex].bandejas.splice(itemIndex, 1); // Remove o item específico
            localStorage.setItem(this.storageKey, JSON.stringify(lotes));
            alert(`Item ${itemIndex + 1} do lote ${loteIndex + 1} apagado com sucesso!`);
        } else {
            alert("Lote ou item não encontrado.");
        }
    }
}

function dataConverte(data) {
    
    const partesData = data.split('-');
    const ano = partesData[0];
    const mes = partesData[1];
    const dia = partesData[2];
  
    const retdata = dia + '/' + mes + '/' + ano;
  
    return retdata;
}


/*
    *************************************************
    *************************************************
    **** operaçoes CRUD com colaboradores
    *************************************************
    *************************************************
*/


function salvarColaborador() {
    // Coletar dados do formulário principal
    const nome = document.getElementById("colaborador-nome").value;
    const email = document.getElementById("colaborador-email").value;
    const funcao = document.getElementById("colaborador-funcao").value;
    const setor = document.getElementById("colaborador-setor").value;
    const horaInicio = document.getElementById("colaborador-horaInicio").value;
    const horaFim = document.getElementById("colaborador-horaFim").value;
    const senha = document.getElementById("colaborador-senha").value;

    // Coletar os plantões
    const plantoes = Array.from(document.querySelectorAll("#colaborador-plantoesContainer .plantao-form")).map(plantao => {
        const dataPlantao = plantao.querySelector(".colaborador-dataPlantao").value;
        const atividade = plantao.querySelector("select").value;

        // Validar se os campos do plantão estão preenchidos
        if (!dataPlantao || !atividade) {
            console.warn("Plantão com dados incompletos ignorado.");
            return null;
        }

        return {
            dataPlantao,
            atividade
        };
    }).filter(Boolean); // Remove plantões inválidos

    // Validar se os dados principais estão preenchidos
    if (!nome || !email || !funcao || !setor || !horaInicio || !horaFim) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    // Criar o objeto do colaborador
    const colaborador = {
        nome,
        email,
        funcao,
        setor,
        horaInicio,
        horaFim,
        senha,
        plantoes
    };

    // Converter para JSON
    const jsonString = JSON.stringify(colaborador, null, 2);

    // Exibir no console para verificar os dados
    console.log("Dados do Colaborador:", jsonString);

    // Salvar o colaborador usando uma classe de gerenciamento (se existir)
    const colaboradorManager = new LoteManager("colaboradores");
    colaboradorManager.salvarRegistro(colaborador);

    alert("Colaborador salvo com sucesso!");
}

function getallcolaborators(){

    var repository = document.getElementById('listacolaboradores');
    
    var getallldata = new LoteManager('colaboradores'); 
   
    let data = getallldata.carregarLote();
    console.log(data.length);
        data.forEach(item => {
      
            let neWdiv = document.createElement('div');
            neWdiv.innerHTML =  neWdiv.innerHTML + item.nome+" - "+item.funcao;
            repository.appendChild(neWdiv);
      
        });
}

function getallcolaboratorsFilter_listasel(chave,filtro){

    var repository = document.getElementById('listacolaboradores');
    
    var getallldata = new LoteManager('colaboradores'); 
   
    let data = getallldata.carregarLote();
    console.log(data.length);
        data.forEach(item => {
            if(item[chave]==filtro){
                let neWdiv = document.createElement('div');
                neWdiv.innerHTML =  neWdiv.innerHTML + "<input style='width: 1em; height: 1em;' type='checkbox' name='radiogroup' value='"+item.nome+"' checked>";
                neWdiv.innerHTML =  neWdiv.innerHTML + item.nome + "&nbsp;&nbsp;";
                neWdiv.innerHTML =  neWdiv.innerHTML + '<input type="number" class="qtdprod" style="width: 100px;height: 30px;border:1px solid black" value="1" min="1" max="5" >';
                repository.appendChild(neWdiv);
            }
        });
}

function getallcolaboratorsOption(id){

    var repository = document.getElementById(id);
    
    var getallldata = new LoteManager('colaboradores'); 
   
    let data = getallldata.carregarLote();
    console.log(data.length);
        data.forEach(item => {
      
            let newoption = document.createElement('option');
            newoption.value =  item.nome;
            newoption.textContent = item.nome
            repository.appendChild(newoption);
      
        });
}


/*
    *************************************************
    *************************************************
    **** operaçoes CRUD com ativos
    *************************************************
    *************************************************
*/


function salvarAtivo() {
    
    const nomeAtivo = document.getElementById("ativo-nomeAtivo").value;
    const tipoAtivo = document.getElementById("ativo-tipoAtivo").value;
    const responsavel = document.getElementById("ativo-responsavel").value;
    const dataAquisicao = document.getElementById("ativo-dataAquisicao").value;
    const descricao = document.getElementById("ativo-descricao").value;
    const fotoAtivoInput = document.getElementById("ativo-fotoAtivo");
    const fotoAtivo = fotoAtivoInput?.files[0]?.name || ""; 

    
    const camposEspecificos = {
        areaModulo: document.getElementById("ativo-areaModulo")?.value || "",
        capacidadeModulo: document.getElementById("ativo-capacidadeModulo")?.value || "",
        finalidadeModulo: document.getElementById("ativo-finalidadeModulo")?.value || "",
        placaVeiculo: document.getElementById("ativo-placaVeiculo")?.value || "",
        modeloVeiculo: document.getElementById("ativo-modeloVeiculo")?.value || "",
        anoVeiculo: document.getElementById("ativo-anoVeiculo")?.value || "",
        combustivelVeiculo: document.getElementById("ativo-combustivelVeiculo")?.value || "",
        kminicial: document.getElementById('ativo-kminicialVeiculo')?.value || "",
        capacidadeAgregado: document.getElementById("ativo-capacidadeAgregado")?.value || "",
        espacoDeposito: document.getElementById("ativo-espacoDeposito")?.value || "",
        estoqueDeposito: document.getElementById("ativo-depositoEstoque")?.value || ""
    };

    
    if (!nomeAtivo || !tipoAtivo || !dataAquisicao) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    // Criar o objeto do ativo
    const ativo = {
        nomeAtivo,
        tipoAtivo,
        responsavel,
        dataAquisicao,
        descricao,
        fotoAtivo,
        ...camposEspecificos 
    };

    
    const jsonString = JSON.stringify(ativo, null, 2);

    
    //console.log("Dados do Ativo:", jsonString);

    // Salvar o ativo usando uma classe de gerenciamento (se existir)
    const ativoManager = new LoteManager("ativos");
    ativoManager.salvarRegistro(ativo);

    //alert("Ativo salvo com sucesso!");

     /* // Fazer o upload da imagem para o servidor
     if (fotoAtivoInput.files.length > 0) {
        const formData = new FormData();
        formData.append("fotoAtivo", fotoAtivoInput.files[0]);

        fetch("/upload-endpoint", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro no upload da imagem.");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Upload concluído:", data);
            })
            .catch((error) => {
                console.error("Erro no upload:", error);
            });
    }*/

}


function getallativos(){

    var repository = document.getElementById('listaAtivos');
    
    var getallldata = new LoteManager('ativos'); 
   
    let data = getallldata.carregarLote();
    console.log(data.length);
        data.forEach(item => {
      
            let neWdiv = document.createElement('div');
            neWdiv.style.fontSize = '24px';
            neWdiv.style.display = "flex";
            neWdiv.style.flexDirection = 'row';
            neWdiv.style.flexWrap = 'nowrap';
            neWdiv.style.justifyContent = 'space-between';
            neWdiv.style.height = "60px";
            
            if(item.tipoAtivo=="modulo")
                neWdiv.innerHTML =  neWdiv.innerHTML + item.nomeAtivo+"->"+item.dadosEspecificos['finalidadeModulo'];
            else if(item.tipoAtivo=="veiculo")
                neWdiv.innerHTML =  neWdiv.innerHTML + item.nomeAtivo+"->"+item.dadosEspecificos['modeloVeiculo'];  
            else 
                neWdiv.innerHTML =  neWdiv.innerHTML + item.nomeAtivo+"->"+item.descricao;  
            if(item.fotoAtivo!="" || item.fotoAtivo!=null)
                neWdiv.innerHTML = neWdiv.innerHTML + '<img id="ativo-imagePreview" src="'+"imagem/"+item.fotoAtivo+'" alt="-----" class="imagemlist" > ';  //style=" width: 8%; height: 98%;margin-left:20px;"
            
            repository.appendChild(neWdiv);
      
        });
}

function getallAtivosOption(id){

    var repository = document.getElementById(id);
    
    var getallldata = new LoteManager('ativos'); 
   
    let data = getallldata.carregarLote();
    console.log(data.length);
        data.forEach(item => {
      
            let newoption = document.createElement('option');
            newoption.value =  item.nomeAtivo;
            newoption.textContent = item.nomeAtivo
            repository.appendChild(newoption);
      
        });
}




/*
    *************************************************
    *************************************************
    **** operaçoes CRUD com Lotes
    *************************************************
    *************************************************
*/


function salvarLote() {
    
    const dataCriacao = document.getElementById("dataCriacao").value;
    const idLote      = document.getElementById("idLote").value;
    const responsavel = document.getElementById("responsavel").value;
    const localizacao = document.getElementById("localizacao").value;
    const maximoItens = document.getElementById("maximo-itens").value;

    
    const bandejas = Array.from(document.querySelectorAll("#bandejas li")).map(item => item.textContent);

   // Transforma cada item em um objeto JSON
    const jsonArray = bandejas.map(item => {
      
            const regMatch = item.match(/Id: (\d+) Genetica:(\d+) Data de produção:(.+)/);
           
            if(!regMatch){
                alert("eero");
                return null;
            }

            const [_, id, genetica, dataProducao] = regMatch;

            return {
                id: parseInt(id, 10),
                genetica: parseInt(genetica, 10),
                dataProducao: dataProducao.trim()
            };
    }).filter(Boolean);


    const jsonString = JSON.stringify(jsonArray, null, 2);

    console.log(jsonString);

    const dadosdolote = {
        dataCriacao,
        idLote,
        responsavel,
        localizacao,
        maximoItens,
        bandejas
    };


    const mananger = new LoteManager("lotes");

    mananger.salvarRegistro(dadosdolote);

}

function getalllotes(){

    var repository = document.getElementById('listalllotes');
    
    var getallldata = new LoteManager('lotes'); 
   
    let data = getallldata.carregarLote();
    console.log(data.length);
        data.forEach(item => {
      
            let neWdiv = document.createElement('div');
            neWdiv.innerHTML =  neWdiv.innerHTML+dataConverte(item.dataCriacao )+";"+item.idLote+";"+item.localizacao;
            repository.appendChild(neWdiv);
      
        });

    getallcolaboratorsOption('responsavel')        
}


function getallLotesOption(id){

    var repository = document.getElementById(id);
    
    var getallldata = new LoteManager('lotes'); 
   
    let data = getallldata.carregarLote();
    console.log(data.length);
        data.forEach(item => {
      
            let newoption = document.createElement('option');
            newoption.value =  item.idLote;
            newoption.textContent = item.idLote
            repository.appendChild(newoption);
      
        });
}

/*
    *************************************************
    *************************************************
    **** operaçoes CRUD com tarefas
    *************************************************
    *************************************************
*/

function salvarTarefa() {
    // Captura os valores dos campos do formulário
    const tipoTarefa = document.getElementById("tarefa-tipo-tarefa").value;
    const vencimento = document.getElementById("tarefa-vencimento").value;
    const observacao = document.getElementById("tarefa-observacao").value;
    const prioridade = document.getElementById("tarefa-prioridade").value;
        
   
    lote = document.getElementById("tarefa-lote")?.value || "";
    equipamento = document.getElementById("tarefa-equipamento")?.value || "";
    localOrigem = document.getElementById("tarefa-local-origem")?.value || "";
    colaboradorOrigem = document.getElementById("tarefa-colaborador-origem")?.value || "";
    localDestino = document.getElementById("tarefa-local-destino")?.value || "";
    colaboradorDestino = document.getElementById("tarefa-colaborador-destino")?.value ||"";
    

    qtd = document.getElementById("tarefa-qtd")?.value || "";
    genetica = document.getElementById("tarefa-gen")?.value || "";
    origemMaterial = document.getElementById("tarefa-origemmaterial")?.value || "";
    

    // Estrutura os dados para o envio
    const dadosTarefa = {
        tipoTarefa,
        vencimento,
        observacao,
        prioridade,
        lote,
        qtd,
        genetica,
        origemMaterial,
        equipamento,
        localOrigem,
        colaboradorOrigem,
        colaboradorDestino,
        localDestino,
    };

    // Exemplo de como enviar os dados para um serviço ou processar os dados
    const jsonString = JSON.stringify(dadosTarefa, null, 2);

    console.log(jsonString); 
    const mananger = new LoteManager("tarefas");
    mananger.salvarRegistro(dadosTarefa);
}

function getalltarefa(){

    var repository = document.getElementById('listalltarefa');
    
    var getallldata = new LoteManager('tarefas'); 
   
    let data = getallldata.carregarLote();
    console.log(data.length);
        data.forEach(item => {
      
            let neWdiv = document.createElement('div');
            neWdiv.innerHTML =  neWdiv.innerHTML+dataConverte(item.dataCriacao )+";"+item.idLote+";"+item.localizacao;
            repository.appendChild(neWdiv);
      
        });

    getallcolaboratorsOption('responsavel')        
}

