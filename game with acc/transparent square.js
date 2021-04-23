function transparentSquare(opacity,color,x,y,sizeX,sizeY){
    context.globalAlpha=0.1*opacity
    context.fillStyle=color;
    context.fillRect(x,y,sizeX,sizeY);
    context.globalAlpha=1
}