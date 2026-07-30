class Jogador{//classe mãe
    #nome;
    #numero;
    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    treinar(){
        return '3 vezes na semana';
    }
    getNome(){
        return this.#nome;
    }
    getNumero(){
        return this.#numero;
    }
}

//classe jogadorFutebol - filha
class JogadorFutebol extends Jogador{
    #peDominante;
    #totalGols;
    constructor(peDominante, totalGols, nome, numero){
        super(nome,numero);
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
    }
    driblar(){
        return 'Tomou uma caneta';
    }
    fazerGol(qtsGols){
        return this.#totalGols += qtsGols;
    }
    //super acessa atributos e métodos da classe mãe
    mostrar(){
        return 'O jogador ' + super.getNome() + ' número ' + super.getNumero() + ' pé dominante ' + this.#peDominante + ' têm ' + this.#totalGols + ' gols';
    }
}

const jogador = new JogadorFutebol('esquerdo',20,'Kelvin destaque',7);
jogador.fazerGol(2);
console.log(jogador.mostrar());