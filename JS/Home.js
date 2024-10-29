CarroselFases();

function CarroselFases(){
    //Carrosel fases
    const fases_btn = document.querySelectorAll('.fases_btn'); // const responsavel por pegar todas as classes dos botoes do carrosel
    const fases_setaR = document.getElementById('fases_setaR'); //const que pega a seta para a direita
    const fases_setaL = document.getElementById('fases_setaL'); //const que pega a seta para a esquerda
    const titulofase = document.getElementById('titulofase');
    const bgFases = document.getElementById('fases');

    const textoFase = [ //Array com o título de cada fase
        'O Posto da Estrada',
        'O Mercado Abandonado',
        'Perseguição na Cidade',
        'Invasão à Base dos Punks',
        'A Batalha Final',
    ];

    let numBtnActive = 0; //variavel que representa o numero do botao ativado

    function veririficarBtn(){ //função que verifica o botao ativado
        for(let i=0; i<fases_btn.length; i++){ //estrutura de repetição
            let numfase = i + 1; 
            if(numBtnActive == i){
                titulofase.innerHTML = '<h2 class="subtitulos">Fase ' + numfase + ': <span> ' + textoFase[i] + '</span></h2>'; //altera o titulo da fase de acordo com o botao selecionado
                bgFases.style.backgroundImage = 'url(../IMG/Img_fases/imgFase' + numfase + '.jpg)'; //altera o backgroundImage(imagem) da fase de acordo com o botao selecionado
    
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
}