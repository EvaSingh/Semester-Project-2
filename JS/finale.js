var ctx = document.getElementById("banner").getContext("2d");
var path = 0;

function drawText(path) {
    ctx.font = "bold 64px Verdana";
    ctx.fillStyle = "#52ce90";
    ctx.fillText("Congratulations! You won!", path, 100);
}

setInterval(function(){
    ctx.clearRect(0,0,1280,200);
    drawText(path%1280);
    path++;
 }, 10);