class Caneta{
    cor = 'amarela';
    marca = 'Faber Castel';
    ponta = 'Fina';
    qtdTinta = 10;//ml
    tampa = false;

    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }
    //criar um método sublinhar, que rece um parâmetro valor que vai representar a quantidade gasta de tinta ao sublinhar, desconte da quantidade de tinta e mostre a qtd restante, porém não permita que seja subtraida se o valor for maior do que a qtde de tinta da classe
    sublinhar(valor){
        if(valor > this.qtdTinta){
            return 'Quantidade de tinta insuficiente'
        }
        this.qtdTinta -= valor;
        return 'A quantidade restante depois de sublinhar é ' + this.qtdTinta;
    }

    //criar método recarregar que recebe um valor e soma esse valor a quantidade de tinta da classe, considerando que a qtde de tinta não pode ser maior do que 15ml
    recarregar(valor){
        if((this.qtdTinta + valor) > 15){
            return 'A quantidade informada excede a quantidade permitida de 15ml';
        }
        this.qtdTinta += valor;
        return 'A quantidade de tinta depois da recarga é ' + this.getQtdTinta();
    }

    getQtdTinta(){
        return this.qtdTinta;
    }
}

const canetaFina = new Caneta();
// canetaFina.escrever();
// canetaFina.escrever();
// console.log('A qtde. restante de tinta é ' + canetaFina.getQtdTinta());
// console.log(canetaFina.sublinhar(10));
console.log(canetaFina.recarregar(5));