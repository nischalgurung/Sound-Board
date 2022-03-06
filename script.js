const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.textContent = sound;
  btn.addEventListener("click", () => {
    stopSongs();
    document.querySelector(`#${sound}`).play();
  });
  document.querySelector("#buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const audio = document.querySelector(`#${sound}`);
    audio.pause();
    audio.currentTime = 0;
  });
}
