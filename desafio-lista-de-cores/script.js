const h1 = document.querySelector('h1')
let colorList = [] 

for(let i = 1; i <= 3; i++) {
    let userColor = prompt(`Digite a cor ${i}:`)
    colorList.push(userColor)
}

h1.innerHTML = `${colorList}`