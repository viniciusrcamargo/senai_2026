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
        if(valor <= 35){
            this.#velocidadeMaxima = valor;
        }else{
            console.log('Não é possível cadastrar veículo com velocidade acima a 35kmh');          
        }
    }
    getVelocidadeMaxima(){
        return this.#velocidadeMaxima;
    }
}

const caloi = new Bicicleta();
caloi.setMarca('Caloi');
console.log(caloi.getMarca());
caloi.setModelo('Velox');
console.log(caloi.getModelo());
caloi.setCor('Verde');
console.log(caloi.getCor());
caloi.setVelocidadeMaxima(35);
console.log(caloi.getVelocidadeMaxima());
