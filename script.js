const imagem = document.querySelector('.img')
const texto = document.querySelector('.cafedesc')
const titulo = document.querySelector('.cafeteira')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

const desc3 = 'Venha comprar nossa torradeira pro master, ela pode torrar até mesmo aquele seu namorado pão duro hahaha, a torradeira pro master 3000 é capaz de torrar até mesmo os pães mais duros que você encontrar no mercado mais proximo de você.';
const desc2 = 'Venha comprar nosso microondas super hyper master, este microondas é capaz de esquentar sua comida em apenas 10s de trabalho, mesmo que sua comida esteja a graus negativos, nosso microondas irá deixá-la perfeita para consumo com apenas alguns segundos ligado!';
const desc1 = 'Venha comprar nossa cafeteira 8000 plus, a melhor Cafeteira do mercado todo! nela você poderá fazer Café clássico, Café com leite, Café com chocolate, Capuccino, Café com canela, e até a mistura de todos esses! venha agora comprar nossa Cafeteira 8000 plus!';

const int3 = 'Torradeira';
const int2 = 'Microondas';
const int1 = 'Cafeteira';

let numero = 1

function space1(){
    titulo.classList.add('margin1')
    titulo.classList.remove('margin2')
    titulo.classList.remove('margin3')
}
function space3(){
    titulo.classList.add('margin2')
    titulo.classList.remove('margin1')
    titulo.classList.remove('margin3')
}
function space2(){
    titulo.classList.add('margin3')
    titulo.classList.remove('margin1')
    titulo.classList.remove('margin2')
}
function avançarimg(){
    numero = numero + 1
    imagem.setAttribute('src', 'imagem' + numero + '.png')

    if(numero > 3){
        imagem.setAttribute('src', 'imagem1.png');
        numero = 1;
        titulo.textContent=int1;
        texto.textContent=desc1;
    }
    if(numero == 1){
        titulo.textContent=int1;
        texto.textContent=desc1;
        space1();
    }
    if(numero == 2){
        titulo.textContent=int2;
        texto.textContent=desc2;
        space2();
    }
    if(numero == 3){
        titulo.textContent=int3;
        texto.textContent=desc3;
        space3();
    }
}
function voltarimg(){
    numero = numero - 1
    imagem.setAttribute('src', 'imagem' + numero + '.png');

    if(numero == 1){
        titulo.textContent=int1;
        texto.textContent=desc1;
    }
    if(numero == 2){
        titulo.textContent=int2;
        texto.textContent=desc2;
    }
    if(numero == 3){
        titulo.textContent=int3;
        texto.textContent=desc3;
    }
    if(numero < 1) {
        imagem.setAttribute('src', 'imagem1.png');
        numero = 1;
    }
}

btn1.addEventListener('click', voltarimg);
btn2.addEventListener('click', avançarimg);