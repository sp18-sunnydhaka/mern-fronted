const timer    = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn  = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const startEle = document.getElementById('start-box');
const middleEle = document.getElementById('middle-box');

const up = document.createElement('div');
up.className = 'blue-box';


const down = document.createElement('div');
down.className = 'orange-box';

let count = 0;
let startInterval;
function tick() {
  count++;
  timer.innerText = count;
  startEle.parentNode.insertBefore(up, startEle.nextSibling);
  middleEle.parentNode.insertBefore(down, middleEle.nextSibling);
  if (count > 9) {
    clearInterval(startInterval);
  }
}


startBtn.addEventListener('click', function() {
  if (!startInterval) {
    startInterval = setInterval(tick, 1000)
  }
})

stopBtn.addEventListener('click', function() {
  clearInterval(startInterval);
  startInterval = null;
})

resetBtn.addEventListener('click', function() {
  clearInterval(startInterval);
  startInterval = null;
  count = 0 ;        
  timer.innerText = count; 
})
