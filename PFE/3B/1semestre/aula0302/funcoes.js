//primerio tipo função padrão
function saudacao(nome,sobrenome){
    console.log('Olá, seja bem vindo ' + nome + ' ' + sobrenome);
}

saudacao('Pedro','Darim');//chamada da função

//segundo tipo - função anônima
const somar = function(num1,num2){
    console.log('A soma dos números é = ' + (num1+num2));
}
somar(25,35);

//terceiro tipo - arrow function
const subtrair = (num1,num2) => {
    console.log('A subtração dos números é = ' + (num1-num2));
}
subtrair(30,50);

//terceiro tipo - arrow function com retorno
const subtrairComRetorno = (num1,num2) => {
     return num1-num2;
}
console.log('A subtração com retorno dos números é = ' + subtrairComRetorno(30,50));




