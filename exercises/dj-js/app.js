document.getElementById("dj-square").addEventListener("mouseover", blueHover);

function blueHover(){
    document.getElementById("dj-square").className = 'blue-square';
}

document.getElementById("dj-square").addEventListener("mousedown", redClick);

function redClick(){
    document.getElementById("dj-square").className = 'red-square';
}

document.getElementById("dj-square").addEventListener("mouseup", yellowClick);

function yellowClick(){
    document.getElementById("dj-square").className = 'yellow-square';
}

document.getElementById("dj-square").addEventListener("dblclick", greenClick);

function greenClick(){
    document.getElementById("dj-square").className = 'green-square';
}

document.getElementById("body").addEventListener("wheel", orangeScroll);

function orangeScroll(){
    document.getElementById("dj-square").className = 'orange-square';
}

window.addEventListener("keydown", colorButtons);

function colorButtons() {
    switch (event.keyCode){
        case 66:
            document.getElementById("dj-square").className = "blue-square";
            break;
        case 82:
             document.getElementById("dj-square").className = "red-square";
            break;
        case 89:
              document.getElementById("dj-square").className = "yellow-square";
            break;
        case 71:
             document.getElementById("dj-square").className = "green-square";
            break;
        case 79:
             document.getElementById("dj-square").className = "orange-square";
            break;
    }
}
