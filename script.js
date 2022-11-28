console.log("page loaded...");

var video = document.getElementById("myVideo")

function mouseOnTheVideo (video) {
    video.play();
    video.muted = true;
}

function mouseOutOfVideo (x) {
    video.pause();
    video.currentTime = 0;
}
