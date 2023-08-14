var num = window.document.querySelector('input#txtnum')
var listaNum = window.document.getElementById('lista')
var res = window.document.getElementById('res')
var valores = []

// Verifica se o valor é um número entre 1 e 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}

// Verifica se o número esta dentro da lista
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionarNumero() {
    var novoNummero = Number(num.value) 
    
    if (isNumero(novoNummero) && !inLista(novoNummero, valores)){
        valores.push(novoNummero) // Adiciona o novo número ao array 'valores'
        var item = document.createElement('option')
        item.text = `Valor ${novoNummero} Adicioado`
        item.value = `n${valores.length}`

        listaNum.appendChild(item) // Adiciona o novo item na lista
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // Limpa o campo de entrada
}

function analisar(){
    res.innerHTML = ''
    valores.sort() // Coloca o array 'valores' em ordem crescente
    var totalNumeros = 0 
    var somaValores = 0
    var soma = Number(somaValores.valueOf)
    while(totalNumeros < valores.length){
        totalNumeros++
    }
    
    if (valores.length == 0){
        alert('Por favor adicione um número à lista acima')
    } else {
        res.innerHTML += `Foram adicionados ${totalNumeros} números na lista <br>`
        res.innerHTML += ` O menor valor adicionado foi ${valores[0]} <br>`
        res.innerHTML += `O maior valor adicionado foi ${valores.indexOf(totalNumeros)}<br>`

        for(var cont = 0; cont <= totalNumeros; cont++){
            soma += valores[cont.valueOf]
        }

        res.innerHTML += `A soma dos valores adicionados é ${soma}`
    }
}

function limpar() {
    window.location.reload()
}
