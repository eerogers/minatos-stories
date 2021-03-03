$(document).on("click", "#nextPage", function(){
    
})

$(document).on("click", "#once", function(){
    playAudio("TheHauntedTreasure/Once.mp3")
})

$(document).on("click", "#upon", function(){
    playAudio("TheHauntedTreasure/Upon.mp3")
})

$(document).on("click", "#a", function(){
    playAudio("TheHauntedTreasure/A.mp3")
})

$(document).on("click", "#time", function(){
    playAudio("TheHauntedTreasure/Time.mp3")
})

$(document).on("click", "#there", function(){
    playAudio("TheHauntedTreasure/There.mp3")
})

$(document).on("click", "#was", function(){
    playAudio("TheHauntedTreasure/Was.mp3")
})

$(document).on("click", "#boy", function(){
    playAudio("TheHauntedTreasure/Boy.mp3")
})

$(document).on("click", "#named", function(){
    playAudio("TheHauntedTreasure/Named.mp3")
})

$(document).on("click", "#Minato", function(){
    playAudio("TheHauntedTreasure/Minato.mp3")
})
function playAudio(url) {
    new Audio(url).play();
  }