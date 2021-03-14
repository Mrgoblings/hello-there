let nowhere=-100,updates=0,selectedPunk=null, selectedPunkIndex = nowhere,upgrades = 0;
let background = {toX:300,toY:300}

let coin = {
    x:150,
    y:0,
    width:90,
    height:90,
    n:0
}

let menu={
    inGame:{
        open:-1,
        width:500,
        height:500,
        x:innerWidth/2-250,
        y:innerHeight/2-250,
        clickedUpgrade:false,
        draw(){
            context.fillStyle="#00a300"
            context.fillRect(menu.inGame.x,menu.inGame.y,
            menu.inGame.width,menu.inGame.height);
            context.fillStyle="#000"
            context.font="100px Arial"
            context.fillText("Upgrade",menu.inGame.x+50,menu.inGame.y+300)
            if(areColliding(menu.inGame.x+50,menu.inGame.y+220,380,100,mouseX,mouseY,1,1)){
                context.strokeRect(menu.inGame.x+50,menu.inGame.y+220,380,100)
                if(this.clickedUpgrade){
                    this.clickedUpgrade=false
                    if(upgrades==0){
                        if(coin.n>20){
                            upgrades++;
                            coin.n-=20
                        }
                    }else if(upgrades==1){
                        if(coin.n>=50){
                            upgrades++;
                            coin.n-=50;
                        }
                    }else if(upgrades==2){
                        if(coin.n>=60){
                            upgrades++;
                            coin.n-=60;
                        }
                    }else if(upgrades==3){
                        if(coin.n>=70){
                            upgrades++;
                            coin.n-=70;
                        }
                    }else if(upgrades==4){
                        if(coin.n>=100){
                            upgrades++;
                            coin.n-=100;
                        }
                    }else if(upgrades==5){
                        if(coin.n>150){
                            upgrades++;
                            coin.n-=150;
                        }
                    }else if(upgrades==6){
                        if(coin.n>200){
                            upgrades++;
                            coin.n-=200;
                        }
                    }
                }
            }
        }
    }
}

let bin=[
    {
        type:0,
        x:0,
        y:0,
        width:100,
        height:100
    },
    {
        type:1,
        x:0,
        y:120,
        width:100,
        height:100
    },
    {
        type:2,
        x:0,
        y:240,
        width:100,
        height:100
    }
];
let river ={
    x:300,y:0,
    animation:0,
    width:1200,
    height:1700
}
let lake={
    x:500,
    y:900,
    type:1,//0-clean,1-dirty;
    width:background.toX*2 + 100,
    height:background.toY*2-150
}


let scroll = {
    start:{ing:false}
};

let camera = {
    x:100,
    y:100,
    maxX:innerWidth,
    maxY:innerHeight,
    speed:20,
    isTrashPicked:false
};

let windmill = [
    {
        x:0,
        y:0,
        width:100,
        height:200,
        animation:0
    },
    {
        x:0,
        y:0,
        width:100,
        height:200,
        animation:1
    },
    {
        x:0,
        y:0,
        width:100,
        height:200,
        animation:2
    }
]

let trassh={
        x:nowhere,
        y:nowhere,
        number:1,
        type:randomInteger(3),
        width:70,
        height:70
    }
let punk = []

trassh.type=randomInteger(trassh.number)
let cc = {
    tree:12,
}

let acc = {}

function addPunk(){
    //TODO bokluci na ezeroto
    let p = Object.create(trassh);
    p.x=randomInteger(background.toX*5);
    p.y=randomInteger(background.toY*5);
    p.type=randomInteger(3);
    p.cleaned=false;
    punk.push(p);
}

function drawImageWithCamera(img,x,y,tox,toy){
    drawImage(img,x-camera.x,y-camera.y,tox,toy)
}

