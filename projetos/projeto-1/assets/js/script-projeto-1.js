function carregar() {
    let mensagem = document.querySelector('p#mensagem')
    let imagem = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        mensagem.innerHTML = `Bom dia, agora são ${hora} horas.`
        imagem.src = './assets/imgs/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        mensagem.innerHTML = `Boa tarde, agora são ${hora} horas.`
        imagem.src = './assets/imgs/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else if (hora >= 18 && hora < 24) {
        mensagem.innerHTML = `Boa noite, agora são ${hora} horas.`
        imagem.src = './assets/imgs/noite.jpg'
        document.body.style.background = '#515154'
    }
}