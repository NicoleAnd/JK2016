$(function() {
    //更多产品
    $('.more').mouseover(function() {
        $('.details').css('display', 'block');
    });
    $('.details').mouseleave(function() {
        $(this).css('display', 'none');
    });

    $('.details a[title=na]').mouseover(function() {
        $(this).css('text-decoration', 'underline');
    });
    $('.details a[title=na]').mouseleave(function() {
        $(this).css('text-decoration', 'none');
    });

    //输入框
    $('.input_class').focus(function() {
        $('.search_class').css('border-color', '#4791ff');
    }).blur(function() {
        $('.search_class').css('border-color', '#b6b6b6');
    });

    //设置
    $('.baidu-nav').mouseover(function() {
        $('.baidu-setting').css('display', 'block');
    });
    $('.baidu-setting').mouseleave(function() {
        $(this).css('display', 'none');
    });

    $('.baidu-setting a[title=navv]').mouseover(function() {
        $(this).css({ 'color': '#fff', 'background-color': '#3385ff' });
    });
    $('.baidu-setting a[title=navv]').mouseleave(function() {
        $(this).css({ 'color': '#333', 'background-color': '#fff' });
    });

    //登录
    // $('.login').click(function(){
    //     $('.login-mask').show();
    //     $('.login-mask').height($(document).height());
    //     $('.login-content').slideDown(200);
    // });

    // $('.login-title .close').click(function(){
    //     $('.login-mask').hide();
    //     $('.login-content').slideUp(200);
    // });
    $('.login').click(function() {
        $('.login-mask').show();
        $('.login-mask').height($(document).height());
        $('.login-popover').slideDown(200);
    })
    $('.login-poptit .close').click(function() {
        $('.login-mask').hide();
        $('.login-popover').slideUp(200);
    })



});

//移动
jQuery(document).ready(
    function() {
        $('.login-poptit').mousedown(function(event) {
            var isMove = true;
            var abs_x = event.pageX - $('.login-popover').offset().left;
            var abs_y = event.pageY - $('.login-popover').offset().top;
            $(document).mousemove(function(event) {
                if (isMove) {
                    var obj = $('.login-popover');
                    obj.css({ 'left': event.pageX - abs_x, 'top': event.pageY - abs_y });
                }
            }).mouseup(
                function() {
                    isMove = false;
                }
            );
        });
    }
);

$(function() {
    $("#submitName").click(function() {
        var userdata = $("#userName").val();
        $("#loginUserName").data(userdata);
        // var getuserdata = userdata.data()
        // $("#loginUserName").html(getuserdata);
    })

});

$(document).ready(function() {

    $(".btnn").click(function() {
        var nak = $("#userName").val();
        alert(nak);

        $.cookie('nak', nak);
        $.cookie(nak, $("#userName").val());
        console.log(nak);
    });
});
