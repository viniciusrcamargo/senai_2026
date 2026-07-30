class Caneta{
    //atributos públicos
    cor = 'Amarelo';
    marca = 'Faber Castel';
    ponta = 'Fina';
    qtdTinta = 5;
    tampa = false;

    //método têm parenteses
    escrever(){
        return 'Começou a escrever';
    }
    sublinhar(valor){
        if(valor > this.qtdTinta){
            return 'insuficiente';
        }else{
            this.qtdTinta -= valor;//subtrai o valor da qtde tinta
          return 'Quantidade restante de tinta ' + this.qtdTinta;
        }
    }
    //alterar o método sublinhar para não permitir subtrair a quantidade de tinta se o valor for maior que a quantidade estabelecida
}
const canetaFina = new Caneta();
console.log(canetaFina.escrever());
console.log(canetaFina.sublinhar(4));
