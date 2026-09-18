let palavras = []
let cont = 0

function historico(opcao){
    if(opcao == 'add'){
        cont += 1
        palavras.push(`palavra armazenada ${cont}`  )
    }else if(opcao == 'rem'){
        palavras.pop()
    }
}
historico('add')
historico('add')
historico('add')
historico('rem')
console.log(palavras)