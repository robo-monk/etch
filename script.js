const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('#container');
const table = document.createElement('table');
var pressedKeys = {};
const grid_square = 32;
const toolbar = document.querySelector('#toolbar');
const instr = document.querySelector('#shortcuts');
const welcome = document.querySelector("#welcome");
var started = false;

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

    if (!started){
        startArt();
    }  

    pressedKeys[e.keyCode] = true;
    keyHit(e.keyCode);
}

function keyUp(e){

    pressedKeys[e.keyCode] = false;

}


function hovered(object){

    if (!pressedKeys["18"]&&started){
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


function startArt(){
    wrapper.appendChild(container)
    wrapper.style.opacity = 1;
    welcome.remove();
    started = true;
}

function exportBoat(){
    // console.log('oof');
    string_raw = "";
    squares = wrapper.querySelectorAll(".square");

    squares.forEach((square) => {
        switch (square.style.backgroundColor){
            case ("rgb(30, 32, 34)"):
                //black - 0
                string_raw+="0";
                break;
            case ("rgb(5, 102, 141)"):
                //blue  - 1
                string_raw += "1";
                break;
            case ("rgb(26, 147, 111)"):
                //green - 2
                string_raw += "2";
                break;
            case ("rgb(238, 238, 238)"):
                //white - 3
                string_raw += "3";

                break;
            case ("rgb(255, 200, 87)"):
                //yellow -4
                string_raw += "4";

                break;
            case ("rgb(239, 93, 96)"):
                //red - 5
                string_raw += "5";

                break;

            default:
                string_raw += "3";
                break;            
    }
    });

    // return ; //FINAL
    // console.log("file:///Users/robo/Desktop/desk/odin_project/etch/index.html?boat="+string_raw) ;//LOCAL
    // copyToClipboard("https://robo-monk.github.io/etch/index.html?boat=" + string_raw); 
    copyToClipboard("file:///Users/robo/Desktop/desk/odin_project/etch/index.html?boat=" + string_raw); 



}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

// TO IMPLEMENT
// function compress(string){

//     c
//     for (i=0;i<string.length();i++){
//         string[0]
//     }

// }

function showBoat(boat){
    startArt();
    squares = wrapper.querySelectorAll(".square");
    index=0;
    squares.forEach((square) => {

        switch (boat[index]) {
            case ("0") :
                //black - 0
                square.style.backgroundColor = "rgb(30, 32, 34)";
                break;
            case ("1"):
                //blue  - 1
                
                square.style.backgroundColor = "rgb(5, 102, 141)";

                break;
            case ("2"):
                //green - 2
                square.style.backgroundColor = "rgb(26, 147, 111)";

                break;
            case ("3"):
                //white - 3
                square.style.backgroundColor = "rgb(238, 238, 238)";

                break;
            case ("4"):
                //yellow -4
                square.style.backgroundColor = "rgb(255, 200, 87)";

                break;
            case ("5"):
                //red - 5
                square.style.backgroundColor = "rgb(239, 93, 96)";

                break;

            default:
                
                break;
        }

        index+=1;
    });

}

container.remove();
window.unload = function () { window.scrollTo(0, 0); }
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


let params = new URLSearchParams(location.search);
boat = params.get('boat');
if (boat!=null){
    showBoat(boat);
}
