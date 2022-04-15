var form = document.getElementById("form")
var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
var gameBox = document.getElementsByClassName("gameBox")
var td = document.getElementsByTagName("td")
var xUserBtn = document.getElementById("xUserBtn")
var oUserBtn = document.getElementById("oUserBtn")
var resultBox = document.getElementsByClassName("resultBox")
var winnerSymbol = document.getElementById("winnerSymbol");
var winHeading = document.getElementById("winHeading")

//start the game
function start() {
    if(player1.value=="" || player2.value==""){
        alert("Kindly fill the input field")
    }
    else
    {
    form.classList.add("hide")
    gameBox[0].classList.remove("hide")
    oUserBtn.innerHTML = player2.value + `<p></p> O users`
    xUserBtn.innerHTML = player1.value + `<p></p> X users`
    oUserBtn.style.backgroundColor = "rgb(255, 166, 0)";
    xUserBtn.style.background = "white"
    alert(player2.value + " will get the first turn..!!")
    xUser(xUserBtn);
    oUser(oUserBtn);
    }
}

function xUser(e) {
    for (var i = 0; i < td.length; i++) {
        td[i].setAttribute("onclick", "checkX(this)")
    }
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "visible";

    }
}

function oUser(e) {
    for (var i = 0; i < td.length; i++) {
        td[i].setAttribute("onclick", "checkO(this)")
    }

    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "visible";

    }
}

function checkX(e) {
    e.innerHTML = "X"
    e.style.color = "white"
    e.className += " tdDisable"
    var xWin = false
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "none";
    }
    if (td[0].innerHTML == "X" && td[1].innerHTML == "X" && td[2].innerHTML == "X") {
        xWin = true
    }
    else if (td[3].innerHTML == "X" && td[4].innerHTML == "X" && td[5].innerHTML == "X") {
        xWin = true
    }
    else if (td[6].innerHTML == "X" && td[7].innerHTML == "X" && td[8].innerHTML == "X") {
        xWin = true
    }
    else if (td[0].innerHTML == "X" && td[3].innerHTML == "X" && td[6].innerHTML == "X") {
        xWin = true
    }
    else if (td[1].innerHTML == "X" && td[4].innerHTML == "X" && td[7].innerHTML == "X") {
        xWin = true
    }
    else if (td[2].innerHTML == "X" && td[5].innerHTML == "X" && td[8].innerHTML == "X") {
        xWin = true
    }
    else if (td[0].innerHTML == "X" && td[4].innerHTML == "X" && td[8].innerHTML == "X") {
        xWin = true
    }
    else if (td[2].innerHTML == "X" && td[4].innerHTML == "X" && td[6].innerHTML == "X") {
        xWin = true
    }

    else if ((td[0].innerHTML != "" && td[1].innerHTML != "" && td[2].innerHTML != "") && (td[3].innerHTML != "" && td[4].innerHTML != "" && td[5].innerHTML != "") && (td[6].innerHTML != "" && td[7].innerHTML != "" && td[8].innerHTML != "")) {
        gameBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winnerSymbol.innerHTML = "X O"
        winHeading.innerHTML = "Match Tie !"

    }
    oUser(oUserBtn);
    if (xWin == true) {
        gameBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winnerSymbol.innerHTML = "X"
    }
}

function checkO(e) {
    e.innerHTML = "O"
    e.style.color = "rgb(255, 166, 0)"
    e.className += " tdDisable"

    var oWin = false
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "none";

    }

    if (td[0].innerHTML == "O" && td[1].innerHTML == "O" && td[2].innerHTML == "O") {
        oWin = true
    }
    else if (td[3].innerHTML == "O" && td[4].innerHTML == "O" && td[5].innerHTML == "O") {
        oWin = true
    }
    else if (td[6].innerHTML == "O" && td[7].innerHTML == "O" && td[8].innerHTML == "O") {
        oWin = true
    }
    else if (td[0].innerHTML == "O" && td[3].innerHTML == "O" && td[6].innerHTML == "O") {
        oWin = true
    }
    else if (td[1].innerHTML == "O" && td[4].innerHTML == "O" && td[7].innerHTML == "O") {
        oWin = true
    }
    else if (td[2].innerHTML == "O" && td[5].innerHTML == "O" && td[8].innerHTML == "O") {
        oWin = true
    }
    else if (td[0].innerHTML == "O" && td[4].innerHTML == "O" && td[8].innerHTML == "O") {
        oWin = true
    }
    else if (td[2].innerHTML == "O" && td[4].innerHTML == "O" && td[6].innerHTML == "O") {
        oWin = true
    }


    else if ((td[0].innerHTML != "" && td[1].innerHTML != "" && td[2].innerHTML != "") && (td[3].innerHTML != "" && td[4].innerHTML != "" && td[5].innerHTML != "") && (td[6].innerHTML != "" && td[7].innerHTML != "" && td[8].innerHTML != "")) {
        gameBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winnerSymbol.innerHTML = "X O"
        winHeading.innerHTML = "Match Tie !"
    }
    xUser(xUserBtn)
    if (oWin == true) {
        gameBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winnerSymbol.innerHTML = "O"
    }
}


