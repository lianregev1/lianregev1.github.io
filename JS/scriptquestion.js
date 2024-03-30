var monica = 0;
var rachel = 0;
var phoebe = 0;
var menus = document.getElementsByClassName("menu");
var questions = document.getElementsByClassName("question");
var buttons = document.getElementsByClassName("buttons");
var results = document.getElementsByClassName("result");
function hideQuestion () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("girls").style.display = 'none';
    for (var i = 0; i < results.length; i++) {
        results[i].style.display = 'none';
    } 
}
function showQuestion1 () {
    document.getElementById("first").style.display = 'block';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("girls").style.display = 'none';
    document.getElementById("rachel").style.display = 'block';
    document.getElementById("next").onclick = showQuestion2;
}
function showQuestion2 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'block';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("girls").style.display = 'none';
    document.getElementById("phibyFirst").style.display = 'block';
    document.getElementById("finalMonica").style.display = 'none';
    document.getElementById("finalRachel").style.display = 'none';
    document.getElementById("finalPhoebe").style.display = 'none';
    document.getElementById("next").onclick = showQuestion3;
    document.getElementById("before").onclick = showQuestion1;
}
function showQuestion3 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'block';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("girls").style.display = 'none';
    document.getElementById("phibySecond").style.display = 'block';
    document.getElementById("finalMonica").style.display = 'none';
    document.getElementById("finalRachel").style.display = 'none';
    document.getElementById("finalPhoebe").style.display = 'none';
    document.getElementById("next").onclick = showQuestion4;
    document.getElementById("before").onclick = showQuestion2;
}
function showQuestion4 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'block';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("girls").style.display = 'none';
    document.getElementById("monica").style.display = 'block';
    document.getElementById("finalMonica").style.display = 'none';
    document.getElementById("finalRachel").style.display = 'none';
    document.getElementById("finalPhoebe").style.display = 'none';
    document.getElementById("next").onclick = showQuestion5;
    document.getElementById("before").onclick = showQuestion3;
}
function showQuestion5 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("girls").style.display = 'none';
    document.getElementById("fifth").style.display = 'block';
    document.getElementById("boys").style.display = 'block';
    document.getElementById("finalMonica").style.display = 'none';
    document.getElementById("finalRachel").style.display = 'none';
    document.getElementById("finalPhoebe").style.display = 'none';
    document.getElementById("before").onclick = showQuestion4;
}

function saveAnswerMonica () {
    monica+=1;
    console.log ("monica" + monica);
}
function saveAnswerRachel () {
    rachel+=1;
    console.log ("rachel" + rachel);
}
function saveAnswerPhoebe () {
    phoebe+=1;
    console.log ("phoebe" + phoebe);
}

function resultQuestion () {
    if (monica > rachel && monica > phoebe) {
        console.log("you are monica");
        document.getElementById("finalMonica").style.display = 'block';
    } else if (rachel > monica && rachel > phoebe) {
        console.log("you are rachel");
        document.getElementById("finalRachel").style.display = 'block';
    } else if (phoebe > monica && phoebe > rachel) {
        console.log("you are phoebe");
        document.getElementById("finalPhoebe").style.display = 'block';
    } else if (monica == rachel && monica != phoebe) {
        console.log("you are monica and rachel");
        document.getElementById("finalMonRac").style.display = 'block';
    } else if (monica == phoebe && monica != rachel) {
        console.log("you are monica and phoebe");
        document.getElementById("finalMonPho").style.display = 'block';
    } else if (rachel == phoebe && rachel != monica) {
        console.log("you are rachel and phoebe");
        document.getElementById("finalRacPho").style.display = 'block';
    }
    
    // Common code for hiding elements
    document.getElementById("title").style.display = 'none';
    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none';
    }
    for (var j = 0; j < menus.length; j++) {
        menus[j].style.display = 'none';
    }
    for (var k = 0; k < buttons.length; k++) {
        buttons[k].style.display = 'none';
    }
}
