var characters = {
a:{hiragana: "あ", katakana: "ア", sound: "a", file: "a.mp3"}, i: {hiragana: "い", katakana: "イ", sound: "i", file: "i.mp3"},
u: {hiragana: "う", katakana: "ウ", sound: "u", file: "u.mp3"}, e: {hiragana: "え", katakana: "エ", sound: "e", file: "e.mp3"}, 
o:{hiragana: "お", katakana: "イ", sound: "o", file: "o.mp3"}, 
ka: {hiragana: "か", katakana: "カ", sound: "ka", file: "ka.mp3"}, ki: {hiragana: "き", katakana: "キ", sound: "ki", file: "ki.mp3"}, 
ku:{hiragana: "く", katakana: "ク", sound: "ku", file: "ku.mp3"}, ke: {hiragana: "け", katakana: "ケ", sound: "ke", file: "ke.mp3"},
ko: {hiragana: "こ", katakana: "コ", sound: "ko", file: "ko.mp3"},
sa: {hiragana: "さ", katakana: "サ", sound: "sa", file: "sa.mp3"}, shi: {hiragana: "し", katakana: "シ", sound: "shi", file: "shi.mp3"}, 
su:{hiragana: "す", katakana: "ス", sound: "su", file: "su.mp3"}, se: {hiragana: "せ", katakana: "セ", sound: "se", file: "se.mp3"},
so: {hiragana: "そ", katakana: "ソ", sound: "so", file: "so.mp3"},
ta: {hiragana: "た", katakana: "タ", sound: "ta", file: "ta.mp3"}, chi: {hiragana: "ち", katakana: "チ", sound: "chi", file: "chi.mp3"}, 
tsu:{hiragana: "つ", katakana: "ツ", sound: "tsu", file: "tsu.mp3"}, te: {hiragana: "て", katakana: "テ", sound: "te", file: "te.mp3"},
to: {hiragana: "と", katakana: "ト", sound: "to", file: "to.mp3"},
na: {hiragana: "な", katakana: "ナ", sound: "na", file: "na.mp3"}, ni: {hiragana: "に", katakana: "ニ", sound: "ni", file: "ni.mp3"}, 
nu:{hiragana: "ぬ", katakana: "ヌ", sound: "nu", file: "nu.mp3"}, ne: {hiragana: "ね", katakana: "ネ", sound: "ne", file: "ne.mp3"},
no: {hiragana: "の", katakana: "ノ", sound: "no", file: "no.mp3"},
ha: {hiragana: "は", katakana: "ハ", sound: "ha", file: "ha.mp3"}, hi: {hiragana: "ひ", katakana: "ヒ", sound: "hi", file: "hi.mp3"}, 
fu:{hiragana: "ふ", katakana: "フ", sound: "fu", file: "fu.mp3"}, he: {hiragana: "へ", katakana: "ヘ", sound: "he", file: "he.mp3"},
ho: {hiragana: "ほ", katakana: "ホ", sound: "ho", file: "ho.mp3"},
ma: {hiragana: "ま", katakana: "マ", sound: "ma", file: "ma.mp3"}, mi: {hiragana: "み", katakana: "ミ", sound: "mi", file: "mi.mp3"}, 
mu:{hiragana: "む", katakana: "ム", sound: "mu", file: "mu.mp3"}, me: {hiragana: "め", katakana: "メ", sound: "me", file: "me.mp3"},
mo: {hiragana: "も", katakana: "モ", sound: "mo", file: "mo.mp3"},
ya: {hiragana: "や", katakana: "ヤ", sound: "ya", file: "ya.mp3"},
yu:{hiragana: "ゆ", katakana: "ユ", sound: "yu", file: "yu.mp3"},
yo: {hiragana: "よ", katakana: "ヨ", sound: "yo", file: "yo.mp3"},
ra: {hiragana: "ら", katakana: "ラ", sound: "ra", file: "ra.mp3"}, ri: {hiragana: "り", katakana: "リ", sound: "ri", file: "ri.mp3"}, 
ru:{hiragana: "る", katakana: "ル", sound: "ru", file: "ru.mp3"}, re: {hiragana: "れ", katakana: "レ", sound: "re", file: "re.mp3"},
ro: {hiragana: "ろ", katakana: "ロ", sound: "ro", file: "ro.mp3"},
wa: {hiragana: "わ", katakana: "ワ", sound: "wa", file: "wa.mp3"},
wo: {hiragana: "を", katakana: "ヲ", sound: "wo", file: "wo.mp3"},
n: {hiragana: "ん", katakana: "ン", sound: "n", file: "n.mp3"},
}

console.log (characters.a.hiragana, characters.e.katakana)

//There's definitely a cleaner way to do this, but for now -- row one:


$(document).on("click", "#a", function(){
    playAudio("JapaneseCharacters/a.mp3")
})
$(document).on("click", "#i", function(){
    playAudio("JapaneseCharacters/i.mp3")
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