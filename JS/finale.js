fetch("../JSON/characters.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (characters) {
        const winnerId = window.location.search.replace('?', '');
        const winner = characters.find(c => c.id === +winnerId);

        document.getElementById("winner").src = winner.token;
    });
    
//Canvas animation

const ctx = document.getElementById("banner").getContext("2d");
let path = 0;
let movingRight = true;

function drawText(path) {
    ctx.font = "bold 40px Sofia-Pro-Soft";
    ctx.fillStyle = "#52ce90";
    ctx.fillText("Winner!", path, 100);
}

setInterval(function(){
    ctx.clearRect(0,0,500,150);
    drawText(path%500);
    
   if (movingRight) {
            path++;
            if (path === 350) {
                movingRight = false;
            }
        }else {
            path--;
            if (path === 0) {
                movingRight = true;
            }
        } 
 }, 10);