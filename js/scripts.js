
    function login() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if (!email.includes('@')) {
        alert('Talves você tenha errado ou digitado o email, regidite por favor.');
        return;
      }
      if (!password) {
        alert('O campo senha não pode estar vazio.');
        return;
      }
      
      window.location.href = 'area_trabalho.html';
    }
  


function toggleID(idtarget){

    const targetId = document.getElementById(idtarget);

    if(!targetId.classList.contains('hidden')){
        targetId.classList.add('hidden');
    }else{
        targetId.classList.remove('hidden');
    }


}
function closeID(idtarget){

    const targetId = document.getElementById(idtarget);
    if(targetId) targetId.remove();

}

function scrollToTop(formid) {
    const form = document.getElementById(formid);
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

/*function tipoativo() {
   
    const tipoAtivo = document.getElementById('tipoAtivo');
    const dadosModulo = document.getElementById('dadosModulo');
    const dadosVeiculo = document.getElementById('dadosVeiculo');
    const dadosAgregado = document.getElementById('dadosAgregado');
    const dadosDeposito = document.getElementById('dadosDeposito');

    // Verifica se o select existe antes de adicionar os listeners
    if (tipoAtivo) {
        tipoAtivo.addEventListener('change', () => {
            const tipo = tipoAtivo.value;

            // Esconde todos os elementos inicialmente
            dadosModulo?.classList.add('hidden');
            dadosVeiculo?.classList.add('hidden');
            dadosAgregado?.classList.add('hidden');
            dadosDeposito?.classList.add('hidden');

            // Exibe apenas o elemento relacionado ao tipo selecionado
            if (tipo === 'modulo') {
                dadosModulo?.classList.remove('hidden');
            } else if (tipo === 'veiculo') {
                dadosVeiculo?.classList.remove('hidden');
            } else if (tipo === 'agregado') {
                dadosAgregado?.classList.remove('hidden');                
            } else if (tipo === 'deposito') {
                dadosDeposito?.classList.remove('hidden');
            }
        });
    }
}*/

function tipoTarefa(id){

    const TipoTarefa = document.getElementById(id);
    const SelectAllvalores = TipoTarefa.options; //captura todos os valores do select
    const Selectvalor = TipoTarefa.value; //captura o valor selecionado do select
  
    

    Array.from(SelectAllvalores).forEach(option => {
        
        if(option.value!=''){
            var allItems = document.querySelectorAll("." + option.value);
            allItems.forEach(item => item?.classList.add('hidden'));
        }

    });


   allItems = document.querySelectorAll("." + Selectvalor);
   allItems.forEach(item => item?.classList.remove('hidden'));



}

function addListas(idorigem,iddestino){

        getallcolaboratorsOption('colaborador-integrante')
    
        const origem = document.getElementById(idorigem);
        const destino = document.getElementById(iddestino);

        const newCode = document.createElement('li');
        newCode.innerHTML = origem.value;
        
        destino.appendChild(newCode);   

}

function startTask(taskName,initializeFunction) {
    const content = document.getElementById('modules-container');
    
        fetch('forms/'+taskName)
            .then(response => response.text())
            .then(html => {
                content.innerHTML += html;
                if(initializeFunction!=null){
                    initializeFunction();
                }
            });
    
    
            
}



function initializeSlidersAndForm() {
    const listContainer = document.getElementById('listContainer');
    const addRowButton = document.getElementById('addRow');
    const formMudas = document.getElementById('formMudas');

    const results = {
        mediaTamanho: document.getElementById('mediaTamanho'),
        mediaFolhas: document.getElementById('mediaFolhas'),
        mediaRusticidade: document.getElementById('mediaRusticidade'),
        mediaAspecto: document.getElementById('mediaRusticidade'),
    };

    const inputs = {
        tamanho: document.getElementById('tamanho'),
        folhas: document.getElementById('folhas'),
        rusticidade: document.getElementById('rusticidade'),
        aspecto: document.getElementById('aspecto')
    };

    const displays = {
        tamanho: document.getElementById('tamanhoValue'),
        folhas: document.getElementById('folhasValue'),
        rusticidade: document.getElementById('rusticidadeValue'),
        aspecto: document.getElementById('aspectoValue'),
    };

    // Verificar se os elementos existem antes de adicionar eventos
    if (inputs && displays) {
        Object.keys(inputs).forEach(key => {
            if (inputs[key]) {
                inputs[key].addEventListener('input', (event) => {
                    displays[key].textContent = event.target.value;
                });
            }
        });
    }

    // Adicionar nova linha à lista
    if (addRowButton && listContainer) {
        addRowButton.addEventListener('click', () => {
            const tamanhoValue = inputs.tamanho.value;
            const folhasValue = inputs.folhas.value;
            const rusticidadeValue = inputs.rusticidade.value;
            const aspectoValue = inputs.aspecto.value;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tamanhoValue} cm</td>
                <td>${folhasValue} folhas</td>
                <td>${rusticidadeValue} Rusticidade</td>
                <td>${aspectoValue} Aspecto</td>
            `;
            listContainer.appendChild(row);

            // Atualizar médias
            updateAverages(results, listContainer);
        });
    }
}


function updateAverages(results, listContainer) {
    const rows = listContainer.querySelectorAll('tr');
    const data = { tamanho: [], folhas: [], rusticidade: [], aspecto: [] };

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        data.tamanho.push(parseFloat(cells[0].textContent));
        data.folhas.push(parseFloat(cells[1].textContent));
        data.rusticidade.push(parseFloat(cells[2].textContent));
        data.aspecto.push(parseFloat(cells[3].textContent));
    });

    results.mediaTamanho.textContent = (
        data.tamanho.reduce((sum, val) => sum + val, 0) / data.tamanho.length || 0
    ).toFixed(2);
    results.mediaFolhas.textContent = (
        data.folhas.reduce((sum, val) => sum + val, 0) / data.folhas.length || 0
    ).toFixed(2);
    results.mediaRusticidade.textContent = (
        data.rusticidade.reduce((sum, val) => sum + val, 0) / data.rusticidade.length || 0
    ).toFixed(2);
}

function initializeColaboradoresForm() {

    getallcolaborators()

        

    // Referência ao contêiner de plantões
    const plantoesContainer = document.getElementById('plantoesContainer');
    const addPlantaoButton = document.getElementById('addPlantaoButton');
    const submitButton = document.getElementById('submitColaboradorForm');

    // Adicionar novo plantão
    addPlantaoButton.addEventListener('click', () => {
        const newPlantao = document.createElement('div');
        newPlantao.classList.add('plantao-form');
        newPlantao.innerHTML = `
            <label for="dataPlantao">Data do Plantão:</label>
            <input type="date" class="dataPlantao" required>
            
            <label for="setor">Setor</label>
            <select id="setor" name="setor" required>
            <option value="" disabled selected>Selecione o setor</option>                            
            <option value="plantio">Plantio</option>
            <option value="apoio">Apoio</option>
            <option value="distribuicao">Distribuição</option>
            <option value="irrigação">Irrigação</option>
            <option value="tratorista">Tratorista</option>
            <option value="operador">Operador de maquina</option>
            <option value="manejo1">Manejo - Abertura</option>
            <option value="manejo2">Manejo - Seleção</option>
            <option value="manejo3">Manejo - Expedição</option>
            <option value="estiva">Carregamento</option>
            </select>
            `;
        plantoesContainer.appendChild(newPlantao);
    });

   
}

function initializeAtivos(){

    getallativos()

    getallcolaboratorsOption('ativo-responsavel')

}

function initializeTarefas(){

    
    getallAtivosOption('tarefa-origemmaterial')
    getallAtivosOption('tarefa-equipamento')
    getallAtivosOption('tarefa-local-origem');
    getallAtivosOption('tarefa-local-destino');
    getallLotesOption('tarefa-lote')
    getallcolaboratorsOption('tarefa-colaborador-origem')
    getallcolaboratorsOption('tarefa-colaborador-destino')

}

function initializePlanproducoes(){
    iniciarDragAndDrop();
    getallcolaboratorsOption('producao-colaborador-origem')

}

function inicitializePlanPlantoes(){
    iniciarDragAndDrop();
    getallcolaboratorsOption('plantao-colaborador-origem')
}


/*

 qr code leitor

*/

// Função para carregar o script do QR Code e inicializar o leitor
function loadQRCodeScript() {
    // Carrega o script html5-qrcode.min.js
    const script = document.createElement('script');
    script.src = './js/html5-qrcode.min.js'; 
    script.onload = function() {
        initializeQRCodeScanner(); 
    document.head.appendChild(script);}
}

// Função para inicializar o scanner de QR Code
function initializeQRCodeScanner() {
    const qrCodeScanner = new Html5Qrcode("terminal-qr-reader"); // ID do elemento onde o scanner será exibido

   // const isMobile = /Mobi|Android/i.test(navigator.userAgent);
   // if (isMobile) {

        qrCodeScanner.start(
            { facingMode: "environment" }, // Usando a câmera traseira
            {
                fps: 20,    // Frames por segundo
                qrbox: 250  // Tamanho da caixa de QR Code
            },
            (decodedText, decodedResult) => {
                console.log(`QR Code decodificado: ${decodedText}`);
                
                // Exibe o conteúdo do QR Code na tela
                document.getElementById("terminal-qr-result").value = `bandeja: ${decodedText}`;

                // Para o scanner após a leitura
               /* qrCodeScanner.stop().then(() => {
                    console.log("Scanner encerrado");
                }).catch((err) => {
                    console.error("Erro ao parar o scanner", err);
                });*/
            },
            (errorMessage) => {
                console.log(`Erro ao decodificar QR: ${errorMessage}`);
            }
        ).catch((error) => {
            console.error(`Erro no scanner: ${error}`);
        });
   // } 
}

// Carrega o script ao carregar a página
document.addEventListener("DOMContentLoaded", loadQRCodeScript);



// Função para enviar notificações
function sendNotification(taskName) {
    // Verificar suporte a notificações
    if (!("Notification" in window)) {
        alert("Este navegador não suporta notificações.");
        return;
    }


    // Solicitar permissão, se necessário
    if (Notification.permission === "default") {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                alert("Notificações habilitadas!");
                showNotification(taskName);
            }else {
                alert("Permissão negada para notificações.");
            }
        });
    } else if (Notification.permission === "granted") {
        showNotification(taskName);
    }
}

// Mostrar a notificação
function showNotification(taskName) {
    const notification = new Notification("Nova tarefa adicionada!", {
        body: `A tarefa "${taskName}" foi adicionada à sua lista.`,
        icon: "/path/to/icon.png", // Caminho para o ícone (opcional)
    });

    // Ação ao clicar na notificação
    notification.onclick = () => {
        window.focus(); // Traz a aba para frente
        console.log(`Você clicou na notificação de: ${taskName}`);
    };
}


document.addEventListener("DOMContentLoaded", () => {

   
    //loadTasks();
});


function loadTasks(par1,filtro) {
 
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskBar = document.querySelector(".task-bar");
    
    if(par1!=undefined) {
        taskBar = document.getElementById(par1);
    }

        taskBar.innerHTML = ""; // Limpa a barra antes de renderizar

        tasks.forEach((task) => {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.onclick = () => removeTaskFromBar(task.name);
            taskElement.innerHTML = `
                <img src="${task.icon}" alt="${task.name}">
                <div>${task.tipo}</div>
                <div>${task.vecto}</div>
            `;
            if(filtro!=undefined){
               if(filtro==task.lote) taskBar.appendChild(taskElement);
            }else{
                taskBar.appendChild(taskElement);  
            }
            
        });
}

function addTaskToBar(name, par2, lote) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    //alert(name+"/"+lote);
    if(name!=null) tipo = document.getElementById(name).value;
    else tipo = "Transporte";
    if(par2!=null) vecto = document.getElementById(par2).value;
    else vecto = Date.now();
    if(lote!=null) lote = document.getElementById(lote).value;
    else vecto = "-1"
    name = 'tarefa-'+(tasks.length+1);
    
    if(tipo=="transporte")icon = 'https://cdn-icons-png.flaticon.com/512/2548/2548747.png';
    if(tipo=="plantio") icon ='https://cdn-icons-png.flaticon.com/512/17858/17858530.png';
    if(tipo=="manutencao") icon ='https://cdn-icons-png.flaticon.com/512/18359/18359286.png';

    tasks.push({ name, tipo,lote,vecto,icon });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    loadTasks(); // Atualiza a task-bar

    // Disparar a notificação ao adicionar uma nova tarefa
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
        // sendNotification(taskName);
    }
}

// Função para excluir um item da lista de tarefas no localStorage
function removeTaskFromBar(name) {
    // Recupera as tarefas do localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Filtra as tarefas removendo o item com o nome correspondente
    const updatedTasks = tasks.filter(task => task.name !== name);
    
    // Atualiza o localStorage com a nova lista de tarefas
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    
    // Atualiza a task-bar para refletir as mudanças
    loadTasks();
}


/* localStorage funçao  generica   */


function addStorage(blockName, fieldIds) {
    // Recupera ou inicializa o bloco como um array vazio
    const storageBlock = JSON.parse(localStorage.getItem(blockName)) || [];

    // Cria um objeto agregando os valores dos campos pelos IDs
    const newEntry = {};
    fieldIds.forEach(id => {
        
        const element = document.getElementById(id);
        if (element) {
            newEntry[id] = element.value; // Usa o ID como chave e o valor do campo
        } else {
            alert(`Campo com ID "${id}" não encontrado.`);
        }

    });
}

function getStorage(blockName, key, destinationId) {
    // Recupera o bloco do localStorage
    const storageBlock = JSON.parse(localStorage.getItem(blockName));
    if (storageBlock) {
        // Verifica se a chave existe no último item do bloco
        const value = storageBlock[storageBlock.length - 1][key];
        if (value !== undefined) {
            // Define o valor no elemento de destino
            const destinationElement = document.getElementById(destinationId);
            if (destinationElement) {
                destinationElement.textContent = value; // Define como texto
                alert(`Valor "${value}" definido no elemento com ID "${destinationId}".`);
            } else {
                alert(`Elemento de destino com ID "${destinationId}" não encontrado.`);
            }
        } else {
            alert(`Chave "${key}" não encontrada no bloco "${blockName}".`);
        }
    } else {
        alert(`Bloco "${blockName}" não encontrado no localStorage.`);
    }
}

function previewImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('ativo-imagePreview');
    const container = document.getElementById('ativo-previewContainer');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result; // Define o src da imagem como o conteúdo do arquivo
            preview.style.display = 'block'; // Exibe a imagem
        };
        reader.readAsDataURL(file); // Converte o arquivo em uma URL de dados
    } else {
        preview.src = '';
        preview.style.display = 'none'; // Esconde a imagem se nenhuma foto for selecionada
    }
}

function iniciarDragAndDrop() {
    document.querySelectorAll('.tarefamap').forEach(tarefaf => {
        
        tarefaf.addEventListener('dragstart', event => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
    });

    document.querySelectorAll('.dia').forEach(diaf => {
        
        diaf.addEventListener('dragover', event => {
            event.preventDefault(); 
        });

        diaf.addEventListener('drop', event => {
            event.preventDefault();
            const tarefaIds = event.dataTransfer.getData('text/plain');
            const tarefar = document.getElementById(tarefaIds);

            if (tarefar) {
                diaf.appendChild(tarefar);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', iniciarDragAndDrop);

/*




*/

function inicializeCalendario(){

    inicializarCalendario('.calendario-container');

    
    getallcolaboratorsFilter_listasel('setor','Plantio')
    iniciarDragAndDrop()

}

function inicializarCalendario(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error('O container especificado não foi encontrado.');
        return;
    }

    const calendarioGrid = container.querySelector('.calendario-grid');
    const mesAno = container.querySelector('#mes-ano');
    const prevMes = container.querySelector('#prev-mes');
    const nextMes = container.querySelector('#next-mes');

    let dataAtual = new Date(); // Data base para o calendário

    function renderizarCalendario() {
        const ano = dataAtual.getFullYear();
        const mes = dataAtual.getMonth();

        // Atualiza o título
        mesAno.textContent = `${dataAtual.toLocaleString('default', { month: 'long' })} ${ano}`;

        // Limpa o grid
        calendarioGrid.innerHTML = '';

        // Obtém o primeiro dia da semana e o número total de dias no mês
        const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
        const diasNoMes = new Date(ano, mes + 1, 0).getDate();

        // Preenche os dias vazios antes do primeiro dia
        for (let i = 0; i < primeiroDiaSemana; i++) {
            const renderdiv = document.createElement('div');
            renderdiv.classList.add('vazio');
            renderdiv.title="Impossivel atribuir tarefa";
            calendarioGrid.appendChild(renderdiv);
        }

        // Preenche os dias do mês
        for (let renderdia = 1; renderdia <= diasNoMes; renderdia++) {
            const renderdiv = document.createElement('div');
            renderdiv.textContent = renderdia;
            renderdiv.title="Duplo clique para atribuir tarefa";
            renderdiv.id = "dia"+renderdia;
            renderdiv.classList.add('dia');
            

            /* chama o mydialog e envia o id do dia */
            renderdiv.addEventListener('dblclick', (event) => {
                const renderdialog = document.getElementById('myDialog');
                if (renderdialog) {
                    // Passa o ID da div clicada para o diálogo
                    const dialogContent = document.getElementById('dialogContent');
                    if (dialogContent) {
                        dialogContent.textContent = dialogContent.textContent+ event.target.id;
                    }
                    if(dialogContent.textContent.indexOf('tarefa')==-1)
                        renderdialog.showModal();
                } else {
                    console.error('O elemento com ID "myDialog" não foi encontrado.');
                }
            });

            calendarioGrid.appendChild(renderdiv);

            // Marcar o dia atual
            if (
                renderdia === new Date().getDate() &&
                mes === new Date().getMonth() &&
                ano === new Date().getFullYear()
            ) {
                renderdiv.classList.add('hoje');
            }
        }
    }

    // Eventos para mudar o mês
    prevMes.addEventListener('click', () => {
        dataAtual.setMonth(dataAtual.getMonth() - 1);
        renderizarCalendario();
    });

    nextMes.addEventListener('click', () => {
        dataAtual.setMonth(dataAtual.getMonth() + 1);
        renderizarCalendario();
    });

    // Renderiza o calendário inicial
    renderizarCalendario();
}

function divider(classe,idtotal){
    

    const itensdivider = Array.from(document.querySelectorAll(classe));
    
    const vlr_total = document.getElementById(idtotal);

    if(vlr_total.value){
        const divi = parseInt(vlr_total.value,10)/itensdivider.length;
       
        itensdivider.forEach(e=>{
            e.value = divi;
        })
    }



}

function addtarefaproducao(titulo,iddestino){

    //alert(iddestino);

    //getallcolaboratorsOption('colaborador-integrante')

    const destino = document.getElementById(iddestino);

    const newCode = document.createElement('div');
    newCode.classList.add('tarefamap');
    newCode.innerHTML = titulo;
    newCode.draggable = true;
    newCode.id = "tarefa"+ destino.querySelectorAll("*").length;

    
    destino.appendChild(newCode);   

}

// Inicializa o calendário no container especificado
document.addEventListener('DOMContentLoaded', function () {
    inicializarCalendario('.calendario-container');
});

