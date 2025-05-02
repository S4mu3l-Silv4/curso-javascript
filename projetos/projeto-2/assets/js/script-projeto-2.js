function contar() {
    let comeco = document.querySelector('input#texto-comeco')
    let fim = document.querySelector('input#texto-fim')
    let intercalacao = document.querySelector('input#texto-intercalacao')
    let resultado = document.querySelector('div#resultado')

    if (comeco.value.length == 0 || fim.value.length == 0 || intercalacao.value.length == 0) {
        window.alert('[ERRO] Faltam dados a serem escritos!')
    } else {
        resultado.innerHTML = 'Contagem: '
        let c = Number(comeco.value)
        let f = Number(fim.value)
        let i = Number(intercalacao.value)
        if (i <= 0) {
            window.alert('Passo inválido!')
        }
        if (c < f) {
            for (let contador = c; contador <= f; contador += i) {
                resultado.innerHTML += `${contador} \u{1f449}`
        }
        } else {
            for (let contador = c; contador >= f; contador -= i) {
                resultado.innerHTML += `${contador} \u{1f449}`
        }
        }
        resultado.innerHTML += `\u{1f3c1}`
    }
}