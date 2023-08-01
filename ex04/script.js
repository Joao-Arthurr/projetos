function gerarTabuada ()
    var valor = document.querySelector('input#num')
    var res = document.getElementById('res')
    var contador = ''
    var resul = ''
    res.innerHTML = '<p>Joo</p>'
    for (contador = '0'; contador <= 10; contador++ ){
        resul = valor.value * contador.value
        res.innerHTML = '<p>1</p>'
    }

