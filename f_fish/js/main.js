var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

//帧与帧之间的时间
//lastTime是上一帧的时间
var lastTime;
//deltaTime是下一帧的时间
var deltaTime;

var bgPic = new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;

window.onload = game;

function game(){
    init();

    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}
function init(){
    //获得canvas context
    can1 = document.getElementById('canvas1');  //前景 fishes,dust,UI,circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');  //背景  background,ane,fruits
    ctx2 = can2.getContext('2d');

    can1.addEventListener('mousemove',onMouseMove,false);

    bgPic.src = "./src/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my =  canHeight * 0.5;

}

function gameloop(){
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now-lastTime;   //每两帧之间的间隔
    lastTime = now;
    //页面切换后，果实不会受延迟的影响而变大
    if(deltaTime>40){
        deltaTime=40;
    }

    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    //需要清空画布
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    momFruitsCollision();

    baby.draw();

}

function onMouseMove(e){
    if(e.offsetX || e.layerX){
        mx = e.offsetX == undefined ? e.layerX :e.offsetX;
        my = e.offsetY == undefined ? e.layerY :e.offsetY;
    }
}
