function play(file) {
  var audio = new Audio(`${file}.mp3`);
  audio.play();
}

//I don't have the sound files lol

window.onload = function() {
  var sounds = document.querySelectorAll(".button") 
  sounds.forEach(sound => {
    sound.addEventListener("click", function() {
      play(sound.name) //I think that's how you do it?
    })
  }) 
}
