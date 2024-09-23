let fruitLIst = document.getElementById('fruitList')

const fruits = ['Melancia', 'Ameixa', 'Morango', 'Laranja', 'Uva']

for(let i = 0; i < fruits.length; i++) {
    let listItem = document.createElement('li')
    listItem.textContent = fruits[i]
    fruitLIst.appendChild(listItem)
}

