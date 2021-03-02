$(document).on("click", "#once", function(){
    playAudio("Once.mp3")
})

$(document).on("click", "#upon", function(){
    playAudio("Upon.mp3")
})

$(document).on("click", "#a", function(){
    playAudio("A.mp3")
})

$(document).on("click", "#time", function(){
    playAudio("Time.mp3")
})

function playAudio(url) {
    new Audio(url).play();
  }