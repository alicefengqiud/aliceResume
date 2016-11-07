
//登录
var loginName=null;//当前登录的用户名

var loginModal=$('#login-modal');
$('#header').on('click','.login',function(){
    loginModal.slideDown();
})

//  2  提交---模态登录对话框
$('#bt-login').click(function(){

    //把用户的输入序列化为k=v字符串
    var data=$('#login-form').serialize();
    console.log(data);
    $.post('data/1_login.php',data,function(obj){
        console.log('开始处理登录验证结果');
        console.log(arguments);
        if(obj.code===1000){
            //验证成功
            //console.log('验证成功');
            $('.modal').fadeOut();  //模态登录对话框淡出
            loginName=$('[name="uname"]').val();
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
        }
        else{
            $('.modal .alert').html(obj.msg);
        }
    });
});
