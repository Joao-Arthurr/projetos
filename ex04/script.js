function gerarTabuada (){
    var valor = document.querySelector('input#num')
    var tab = document.getElementById('seltab')

    if (valor.value.length == 0){
        alert('Por favor, digite um numero!')
    } else {
        var v = Number(valor.value)
        tab.innerHTML = ''
        for (var contador = 0; contador <= 10; contador++){
            var item = document.createElement('option')

            res = v * contador
            item.text = `${v} x ${contador} = ${res}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            
        }
    }
}

