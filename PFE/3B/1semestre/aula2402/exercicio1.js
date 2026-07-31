class Livro{
    autor = 'J.R.R. Tolkien';
    tipo = 'impresso';
    genero = 'Ficção';
    editora = 'Vozes';
    anoPub = 1977;
    titulo = 'O Senhor dos Anéis';
    idioma = 'Inglês';
    qtdePaginas = 1200;

    mostrar(){
        console.log(this.autor);//chamada de atributo
    }
}
const impressao = new Livro();
impressao.mostrar();
