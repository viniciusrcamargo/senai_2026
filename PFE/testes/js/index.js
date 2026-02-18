const corpo = document.querySelector("body");
const titulo = document.getElementById("titulo")
const container = document.querySelector(".container")
const texto = document.querySelector(".texto")

titulo.textContent = 'Meu novo texto';
container.style.width = '94%';
container.style.backgroundColor = 'orange';

const h2 = '<h2>Inserido com innerHtml';
container.innerHTML += h2;

const img = document.createElement('img');
img.setAttribute('alt', 'Logo');
img.setAttribute('width', '120');
console.log(img.hasAttribute('alt'));
img.removeAttribute('width');