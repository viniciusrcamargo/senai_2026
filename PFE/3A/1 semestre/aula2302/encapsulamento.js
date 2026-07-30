class Pessoa{
    nome;//atributo público
    #cpf = '00100200304';//atributo privado

    //métodos getter e setter
    //métodos públicos de acesso aos atributos
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
}

const estudante = new Pessoa();//instancia do objeto Pessoa
estudante.nome = 'Livia';//acesso ao atributo público nome
estudante.setCpf(22222222220);//acesso ao atributo privado cpf
console.log('O cpf é ' + estudante.getCpf());//acesso ao atributo privado cpf
console.log(estudante.nome);//acesso ao atributo público nome
