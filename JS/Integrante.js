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

function Troca(num){
    console.log('foi')
    nome.innerHTML = grupo[num].nome;
    frase.innerHTML = grupo[num].frase;
    img_integrante.src = grupo[num].foto;
    git.href = grupo[num].git;
    linkedin.href = grupo[num].linkedin;
    instagram.href = grupo[num].instagram;
    whatsapp.href = grupo[num].whatsapp;
}

// Verifica se a informação foi armazenada na tela anterior
window.onload = function() {
    const clicado = sessionStorage.getItem('clicado');
    if(clicado){
        switch(clicado) {
            case 'Caua':
                Troca(0);
                break;
            case 'Davi':
                Troca(1);
                break;
            case 'Gabriel':
                Troca(2);
                break;
            case 'Fernanda':
                Troca(3);
                break;
            case 'Pedro':
                Troca(4);
                break;
            case 'Ruan':
                Troca(5);
                break;
            default:
                console.log('nada');
        }
    }
}


