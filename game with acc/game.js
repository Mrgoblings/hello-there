//todo Wseki obekt da se upgrade-va???
let updates=0;
let background = {toX:350,toY:350}

let camera = {
    x:100,
    y:100,
    maxX:innerWidth,
    maxY:innerHeight,
    speed:20,
    isTrashPicked:false
};

let scroll = {
    start:{ing:false}
};

let lake={
    x:660,
    y:900,
    type:1,//0-clean,1-dirty;
    width:background.toX*2 + 100,
    height:background.toY*2-150,
    animation:0
}

let river ={
    x:550,y:0,
    animation:0,
    width:1200,
    height:1700
}

coin.initialize();

function goHome() {
    window.location.href = '/';
}

function creatNewObject(category,type,x,y){
    x45l21.gameObjects[x45l21.gameObjects.length] = new Object();
    x45l21.gameObjects[x45l21.gameObjects.length-1].category = category;
    x45l21.gameObjects[x45l21.gameObjects.length-1].type = type;
    x45l21.gameObjects[x45l21.gameObjects.length-1].x = x;
    x45l21.gameObjects[x45l21.gameObjects.length-1].y = y;
}

function drawImageWithCamera(img,x,y,tox,toy){
    drawImage(img,x-camera.x,y-camera.y,tox,toy)
}

function update(){
    //updates (to 10 000 updates /100sek/)
    updates++;
    if(updates>120000){
        updates=1;
    }

    if(updates%6000==0){//60 sek (1min)
        for(i=0;i<x45l21.gameObjects.length;i++){
            if(x45l21.gameObjects[i].category=="tree"){
                switch(x45l21.gameObjects[i].type){
                    case 0: x45l21.money += x45l21.level; break;
                    case 1: x45l21.money += 5 * x45l21.level; break;
                    case 2: x45l21.money += 10 * x45l21.level;
                }
            }else if(x45l21.gameObjects[i].category == "windmill"){
                switch(x45l21.gameObjects[i].type){
                    case 0: x45l21.money += 10 * x45l21.level; break;
                    case 1: x45l21.money += 20 * x45l21.level; 
                }
            }
        }
    }

    //save x45l21
    //if(updates%250==0){save_account(x45l21);}

    // camera
    if(camera.x>=background.toX*5 - camera.maxX){
        camera.x = (background.toX*5 - camera.maxX)-1
    }
    if(camera.y>=background.toY*5 - camera.maxY){
        camera.y = (background.toY*5 - camera.maxY)-1
    }
    if(camera.x<=0){
        camera.x = 1 
    }
    if(camera.y<=0){
        camera.y = 1
    }

    //movement on map
    if(scroll.start.ing){
        if(!camera.isTrashPicked){
            if(camera.x>=0 && camera.x<background.toX*5 - camera.maxX){
                camera.x +=(scroll.start.x - mouseX)/camera.speed
            }
            if(camera.y>=0 && camera.y<background.toY*5 - camera.maxY){
                camera.y +=(scroll.start.y - mouseY)/camera.speed
            }
        }
    }
    //animation lake
    if(updates % 150==25)lake.animation++;
    if(lake.animation > 3)lake.animation=0

    //animation river
    if(updates%70==0)river.animation++;
    if(river.animation > 2)river.animation=0;

    //animation windmill
    if(updates%10==0)windmill.animation++;
    if(windmill.animation>2)windmill.animation=0;
    
    //spawn trash/punk
    if(updates%(rubbish.spawnTime*100) == randomInteger(rubbish.chanceToSpawn)){
        for(i=0;i<=trash.length;i++){
            try{
                trash[i].spawn(updates);
                break;
            }catch(error){
                newTrash()
                break;
            }
        }
    }
    
    //trash follow mouse when picked up
    clicked.trash.follow();

    //move placed objects
    clicked.objects_placed.move();

}

function draw(){
    //background
        //white background
        context.fillStyle = "#fff" 
        context.fillRect(0,0,innerWidth,innerHeight)
        //grass
        for(x=0;x<5;x++){
            for(y=0;y<5;y++){
                drawImageWithCamera(backgr,(0 + background.toX*x), (0 + background.toY*y), background.toX, background.toY);
                context.fillStyle="black";       
            }
        }

    //river
    drawImageWithCamera(riverr[river.animation],river.x,river.y,river.width,river.height)

    //lake
    drawImageWithCamera(Lake[lake.animation],lake.x,lake.y,lake.width,lake.height)   

    //most
    drawImageWithCamera(most,1150,721,500,450);

    //draw all objects on map
    for(i=0;i<x45l21.gameObjects.length;i++){
        switch(x45l21.gameObjects[i].category){
            case "tree": drawImageWithCamera(tree[x45l21.gameObjects[i].type],x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,150,150);break;
            case "bench":drawImageWithCamera(bench[x45l21.gameObjects[i].type],x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,150,150); break;
            case "windmill":drawImageWithCamera(Windmill[windmill.animation][x45l21.gameObjects[i].type],x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,150,150); break;
            case "path":drawImageWithCamera(path[x45l21.gameObjects[i].type],x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,100,100); break;
            case "bin":drawImageWithCamera(bin[x45l21.gameObjects[i].type],x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,100,100)
        }
    }

    //drawImageWithCamera(path[0],300,100,100,100)

    //draw trash/punk
    for(i=0;i<trash.length;i++){
        trash[i].draw()    
    }

    clicked.inShop.follow();

    //money
    coin.draw();

    //menu
    menu.draw()

    //home button
    homeButton.draw();

    //draw level
    context.fillStyle="#000";
    context.font = coin.sizeX/1.5+'px Arriel';
    context.textAlign = "right";
    context.fillText(x45l21.name, camera.maxX, coin.sizeX/1.5);
    context.fillText("level = " + x45l21.level, camera.maxX, (coin.sizeX/1.5)*2 + 5);
}

function mouseup(){
    scroll.start.ing=false;

    //console mouse clicked real coordinates
    //console.log("Mouse clicked at", mouseX + camera.x, mouseY+camera.y);

    //activate menu
    menu.activate();

    //menu
    menu.clickedInMenu()
    
    //placeObjects
    clicked.inShop.place();
    clicked.inShop.onMenu();

    //putTrashInBin
    clicked.trash.InBin();

    //start moving objects
    clicked.objects_placed.place();

    //open level up
    menu.openLevelup();

    //go to home
    homeButton.collidingWithMouse();

}
function mousedown(){
    //mouse pickedup
    clicked.trash.pickup()
    
    //move placed objects
    clicked.objects_placed.startToMove()
    
    //move in map 
    if(clicked.trash.isPickedup==-1 && !clicked.objects_placed.moved){
        if(menu.opened==-1||mouseX>menu.sizeX){
            scroll.start.x=mouseX
            scroll.start.y=mouseY
            scroll.start.ing=true
        }
    }
}