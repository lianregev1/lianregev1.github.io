document.getElementById("first").style.display = 'block';
document.getElementById("second").style.display = 'none';
document.getElementById("third").style.display = 'none';
document.getElementById("fourth").style.display = 'none';
document.getElementById("fifth").style.display = 'none';
document.getElementById("girls").style.display = 'none';

function show(X){
    document.getElementById("q"+X).style.display = 'block';
    document.getElementById("girls").style.display = 'none';


    function resultQuestion () {
        if(monica>rachel && monica>phoebe){
        console.log ("you are monica");
        document.getElementById("finalMonica").style.display = 'block';
        document.getElementById("title").style.display = 'none';
        for (var i = 0; i < questions.length; i++) {
            questions[i].style.display = 'none';
        }
        for (var j = 0; j < menus.length; j++) {
            menus[j].style.display = 'none';
        }
        for (var k = 0; k < buttons.length; k++){
            buttons[k].style.display = 'none';
        }
        }
        if(rachel>monica && rachel>phoebe){
            console.log("you are rachel");
            document.getElementById("finalRachel").style.display = 'block';
            document.getElementById("title").style.display = 'none';
            for (var i = 0; i < questions.length; i++) {
                questions[i].style.display = 'none';
            }
            for (var j = 0; j < menus.length; j++) {
                menus[j].style.display = 'none';
            }
            for (var k = 0; k < buttons.length; k++){
                buttons[k].style.display = 'none';
            }
            }
        if(phoebe>monica && phoebe>rachel){
            console.log("you are phoebe");
            document.getElementById("finalPhoebe").style.display = 'block';
            document.getElementById("title").style.display = 'none';
            for (var i = 0; i < questions.length; i++) {
                questions[i].style.display = 'none';
            }
            for (var j = 0; j < menus.length; j++) {
                menus[j].style.display = 'none';
            }
            for (var k = 0; k < buttons.length; k++){
                buttons[k].style.display = 'none';
            }
        }
        if(monica==rachel && monica!=phoebe){
            console.log("you are monica and rachel");
            document.getElementById("finalMonRac").style.display = 'block';
            document.getElementById("title").style.display = 'none';
            for (var i = 0; i < questions.length; i++) {
                questions[i].style.display = 'none';
            }
            for (var j = 0; j < menus.length; j++) {
                menus[j].style.display = 'none';
            }
            for (var k = 0; k < buttons.length; k++){
                buttons[k].style.display = 'none';
            }
        }
        if(monica==phoebe && monica!=rachel){
            console.log("you are monica and phoebe");
            document.getElementById("finalMonPho").style.display = 'block';
            document.getElementById("title").style.display = 'none';
            for (var i = 0; i < questions.length; i++) {
                questions[i].style.display = 'none';
            }
            for (var j = 0; j < menus.length; j++) {
                menus[j].style.display = 'none';
            }
            for (var k = 0; k < buttons.length; k++){
                buttons[k].style.display = 'none';
            }
        } 
        if(rachel==phoebe && rachel!=monica){
            console.log("you are rachel and phoebe");
            document.getElementById("finalRacPho").style.display = 'block';
            document.getElementById("title").style.display = 'none';
            for (var i = 0; i < questions.length; i++) {
                questions[i].style.display = 'none';
            }
            for (var j = 0; j < menus.length; j++) {
                menus[j].style.display = 'none';
            }
            for (var k = 0; k < buttons.length; k++){
                buttons[k].style.display = 'none';
            }
        }
    }
    