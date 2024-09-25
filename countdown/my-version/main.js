const countdown = document.getElementById('countdown');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let time = 60 * 5
let interval;

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTime() {
  if(time == 0) {
  clearInterval(interval)
  time = 60 * 5
  countdown.innerHTML = formatTime(time)
  } else {
    time--
    countdown.innerHTML = formatTime(time)
  }
}

startButton.addEventListener('click', function(){
  startButton.disabled = true
  stopButton.disabled = false
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
  time = 60 * 5
  countdown.innerHTML = formatTime(time)
  startButton.disabled = false
  stopButton.disabled = false
})