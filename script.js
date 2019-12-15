const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('#container');
const table = document.createElement('table');
var pressedKeys = {};
const grid_square = 32;
const toolbar = document.querySelector('#toolbar');
const instr = document.querySelector('#shortcuts');

const colors = ["#1e2022", "#05668d", "#1a936f", "#eeeeee", "#ffc857", "#EF5D60"]

//todo add red color too

var color_index = 0;

var drawing = false;

//TO-DO create the table and then add the rows programmatically

for (i=0; i<grid_square; i++){
    //row
    const row = document.createElement('tr');
    container.appendChild(row);
    // const square_width = wrapper.style.width/grid_square;
   
    for (u = 0; u < grid_square; u++) {
        const col = document.createElement('td');
        const div = document.createElement('div');
        div.classList.add("square");
        row.appendChild(col);
        col.appendChild(div);
        div.onmousemove = function () { hovered(div) };
        //todo generate geight and width values with java script not html
    }
}



function keyDown(e){

    pressedKeys[e.keyCode] = true;
    keyHit(e.keyCode);
}

function keyUp(e){

    pressedKeys[e.keyCode] = false;

}


function hovered(object){

    if (!pressedKeys["18"]){
        object.style.backgroundColor = colors[color_index];
    }

}

function show(show, object){

    if (show){
        object.style.opacity = 1;
    }else{
        object.style.opacity = 0;
    }

}

function keyHit(key){

    switch (key) {

        case 67:
            console.log("s")
            if (color_index<colors.length-1){
                color_index+=1;
            }else{
                color_index=0;
            }
            wrapper.style.cursor = `url('assets/cursor/${color_index}.png'), auto`;
            break;
        // case y:
        //     // code block
        //     break;
        default:
        // code block
    }
}


window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
toolbar.onmousemove = function () { show(true,toolbar); };
toolbar.onmouseout = function () { show(false,toolbar);}
instr.onmousemove = function () { show(true,instr); };
instr.onmouseout = function () { show(false,instr); }
wrapper.style.cursor = `url('assets/cursor/${color_index}.png'), auto`;

const square_width = 960 / grid_square;

var style = document.createElement('style');
style.innerHTML = `
    .square{

    width: ${square_width}px;
    margin: 0px;
    border-radius: 2px;
    background-color: transparent;
}

.square:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}`;



document.head.appendChild(style);
