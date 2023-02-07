const player = document.getElementById("player");
const volumeControl = document.getElementById("volume");
const playPauseButton = document.getElementById("play-pause");
const audioStreamsSelect = document.getElementById("audio-streams");

// Set the volume of the audio player
volumeControl.addEventListener("input", function() {
  player.volume = this.value;
});

// Play and pause the audio player
playPauseButton.addEventListener("click", function() {
  if (player.paused) {
    player.play();
    playPauseButton.textContent = "Pause";
  } else {
    player.pause();
    playPauseButton.textContent = "Play";
  }
});

// Change the source of the audio player
audioStreamsSelect.addEventListener("change", function() {
  player.src = this.value;
  player.play();
});