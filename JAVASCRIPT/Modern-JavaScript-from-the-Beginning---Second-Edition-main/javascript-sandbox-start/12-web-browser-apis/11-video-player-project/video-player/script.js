const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const video = document.querySelector('video');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
function upadteProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //   Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  //   Get secounds
  let secounds = Math.floor(video.currentTime % 60);
  if (secounds < 10) {
    secounds = '0' + String(secounds);
  }
  timestamp.innerHTML = `${minutes}:${secounds}`;
}
function setProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

playBtn.addEventListener('click', playPause);
video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);

stopBtn.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

video.addEventListener('timeupdate', upadteProgress);
progress.addEventListener('click', setProgress);
