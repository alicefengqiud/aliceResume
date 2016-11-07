/*** modal **/
$(function(){
    /** 1 header ****/
    $('#header').load('header.php');
    /*** footer ***/
    $('#footer').load('footer.php');
    /*** rigth-bar ***/
    $('#right-bar').load('right_bar.php');

    $('#header').on('click',function(e){
        e.preventDefault();
    });
    $('#header').on('mouseenter',function(e){
        e.preventDefault();
    });
    $('#right-bar').on('mouseenter',function(e){
        e.preventDefault();
    });
    $('#header').on('scroll',function(e){
        e.preventDefault();
    });
});
/** 导航条地址 **/
$('#header').on('mouseenter','.head-addr-box-left',function(){
    $('.head-addr-modal').css('display','block');
    $(this).addClass('hover');
});
$('#header').on('mouseleave','.head-top',function(){
    $('.head-addr-modal').css('display','none');
    $('.head-addr-box-left').removeClass('hover');
});


//右边导航条动画
$(function(){

});
var RightBar = $('#right-bar').find('ul');
$("#right-bar").on('mouseenter','.login-right-1',function(){
    $('.right-modal-1').slideDown(100);
});
$('#right-bar').on('mouseleave','.login-right-1',function(){
    $('.right-modal-1').slideUp(100);
});
$("#right-bar").on('mouseenter','.login-right-2',function(){
    $('.right-modal-2').slideDown(100);
});
$('#right-bar').on('mouseleave','.login-right-2',function(){
    $('.right-modal-2').slideUp(100);

});
$("#right-bar").on('mouseenter','.login-right-3',function(){
    $('.right-modal-3').slideDown(100);
});
$('#right-bar').on('mouseleave','.login-right-3',function(){
    $('.right-modal-3').slideUp(100);

});
$("#right-bar").on('mouseenter','.login-right-4',function(){
    $('.right-modal-4').slideDown(100);
});
$('#right-bar').on('mouseleave','.login-right-4',function(){
    $('.right-modal-4').slideUp(100);

});



/****** main-img-modal *******/
function mainImgShow(){
    var mainImg=$('.main-img-show').children();
    $(mainImg).each(function(i,dom){
        $('.main-img-'+(i+1)+'-'+(i+1)).on('mouseenter',function(){
            $('.main-img-modal-'+(i+1)).fadeIn(500);
            //console.log($('.main-img-modal-'+i));
            $(this).addClass('blur');
        });
        $('.main-img-box-'+(i+1)).on('mouseleave',function(){
            $('.main-img-modal-'+(i+1)).fadeOut(500);
            $('.main-img-'+(i+1)+'-'+(i+1)).removeClass('blur');
        });
    });
}

mainImgShow();
//更多卖点展示
var brandIndex = 1;
function brandNext(){
    if(brandIndex==6){
        return;
    }
    var brandPage = $('#brand-page'+brandIndex);
    brandPage.css({
        '-webkit-transform': 'rotateX(-90deg)'
    });
    brandIndex++;
    var nextBrand = $('#brand-page'+brandIndex);
    nextBrand.css({
        '-webkit-transform': 'rotateX(0deg)',
        'opacity':'1'
    });
}
function brandPrev(){
    if(brandIndex==1){
        return;
    }
    var brandPage = $('#brand-page'+brandIndex);
    brandPage.css({
        '-webkit-transform': 'rotateX(90deg)'
    });
    brandIndex--;
    var nextBrand = $('#brand-page'+brandIndex);
    nextBrand.css({
        '-webkit-transform': 'rotateX(0deg)'
    });
}

//奢侈品广告中的动画
function fashionAnimate(){
    var fashionText = $('#fashion-bar-box').find('.fashion-text');
    var fashionLine1 = $('.fashion-line-1');
    var fashionLine2 = $('.fashion-line-2');
    var fashionLine3 = $('.fashion-line-3');
    var fashionLine4 = $('.fashion-line-4');
    $(fashionText).on('mouseenter',function(){
        $(fashionLine1).addClass('animated fadeOutRight');
        $(fashionLine2).addClass('animated fadeOutLeft');
        $(fashionLine3).addClass('animated fadeOutUp');
        $(fashionLine4).addClass('animated fadeOutDown');
    });
    $(fashionText).on('mouseleave',function(){
        $(fashionLine1).removeClass('animated fadeOutRight');
        $(fashionLine2).removeClass('animated fadeOutLeft');
        $(fashionLine3).removeClass('animated fadeOutUp');
        $(fashionLine4).removeClass('animated fadeOutDown');
    });
}
fashionAnimate();

