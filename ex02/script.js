function descrever() {
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var anoUsuario = window.document.querySelector('input#anoNascimento')
    var res = window.document.querySelector('div#resultado')
    var idadeUsuario = anoAtual - Number(anoUsuario.value)
    var sexoUsuario = window.document.getElementsByName('sexo')
    var genero = ''
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (sexoUsuario[0].checked) {
        if (idadeUsuario <= 12) {
            img.setAttribute('src', 'imagens/crianca-m.png')
            genero = 'uma criança'
        } else if (idadeUsuario <= 18) {
            img.setAttribute('src', 'imagens/menino.png')
            genero = 'um jovem'
        } else if (idadeUsuario < 50) {
            img.setAttribute('src', 'imagens/homem.png')
            genero = 'um homem'
        } else {
            img.setAttribute('src', 'imagens/idoso.png')
            genero = 'um idoso'
        }
    } else {
        if (idadeUsuario <= 12) {
            img.setAttribute('src', 'imagens/crianca-f.png')
            genero = 'uma criança'
        } else if (idadeUsuario <= 18) {
            img.setAttribute('src', 'imagens/menina.png')
            genero = 'uma menina'
        } else if (idadeUsuario < 50) {
            img.setAttribute('src', 'imagens/mulher.png')
            genero = 'uma mulher'
        } else {
            img.setAttribute('src', 'imagens/idosa.png')
            genero = 'uma idosa'
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idadeUsuario} anos`
    res.appendChild(img)
}