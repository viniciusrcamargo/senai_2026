const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const botao = document.querySelector('.botao');


titulo.textContent = 'Sexta feira de Carnaval!';

container.style.backgroundColor = '#c56969';
container.style.width = '94%';
container.style.margin = '0  auto';
let subtitulo = '<h2>Programação Front-End</h2>';
container.innerHTML += subtitulo;
let imagem = '<img src="./img/cidade-tech.jpg" alt="Imagem da cidade">';
container.innerHTML += imagem;
let contador = 0;
botao.addEventListener('click',() =>{
    alert('Você clicou no botão ' + contador + 'vezes' )
    contador++;
})

