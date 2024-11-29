let img = document.getElementById('#imagens');
let btnL = document.getElementById('#hq_setaL');
let btnR = document.getElementById('#hq_setaR');

let int = 0

let quadrinhos = [
    "../IMG/quadrinhos/1.png",
    "../IMG/quadrinhos/2.png",
    "../IMG/quadrinhos/3.png",
    "../IMG/quadrinhos/4.png",
    "../IMG/quadrinhos/5.png",
    "../IMG/quadrinhos/6.png",
    "../IMG/quadrinhos/7.png",
    "../IMG/quadrinhos/8.png",
]

function avancar (){
    int++;
    alert (int);

    switch (int){
        case 1:
            img.src.quadrinhos[1];
        break;
    }
}

function voltar (){
    int--;

    if(int< 0){
        int=0;
    }

    alert (int);
}

