function TrocaTela(id) {
    // Armazena a informação que a div com ID "Davi" foi clicada
    sessionStorage.setItem('clicado', id);
    // Redireciona para a tela atual
    window.location.href = 'Integrante.html';
}

