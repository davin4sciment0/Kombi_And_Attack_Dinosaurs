// importando o modulo da biblioteca Three js
import * as THREE from '../build/three.module.min.js';
import { OrbitControls } from '../jsm/OrbitControls.js';
import { GLTFLoader} from '../jsm/GLTFLoader.js';
import {RGBELoader} from '../jsm/RGBELoader.js'

// criando uma variavel para câmera
var camera, scene, renderer, mesh, controls;

init();
render();

// ajustando a responsividade da tela
window.onresize = function (){

    // ajustes da câmera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // ajustes da cena
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// criando uma função para ajustar o setup da cena
function init(){
    // existem 3 tipos de câmeras nessa biblioteca, mas nesse caso iremos utilizar a câmera de perspectiva
    // dentro de seus parâmetros iremos passar alguns dados para o seu campo de visão
    camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 1, 1000);
    // camera.position.z = 400;

    // criando a cena 
    scene = new THREE.Scene();
    scene.background = new THREE.Color('rgb(26, 26, 26);');
    console.log(scene);

    // o renderer cuidará da parte visual da nossa cena
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    // estamos pegando a resolção do nosso monitor
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth/2 , window.innerHeight/2);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    // setando o objeto como um elemento DOM e entregando um ID à ele
    document.body.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("id", "cena");

    // habilitando as sombras em nossa cena
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    render.autoClear = false;

    /*
    //adicionando um elemento na cena (uma caixa)
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial();
    mesh = new THREE.Mesh(geometry, material);
    // definindo o nome do material
    mesh.name = "caixa";
    //definindo a cor do material
    mesh.material.color = new THREE.Color('#ABD904');
    scene.add(mesh);
    */

    console.log(controls);

    // comando para controlar seu objeto da cena
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // ajustando os valores da suavidade
    controls.dampingFactor = 0.06;

    // delimitando o zoom que podemos dar em nosso objeto da cena
   controls.minDistance =  2.9;
   controls.maxDistance = 8;

    // deixando  o objeto girando na cena
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3.5;

    // impossibilitando o usuario a mover o objeto na cena
   controls.enablePan = false;

    /*
    //adicionando luzes na cena
    const ligth = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ligth);
    */

    const directionalLigth = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLigth.castShadow = true;
    directionalLigth.shadow.bias = -0.0001;
    directionalLigth.shadow.mapSize.width = 2048;
    directionalLigth.shadow.mapSize.heigth = 2048;
    directionalLigth.position.set(1,1,1);
    scene.add(directionalLigth);
    

    // adicionando um objeto de fora
    const loader = new GLTFLoader().setPath('../models/');
    loader.load('Finaf.glb', function (glb){

        scene.add(glb.scene);

        //centralizando o objeto na cena
        var box = new THREE.Box3().setFromObject(glb.scene);
        var obs_size = box.getSize(new THREE.Vector3(0, 0, 0));
        console.log(obs_size);

        camera.position.z = obs_size.length() * 0.6;

        // ajusta o pivo do nosso objeto na cena
        box.getCenter(controls.target);

        // habilitando com que o objeto possua uma sombra
        glb.scene.traverse(function(child){
            child.receiveShadow = true;
            child.castShadow = true;
        });


    });

    // configurando o ambienet em que o nosso objeto vai ficar "o Studio"
    new RGBELoader()
        .setPath('../')
        .load('studio/christmas_photo_studio_01_4k.hdr', function (texture){

            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
        });
    

}

// função para renderizar a cena da tela
function render(){

    // condição para que se a função "controls" estiver sendo exercida, ele ira suavizar seus movimentos na renderização
    if(controls){
        controls.update();
        renderer.render(scene, camera);
    }

    requestAnimationFrame(render);

   // mesh.rotation.y += 0.005;
   // mesh.rotation.z += 0.005;



    renderer.render(scene, camera);
}