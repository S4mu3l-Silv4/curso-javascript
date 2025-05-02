let numero = document.querySelector('input#numero')
    let lista = document.querySelector('select#lista')
    let resultado = document.querySelector('div#resultado')
    let numeros = []

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {
        if (isNumero(numero.value) && !inLista(numero.value, numeros)) {
            numeros.push(Number(numero.value))
            let item = document.createElement('option')
            item.text = `Número ${numero.value} adicionado`
            lista.appendChild(item)
            resultado.innerHTML = ''
        } else {
            window.alert('Númerio inválido ou já digitado na lista!')
        }
        numero.value = ''
        numero.focus()
    }

    function finalizar() {
        if (numeros.length == 0) {
            window.alert('Adicione alguns números!')
        } else {
            let total = numeros.length
            let maior = numeros[0]
            let menor = numeros[0]
            let soma = 0
            let media = 0
            for (let posicao in numeros) {
                if (numero[posicao] > maior)
                maior = numero[posicao]
                if (numero[posicao] < menor)
                menor = numero[posicao]
            }
            media = soma / total
            resultado.innerHTML = ''
            resultado.innerHTML += `<p>O total de números cadastrados é ${total}.</p>`
            resultado.innerHTML += `<p>O maior número digitado é ${maior}.</p>`
            resultado.innerHTML += `<p>O menor número digitado é ${menor}.</p>`
            resultado.innerHTML += `<p>A soma dos números digitados é ${soma}.</p>`
            resultado.innerHTML += `<p>A média dos números digitados é ${media}.</p>`
        }
    }