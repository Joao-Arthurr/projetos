function contar() {
    var valorInc = document.querySelector('input#inc')
    var valorFim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.getElementById('res')
    if (Number(passo.value) <= 0) {
        window.alert('Passo inválido, sera considerado o valor "1"')
        passo = '1'
    }
    res.innerHTML = `${passo}`
    while (Number(valorInc.value) <= Number(valorFim.value)){
        res.innerHTML += `${valorInc}`      
        Number(valorInc.value) += Number(passo.value)
    }
}