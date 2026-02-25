class Caneta{
    Cor;
    Marca;
    Ponta;
    Carga;
    Tampada;

    destampar(){
        return 'caneta destampada';
    }
}

const bic = new Caneta();
console.log(bic.destampar());
 bic.destampar();