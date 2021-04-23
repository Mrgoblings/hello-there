let OnPath = {
    is:false,
    index:nowhere,
    x:nowhere,
    y:nowhere
};

let clicked = {
    inShop:{
        type:nowhere,
        InMenu:false,
        size:150,
        category:nowhere,
        isItemClicked:0,//1 in category,2 in type, >2...
        size:nowhere,
        onMenu(){ 

            if(menu.opened==-1)this.isItemClicked=0;
            else if(areColliding(menu.x,menu.y,menu.sizeX,menu.sizeY,mouseX,mouseY,1,1)){
                if(menu.IsInCategory)this.isItemClicked=1;
            }
            
            if(this.isItemClicked>=2){
                for(i=0;i<menu.clickedCategory.length;i++){
                    if(menu.collidingWithMouse(i)){
                        this.type=i;
                        this.isItemClicked++;
                    }
                }
            }
            
            if(this.isItemClicked==1){
                for(i=0;i<allCategories.length;i++){
                    if(menu.collidingWithMouse(i)){
                        this.category=category_click_inShop[i];
                        this.isItemClicked++
                    }
                }
            }
        },

        follow(){
             if(this.isItemClicked>2){
                if(this.category=="path"){
                    if(OnPath.is){
                        OnPath.is = false
                        if(mouseX+camera.x<x45l21.gameObjects[OnPath.index].x-15){
                            drawImageWithCamera(path[this.type],x45l21.gameObjects[OnPath.index].x-80,x45l21.gameObjects[OnPath.index].y,100,100)
                            OnPath.x=x45l21.gameObjects[OnPath.index].x-80
                            OnPath.y=x45l21.gameObjects[OnPath.index].y
                        }else if(mouseX+camera.x>x45l21.gameObjects[OnPath.index].x+70){
                            drawImageWithCamera(path[this.type],x45l21.gameObjects[OnPath.index].x+80,x45l21.gameObjects[OnPath.index].y,100,100)
                            OnPath.x=x45l21.gameObjects[OnPath.index].x+80
                            OnPath.y=x45l21.gameObjects[OnPath.index].y
                        }else if(mouseY+camera.y<x45l21.gameObjects[OnPath.index].y-50){
                            drawImageWithCamera(path[this.type],x45l21.gameObjects[OnPath.index].x,x45l21.gameObjects[OnPath.index].y-65,100,100)
                            OnPath.x=x45l21.gameObjects[OnPath.index].x
                            OnPath.y=x45l21.gameObjects[OnPath.index].y-65
                        }else{
                            drawImageWithCamera(path[this.type],x45l21.gameObjects[OnPath.index].x,x45l21.gameObjects[OnPath.index].y+65,100,100)
                            OnPath.x=x45l21.gameObjects[OnPath.index].x
                            OnPath.y=x45l21.gameObjects[OnPath.index].y+65
                        }
                    }else{
                        drawImageWithCamera(path[this.type],mouseX + camera.x,mouseY + camera.y,100,100);
                    }
                }
                switch(this.category){
                    case "tree": drawImageWithCamera(tree[this.type],mouseX + camera.x,mouseY + camera.y,150,150);break;
                    case "bench":drawImageWithCamera(bench[this.type],mouseX + camera.x,mouseY + camera.y,150,150); break;
                    case "windmill":drawImageWithCamera(Windmill[windmill.animation][this.type],mouseX + camera.x,mouseY + camera.y,150,150); break;
                    case "bin":drawImageWithCamera(bin[this.type],mouseX + camera.x,mouseY + camera.y,100,100);break;
                    case "path":           
                        for(i=0;i<x45l21.gameObjects.length;i++){
                            if(x45l21.gameObjects[i].category=="path" && areColliding(mouseX + camera.x,mouseY + camera.y,100,100,
                                x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,100,100)){
                                OnPath.is = true;
                                OnPath.index=i;
                                break;
                        }
                    } 
                }
            }
        },
        place(){
            if(this.category == "bin"){
                this.size=100
            }else{
                this.size=150
            }

            let isCollidingWithObjects=false;
            
            let size2
            
            for(i=0;i<x45l21.gameObjects.length;i++){
                if(x45l21.gameObjects[i].category=="bin" || x45l21.gameObjects[i].category=="path"){
                    size2 = 100
                }else{
                    size2 = 150
                }
                
                if(this.category!="path"){ 
                    if(areColliding(x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,size2,size2,
                    mouseX + camera.x,mouseY + camera.y,this.size,this.size)||
                    areColliding(lake.x,lake.y,lake.width,lake.height,
                    mouseX + camera.x,mouseY + camera.y,this.size,this.size)){
                
                        isCollidingWithObjects = true;
                        break; 
                    }
                }else if(x45l21.gameObjects[i].category=="path"&&
                    OnPath.x == x45l21.gameObjects[i].x && OnPath.y == x45l21.gameObjects[i].y||
                    areColliding(lake.x,lake.y,lake.width,lake.height,
                    mouseX + camera.x,mouseY + camera.y,this.size,this.size)){
                        isCollidingWithObjects = true;
                        break;
                }   
            }

            if(this.isItemClicked>2 && !areColliding(menu.x,menu.y,menu.sizeX,menu.sizeY,mouseX + camera.x,mouseY + camera.y,1,1)){
                if(!isCollidingWithObjects && x45l21.money >= price[this.category][this.type]){
                    x45l21.money-=price[this.category][this.type];
                    if(this.category != "path"){
                        creatNewObject(this.category,this.type,mouseX + camera.x,mouseY + camera.y);
                    }else if(OnPath.is){
                        OnPath.is = false
                        if(mouseX+camera.x<x45l21.gameObjects[OnPath.index].x-15){
                            creatNewObject(this.category,this.type,x45l21.gameObjects[OnPath.index].x-80,x45l21.gameObjects[OnPath.index].y)
                        }else if(mouseX+camera.x>x45l21.gameObjects[OnPath.index].x+70){
                            creatNewObject(this.category,this.type,x45l21.gameObjects[OnPath.index].x+80,x45l21.gameObjects[OnPath.index].y)
                        }else if(mouseY+camera.y<x45l21.gameObjects[OnPath.index].y-50){
                            creatNewObject(this.category,this.type,x45l21.gameObjects[OnPath.index].x,x45l21.gameObjects[OnPath.index].y-65)
                        }else{
                            creatNewObject(this.category,this.type,x45l21.gameObjects[OnPath.index].x,x45l21.gameObjects[OnPath.index].y+65)
                        }
                    }else{
                        creatNewObject(this.category,this.type,mouseX + camera.x,mouseY + camera.y);
                    }
                }
                this.isItemClicked = 2;
            }
            isCollidingWithObjects=false;
        }
    },
    trash:{
        index:nowhere,
        tempIndex:nowhere,
        isPickedup:-1,
        collidingMouseWithTrash(i){
            return areColliding(trash[i].x,trash[i].y,trash[i].width,trash[i].height,mouseX + camera.x,mouseY + camera.y,1,1)
        },
        pickup(){//mousedown
            for(i=0;i<trash.length;i++){
                if(this.collidingMouseWithTrash(i)){
                    this.index=i;
                    this.isPickedup=1;
                    break;
                }
            }
        }, 
        follow(){//update
            if(this.isPickedup==1){
                trash[this.index].x=(mouseX + camera.x) - trash[this.index].width/2
                trash[this.index].y=mouseY + camera.y - trash[this.index].height/2
            }

            for(i=0;i<trash.length;i++){
                if(this.collidingMouseWithTrash(i) && this.isPickedup == -1){
                    document.body.style.cursor="pointer";
                    this.tempIndex=i;
                }
            }
            if(this.tempIndex != nowhere && !this.collidingMouseWithTrash(this.tempIndex)){
                document.body.style.cursor="auto";
            }

        },
        InBin(){//mouseup
            if(this.isPickedup==1){
                for(i=0;i<x45l21.gameObjects.length;i++){
                    if( x45l21.gameObjects[i].category=="bin"&& areColliding(trash[this.index].x,trash[this.index].y,
                        trash[this.index].width,trash[this.index].height,x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,100,100)){
                        trash[this.index].x=nowhere;
                        
                        //bins give money
                        if(x45l21.gameObjects[i].type==0){
                            x45l21.money++
                        }else if(x45l21.gameObjects[i].type==1) {
                            x45l21.money+=3
                        }
                    }
                }
                this.isPickedup=-1;
            }
        }
    },
    objects_placed:{
        index:nowhere,
        moved:false,
        timeToGetObject:150,
        counter:0,
        startCounter:false,
        size:nowhere,
        original:{
            x:nowhere,
            y:nowhere
        },      
        collidingWithMouse(i){
            if(x45l21.gameObjects[i].category=="bin"){
                this.size=100;
            }else{                
                this.size=150
            }
            return areColliding(x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,this.size,this.size,mouseX + camera.x,mouseY + camera.y,1,1)
        },
        startToMove(){//mousedown(after trash)
            if(!this.moved&&clicked.trash.isPickedup==-1){
                for(i=0;i<x45l21.gameObjects.length;i++){
                    if(this.collidingWithMouse(i)){
                        this.moved = true;
                        this.index = i;
                        this.counter = 0;
                        this.startCounter = true;
                        this.original.x=x45l21.gameObjects[i].x
                        this.original.y=x45l21.gameObjects[i].y
                        break;
                    }
                }
            }
        },
        move(){//update
            if(this.startCounter){

                if(this.counter<=this.timeToGetObject){this.counter++}
                
                if(this.moved && this.counter>=this.timeToGetObject){
                    x45l21.gameObjects[this.index].x=mouseX + camera.x-this.size/2;
                    x45l21.gameObjects[this.index].y=mouseY + camera.y-this.size/2;
                }
            }
        },
        place(){//mouseup
            let size2
            if(this.moved){
                for(i=0;i<x45l21.gameObjects.length;i++){
                    if(i!= this.index){
                        if(x45l21.gameObjects[i].category=="bin" || x45l21.gameObjects[i].category=="path"){
                            size2 = 100
                        }else{
                            size2 = 150
                        }
                        //Is the place free
                        if(areColliding(x45l21.gameObjects[i].x,x45l21.gameObjects[i].y,size2,size2,
                            x45l21.gameObjects[this.index].x,x45l21.gameObjects[this.index].y,this.size,this.size)
                            || areColliding(lake.x,lake.y,lake.width,lake.height,
                                x45l21.gameObjects[this.index].x,x45l21.gameObjects[this.index].y,this.size,this.size)){

                                x45l21.gameObjects[this.index].x = this.original.x
                                x45l21.gameObjects[this.index].y = this.original.y
                        }
                    }
                }
            }
            this.moved=false;
            this.index=nowhere;
            this.startCounter=false;
            this.counter=0;
        }
    }
}