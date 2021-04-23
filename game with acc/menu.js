let category_click_inShop=[]
category_click_inShop[0]="tree"
category_click_inShop[1]="bin"
category_click_inShop[2]="bench"
category_click_inShop[3]="windmill"
category_click_inShop[4]="path"

let allCategories=[];
allCategories[0]=tree
allCategories[1]=bin
allCategories[2]=bench
allCategories[3]=[];
allCategories[3]=Windmill[0]
allCategories[4]=path//decoration  //flower & path

let category_index;


let price=[]
//money needet for 
//trees
price["tree"] = []
price["tree"][0] = 10;
price["tree"][1] = 100;
price["tree"][2] = 500;

//bins
price["bin"] = [];
price["bin"][0] = 10;
price["bin"][1] = 50;

//bench
price["bench"]=[];
price["bench"][0] = 20;

//windmills
price["windmill"] = []
price["windmill"][0]= 500//1000
price["windmill"][1]= 1000//10 000

//path
price["path"] = []
price["path"][0] = 30;



let menu = {
    opened:-1,//"-1" - closed & "1" - opened
    x:0,y:0,
    sizeX:innerWidth/9,
    sizeY:innerHeight,
    IsInCategory:true,
    cameraX:0,
    cameraY:0,
    clickedCategory:[],
    clickedLevelUp:false,
    lvl:{
        x:innerWidth/4,
        y:innerHeight/4,
        sizeX:innerWidth/2,
        sizeY:innerWidth/4,
        price:250,
    },
    collidingWithMouse(i){
        return areColliding(this.x+15,this.y+5 + this.sizeX/2 + (5 +this.sizeX-30)*i,this.sizeX-30,this.sizeX-30,mouseX,mouseY,1,1)
    },
    clickedInMenu(){
        if(this.IsInCategory==true && this.opened){
            for(i=0;i<allCategories.length;i++){
                if(this.collidingWithMouse(i)){
                    this.clickedCategory=allCategories[i]
                    category_index=i;
                    this.IsInCategory=false
                }
            }
        }
    },
    draw(){
            if(this.opened==1){
            //transparant black
            transparentSquare(8,"black",this.x,this.y,this.sizeX,this.sizeY) 
            
            //outline
            context.lineWidth = 2
            context.strokeRect(this.x,this.y,this.sizeX+1,this.sizeY)
            context.lineWidth = 1

            //draw shop
            if(!this.IsInCategory){
                for(i=0;i<this.clickedCategory.length;i++){
                    transparentSquare(5,"white",this.x+15,this.y+5 + this.sizeX/2+ (5 + this.sizeX-30)*i,this.sizeX-30,this.sizeX-30)
                }
                for(i=0;i<this.clickedCategory.length;i++){
                    if(this.clickedCategory!=Windmill[0]){
                        drawImage(this.clickedCategory[i],this.x+15,this.y+5 + this.sizeX/2 + (5 +this.sizeX-30)*i,this.sizeX-30,this.sizeX-30)
                    }else drawImage(Windmill[windmill.animation][i],this.x+15,this.y+5 + this.sizeX/2+ 5 + (this.sizeX-30)*i,
                    this.sizeX-30,this.sizeX-30)
                    
                    if(this.collidingWithMouse(i)){
                        context.stroceStyle="white"
                        context.lineWidth = 4
                        context.strokeRect(this.x+15,this.y+5 + this.sizeX/2 + (5 +this.sizeX-30)*i,this.sizeX-30,this.sizeX-30)
                        context.lineWidth = 1

                        //draw price
                        drawImage(cloud,mouseX,mouseY-20,this.sizeX/2.5,this.sizeX/3);
                        context.fillStyle = "black";
                        context.font = this.sizeX/6+'px Arriel';
                        context.textAlign = "center";
                        context.fillText(price[category_click_inShop[category_index]][i], mouseX + this.sizeX/5,mouseY + this.sizeX/4.5 - 20);
                    }
                }
            }else{
                for(i=0;i<allCategories.length;i++){
                    transparentSquare(5,"white",this.x+15,this.y+5 + this.sizeX/2+ (5 + this.sizeX-30)*i,this.sizeX-30,this.sizeX-30)
                    if(i!=3){
                        drawImage(allCategories[i][0],this.x+15,this.y+5 + this.sizeX/2 + (5 +this.sizeX-30)*i,this.sizeX-30,this.sizeX-30)
                    }else{ 
                        drawImage(Windmill[windmill.animation][0],this.x+15,this.y+5 + this.sizeX/2+ 5 + (this.sizeX-30)*i,
                        this.sizeX-30,this.sizeX-30)
                    }
                    
                    if(this.collidingWithMouse(i)){
                        context.stroceStyle="white"
                        context.lineWidth = 4
                        context.strokeRect(this.x+15,this.y+5 + this.sizeX/2 + (5 +this.sizeX-30)*i,this.sizeX-30,this.sizeX-30)
                        context.lineWidth = 1
                    }
                }
            }
        drawImage(up,this.sizeX/2 + 5,this.y + 7,this.sizeX/2-5,this.sizeX/2-5);
        }

        //draw shop/menu icon
        drawImage(shop,this.x + 5,this.y + 5,this.sizeX/2,this.sizeX/2);
    
        if(this.clickedLevelUp){
            //transparant green
            transparentSquare(6,"green",this.lvl.x,this.lvl.y,this.lvl.sizeX,this.lvl.sizeY) 
            
            //outline
            context.lineWidth = 2
            context.strokeRect(this.lvl.x,this.lvl.y,this.lvl.sizeX+1,this.lvl.sizeY)
            context.lineWidth = 1

            //text "u wanna level up?"
            context.fillStyle = "black"
            context.font = this.sizeX/2+'px Arriel';
            context.textAlign = "center";
            context.fillText("Do you want to", this.lvl.x + this.lvl.sizeX/2, this.lvl.y+this.sizeX/2);
            context.fillText("level up?", this.lvl.x + this.lvl.sizeX/2, this.lvl.y+this.sizeX+5);

            //button
            if(areColliding(this.lvl.x + this.lvl.sizeX/3.3, this.lvl.y+this.sizeX*3/2,
                (this.lvl.sizeX/2+this.lvl.sizeX/3.5)/2,this.sizeX/2,mouseX,mouseY,1,1)){
                context.lineWidth = 5
            }else{
                context.lineWidth = 3
            }
            context.strokeRect(this.lvl.x + this.lvl.sizeX/3.3, this.lvl.y+this.sizeX*3/2,(this.lvl.sizeX/2+this.lvl.sizeX/3.5)/2,this.sizeX/2)
            context.lineWidth = 1
            context.fillText(this.lvl.price*Math.pow(2,x45l21.level-1),this.lvl.x + this.lvl.sizeX/2,this.lvl.y+this.sizeX*3/2 + this.sizeX/2.4)
        }
    },
    activate(){
        //colliding mouse and shop/menu icon
        var circle1 = {radius: this.sizeX/4, x: this.x + 5 + this.sizeX/4, y: this.y + 5 + this.sizeX/4};
        var circle2 = {radius: 1/2, x: mouseX + 1/2, y: mouseY + 1/2};

        var dx = circle1.x - circle2.x;
        var dy = circle1.y - circle2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circle1.radius + circle2.radius) {
            this.opened=-this.opened;
            this.IsInCategory=true;
        }
    },
    moveCamera(){
        //
    },
    openLevelup(){
        if(this.clickedLevelUp){
            if(areColliding(this.lvl.x + this.lvl.sizeX/3.3, this.lvl.y+this.sizeX*3/2,
                (this.lvl.sizeX/2+this.lvl.sizeX/3.5)/2,this.sizeX/2,mouseX,mouseY,1,1 )){
                    this.clickedLevelUp = false;
                    if(x45l21.money>=this.lvl.price*Math.pow(2,x45l21.level-1)){
                        x45l21.money-=this.lvl.price*Math.pow(2,x45l21.level-1);
                        x45l21.level++;
                }
            }
            if(!areColliding(this.lvl.x,this.lvl.y,this.lvl.sizeX,this.lvl.sizeY,mouseX,mouseY,1,1)){
                this.clickedLevelUp = false;
            }
        }

        if(this.opened==1 && areColliding(this.sizeX/2 + 5,this.y + 7,this.sizeX/2-5,this.sizeX/2-5,mouseX,mouseY,1,1)){
            this.clickedLevelUp = true;
        }
    },
}
let homeButton={
    x:innerWidth - menu.sizeX/2 + 10,
    y:innerHeight - menu.sizeX/2 + 10,
    size:menu.sizeX/2.5,
    draw(){
        drawImage(back,this.x,this.y,this.size,this.size);
    },
    collidingWithMouse(){
        if(areColliding(this.x,this.y,this.size,this.size,mouseX,mouseY,1,1)){
            goHome();
        }
    }
}