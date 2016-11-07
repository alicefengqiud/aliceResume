//游戏规则：保持屏幕上有15个果实

var fruitObj = function(){
     this.alive = []; //bool
     this.x = [];
     this.y = [];
     this.l = [];  //图片的长度
     this.spd = [];
     this.fruitType = [];
     this.orange = new Image();
     this.blue = new Image();
 };
 //果实总个数
 fruitObj.prototype.num = 30;
 //初始化
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){

        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = Math.random()*0.017 + 0.003 ;  //[0.003 0.02)
        this.fruitType[i] = "";
        //this.born(i);  //让所有的果实都出生
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
};
 //绘制海葵产出的果实
fruitObj.prototype.draw = function(){
     for(var i=0;i<this.num;i++){
        //draw
         //find an ane, grow,fly up
         if(this.alive[i]){
             if(this.fruitType[i] == "blue"){
                var pic = this.blue;
             }
             else {
                 var pic = this.orange;
             }
             if(this.l[i] <= 14){
                 this.l[i] += this.spd[i] * deltaTime;//让过程变得平缓
             }
             //果实向上浮，就是y轴的位置在减少
             else{
                 this.y[i] -= this.spd[i] * 7 * deltaTime;
             }
             //console.log(this.l[i]);
             ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
             if(this.y[i] < -10){
                 this.alive[i] = false;
             }
         }
    }
};
//fruitObj.prototype.update = function(){
//    var num = 0;
//    for(var i=0;i < this.num;i++){
//        if(this.alive[i]){
//            num++;
//        }
//    }
//}
 //果实出生
fruitObj.prototype.born = function(i){
    var aneID = Math.floor(Math.random()*ane.num);  //0~49
    this.x[i]=ane.x[aneID];   //果实出生的位置
    this.y[i]= canHeight-ane.len[aneID];   //canvas的高度-海葵的高度
    this.l[i] = 0;
    this.alive[i] = true;
    var ran  = Math.random();
    if(ran < 0.2){
        this.fruitType[i] = "blue";
    }
    else{
        this.fruitType[i] = "orange";   //orange blue
    }

}

fruitObj.prototype.dead = function(i){
    this.alive[i] = false;
}

//果实监视功能
function fruitMonitor(){
    var num = 0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            num++;
        }
    }
    if(num<15){
        //send fruit
        sendFruit();
        return ;
    }
}
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}