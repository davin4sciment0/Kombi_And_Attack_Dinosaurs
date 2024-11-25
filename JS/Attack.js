CarroselFases();

function CarroselFases(){
    //Carrosel fases
    const fases_btn = document.querySelectorAll('.fases_btn'); // const responsavel por pegar todas as classes dos botoes do carrosel
    const fases_setaR = document.getElementById('fases_setaR'); //const que pega a seta para a direita
    const fases_setaL = document.getElementById('fases_setaL'); //const que pega a seta para a esquerda
    const titulofase = document.getElementById('titulofase');
    const textofase = document.getElementById('textoFase');
    const bgFases = document.getElementById('fases');

    const textoTituloFase = [ //Array com o título de cada fase
        'O Posto da Estrada',
        'O Mercado Abandonado',
        'Perseguição na Cidade',
        'Invasão à Base dos Punks',
        'A Batalha Final',
    ];

    const descricaoFases = [ //Array com o descrição de cada fase
        'Jerônimo e Seu Zé iniciam sua jornada em um antigo posto de estrada, onde avistam uma Kombi danificada. Para colocá-la de volta na estrada, nosso Agroboy precisa encontrar peças específicas espalhadas pelo local. No entanto, o caminho não será fácil: membros da gangue CLT´s estão à espreita, prontos para causar problemas.',
        'Em busca de suprimentos essenciais, Jerônimo e Seu Zé chegam a um mercado abandonado, que guarda mais perigos do que aparenta. Enquanto exploram o local, encontram Mirela, uma jovem em apuros, determinados eles vão ajudá-la.',
        'A aventura esquenta quando Jerônimo, Seu Zé e Mirela descobrem que Enzo, namorado de Mirela, foi sequestrado por membros da CLT´s. Para salvá-lo, o grupo embarca em uma emocionante perseguição pelas ruas caóticas da cidade, enfrentando combates frenéticos enquanto manobram a Kombi para desestabilizar os veículos inimigos.',
        'Com o grupo agora unido e determinado, Jeronimo, Seu Zé, Mirela e Enzo partem para uma missão decisiva: invadir a base onde o líder dos CLT´s está escondido e tentar restaurar a paz, pelo menos por enquanto. Para alcançar o coração da fortaleza, eles precisam enfrentar os membros da gangue espalhados pela área, utilizando trabalho em equipe e estratégias para superar os desafios.',
        'Finalmente, o confronto tão esperado acontece: o grupo encontra o temido líder da gangue. Em uma batalha intensa e cheia de reviravoltas, será necessário unir forças, estratégia e coragem para derrotá-lo de uma vez por todas e restaurar a paz na região.'
    ];

    let numBtnActive = 0; //variavel que representa o numero do botao ativado

    function veririficarBtn(){ //função que verifica o botao ativado
        for(let i=0; i<fases_btn.length; i++){ //estrutura de repetição
            let numfase = i + 1; 
            if(numBtnActive == i){
                titulofase.innerHTML = '<h2 class="subtitulos">Fase ' + numfase + ': <span> ' + textoTituloFase[i] + '</span></h2>'; //altera o titulo da fase de acordo com o botao selecionado
                textofase.innerHTML = ' <p class="text">' + descricaoFases[i] + '</p>';
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