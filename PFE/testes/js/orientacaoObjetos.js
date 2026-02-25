class Pessoa{
    nome = 'Fulano';
    idade = 33;
    altura = 1.80;
    peso = 76.40;

    mostrar(){
        console.log('O nome é ' + nome + 
                ' a idade é ' + idade + 
                ' sua altura é ' + altura + 
                ' e seu peso é ' + peso);
    }
}

const estudante = new Pessoa();
estudante.mostrar();