var form = document.getElementById("form")
var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
var gameBox = document.getElementsByClassName("gameBox")
var td = document.getElementsByTagName("td")
var xUserBtn = document.getElementById("xUserBtn")
var OUserBtn = document.getElementById("OUserBtn")
var resultBox = document.getElementsByClassName("resultBox")
var winChange = document.getElementById("winChange");
var winningHeading = document.getElementById("winningHeading")

//start the game
function start() {
    form.classList.add("hide")
    gameBox[0].classList.remove("hide")
    OUserBtn.innerHTML = player2.value + `<p></p> O users`
    xUserBtn.innerHTML = player1.value + `<p></p> X users`
    xUSer(xUserBtn);
    OUSer(OUserBtn);
}





function xUSer(e) {

    e.style.backgroundColor = "rgb(255, 166, 0)";
    OUserBtn.style.background = "white"

    for (var i = 0; i < td.length; i++) {
        td[i].setAttribute("onclick", "tickX(this)")
    }
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "visible";

    }
}

// xUSer(xUserBtn)


function OUSer(e) {

    e.style.backgroundColor = "rgb(255, 166, 0)";
    xUserBtn.style.background = "white"


    for (var i = 0; i < td.length; i++) {
        td[i].setAttribute("onclick", "tickO(this)")
    }

    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "visible";

    }

}



////by default function call  AND Toss start///







////by default function call  AND Toss end///

function tickX(e) {

    e.innerHTML = "X"
    e.style.color = "white"
    e.className += " tdDisable"

    var xWin = false



    ///DISABLED ALL TD ONE TIME SELECT START////
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "none";

    }

    ///DISABLED ALL TD ONE TIME SELECT END////


    ////////MATCH WIN OR MATCH DRAW CONDITION START////////

    if (td[0].innerHTML == "X" && td[1].innerHTML == "X" && td[2].innerHTML == "X") {
        // alert("x wins")
        xWin = true
    }
    else if (td[3].innerHTML == "X" && td[4].innerHTML == "X" && td[5].innerHTML == "X") {
        // alert("x wins")
        xWin = true
    }
    else if (td[6].innerHTML == "X" && td[7].innerHTML == "X" && td[8].innerHTML == "X") {
        // alert("x wins")
        xWin = true
    }
    else if (td[0].innerHTML == "X" && td[3].innerHTML == "X" && td[6].innerHTML == "X") {
        // alert("x wins")
        xWin = true
    }
    else if (td[1].innerHTML == "X" && td[4].innerHTML == "X" && td[7].innerHTML == "X") {
        // alert("x wins")
        xWin = true
    }
    else if (td[2].innerHTML == "X" && td[5].innerHTML == "X" && td[8].innerHTML == "X") {
        // alert("x wins")
        xWin = true
    }
    else if (td[0].innerHTML == "X" && td[4].innerHTML == "X" && td[8].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }
    else if (td[2].innerHTML == "X" && td[4].innerHTML == "X" && td[6].innerHTML == "X") {
        // alert("x wins")
        xWin = true
    }

    else if ((td[0].innerHTML != "" && td[1].innerHTML != "" && td[2].innerHTML != "") && (td[3].innerHTML != "" && td[4].innerHTML != "" && td[5].innerHTML != "") && (td[6].innerHTML != "" && td[7].innerHTML != "" && td[8].innerHTML != "")) {
        gameBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winChange.innerHTML = "X O"
        winningHeading.innerHTML = "MATCH DRAW!"

    }
    ////////MATCH WIN OR MATCH DRAW CONDITION END////////



    ///Function OUser() call START////
    OUSer(OUserBtn);
    ///Function OUser() call END////

    ///SHOW RESULT BOX////
    if (xWin == true) {
        gameBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winChange.innerHTML = "X"
    }


}

function tickO(e) {
    e.innerHTML = "O"
    e.style.color = "rgb(39, 97, 255)"
    e.className += " tdDisable"

    var oWin = false
    ////ONE TIME SELECT OTHERWISE OR TD DISABLED START////
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "none";

    }
    ////ONE TIME SELECT OTHERWISE OR TD DISABLED END////


    ////////MATCH WIN OR MATCH DRAW CONDITION START////////

    if (td[0].innerHTML == "O" && td[1].innerHTML == "O" && td[2].innerHTML == "O") {
        // alert("O wins")
        oWin = true
    }
    else if (td[3].innerHTML == "O" && td[4].innerHTML == "O" && td[5].innerHTML == "O") {
        // alert("O wins")
        oWin = true
    }
    else if (td[6].innerHTML == "O" && td[7].innerHTML == "O" && td[8].innerHTML == "O") {
        // alert("O wins")
        oWin = true
    }
    else if (td[0].innerHTML == "O" && td[3].innerHTML == "O" && td[6].innerHTML == "O") {
        // alert("O wins")
        oWin = true
    }
    else if (td[1].innerHTML == "O" && td[4].innerHTML == "O" && td[7].innerHTML == "O") {
        // alert("O wins")
        oWin = true
    }
    else if (td[2].innerHTML == "O" && td[5].innerHTML == "O" && td[8].innerHTML == "O") {
        // alert("O wins")
        oWin = true
    }
    else if (td[0].innerHTML == "O" && td[4].innerHTML == "O" && td[8].innerHTML == "O") {
        // alert("O wins")
        oWin = true
    }
    else if (td[2].innerHTML == "O" && td[4].innerHTML == "O" && td[6].innerHTML == "O") {
        // alert("O wins")
        oWin = true
    }


    else if ((td[0].innerHTML != "" && td[1].innerHTML != "" && td[2].innerHTML != "") && (td[3].innerHTML != "" && td[4].innerHTML != "" && td[5].innerHTML != "") && (td[6].innerHTML != "" && td[7].innerHTML != "" && td[8].innerHTML != "")) {
        gameBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winChange.innerHTML = "X O"
        winningHeading.innerHTML = "MATCH DRAW!"
    }
    ////////MATCH WIN OR MATCH DRAW CONDITION END////////




    ///function XUser call //
    xUSer(xUserBtn)
    ///////////


    ///SHOW RESULT BOX////
    if (oWin == true) {
        gameBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winChange.innerHTML = "O"
    }
    ////////
}


