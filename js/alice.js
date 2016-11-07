$(function(){
    /******* canvas绘图 ***************/
//html
    var html5 = document.getElementById('html5');
    var ctx1 = html5.getContext('2d');
    ctx1.beginPath();
    ctx1.strokeStyle = '#EA3939';
    ctx1.lineWidth = 7;
    ctx1.arc(65,65,50,Math.PI/180,320*Math.PI/180); //true为逆时针
    ctx1.stroke();

//css
    var css3 = document.getElementById('css3');
    var ctx2 = css3.getContext('2d');
    ctx2.beginPath();
    ctx2.strokeStyle = '#DB7C12';
    ctx2.lineWidth = 7;
    ctx2.arc(65,65,50,Math.PI/180,310*Math.PI/180); //true为逆时针
    ctx2.stroke();

//javaScript
    var javaScript = document.getElementById('JavaScript');
    var ctx3 = javaScript.getContext('2d');
    ctx3.beginPath();
    ctx3.strokeStyle = '#5AA00A';
    ctx3.lineWidth = 7;
    ctx3.arc(65,65,50,Math.PI/180,300*Math.PI/180); //true为逆时针
    ctx3.stroke();

//jQuery
    var jQuery = document.getElementById('jQuery');
    var ctx4 = jQuery.getContext('2d');
    ctx4.beginPath();
    ctx4.strokeStyle = '#088B8B';
    ctx4.lineWidth = 7;
    ctx4.arc(65,65,50,Math.PI/180,280*Math.PI/180); //true为逆时针
    ctx4.stroke();

//Bootstrap
    var Bootstrap = document.getElementById('Bootstrap');
    var ctx5 = Bootstrap.getContext('2d');
    ctx5.beginPath();
    ctx5.strokeStyle = '#982795';
    ctx5.lineWidth = 7;
    ctx5.arc(65,65,50,Math.PI/180,270*Math.PI/180); //true为逆时针
    ctx5.stroke();
});
