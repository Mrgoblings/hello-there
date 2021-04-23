var backgr = tryToLoad("backgr","black");
var back = tryToLoad("back","black");
let Lake = [];
for(i=0;i<4;i++){
    Lake[i]=tryToLoad("lake["+i+"]","black");
}
var GCoin = tryToLoad("GCoin","black");
var most = tryToLoad("most","black");
var shop = tryToLoad("shop","black");
var cloud = tryToLoad("cloud","black");
var up = tryToLoad("up","black");
var bench = []
bench[0] = tryToLoad("bench","black");
var tree = []
tree[0] = tryToLoad("tree1","black");
tree[1] = tryToLoad("tree2","black");
tree[2] = tryToLoad("tree3","black");
let bin = []
bin[0] = tryToLoad("bin","black");
bin[1] = tryToLoad("bin1","black");
let path = []
path[0] = tryToLoad("path","black");

var Windmill = []
for(i=0;i<3;i++){//i - animation
    Windmill[i] = []
    for(j=0;j<2;j++){//change 2 for more windmills
        Windmill[i][j]=tryToLoad("Windmill[" + i + "][" + j + "]")
    }
}

var riverr = []
riverr[0] = tryToLoad("Wave_1","black");
riverr[1] = tryToLoad("Wave_2","black");
riverr[2] = tryToLoad("Wave_3","black");
var Trash = []
Trash[0] = tryToLoad("trash_banana","black");
Trash[1] = tryToLoad("trash_coke", "black");
Trash[2] = tryToLoad("trash_bottle", "black");