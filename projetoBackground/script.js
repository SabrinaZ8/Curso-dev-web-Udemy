
function changeBackgroundColor() {
    let colors = ['red', 'green', 'yellow', 'blue', 'purple', 'pink', 'orange']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]

    document.body.style.backgroundColor = randomColor
}