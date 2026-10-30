class Pessoa{
    nome;
    idade;
    altura;
    renda;

    constructor(nome, idade, altura,renda){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.renda = renda;
    }
    mostrar(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Renda: ${this.renda}`);
    }
}
let cidadao = new Pessoa('Maria Eduarda',18,1.80,20000);
cidadao.mostrar();
