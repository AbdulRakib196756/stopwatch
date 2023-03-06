let startTime, elapsedTime = 0, timerInterval;

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
  }
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById('display').innerHTML = '00:00:00';
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime - (minutes * 60000)) / 1000);
  const milliseconds = Math.floor((elapsedTime - (minutes * 60000) - (seconds * 1000)) / 10);
  document.getElementById('display').innerHTML = formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(milliseconds);
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}
