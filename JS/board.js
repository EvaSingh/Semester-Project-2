//The game board

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const character1 = new Image();
character1.addEventListener('load', eventImageLoaded, false);

const character2 = new Image();
character2.addEventListener('load', eventImageLoaded, false);

const throne = new Image();
throne.addEventListener('load', eventImageLoaded, false);

character1.src = "images/sansa-token.png";
character2.src = "images/daenerys-token.png";
throne.src = "images/throne.png";
    
const tileSize = 40;

const tileColors = {
    0: {color:'#B7D5E5'},
    1: {color:'#ffffff'},
    2: {color:'#1C5A18'},
    3: {color:'#59321C'}
}

const map = {
    cols: 30,
    rows: 10,
    width: 32 * tileSize,
    height: 12 * tileSize,
    tiles: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,
        0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3  
    ]
 };

function eventImageLoaded() {
    drawTiles()
}

function drawTiles() {
    var mapIndex = 0;

    for (var top = 0; top < map.height; top += tileSize){

       for(var left =0; left < map.width; left += tileSize) {

           var tileValue = map.tiles[mapIndex];
           var tile = tileColors[tileValue];
           let pos = 0;

           ctx.fillStyle = tile.color;
           ctx.fillRect(left, top, tileSize, tileSize);
           mapIndex ++;
           
           ctx.drawImage(throne, 1152, 190, 128, 250 );
           ctx.drawImage(character1, pos+40, 280, 64, 120 );
           ctx.drawImage(character2, pos, 320, 64, 120 );
       }  
    }
}

ctx.canvas.width = map.width;
ctx.canvas.height = map.height;


//Die roll

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