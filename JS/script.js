AOS.init(); //Iniciando a biblioteca de animações com scroll do bootstrap

// Chamando funções
AtivarDesativarBarraNav();

// Criando funções

function AtivarDesativarBarraNav(){
    let iconeFechar = document.getElementById("iconeFecharNavMobile");
    let iconeAbrir = document.getElementById("iconeNavMobile");
    let barraNavMobile = document.getElementById('barraNav_mobile');

    iconeAbrir.addEventListener('click', function(){
        barraNavMobile.style.display = 'flex';
    });

    iconeFechar.addEventListener('click', function(){
        barraNavMobile.style.display = 'none';
    });
}
