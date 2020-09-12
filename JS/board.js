//Game Area

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

function Player(character, x, y) {
    this.id = character.id;
    this.image = new Image();
    this.image.addEventListener('load', () => drawGameArea(), false);
    this.image.src = character.token;
    this.x = x;
    this.y = y;
}

const canvas = document.getElementById('game-area');
const ctx = canvas.getContext('2d');
ctx.canvas.width = map.width;
ctx.canvas.height = map.height;

let player1, player2;
let currentPlayer;

const throne = new Image();
throne.src = "../Images/throne.png";
const thronePosition = 1152;

const obstacles = [5, 10, 15, 20, 25];
const obstacleMessages = ["one", "two", "three", "four", "five"];

fetch("../JSON/characters.json")
    .then(function (response) {
        return response.json();
    })
    .then(function(characters) {
         const selectedPlayers = window.location.search.replace('?', '').split(',');
         player1 = new Player(characters.find(c => c.id === +selectedPlayers[0]), 0, 280);
         player2 = new Player(characters.find(c => c.id === +selectedPlayers[1]), 0, 320);
         currentPlayer = player1;      
    });

function drawGameArea() {
    var mapIndex = 0;

    for (let top = 0; top < map.height; top += tileSize){
        for(var left =0; left < map.width; left += tileSize) {
           const tileValue = map.tiles[mapIndex];
           const tile = tileColors[tileValue];

           ctx.fillStyle = tile.color;
           ctx.fillRect(left, top, tileSize, tileSize);
           mapIndex ++;    
       }  
    }
    
    for (let i = 0; i < obstacles.length; i++) {
        ctx.drawImage(throne, obstacles[i]*40, 360, 64, 64);
    }
    
    ctx.drawImage(throne, thronePosition, 190, 128, 250);
    ctx.drawImage(player1.image, player1.x*40,  player1.y, 64, 120 );
    ctx.drawImage(player2.image, player2.x*40,  player2.y, 64, 120 );
    
    
}

function movePlayer(player, step, dir) {
    let currentStep = 0;
    const interval = setInterval(function() {
        player.x += dir;
        
        drawGameArea();
        
        if (player.x*40 >= thronePosition) {
            declareWinner(player);
        } else {
            currentStep++;
            if (currentStep > step) {
                clearInterval(interval);
                
                if (obstacles.includes(player.x)) {
                     alert("Ooops! A rock!");
                     movePlayer(player, 3, -1);
                }
            }
        }
    }, 100);  
}

function declareWinner(player) {
    document.location.href = "finale.html?" + player.id;    
}
 
//Die roll

document.querySelector(".panel1").classList.remove("active");
document.querySelector(".panel2").classList.remove("active");

document.querySelector(".panel2").classList.remove("active");
document.querySelector(".panel1").classList.add("active");

document.querySelector(".dice").addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 6 + 1);

    document.querySelector(".dice").src = "../Images/d" + randomNumber + ".png";

    movePlayer(currentPlayer, randomNumber, 1);

    if (randomNumber != 6) {
        switchPlayer();
    };
});

function switchPlayer() {
    document.querySelector(".panel1").classList.toggle("active");
    document.querySelector(".panel2").classList.toggle("active");
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}