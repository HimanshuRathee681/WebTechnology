/* TODO implement game logic here */
Labyrinth();
printconsole();



function detectKey(e) {
    var posLeft = document.getElementById('myId').offsetLeft;
    var posTop = document.getElementById('myId').offsetTop;
    var temp = 0;
    e = e || window.event;
    if (posLeft == 508 && posTop == 304) {
        alert("Congratulations! Reload to try again.");
    }
    else if (e.keyCode == '38' && posTop >= 104) {
        // up arrow
        for (var i = 0; i < 13; i++) {
            if (posLeft == arrayofwall[i].x && (posTop - 100) == arrayofwall[i].y) {
                temp = temp + 1;
            }
        }
        if (temp == 0) {
            document.getElementById('myId').style.marginTop = (posTop - 108) + "px";
        }
    }
    else if (e.keyCode == '40' && posTop <= 304) {
        // down arrow
        for (var i = 0; i < 13; i++) {
            if (posLeft == arrayofwall[i].x && (posTop + 100) == arrayofwall[i].y) {
                temp = temp + 1;
            }
        }
        if (temp == 0) {
            document.getElementById('myId').style.marginTop = (posTop + 92) + "px";
        }
    }
    else if (e.keyCode == '37' && posLeft >= 108) {
        // left arrow
        for (var i = 0; i < 13; i++) {
            if ((posLeft - 100) == arrayofwall[i].x && posTop == arrayofwall[i].y) {
                temp = temp + 1;
            }
        }
        if (temp == 0) {
            document.getElementById('myId').style.marginLeft = (posLeft - 108) + "px";
        }
    }
    else if (e.keyCode == '39' && posLeft <= 408) {
        // right arrow
        for (var i = 0; i < 13; i++) {
            if ((posLeft + 100) == arrayofwall[i].x && posTop == arrayofwall[i].y) {
                temp = temp + 1;
            }
        }
        if (temp == 0) {
            document.getElementById('myId').style.marginLeft = (posLeft + 92) + "px";
        }
    }
}

document.onkeydown = detectKey;


