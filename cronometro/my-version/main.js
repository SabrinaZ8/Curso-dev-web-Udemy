const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let time = 0
let interval;

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTime() {
    time++
    display.innerHTML = formatTime(time)
    startButton.disabled = true
    stopButton.disabled = false
}

startButton.addEventListener('click', function(){
  interval = setInterval(() => {
  startTime()
}, 1000);
})

stopButton.addEventListener('click', function(){
  clearInterval(interval)
  startButton.disabled = false
  stopButton.disabled = true
})

resetButton.addEventListener('click', function() {
  clearInterval(interval)
  time = 0
  display.innerHTML = formatTime(0)
  startButton.disabled = false
  stopButton.disabled = false
})