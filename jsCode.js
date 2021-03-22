var characters = {
a:{hiragana: "あ", katakana: "ア", sound: "a", file: "a.mp3", row:"one"}, i: {hiragana: "い", katakana: "イ", sound: "i", file: "i.mp3", row:"two"},
u: {hiragana: "う", katakana: "ウ", sound: "u", file: "u.mp3", row:"three"}, e: {hiragana: "え", katakana: "エ", sound: "e", file: "e.mp3", row:"four"}, 
o:{hiragana: "お", katakana: "イ", sound: "o", file: "o.mp3", row:"five"},

ka: {hiragana: "か", katakana: "カ", sound: "ka", file: "ka.mp3", row:"one"}, ki: {hiragana: "き", katakana: "キ", sound: "ki", file: "ki.mp3", row:"two"}, 
ku:{hiragana: "く", katakana: "ク", sound: "ku", file: "ku.mp3", row:"three"}, ke: {hiragana: "け", katakana: "ケ", sound: "ke", file: "ke.mp3", row:"four"},
ko: {hiragana: "こ", katakana: "コ", sound: "ko", file: "ko.mp3", row:"five"},

sa: {hiragana: "さ", katakana: "サ", sound: "sa", file: "sa.mp3", row:"one"}, shi: {hiragana: "し", katakana: "シ", sound: "shi", file: "shi.mp3", row:"two"}, 
su:{hiragana: "す", katakana: "ス", sound: "su", file: "su.mp3", row:"three"}, se: {hiragana: "せ", katakana: "セ", sound: "se", file: "se.mp3", row:"four"},
so: {hiragana: "そ", katakana: "ソ", sound: "so", file: "so.mp3", row:"five"},

ta: {hiragana: "た", katakana: "タ", sound: "ta", file: "ta.mp3", row:"one"}, chi: {hiragana: "ち", katakana: "チ", sound: "chi", file: "chi.mp3", row:"two"}, 
tsu:{hiragana: "つ", katakana: "ツ", sound: "tsu", file: "tsu.mp3", row:"three"}, te: {hiragana: "て", katakana: "テ", sound: "te", file: "te.mp3", row:"four"},
to: {hiragana: "と", katakana: "ト", sound: "to", file: "to.mp3", row:"five"},

na: {hiragana: "な", katakana: "ナ", sound: "na", file: "na.mp3", row:"one"}, ni: {hiragana: "に", katakana: "ニ", sound: "ni", file: "ni.mp3", row:"two"}, 
nu:{hiragana: "ぬ", katakana: "ヌ", sound: "nu", file: "nu.mp3", row:"three"}, ne: {hiragana: "ね", katakana: "ネ", sound: "ne", file: "ne.mp3", row:"four"},
no: {hiragana: "の", katakana: "ノ", sound: "no", file: "no.mp3", row:"five"},

ha: {hiragana: "は", katakana: "ハ", sound: "ha", file: "ha.mp3", row:"one"}, hi: {hiragana: "ひ", katakana: "ヒ", sound: "hi", file: "hi.mp3", row:"two"}, 
fu:{hiragana: "ふ", katakana: "フ", sound: "fu", file: "fu.mp3", row:"three"}, he: {hiragana: "へ", katakana: "ヘ", sound: "he", file: "he.mp3", row:"four"},
ho: {hiragana: "ほ", katakana: "ホ", sound: "ho", file: "ho.mp3", row:"five"},

ma: {hiragana: "ま", katakana: "マ", sound: "ma", file: "ma.mp3", row:"one"}, mi: {hiragana: "み", katakana: "ミ", sound: "mi", file: "mi.mp3", row:"two"}, 
mu:{hiragana: "む", katakana: "ム", sound: "mu", file: "mu.mp3", row:"three"}, me: {hiragana: "め", katakana: "メ", sound: "me", file: "me.mp3", row:"four"},
mo: {hiragana: "も", katakana: "モ", sound: "mo", file: "mo.mp3", row:"five"},

ya: {hiragana: "や", katakana: "ヤ", sound: "ya", file: "ya.mp3", row:"one"}, null1:{hiragana:" ", katakana:" ", row: "two"},
yu:{hiragana: "ゆ", katakana: "ユ", sound: "yu", file: "yu.mp3", row:"three"}, null2:{hiragana:" ", katakana:" ", row: "four"},
yo: {hiragana: "よ", katakana: "ヨ", sound: "yo", file: "yo.mp3", row:"five"},

ra: {hiragana: "ら", katakana: "ラ", sound: "ra", file: "ra.mp3", row:"one"}, ri: {hiragana: "り", katakana: "リ", sound: "ri", file: "ri.mp3", row:"two"}, 
ru:{hiragana: "る", katakana: "ル", sound: "ru", file: "ru.mp3", row:"three"}, re: {hiragana: "れ", katakana: "レ", sound: "re", file: "re.mp3", row:"four"},
ro: {hiragana: "ろ", katakana: "ロ", sound: "ro", file: "ro.mp3", row:"five"},

wa: {hiragana: "わ", katakana: "ワ", sound: "wa", file: "wa.mp3", row:"one"}, null3:{hiragana:" ", katakana:" ", row: "two"},
null4:{hiragana:" ", katakana:" ", row: "three"}, null5:{hiragana:" ", katakana:" ", row: "four"},
wo: {hiragana: "を", katakana: "ヲ", sound: "wo", file: "wo.mp3", row:"five"},

n: {hiragana: "ん", katakana: "ン", sound: "n", file: "n.mp3", row:"three"},
}

var hiragana = true

$(document).on("click", "#k-switch", function(){
    hiragana = false
    $("tr.one").html("")
    $("tr.two").html("")
    $("tr.three").html("")
    $("tr.four").html("")
    $("tr.five").html("")
    repopulate()
})

$(document).on("click", "#h-switch", function(){
    hiragana = true
    $("tr.one").html("")
    $("tr.two").html("")
    $("tr.three").html("")
    $("tr.four").html("")
    $("tr.five").html("")
    repopulate()
})

function repopulate() {
    $.each(characters, function() {
   // console.log("Hiragana: " + this.hiragana, "Katakana: " + this.katakana );
        if (hiragana) {
            var hSpace = "<td class='" + this.row +"' value='" + this.file + "'>" + this.hiragana + "</td>"
        }else {
        var hSpace =  "<td class='" + this.row +"' value='" + this.file + "'>" + this.katakana + "</td>"
        }
        if (this.row == "one") {
            $("tr.one").append(hSpace)
        }
        if (this.row == "two") {
            $("tr.two").append(hSpace)
        }
        if (this.row == "three") {
            $("tr.three").append(hSpace)
        }
        if (this.row == "four") {
            $("tr.four").append(hSpace)
        }
        if (this.row == "five") {
            $("tr.five").append(hSpace)
        }
    });
} 
$(document).ready( function(){
    repopulate()
})
$(document).on("click", "td", function(){
 //   console.log($(this).text())
    var audio = ($(this).attr("value"))
    playAudio("JapaneseCharacters/"+ audio)
})
function playAudio(url) {
    new Audio(url).play();
  }