function play() {
audio = document.createElement("audio");
audio.setAttribute("src", "rain.mp3");
audio.setAttribute("autoplay", "autoplay");
audio.setAttribute("start", "00:00:00.00");
audio.setAttribute("loopstart", "00:00:00");
audio.setAttribute("loopend", "00:01:00");
audio.setAttribute("end", "00:01:00");
audio.setAttribute("playcount", "100");
audio.setAttribute("controls", "true");
document.body.appendChild(audio);
}