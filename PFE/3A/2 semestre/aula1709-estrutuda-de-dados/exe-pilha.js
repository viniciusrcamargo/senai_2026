
let palavras = [];

function registraPalavra(palavra){
    palavras.push(palavra);
}

function desfazer(){
    palavras.pop();
}
registraPalavra('Eu')
registraPalavra('amo')
registraPalavra('o')
registraPalavra('Senai')
console.log(palavras);
desfazer();
console.log(palavras);

