const textInput = document.getElementById('text-input');
const countButton = document.getElementById('count-button');
const result = document.getElementById('result');

countButton.addEventListener('click', function() {
    let removeEspacos = textInput.value.split(" ").join("")
    const countLetters = removeEspacos.length
    result.innerText = `The text contains ${countLetters} letters.`
})