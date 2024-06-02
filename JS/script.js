AOS.init(); //Iniciando a biblioteca de animações com scroll do bootstrap

//Carrosel fases
const fases_btn = document.querySelectorAll('.fases_btn'); // const resposnavel por pegar todas as classes dos botoes do carrosel
const fases_setaR = document.getElementById('fases_setaR'); //const que pega a seta para a direita
const fases_setaL = document.getElementById('fases_setaL'); //const que pega a seta para a esquerda
const titulofase = document.getElementById('titulofase');

var numBtnActive = 0; //variavel que representa o numero do botao ativado

function veririficarBtn(){ //função que verifica o botao ativado
    for(let i=0; i<5; i++){ //estrutura de repetição
        let numfase = i + 1; 
        if(numBtnActive == i){
            titulofase.innerHTML = 'Fase ' + numfase; //altera o titulo da fase de acordo com o botao selecionado

            fases_btn.forEach(function(btn) { //comando que pega todos as classes de fases_btn
                btn.classList.remove('active'); // removendo as classes actives de todos os botoes
            });

            fases_btn[i].classList.add('active'); // adicionando a classe active a um botão especifico
        }
    }
}

fases_setaR.addEventListener('click', function(){ // evento ao clicar na seta para a direita
    numBtnActive++; //adiciona mais um a variavel responsavel por alterar o botão ativo
    if(numBtnActive > 4){ // atribui um limite máximo ao valor da variavel
        numBtnActive = 4;
    }
    veririficarBtn(); // chamando a função
});
fases_setaL.addEventListener('click', function(){ // evento ao clicar na seta para a esquerda
    numBtnActive--; // remove menos um da variavel responsavel por alterar o botão ativo
    if(numBtnActive < 0){ // atribui um limite minimo ao valor da variavel
        numBtnActive = 0;
    }
    veririficarBtn();
});