const counter = document.getElementById('counter')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const reset = document.getElementById('reset')

let valorATual = 0

increment.addEventListener('click', function() {
 valorATual++
 counter.innerText = valorATual
})

decrement.addEventListener('click', function() {
  if(valorATual > 0) valorATual--
  counter.innerText = valorATual
 })

 reset.addEventListener('click', function() {
  counter.innerText = '0'
 })