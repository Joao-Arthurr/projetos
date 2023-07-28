var agora = new Date()
var horaAtual = agora.getHours()
var back = window.document.querySelector('body#back')
var horas = window.document.querySelector('div#horas')
var img = window.document.querySelector('div#img')


if (horaAtual < 12) {
    horas.innerHTML = '<p><strong>Bom dia!</strong></p>'
    back.style.backgroundColor = '#556688'
    img.style.backgroundImage = 'url(imagens/sol-manha.jpg)'
} else if (horaAtual < 18) {
    horas.innerHTML = '<p><strong>Boa tarde!</strong></p>'
    back.style.backgroundColor = '#ff8c00'
    img.style.backgroundImage = 'url(imagens/sol-tarde.jpg)'
} else {
    back.style.backgroundColor = '#333332'
    horas.innerHTML = '<p><strong>Boa noite!</strong></p>'
    img.style.backgroundImage = 'url(imagens/noite.jpg)'
}
horas.innerHTML += `<p>Agora são ${horaAtual} horas</p>`