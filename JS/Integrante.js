//import Integrantes from './Classe.class.js';
//import { Integrante1, Integrante2, Integrante3, Integrante4, Integrante5, Integrante6 } from './Classe.class.js';

class Integrantes{
    constructor(nome,frase, foto, git, linkedin, instagram, whatsapp){
        this.nome = nome;
        this.frase = frase;
        this.foto = foto;
        this.git = git;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.whatsapp = whatsapp;
    }
}

//Adicionando "itens" a classe
Integrante1 = new Integrantes  ('Cauã Silva','Sou lindo demais para não aproveitar a vida do jeito que ela deve ser aproveitada, Sócrates ja dizia','../IMG/img_integrantes/Caua.jpg', 'https://github.com/CauaSilva28','','https://www.instagram.com/cau4_svm?igsh=cHNwa3RzMXNneWR5','');

Integrante2 = new Integrantes  ('Davi dos Santos','A vida é muito curta para deixarmos de fazer aquilo que sempre sonhamos em fazer.','../IMG/img_integrantes/Davi.jpg', 'https://github.com/davin4sciment0','','https://www.instagram.com/davi_nasc_?utm_source=qr&igsh=ZWFtM2F1dnJ3azl1','');

Integrante3 = new Integrantes  ('Gabriel Faria','A vida é muito curta para deixarmos de fazer aquilo que sempre sonhamos em fazer.','../IMG/img_integrantes/Gabriel.jpg', 'https://github.com/davin4sciment0','','https://www.instagram.com/davi_nasc_?utm_source=qr&igsh=ZWFtM2F1dnJ3azl1','');

Integrante4 = new Integrantes  ('Fernanda Viana','A vida é muito curta para deixarmos de fazer aquilo que sempre sonhamos em fazer.','../IMG/img_integrantes/Fernanda.jpg', 'https://github.com/davin4sciment0','','https://www.instagram.com/davi_nasc_?utm_source=qr&igsh=ZWFtM2F1dnJ3azl1','');

Integrante5 = new Integrantes  ('Pedro Ferraz','A vida é muito curta para deixarmos de fazer aquilo que sempre sonhamos em fazer.','../IMG/img_integrantes/Pedro.jpg', 'https://github.com/davin4sciment0','','https://www.instagram.com/davi_nasc_?utm_source=qr&igsh=ZWFtM2F1dnJ3azl1','');

Integrante6 = new Integrantes  ('Ruan Pablo','A vida é muito curta para deixarmos de fazer aquilo que sempre sonhamos em fazer.','../IMG/img_integrantes/Ruan.jpg', 'https://github.com/davin4sciment0','','https://www.instagram.com/davi_nasc_?utm_source=qr&igsh=ZWFtM2F1dnJ3azl1','');

let nome = document.getElementById('nome');
let img_integrante = document.getElementById('foto_integrante');
let frase = document.getElementById('frase_integrante');
let git = document.getElementById('github');
let linkedin =document.getElementById('linkedin');
let instagram = document.getElementById('instagram');
let whatsapp = document.getElementById('whatsapp');


let grupo = [Integrante1, Integrante2, Integrante3, Integrante4, Integrante5, Integrante6];

function CauaF(){
    console.log('foi')
    nome.innerHTML = grupo[0].nome;
    frase.innerHTML = grupo[0].frase;
    img_integrante.src = grupo[0].foto;
    git.href = grupo[0].git;
    linkedin.href = grupo[0].linkedin;
    instagram.href = grupo[0].instagram;
    whatsapp.href = grupo[0].whatsapp;
}

function DaviF(){
    console.log('foi');
    nome.innerHTML = grupo[1].nome;
    frase.innerHTML = grupo[1].frase;
    img_integrante.src = grupo[1].foto;
    git.href = grupo[1].git;
    linkedin.href = grupo[1].linkedin;
    instagram.href = grupo[1].instagram;
    whatsapp.href = grupo[1].whatsapp;
}

function GabrielF(){
    console.log('foi');
    nome.innerHTML = grupo[2].nome;
    frase.innerHTML = grupo[2].frase;
    img_integrante.src = grupo[2].foto;
    git.href = grupo[2].git;
    linkedin.href = grupo[2].linkedin;
    instagram.href = grupo[2].instagram;
    whatsapp.href = grupo[2].whatsapp;
}

function FernandaF(){
    console.log('foi');
    nome.innerHTML = grupo[3].nome;
    frase.innerHTML = grupo[3].frase;
    img_integrante.src = grupo[3].foto;
    git.href = grupo[3].git;
    linkedin.href = grupo[3].linkedin;
    instagram.href = grupo[3].instagram;
    whatsapp.href = grupo[3].whatsapp;
}

function PedroF(){
    console.log('foi');
    nome.innerHTML = grupo[4].nome;
    frase.innerHTML = grupo[4].frase;
    img_integrante.src = grupo[4].foto;
    git.href = grupo[4].git;
    linkedin.href = grupo[4].linkedin;
    instagram.href = grupo[4].instagram;
    whatsapp.href = grupo[4].whatsapp;
}

function RuanF(){
    console.log('foi');
    nome.innerHTML = grupo[5].nome;
    frase.innerHTML = grupo[5].frase;
    img_integrante.src = grupo[5].foto;
    git.href = grupo[5].git;
    linkedin.href = grupo[5].linkedin;
    instagram.href = grupo[5].instagram;
    whatsapp.href = grupo[5].whatsapp;
}

// Verifica se a informação foi armazenada na tela anterior
window.onload = function() {
    const clicado = sessionStorage.getItem('clicado');
    if(clicado){
        switch(clicado) {
            case 'Caua':
                CauaF();
                break;
            case 'Davi':
                DaviF();
                break;
            case 'Gabriel':
                GabrielF();
                break;
            case 'Fernanda':
                FernandaF();
                break;
            case 'Pedro':
                PedroF();
                break;
            case 'Ruan':
                RuanF();
                break;
            default:
                console.log('nada');
        }
    }

    


    /*
    if (clicado === 'Caua') {
        CauaF();
    }
    else if(clicado === 'Davi'){
        DaviF();
    }*/
}

