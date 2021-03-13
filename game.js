let nowhere=-100,updates=0;
let background = {toX:300,toY:300}

let menu={
    inGame:{
        open:-1,
        width:200,
        height:window.innerHeight,
        x:0,
        y:0,
        draw(){
            context.fillStyle="green"
            context.fillRect(menu.inGame.x,menu.inGame.y,
            menu.inGame.width,menu.inGame.height);
        }
    }
}
let coins=0;

let bin=[
    {
        type:1,
        x:1000,
        y:100,
        width:100,
        height:100
    },
    {
        type:2,
        x:1000,
        y:200,
        width:100,
        height:100
    },
    {
        type:3,
        x:1000,
        y:300,
        width:100,
        height:100
    }
];

let lake={
    x:500,
    y:900,
    type:1,//0-clean,1-dirty;
    width:background.toX*2 + 100,
    height:background.toY*2-150
}

let trassh={
    x:nowhere,
    y:nowhere,
    number:1,
    type:randomInteger(trash.number),
    n:0
}

let scroll = {
    start:{ing:false}
};

let camera = {
    x:100,
    y:100,
    maxX:innerWidth,
    maxY:innerHeight,
    speed:20
};


let cc = {
    tree:12,
}

let acc = {}

function drawImageWithCamera(img,x,y,tox,toy){
    drawImage(img,x-camera.x,y-camera.y,tox,toy)
}

function update() {

    if(scroll.start.ing){
        if(camera.x>=0 && camera.x<background.toX*5 - camera.maxX-10)
        camera.x +=(scroll.start.x - mouseX)/camera.speed
        if(camera.y>=0 && camera.y<background.toY*5 - camera.maxY-10)
        camera.y +=(scroll.start.y - mouseY)/camera.speed
    }
    if(camera.x>background.toX*5 - camera.maxX-10)camera.x = background.toX*5 - camera.maxX-11
    if(camera.y>background.toY*5 - camera.maxY-10)camera.y = background.toY*5 - camera.maxY-11
    if(camera.x<0)camera.x = 0 
    if(camera.y<0)camera.y = 0
}
function draw() {

    context.fillStyle = "#000" 
    context.fillRect(0,0,innerWidth,innerHeight)
    for(x=0;x<5;x++){
        for(y=0;y<5;y++){
            drawImage(backgr,(0 + background.toX*x)-camera.x, (0 + background.toY*y)-camera.y, background.toX, background.toY);
            context.fillStyle="black"
            context.strokeRect(background.toX*x-camera.x,background.toY*y-camera.y,800,800)        }
    }
    if(menu.inGame.open==1)menu.inGame.draw()
    
    for(i=0;i<3;i++)
    drawImageWithCamera(binn[i],bin[i].x,bin[i].y,bin[i].width,bin[i].height)

    if(lake.type) drawImageWithCamera(lake1,lake.x,lake.y,lake.width,lake.height)
    else drawImageWithCamera(lake0,lake.x,lake.y,lake.width,lake.height)
};
function keyup(key) {
    console.log("Pressed", key);
    if(key==32)console.log(camera.x,camera.y)
    if(key==27)menu.inGame.open=-menu.inGame.open
};
function mousedown() {
    scroll.start.x=mouseX
    scroll.start.y=mouseY
    scroll.start.ing=true
}

    function mouseup() {
        scroll.start.ing=false;
        console.log("Mouse clicked at", mouseX + camera.x, mouseY+camera.y);
        
    };
