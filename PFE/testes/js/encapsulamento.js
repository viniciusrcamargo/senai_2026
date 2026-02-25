class Caneta{
    cor;//público
    marca;//público
    #ponta;//privado
    #carga;//privado
    #tampada;//privado

    destampar(){
        return 'caneta destampada';
    }

    setPonta(valor){
        this.#ponta = valor;
    }

    getPonta(){
        return this.#ponta;
    }
}

const bic = new Caneta();
console.log(bic.destampar());
 bic.destampar();