alert("welcome to ETCH,  a program developed my robo-monk");

const container = document.querySelector('#container');
const table = document.createElement('table');
var pressedKeys = {};
const grid_width = 16;
const grid_height = 16;

//TO-DO create the table and then add the rows programmatically

for (i=0; i<grid_height; i++){
    //row
    const row = document.createElement('tr');
    container.appendChild(row);
    for (u = 0; u < grid_width; u++) {
        const col = document.createElement('td');
        const div = document.createElement('div');
        div.classList.add("square");
        row.appendChild(col);
        col.appendChild(div);
        div.onmouseenter = function () { hovered(div) };
        //todo generate geight and width values with java script not html
    }
}



function keyDown(e){

    pressedKeys[e.keyCode] = true;
}

function keyUp(e){

    pressedKeys[e.keyCode] = false;

}


function hovered(object){

    console.log(this);
    object.style.backgroundColor = 'black';

}


window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
