document.querySelector(".panel1").classList.remove("active");
document.querySelector(".panel2").classList.remove("active");

document.querySelector(".panel2").classList.remove("active");
document.querySelector(".panel1").classList.add("active");

function rollDie() {
    document.querySelector(".dice").addEventListener("click", function () {

            let randomNumber = Math.floor(Math.random() * 6 + 1);
               console.log(randomNumber);
               
            document.querySelector(".dice").src = "../Images/d" + randomNumber + ".png";
            
            //Move character corresponding steps
            
            //Check that player didn't roll a 6 and switch players if not
            if(randomNumber != 6) {
                switchPlayer();
            };
    });
}

function switchPlayer() {
    
    document.querySelector(".panel1").classList.toggle("active");
    document.querySelector(".panel2").classList.toggle("active");
}

rollDie();

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
    
const tileSize = 40;

const tileColors = {
    0: {color:'#8DCBF2'},
    1: {color:'#ffffff'},
    2: {color:'#038C33'},
    3: {color:'#59321C'}
}

const map = {
    cols: 30,
    rows: 10,
    width: 30 * tileSize,
    height: 15 * tileSize,
    tiles: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3
    ]
 };

function drawTiles() {
    var mapIndex = 0;

    for (var top = 0; top < map.height; top += tileSize){

       for(var left =0; left < map.width; left += tileSize) {

           var tileValue = map.tiles[mapIndex];
           var tile = tileColors[tileValue];

           ctx.fillStyle = tile.color;
           ctx.fillRect(left, top, tileSize, tileSize);
           mapIndex ++;

       }  
    }
}

ctx.canvas.width = map.width;
ctx.canvas.height = map.height;

drawTiles();