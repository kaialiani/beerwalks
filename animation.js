var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");


document.querySelector("#pausebtn").addEventListener("click", PauseGame);
document.querySelector("#playbtn").addEventListener("click", PauseGame);

function PauseGame() {
  if (video.paused) {
    video.play();
    document.querySelector("#playbtn").classList.add("hidden");
    document.querySelector("#pausebtn").classList.remove("hidden");
  } else {
    video.pause();
    document.querySelector("#pausebtn").classList.add("hidden");
    document.querySelector("#playbtn").classList.remove("hidden");
  }
}