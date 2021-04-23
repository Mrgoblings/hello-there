let coin= {
    sizeX:nowhere,
    x:nowhere,
    y:nowhere,
    initialize(){
        this.sizeX=menu.sizeX/2.5,
        this.x=innerWidth/2-this.sizeX*(3/2),
        this.y=0
    },
    draw(){
        drawImage(GCoin,this.x,this.y,this.sizeX,this.sizeX)
        context.font = this.sizeX/1.5+'px Arriel';
        context.textAlign = "left";
        context.fillText(x45l21.money, this.x + this.sizeX, this.sizeX/1.5);
    }   
}