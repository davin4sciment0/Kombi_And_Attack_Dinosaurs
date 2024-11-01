let nome = document.getElementById('nome');
let img_integrante = document.getElementById('foto_integrante');
let frase = document.getElementById('frase_integrante');
let git = document.getElementById('github');
let linkedin =document.getElementById('linkedin');
let instagram = document.getElementById('instagram');
let whatsapp = document.getElementById('whatsapp');
let caminho = '../HTML/Integrante.html';


function Troca(){

    window.location.href = caminho; 

    console.log('foi')
    alert('TROCOU')

    setTimeout(console.log("Alteeração realizada com sucesso!!"), 1000);

    Caua();
}

function Caua(){
   // window.location.reload(true)

    nome.innerHTML = 'Cauã Silva';
    img_integrante.src = '../IMG/img_integrantes/Caua.jpg';
    frase.innerHTML = 'Sinceramente acho que sou o homem mais bonito que já pisou na terra, acho que elas não me merecem';
    
    console.log('foi')
}





//    setTimeout(console.log("Alteeração realizada com sucesso!!"), 2000);