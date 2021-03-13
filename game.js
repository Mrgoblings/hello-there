let nowhere=-100;

let scroll = {
    start:{ing:false}
};

let camera = {
    x:100,
    y:100,
    maxX:innerWidth-50,
    maxY:innerHeight-50,
    speed:20
};

let background = {toX:800,toY:800}

let cc = {
    tree:12,
}

let acc = {}

function update() {
    /*if(mouseX<10 && camera.x>0)camera.x-=camera.speed
    if(mouseY<10 && camera.y>0)camera.y-=camera.speed
    if(mouseX>camera.maxX && camera.x<background.toX*5 - window.innerWidth)camera.x+=camera.speed   
    if(mouseY>camera.maxY && camera.y<background.toY*5-window.innerHeight -  camera.speed)camera.y+=camera.speed
*/
    if(scroll.start.ing){
        if(camera.x>=0 && camera.x<background.toX*5 - camera.maxX + camera.speed)
        camera.x +=(scroll.start.x - mouseX)/camera.speed
        if(camera.y>=0 && camera.y<background.toY*5 - camera.maxY + camera.speed)
        camera.y +=(scroll.start.y - mouseY)/camera.speed
    }
    if(camera.x>background.toX)camera.x = background.toX
    if(camera.y>background.toY)camera.y = background.toY
    if(camera.x<0)camera.x = 0 
    if(camera.y<0)camera.y = 0
}
function draw() {
    //drawImage(backStars,0-camera.x, 0-camera.y, background.toX, background.toY);
    context.fillStyle = "#000" 
    context.fillRect(0,0,innerWidth,innerHeight)
    for(x=0;x<5;x++)
        for(y=0;y<5;y++)
            drawImage(backgr,(0 + background.toX*x)-camera.x, (0 + background.toY*y)-camera.y, background.toX, background.toY);
};
function keyup(key) {
    console.log("Pressed", key);
    if(key==32)console.log(camera.x,camera.y)
};
function mousedown() {
    scroll.start.x=mouseX
    scroll.start.y=mouseY
    scroll.start.ing=true
}

function mouseup() {
    scroll.start.ing=false;
    console.log("Mouse clicked at", mouseX, mouseY);
    
};
