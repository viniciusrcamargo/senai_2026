class Jogador{
    #nome;
    #numero;

    treinar(){
        return 'treino realizado';
    }
    getNome(){
        return this.#nome;
    }
}

class jogadorFutebol extends Jogador{
    peDominante;
    totalGols;

    driblar(){
        console.log('O jogador ' + super.getNome() + ' driblou');
    }
    fazerGol(){
        //
    }
}