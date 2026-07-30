const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo')
const container = document.querySelector('#container')
const divImage = document.querySelector('#div-imagem')

corpo.style.backgroundColor = '#43ff21';
corpo.style.color = 'white';
titulo.textContent = 'Exercício 1 de manipulado do Dom';
container.style.width = '94%';
container.style.margin = '0 auto';//centralizando
container.style.backgroundColor = '#df6d7a';

let tituloUc = '<h2>Programação Front-End</h2>';
container.innerHTML += tituloUc;

let imagem = '<img src="./img/cidade-tech.jpg" alt="">';
divImage.innerHTML += imagem;


