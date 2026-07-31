class Cidade{
    nome = 'Campos do Jordão';
    estado = 'SP';
    qtdeHabitantes = 46000;

    mostrar(){
        console.log('A cidade de ' + this.nome + ' fica no estado de ' + this.estado + ' e tem cerca de ' + this.qtdeHabitantes + ' habitantes');
    }
}

const city = new Cidade();
city.nome = 'Mirandópolis';
city.mostrar();