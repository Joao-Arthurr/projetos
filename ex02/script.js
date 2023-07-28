function descrever() {
    var dataAtual = new Date()
    var anoAtual = ano.getFullYear()
    var anoUsuario = window.document.querySelector('input#anoNascimento')
    var genero = ''
    var idadeUsuario = anoAtual - Number(anoUsuario.value)
    var sexoUsuario = window.document.getElementsByName('sexo')
    var res = window.document.querySelector('div#resultado')
    var img = window.document.querySelector('div#img')
    
        if (sexoUsuario[0].checked){
            if (idade <= 18) {
                genero += '<p>um Jovem</p>'
                img = 'url(imagens/menino.jpg)'
            } else if (idade < 60) {
                genero += '<p>um Homem</p>'
                img = 'url(imagens/homem.jpg)'
            } else {
                genero += '<p>um Idoso</p>'
                img = 'url(imagens/idoso.jpg)'
            }
        } else if (genero[1].checked){
            if (idade <= 18) {
                genero += '<p>uma Jovem</p>'
                img = 'url(imagens/menina.jpg)'
            } else if (idade < 60) {
                genero += '<p>uma Mulher</p>'
                img = 'url(imagens/mulher.jpg)'
            } else {
                genero += '<p>uma Idosa</p>'
                img = 'url(imagens/idosa.jpg)'
            }
        }
    res.innerHTML = `Detectamos ${sexoUsuario} de ${idadeUsuario} anos`
}