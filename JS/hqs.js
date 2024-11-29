let img = document.getElementById('imagens');
let btnL = document.getElementById('hq_setaL');
let btnR = document.getElementById('hq_setaR');

let int = 0;

let quadrinhos = [
    "../IMG/quadrinhos/inicio.png",
    "../IMG/quadrinhos/1.png",
    "../IMG/quadrinhos/2.png",
    "../IMG/quadrinhos/3.png",
    "../IMG/quadrinhos/4.png",
    "../IMG/quadrinhos/5.png",
    "../IMG/quadrinhos/6.png",
    "../IMG/quadrinhos/7.png",
    "../IMG/quadrinhos/8.png",
    "../IMG/quadrinhos/final.png",
];

function avancar (){
    int++;
    //alert (int);

    switch (int){
        case 0:
            img.src = quadrinhos[0];
        break;

        case 1:
            img.src = quadrinhos[1];
        break;

        case 2:
            img.src = quadrinhos[2];
        break;

        case 3:
            img.src = quadrinhos[3];
        break;

        case 4:
            img.src = quadrinhos[4];
        break;

        case 5:
            img.src = quadrinhos[5];
        break;

        case 6:
            img.src = quadrinhos[6];
        break;

        case 7:
            img.src = quadrinhos[7];
        break;

        case 7:
            img.src = quadrinhos[8];
        break;

        case 8:
            img.src = quadrinhos[9];
        break;
        default:
            console.log('nada');
    }
}

function voltar (){
    int--;

    if(int <= 0){
        int=0;
    }

    switch (int){
        case 1:
            img.src = quadrinhos[0];
        break;

        case 2:
            img.src = quadrinhos[1];
        break;

        case 3:
            img.src = quadrinhos[2];
        break;

        case 4:
            img.src = quadrinhos[3];
        break;

        case 5:
            img.src = quadrinhos[4];
        break;

        case 6:
            img.src = quadrinhos[5];
        break;

        case 7:
            img.src = quadrinhos[6];
        break;

        case 7:
            img.src = quadrinhos[7];
        break;
        default:
            console.log('nada');
    }
}

