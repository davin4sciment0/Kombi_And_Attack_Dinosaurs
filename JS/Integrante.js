//import Integrantes from './Classe.class.js';
//import { Integrante1, Integrante2, Integrante3, Integrante4, Integrante5, Integrante6 } from './Classe.class.js';

class Integrantes{
    constructor(nome,frase, foto, git, linkedin, instagram, whatsapp, curriculum, proj1T, proj1P,proj1LINK, projetO1IMG, proj2T, proj2P, proj2LINK, projetO2IMG,proj3T, proj3P, proj3LINK, projetO3IMG,proj4T, proj4P, proj4LINK, projetO4IMG){
        this.nome = nome;
        this.frase = frase;
        this.foto = foto;
        this.git = git;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.whatsapp = whatsapp;
        this.curriculum =curriculum;


        this.proj1T = proj1T;
        this.proj1P = proj1P;
        this.proj1LINK = proj1LINK;
        this.projetO1IMG = projetO1IMG;

        this.proj2T = proj2T;
        this.proj2P = proj2P;
        this.proj2LINK = proj2LINK;
        this.projetO2IMG = projetO2IMG;

        this.proj3T = proj3T;
        this.proj3P = proj3P;
        this.proj3LINK = proj3LINK;
        this.projetO3IMG = projetO3IMG;

        this.proj4T = proj4T;
        this.proj4P = proj4P;
        this.proj4LINK = proj4LINK;
        this.projetO4IMG = projetO4IMG;
    }
}

//Adicionando "itens" a classe
Integrante1 = new Integrantes  ('Cauã Silva','Sou lindo demais para não aproveitar a vida do jeito que ela deve ser aproveitada, Sócrates ja dizia','../IMG/img_integrantes/Caua.jpg', 'https://github.com/CauaSilva28','','https://www.instagram.com/cau4_svm?igsh=cHNwa3RzMXNneWR5','', '../IMG/img_projetos_integrantes/Caua_projs/curriculum_Caua.pdf','Site Aventura', 'Descubra os melhores para se viajar com a família','https://cauasilva28.github.io/SiteAventura/', '../IMG/img_projetos_integrantes/Caua_projs/P2.png','Red Dead II', 'Descubra o mundo do melhor jogo criado em 2018','https://cauasilva28.github.io/SiteGamerRDR2/#guia','../IMG/img_projetos_integrantes/Caua_projs/P1.png','Site de Jogos', 'Procure os melhores jogos aqui!', 'https://cauasilva28.github.io/SiteNicolas/', '../IMG/img_projetos_integrantes/Caua_projs/P3.png','Aplicativo', 'Descubra um pouco mais sobre a vida de AyamiKojima', 'https://github.com/CauaSilva28/App-AyamiKojima', '../IMG/img_projetos_integrantes/Caua_projs/P4.png');

Integrante2 = new Integrantes  ('Davi dos Santos','A vida é muito curta para deixarmos de fazer aquilo que sempre sonhamos em fazer.','../IMG/img_integrantes/Davi.jpg', 'https://github.com/davin4sciment0','','https://www.instagram.com/davi_nasc_?utm_source=qr&igsh=ZWFtM2F1dnJ3azl1','','', 'CHARGE','Reserve aqui o melhor carro para você','https://davin4sciment0.github.io/Charge/', '../IMG/img_projetos_integrantes/Davi_projs/P1.png', 'WALL-E', 'Veja um dos personagens mais amados da Pixar', '../IMG/img_projetos_integrantes/Davi_projs/WALL-E/html/index.html', '../IMG/img_projetos_integrantes/Davi_projs/P2.png', 'PlantSP', 'Compre aqui as melhores plantas de SP', 'https://plantsp.netlify.app/carrinho', '../IMG/img_projetos_integrantes/Davi_projs/P3.png', 'APP', 'Olhe o catalago da empresa PlantSP', '','../IMG/img_projetos_integrantes/Davi_projs/P4.png');

Integrante3 = new Integrantes  ('Gabriel Faria','A vida é muito curta para deixarmos de fazer aquilo que sempre sonhamos em fazer.','../IMG/img_integrantes/Gabriel.jpg', 'https://github.com/davin4sciment0','','https://www.instagram.com/davi_nasc_?utm_source=qr&igsh=ZWFtM2F1dnJ3azl1','', '', 'Jogo', 'Jogo desenvolvido ao longo do curso', 'https://github.com/RuanPSilva/Resgate_Dos_Animanos', '../IMG/img_projetos_integrantes/Gabriel_projs/P1.png', 'APP', 'Descubra um pouco sobre a história de Shigeru Myiamoto', 'https://github.com/GabrielFaria-cyber/Shigeru-Miyamoto', '../IMG/img_projetos_integrantes/Gabriel_projs/P2.png', 'Jogo da forca', 'Jogo desenvolvido ao longo do curso', 'https://github.com/CauaSilva28/Jogo-da-forca', '../IMG/img_projetos_integrantes/Gabriel_projs/P3.png', 'Animal TCM', 'APP desenvolvido ao longo do curso','../IMG/img_projetos_integrantes/Gabriel_projs/Animal/html/index.html', '../IMG/img_projetos_integrantes/Gabriel_projs/P4.png');

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
let curriculum = document.getElementById('btn_curriculum');

let proj1T = document.getElementById('nome_projeto1');
let proj2T = document.getElementById('nome_projeto2');
let proj3T = document.getElementById('nome_projeto3');
let proj4T = document.getElementById('nome_projeto4');

let proj1P = document.getElementById('descricao_projeto1');
let proj2P = document.getElementById('descricao_projeto2');
let proj3P = document.getElementById('descricao_projeto3');
let proj4P = document.getElementById('descricao_projeto4');

let proj1LINK = document.getElementById('projeto1');
let proj2LINK = document.getElementById('projeto2');
let proj3LINK = document.getElementById('projeto3');
let proj4LINK = document.getElementById('projeto4');


let projetO1IMG = document.getElementById('proj1');
let projetO2IMG = document.getElementById('proj2');
let projetO3IMG = document.getElementById('proj3');
let projetO4IMG = document.getElementById('proj4');


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
    curriculum.href = grupo[num].curriculum;

    proj1T.innerHTML = grupo[num].proj1T;
    proj1P.innerHTML= grupo[num].proj1P
    proj1LINK.href = grupo[num].proj1LINK;
    projetO1IMG.src = grupo[num].projetO1IMG;

    proj2T.innerHTML = grupo[num].proj2T;
    proj2P.innerHTML= grupo[num].proj2P
    proj2LINK.href = grupo[num].proj2LINK;
    projetO2IMG.src = grupo[num].projetO2IMG;

    proj3T.innerHTML = grupo[num].proj3T;
    proj3P.innerHTML= grupo[num].proj3P
    proj3LINK.href = grupo[num].proj3LINK;
    projetO3IMG.src = grupo[num].projetO3IMG;

    proj4T.innerHTML = grupo[num].proj4T;
    proj4P.innerHTML= grupo[num].proj4P
    proj4LINK.href = grupo[num].proj4LINK;
    projetO4IMG.src = grupo[num].projetO4IMG;
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


