let nome = document.getElementById('nome');
let img_integrante = document.getElementById('foto_integrante');
let frase = document.getElementById('frase_integrante');
let git = document.getElementById('github');
let linkedin =document.getElementById('linkedin');
let instagram = document.getElementById('instagram');
let whatsapp = document.getElementById('whatsapp');
let caminho = '../HTML/Integrante.html';

function Caua(){
    nome.innerHTML = 'Cauã Silva';
    img_integrante.src = '../IMG/img_integrantes/Caua.jpg';
    frase.innerHTML = 'Sinceramente acho que sou o homem mais bonito que já pisou na terra, acho que elas não me merecem';
    
    console.log('foi')
}


function Troca(){
    window.location.href = caminho; 

    return Caua(img_integrante);
}




//    setTimeout(console.log("Alteeração realizada com sucesso!!"), 2000);