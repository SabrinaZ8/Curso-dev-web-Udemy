function formatMoney(value) {
    value = value.toFixed(2)
    return '$ ' + value
}

function update() {
    let conta = Number(document.getElementById('yourBill').value)
    let percentualGorjeta = Number(document.getElementById('tipInput').value)
    let dividir = Number(document.getElementById('splitInput').value)
    
    let valorGorjeta = conta * (percentualGorjeta / 100)
    let contaTotal = conta + valorGorjeta
    let contaDividir = contaTotal / dividir

    document.getElementById('tipPercent').innerHTML = `${percentualGorjeta}%`
    document.getElementById('tipValue').innerHTML = formatMoney(valorGorjeta)
    document.getElementById('totalWithTip').innerHTML = formatMoney(contaTotal)
    document.getElementById('splitValue').innerHTML = `${dividir} Pessoas`
    document.getElementById('billEach').innerHTML = formatMoney(contaDividir)

console.log(valorGorjeta, contaTotal, contaDividir)
}
