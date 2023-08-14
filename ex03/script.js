function contar() {
    var valorInc = document.querySelector('input#inc')
    var valorFim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.getElementById('res')
    if (valorInc.value.length == 0 || valorFim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] por favor preencha todos os dados')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando:<br>'
        var i = Number(valorInc.value)
        var f = Number(valorFim.value)
        var p = Number(passo.value)
        
        if (p <= 0){
            alert('Valor do passo invalido, será considerado o valor "1"')
            p = 1
        }

        if (i <= f){
            // Contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} > `
            }
        } else {
            // Contagem regressiva
            for (var c = i; c >= f; c = c - p){
                res.innerHTML += `${c} > `
            }
        }

    }
}