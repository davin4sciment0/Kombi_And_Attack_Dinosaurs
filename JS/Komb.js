
// importando o modulo da biblioteca Three js
import * as THREE from '../3D_Runner/build/three.module.min.js';
import { OrbitControls } from '../3D_Runner/jsm/OrbitControls.js';
import { GLTFLoader } from '../3D_Runner/jsm/GLTFLoader.js';
import { RGBELoader } from '../3D_Runner/jsm/RGBELoader.js';

// criando variáveis para câmera, cena, renderer, e controles
var camera, scene, renderer, controls, komb, kombObject;

init();
render();

// ajustando a responsividade da tela
window.onresize = function () {
    // Ajustes da câmera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    
    // Ajustes da cena
    renderer.setSize(window.innerWidth , window.innerHeight);
};

// Função de inicialização da cena
function init() {
    // Câmera de perspectiva
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 30);

    // Criando a cena
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#0C0C0C');
    console.log(scene);

    // O renderer cuidará da parte visual da nossa cena
    renderer = new THREE.WebGLRenderer({ 
        antialias: true 
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 1.3, window.innerHeight / 1.3);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    document.body.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("id", "cena");

    let armarM = document.querySelector('#cena');
    let obj = document.querySelector('.obj3d1').appendChild(armarM);

    // Habilitando as sombras na cena
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    render.autoClear = false;

    // Adicionando luzes na cena
    const light = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.castShadow = true;
    directionalLight.shadow.bias = -0.0001;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Carregando o objeto da cena
    const loader = new GLTFLoader().setPath('../3D_Runner/obj/');
    loader.load('Komb.glb', function (komb) {
        kombObject = komb.scene; // Armazenando o objeto mirela para rotacioná-lo
        scene.add(kombObject);

        var kombBox= new THREE.Box3().setFromObject(komb.scene);
        var komb_size = kombBox.getSize(new THREE.Vector3(0, 0, 0));
        camera.position.z = komb_size.length() * 10;

        kombBox.getCenter(controls.target);

        // Habilitando sombras no objeto mirela
        komb.scene.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });

        if(window.innerWidth < 600){
            kombObject.scale.set(0.6, 0.6, 0.6);
        }
        else{
            kombObject.scale.set(1.2, 1.2, 1.2);
        }


    });

    //Controle da câmera
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // ajustando os valores da suavidade
    controls.dampingFactor = 0.06;

    //delimitando o zoom que podemos dar em nosso objeto da cena
    controls.minDistance =  8;
    controls.maxDistance = 8;

    // deixando  o objeto girando na cena
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;

    // impossibilitando o usuario a mover o objeto na cena
   controls.enablePan = false;

    // Configurando o ambiente
    new RGBELoader()
        .setPath('../3D_Runner/')
        .load('studio/christmas_photo_studio_01_4k.hdr', function (texture) {
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
