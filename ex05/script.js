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
        listaNum.appendChild(item) // Adiciona o novo item na lista
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // Limpa o campo de entrada
    num.focus() // Coloca foco no input, não precisando clicar para escrever
}

function analisar() {
    if (valores.length == 0){
        alert('Por favor adicione um número à lista acima')
    } else {
        valores.sort() // Coloca o array 'valores' em ordem crescente
        var totalNumeros = valores.length 
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/totalNumeros
        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${totalNumeros} números na lista</p> `
        res.innerHTML += ` <p>O menor valor adicionado foi ${menor} </p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores adicionados é ${soma}</p>`
        res.innerHTML += `<p>A media entre todos os valores é ${media}</p>`
    }
}

function limpar() {
    window.location.reload()
}
