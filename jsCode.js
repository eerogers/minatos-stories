//There's definitely a cleaner way to do this, but for now -- row one:
var i = "i.mp3"

$(document).on("click", "#a", function(){
    playAudio("JapaneseCharacters/a.mp3")
})
$(document).on("click", "#i", function(){
    playAudio("JapaneseCharacters/" + i)
})
$(document).on("click", "#u", function(){
    playAudio("JapaneseCharacters/u.mp3")
})
$(document).on("click", "#e", function(){
    playAudio("JapaneseCharacters/e.mp3")
})
$(document).on("click", "#o", function(){
    playAudio("JapaneseCharacters/o.mp3")
})
//Row two:
$(document).on("click", "#ka", function(){
    playAudio("JapaneseCharacters/ka.mp3")
})
$(document).on("click", "#ki", function(){
    playAudio("JapaneseCharacters/ki.mp3")
})
$(document).on("click", "#ku", function(){
    playAudio("JapaneseCharacters/ku.mp3")
})
$(document).on("click", "#ke", function(){
    playAudio("JapaneseCharacters/ke.mp3")
})
$(document).on("click", "#ko", function(){
    playAudio("JapaneseCharacters/ko.mp3")
})
//Row three:
$(document).on("click", "#sa", function(){
    playAudio("JapaneseCharacters/sa.mp3")
})
$(document).on("click", "#shi", function(){
    playAudio("JapaneseCharacters/shi.mp3")
})
$(document).on("click", "#su", function(){
    playAudio("JapaneseCharacters/su.mp3")
})
$(document).on("click", "#se", function(){
    playAudio("JapaneseCharacters/se.mp3")
})
$(document).on("click", "#so", function(){
    playAudio("JapaneseCharacters/so.mp3")
})
//Row four:
$(document).on("click", "#ta", function(){
    playAudio("JapaneseCharacters/ta.mp3")
})
$(document).on("click", "#chi", function(){
    playAudio("JapaneseCharacters/chi.mp3")
})
$(document).on("click", "#tsu", function(){
    playAudio("JapaneseCharacters/tsu.mp3")
})
$(document).on("click", "#te", function(){
    playAudio("JapaneseCharacters/te.mp3")
})
$(document).on("click", "#to", function(){
    playAudio("JapaneseCharacters/to.mp3")
})
//Row five:
$(document).on("click", "#na", function(){
    playAudio("JapaneseCharacters/na.mp3")
})
$(document).on("click", "#ni", function(){
    playAudio("JapaneseCharacters/ni.mp3")
})
$(document).on("click", "#nu", function(){
    playAudio("JapaneseCharacters/nu.mp3")
})
$(document).on("click", "#ne", function(){
    playAudio("JapaneseCharacters/ne.mp3")
})
$(document).on("click", "#no", function(){
    playAudio("JapaneseCharacters/no.mp3")
})
//Row six:
$(document).on("click", "#ha", function(){
    playAudio("JapaneseCharacters/ha.mp3")
})
$(document).on("click", "#hi", function(){
    playAudio("JapaneseCharacters/hi.mp3")
})
$(document).on("click", "#fu", function(){
    playAudio("JapaneseCharacters/fu.mp3")
})
$(document).on("click", "#he", function(){
    playAudio("JapaneseCharacters/he.mp3")
})
$(document).on("click", "#ho", function(){
    playAudio("JapaneseCharacters/ho.mp3")
})
//Row seven:
$(document).on("click", "#ma", function(){
    playAudio("JapaneseCharacters/ma.mp3")
})
$(document).on("click", "#mi", function(){
    playAudio("JapaneseCharacters/mi.mp3")
})
$(document).on("click", "#mu", function(){
    playAudio("JapaneseCharacters/mu.mp3")
})
$(document).on("click", "#me", function(){
    playAudio("JapaneseCharacters/me.mp3")
})
$(document).on("click", "#mo", function(){
    playAudio("JapaneseCharacters/mo.mp3")
})
//Row eight:
$(document).on("click", "#ya", function(){
    playAudio("JapaneseCharacters/ya.mp3")
})
$(document).on("click", "#yu", function(){
    playAudio("JapaneseCharacters/yu.mp3")
})
$(document).on("click", "#yo", function(){
    playAudio("JapaneseCharacters/yo.mp3")
})
//Row nine:
$(document).on("click", "#ra", function(){
    playAudio("JapaneseCharacters/ra.mp3")
})
$(document).on("click", "#ri", function(){
    playAudio("JapaneseCharacters/ri.mp3")
})
$(document).on("click", "#ru", function(){
    playAudio("JapaneseCharacters/ru.mp3")
})
$(document).on("click", "#re", function(){
    playAudio("JapaneseCharacters/re.mp3")
})
$(document).on("click", "#ro", function(){
    playAudio("JapaneseCharacters/ro.mp3")
})
//Row ten:
$(document).on("click", "#wa", function(){
    playAudio("JapaneseCharacters/wa.mp3")
})
$(document).on("click", "#wo", function(){
    playAudio("JapaneseCharacters/wo.mp3")
})
//Row eleven:
$(document).on("click", "#n", function(){
    playAudio("JapaneseCharacters/n.mp3")
})
function playAudio(url) {
    new Audio(url).play();
  }