function update() {
    //cooldown
    updates++
    if(updates % 50 == 0){
        river.animation++;
        for(x=0;x<3;x++) windmill[x].animation++;
    }
    if(updates%500==0){
        addPunk()
    }
    if(updates%100==0){
        if(upgrades==1)coin.n++
        else if(upgrades==2)coin.n+=3
        else if(upgrades==3)coin.n+=5
        else if(upgrades==4)coin.n+=10
        else if(upgrades==5)coin.n+=15
        else if(upgrades==6)coin.n+=20
        else if(upgrades==7)coin.n+=50
    }

    if(updates>=10000)updates=0
    // move selected punk/trash
    if(selectedPunk!= null){
        selectedPunk.x=mouseX + camera.x - trassh.width/2
        selectedPunk.y=mouseY + camera.y - trassh.height/2
    }

    //animation
    if(river.animation > 2)river.animation=0;
    //if()
    
    //movement on map
    if(scroll.start.ing){
        if(!camera.isTrashPicked){
            if(camera.x>=0 && camera.x<background.toX*5 - camera.maxX-10){
                camera.x +=(scroll.start.x - mouseX)/camera.speed
            }
            if(camera.y>=0 && camera.y<background.toY*5 - camera.maxY-10){
                camera.y +=(scroll.start.y - mouseY)/camera.speed
            }
        }
    }
    
    if(camera.x>background.toX*5 - camera.maxX-10){
        camera.x = background.toX*5 - camera.maxX-11
    }
    if(camera.y>background.toY*5 - camera.maxY-10){
        camera.y = background.toY*5 - camera.maxY-11
    }
    if(camera.x<0){
        camera.x = 0 
    }
    if(camera.y<0){
        camera.y = 0
    }
}

function draw() {
    //white background
    context.fillStyle = "#000" 
    context.fillRect(0,0,innerWidth,innerHeight)
    //grass
    for(x=0;x<5;x++){
        for(y=0;y<5;y++){
            drawImageWithCamera(backgr,(0 + background.toX*x), (0 + background.toY*y), background.toX, background.toY);
            context.fillStyle="black"
            //grid
            context.strokeRect(background.toX*x-camera.x,background.toY*y-camera.y,800,800)        }
    }

    //trash/punk
    for(let p of punk){
        drawImageWithCamera(trash[p.type],p.x,p.y,p.width,p.height)
    }

    //river
    drawImageWithCamera(riverr[river.animation],river.x,river.y,river.width,river.height)

    //menu??
    if(menu.inGame.open==1)menu.inGame.draw()
    

    //lake
    if(lake.type) drawImageWithCamera(lake0,lake.x,lake.y,lake.width,lake.height)   
    else drawImageWithCamera(lake1,lake.x,lake.y,lake.width,lake.height)
    
    //coin and amount
    drawImage(GCoin,coin.x,coin.y,coin.width,coin.height);
    context.fillStyle="#000"
    context.font = "50px Arrial"
    context.fillText(coin.n,coin.x+coin.width+5,60)
    

    //last----------------------------
    //bins
    for(i=0;i<3;i++){
        drawImage(binn[i],bin[i].x,bin[i].y,bin[i].width,bin[i].height)
    } 

};
function keyup(key) {
    console.log("Pressed", key);
    if(key==32)console.log(camera.x,camera.y)
    //TODO if menu --> button on screen
    if(key==27)menu.inGame.open=-menu.inGame.open
};
function mousedown() {
    //move in map
    scroll.start.x=mouseX
    scroll.start.y=mouseY
    scroll.start.ing=true

    //select punk/trash
    for(i=0;i<punk.length;i++){
        p= punk[i];
        if(areColliding(mouseX,mouseY,1,1, p.x-camera.x,p.y-camera.y,p.width,p.height) && !camera.isTrashPicked){
            selectedPunk = p;
            selectedPunkIndex = i;
            camera.isTrashPicked =  true;
            break;
        }
    }
}

function mouseup() {
    
    //throw punk/trash in the bin
    for(i=0;i<3;i++){
        if(areColliding(bin[i].x,bin[i].y,bin[i].width,bin[i].height,mouseX,mouseY,1,1)&&camera.isTrashPicked){
            selectedPunk.cleaned=true;
            console.log(selectedPunk.type,bin[i].type)
            if(selectedPunk.type == bin[i].type){
                coin.n++;
            }
            
            //remove from array
            if(selectedPunkIndex != nowhere){
                punk.splice(selectedPunkIndex,1);
            }
        }
    }
    
    //reset movement in map
    scroll.start.ing=false; 
    console.log("Mouse clicked at", mouseX + camera.x, mouseY+camera.y);
    if(camera.isTrashPicked){
        camera.isTrashPicked=false;
        selectedPunk=null;
        selectedPunkIndex = nowhere;
    } 

    if(areColliding(menu.inGame.x+50,menu.inGame.y+220,380,100,mouseX,mouseY,1,1)){
        menu.inGame.clickedUpgrade=true
    }
    
};
