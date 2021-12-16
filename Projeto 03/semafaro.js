const sema = document.getElementById('sema');
const buttons = document.getElementById('buttons');

//Variável para armazenar as cores
let corIndex = 0;

//Varaiável para receber o valor do ID do setInvertal. Variável usada para parar o automatico dentro da função.
let intervalID = null;

//Função para saber em qual botão o usuário clicou
//Armazendo a informação dentro do target.
const acoes = (event) => {
    //Colocando a função dentro do evento. Quando clicar em algum outro botão ele vai parar o automático. 
    pararcores();

    //console.log (event.target);
    turnOn[event.target.id]();
    //A função turnOn está puxando o evento de cada buttão e realizando a função
}

// Criado para ser chamado dentro da função trocar Cor. Ela verifica o ID da cor e troca as cores.
const proximoIndex = () => {
    if (corIndex < 2){
        corIndex++
    }else {
        corIndex = 0;
    }
}

const trocaCor = () => {
    const cores = ['red','yellow','green']
    const cor = cores[corIndex];
    turnOn[cor]();
    proximoIndex();
}

const pararcores = () => {
    clearInterval (intervalID);
}

const turnOn = {
    'red': () => sema.src = './img/vermelho.png',
    'yellow': () => sema.src = './img/amarelo.png',
    'green': () => sema.src = './img/verde.png',
    'automatic': () => intervalID =  setInterval(trocaCor, 500)
    //O SetIntervak, troca de cor acada 1S (1000 MILE SEGUNDOS)
}

buttons.addEventListener('click', acoes);

