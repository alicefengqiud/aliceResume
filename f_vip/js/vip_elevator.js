/********** 左边固定侧边栏 ************/
$(function(){

    //每层点击该楼层的内容出现
    var leftElevatorBox = $('#left-elevator-box');
    $('#left-elevator-box li a').on('click',function(){
        $(this).parent().siblings('li').children('a').removeClass('active');
        $(this).addClass('active');
    });
    if(leftElevatorBox.scrollTop()<100){
        leftElevatorBox.css({
            position:'fixed',
            top:'200px',
            'z-index':'20'
        });
        isFloat=true;
    }
    //页面滚动
    $(window).scroll(function(){
        //获得页面滚动的值
        var top = parseInt($(document).scrollTop());
        //console.log(top); //每次滚动100
        //获得左边电梯的id--为减少获取次数
        var leftElevatorBox = $('#left-elevator-box');
        //获取所有的产品的项目
        var productBox = $('#product-box').find('.product-top');
        //当前所获得的楼层 (productBox) #id
        var currentId = "";
        //遍历productBox
        productBox.each(function(){
            var pBox = $(this);
            //每个楼层的top值
            var pBoxTop = pBox.offset().top;
            //console.log(pBoxTop);
            if(top>pBoxTop-300){
                //console.log('11');
                currentId = "#"+pBox.attr('id');
                //console.log(currentId);
            }
            else{
                return false;
            }
        });
        //给相应楼层的a设置active,取消其他链接的active
        var currentLink = leftElevatorBox.find('.active');
        //console.log(currentLink);
        //
        if(currentLink&&currentLink.attr('href')!=currentId){
            currentLink.removeClass('active');
            leftElevatorBox.find("[href="+currentId+"]").addClass('active');
        }
    });
});

