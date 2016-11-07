
///异步加载订单页面的页头和页尾
$(function(){
    $('#header').load('header.php',function(){
        $('.login').html('你好！ '+loginName);
        $('.login').css({
            'color':'#F10180'
        });
        $('.login').parent().next('.register').remove();
        $('.my_pic').attr('src','images/my_pic.jpg');
        $('.login-avatar-re').html('你好！ '+loginName);
        $('.login-avatar-re').css({
            'color':'#F10180'
        });
    });
    $('#footer').load('footer.php');
    $('#right-bar').load('right_bar.php');
});

var s=location.search;
var loginName=s.substring(s.indexOf('=')+1);
