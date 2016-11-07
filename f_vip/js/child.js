(function ($) {
    $.fn.swBanner = function (options) {
        var defaults = {
            animateTime: 300,
            delayTime: 3000
        }
        var setting = $.extend({}, defaults, options);

        return this.each(function () {
            $obj = $(this);
            var o = setting.animateTime;
            var d = setting.delayTime;
            var $oban = $obj.find(".banList li");
            var _len = $oban.length;
            var $nav = $obj.find(".fomW a");
            var _index = 0;
            var timer;
            //图片轮换
            function showImg(n) {
                $oban.eq(n).addClass("active").siblings().removeClass("active");
                $nav.eq(n).addClass("current").siblings().removeClass("current");
            }

            //自动播放
            function player() {
                timer = setInterval(function () {
                    var _index = $obj.find(".fomW").find("a.current").index();
                    showImg((_index + 1) % _len);
                }, d)
            }

            //
            $nav.click(function () {
                if (!($oban.is(":animated"))) {
                    _index = $(this).index();
                    showImg(_index);
                }
            });
            //
            $oban.hover(function () {
                clearInterval(timer);

            }, function () {
                player();

            });
            player();
        });

    }
})(jQuery);

$('#child-main .all-brand-show-1-1-8').on('mouseenter', function () {
    $('.brand-all-pic-box').css('display', 'block');
});
$('#child-main .all-brand-show-1-1-box').on('mouseleave', function () {
    $('.brand-all-pic-box').css('display', 'none');
});


function brandAllPicPlay(n) {
    $(".child-brand-show-pic>li").eq(n).addClass("active").siblings(".active").removeClass("active");
    $(".all-brand-show-1-1-picList>li").eq(n).addClass("active").siblings(".active").removeClass("active");
}
$(".child-brand-show-pic>li").on("click", function () {
    if (!($(".all-brand-show-1-1-picList>li").is(":animated"))) {
        var _index = $(this).index();  //找到当前的li的下标值
        brandAllPicPlay(_index);
    }
});

$('.all-brand-show-1-1 dt a').on('mouseenter', function () {
    $(this).addClass('animated swing');
});
$('.all-brand-show-1-1').on('mouseleave', function () {
    $('.all-brand-show-1-1 dt a').removeClass('animated swing');
});

