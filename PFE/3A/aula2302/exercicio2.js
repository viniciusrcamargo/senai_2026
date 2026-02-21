class Bicicleta{
    #modelo;
    #marca;
    #cor;
    #velocidadeMaxima;

    setModelo(valor){
        this.#modelo = valor;
    }
    getModelo(){
        return this.#modelo;
    }
    setMarca(valor){
        this.#marca = valor;
    }
    getMarca(){
        return this.#marca;
    }
    setCor(valor){
        this.#cor = valor;
    }
    getCor(){
        return this.#cor;
    }
    setVelocidadeMaxima(valor){
        if(valor > 35){
            console.log('Não é possível inseir acima de 35');
        }else{
            this.#velocidadeMaxima = valor;
        }
    }
    getVelocidadeMaxima(){
        return this.#velocidadeMaxima;
    }
}

const caloi = new Bicicleta();
caloi.setMarca('Caloi')
console.log(caloi.getMarca());
caloi.setCor('Verde')
console.log(caloi.getCor());
caloi.setModelo('Velox')
console.log(caloi.getModelo());
caloi.setVelocidadeMaxima(36);
console.log(caloi.getVelocidadeMaxima());

