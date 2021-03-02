$(document).on("click", "#nextPage", function(){
    
})

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

$(document).on("click", "#there", function(){
    playAudio("There.mp3")
})
$(document).on("click", "#was", function(){
    playAudio("Was.mp3")
})
$(document).on("click", "#boy", function(){
    playAudio("Boy.mp3")
})
$(document).on("click", "#named", function(){
    playAudio("Named.mp3")
})
$(document).on("click", "#Minato", function(){
    playAudio("Minato.mp3")
})
function playAudio(url) {
    new Audio(url).play();
  }