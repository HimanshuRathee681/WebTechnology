var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]];
}

/* TODO implement core labyrinth functionality here */

function printconsole() {

    Labyrinth();
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 6; j++) {
            var temp = map[i][j];
            if (temp == 1) {
                map[i][j] = "*";
            }
            else {
                map[i][j] = " ";
            }
        }
        console.log(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5]);
    }
}

function Display() {

    Labyrinth();
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 6; j++) {
            var temp = map[i][j];
            if (i == 0 && j == 0) {
                var start = document.createElement("div");
                start.className = 'start';
                start.id = 'myId'
                document.body.appendChild(start);
                var empty = document.createElement("div");
                empty.className = 'empty';
                document.body.appendChild(empty); 
            }
            else if (i == 3 && j == 5) {
                var goal = document.createElement("div");
                goal.className = 'goal';
                document.body.appendChild(goal);
            }
            else if (temp == 1) {
                var wall = document.createElement("div");
                wall.className = 'wall';
                document.body.appendChild(wall);
            }
            else {
                var empty = document.createElement("div");
                empty.className = 'empty';
                document.body.appendChild(empty);
            }
        }
        var nextline = document.createElement("br");
        document.body.appendChild(nextline);
    }
};

var arrayofwall = [{x: 208,y: 4},{x: 308,y: 4},{x: 408,y: 4},{x: 8,y: 104},
    {x: 408,y: 104},{x: 8,y: 204},{x: 208,y: 204},{x: 8,y: 304},{x: 208,y: 304},
    {x: 308,y: 304},{x: 408,y: 304}, {x: 8,y: 404},{x: 408,y: 404}];