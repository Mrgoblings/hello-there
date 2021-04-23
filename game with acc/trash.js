let rubbish = {
    br:0,
    spawnTime:10,//in sek
    chanceToSpawn:3
} 

let punk = {
    x:nowhere,
    y:nowhere,
    type:randomInteger(3),
    width:70,
    height:70,
    cleaned:false,
    spawn(){
        if(this.x==nowhere){
            this.type = randomInteger(Trash.length)
            this.x = randomInteger(background.toX*5-this.width)
            this.y = randomInteger(background.toY*5- this.height)
            rubbish.br=0;
        }else{
            rubbish.br++;
            newTrash()
        }
    },
    draw(){
        drawImageWithCamera(Trash[this.type],this.x,this.y,this.width,this.height)
    }
}
let trash = [];
function newTrash(){
    if(rubbish.br==trash.length){
        trash[trash.length] = Object.create(punk);
        trash[trash.length-1].type = randomInteger(Trash.length)
        trash[trash.length-1].x = randomInteger(background.toX*5- trash[trash.length-1].width)
        trash[trash.length-1].y = randomInteger(background.toY*5- trash[trash.length-1].height)
        
        rubbish.br=0;
    }
}