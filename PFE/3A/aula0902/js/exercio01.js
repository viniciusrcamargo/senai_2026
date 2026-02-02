const nome = 'Vini'
const titulo = document.querySelector('.titulo');
const texto = document.querySelector('#texto');
const fundo = document.querySelector('.fundo');
const quadro = document.querySelector('.cor-diferente')

titulo.textContent += nome;
texto.textContent += ' e Alterado via Javascript';
fundo.style.backgroundColor = '#e58484';
quadro.style.backgroundColor = '#f8d04c';
titulo.style.color = '#fff';
texto.style.color = '#817979';
titulo.style.fontSize = '68px';