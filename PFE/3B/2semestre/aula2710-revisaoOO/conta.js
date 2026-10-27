class Conta{
    nome;//atributo público
    #cpf;//atributo privado

    //get e set
    setCpf(cpf){
        this.#cpf = cpf;
    }
    getCpf(){
        return this.#cpf;
    }
    mostrar(){
        return `O cliente ${this.nome} tem o cpf ${this.getCpf()}`;
    }
}
let contaPoupanca = new Conta();
contaPoupanca.nome = 'Aroldo Gonçalves';
contaPoupanca.setCpf('3333333332');
console.log(contaPoupanca.mostrar());