//鞋包中的动画
function shoesImgs(){
    var shoesBrandItems = $('#shoes-main').find('.brand-item');
    $(shoesBrandItems).each(function(i,dom){
        $(this).on('mouseenter',function(){
            $('.shoes-img-box-'+(i+1)+' img').addClass('animated bounce');
        });
        $(this).on('mouseleave',function(){
            $('.shoes-img-box-'+(i+1)+' img').removeClass('animated bounce');
        });
    });
}
shoesImgs();

//跳转到我的订单页面
$('#header').on('click','#my-order',function(){
    //location.href='shoppingcart.html?loginName='+loginName;  //跳转到当前窗口
    window.open('order.html?loginName='+loginName);  //打开新窗口
});

//男士中的动画
function manImgs(){
    var brandItems = $('#man').find('.brand-item-img');
    $(brandItems).each(function(i,dom){
        $(this).on('mouseenter',function(){
            $('.man-img-info-'+(i+1)).animate({
                'bottom':'0px'
            });
            $('.main-img-info-context-'+(i+1)).animate({
                'bottom':'100px'
            });
            $('.main-img-info-context-'+(i+1)+' p').addClass('animated bounceIn infinite');
        });

        $(this).on('mouseleave',function(){
            $('.man-img-info-'+(i+1)).animate({
                'bottom':'-100px'
            });
            $('.main-img-info-context-'+(i+1)).animate({
                'bottom':'20px'
            });
            $('.main-img-info-context-'+(i+1)+' p').removeClass();
        });
    });
}
manImgs();
//跳转到我的订单页面
$('#header').on('click','#vip-register',function(){
    //location.href='shoppingcart.html?loginName='+loginName;  //跳转到当前窗口
    window.open('register.html?loginName='+loginName);  //打开新窗口
});

//显示更多卖点展示获取数据库数据
$.getJSON('data/more_brand.php',function(arrImg){
    var html="";
    for(var i=0;i<arrImg.length;i++){
        var date = arrImg[i];
        html+=`
            <div class="brand-page" id="brand-page${date.mbid}">
               <img src="${date.mbpic}" alt=""/>
            </div>
        `;
    }
    $("#brand-group").append(html);
})


//显示女装获取数据库数据

$(function(){
    womanImgsBox(1);
});
var mno = $('#woman-main').length;
$("#more-brand-woman").click(function(e){
    e.preventDefault();
    var mno = $('#woman-main .brand-item').length;
    womanImgsBox(mno);
})
function womanImgsBox(mno){
    $.getJSON('data/woman.php',{'start':mno-1},function(womanInfo){
        //创建当前时间
        var time = Date.now();
        var html="";
        for(var i=0;i<womanInfo.length;i++){
            var womans = womanInfo[i];
            //获得数据库中的时间
            var tTime = (new Date(womans.wtime)).getTime();
            //把数据库时间转换为毫秒数
            var targetTime = Math.floor(tTime-time);
            //转换为剩余天数
            var offsetDays = parseFloat(targetTime/(3600*24*1000));
            html+=`
                <div class="brand-item animated fadeInUp">
                      <a href="#" title="${womans.wtheme}">
                          <div class="brand-item-img">
                              <img src="${womans.wpic}" alt=""/>
                          </div>
                          <!--图片信息 -->
                          <div class="brand-info">
                              <span>${womans.wtheme}</span>
            `;

            if(offsetDays<1&&offsetDays>0){
                offsetDays = Math.floor(offsetDays*24);
                html+=`
                  <p class="present-time">
                      <span></span>剩 <b>${offsetDays}</b> 小时
                  </p>
                `;
            }
            else if(offsetDays<0){
                offsetDays=0;
                html+=`
                    <p class="present-time">
                      <span></span>剩 <b>${offsetDays}</b> 分
                    </p>
                        <div class="dueTime">
                        <p>活动已结束</p>
                    </div>
                `;
            }
            else{
                offsetDays = Math.floor(offsetDays);
                html+=`
                    <p class="present-time">
                      <span></span>剩 <b>${offsetDays}</b> 天
                  </p>
                `;
            }
            html+=`
                    </div>
                </a>
            </div>
            `;
        }
        $("#woman-main").append(html);
    });
}







