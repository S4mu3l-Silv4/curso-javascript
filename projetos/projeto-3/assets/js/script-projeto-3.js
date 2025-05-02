function tabuada() {
    let numero = document.querySelector('input#texto-numero')
    let tabuada = document.querySelector('select#select-tabuada')

    if (numero.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}