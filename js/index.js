$(function () {
    //更多产品
    $('.more').mouseover(function () {
        $('.details').css('display', 'block');
    });

    $('.details').mouseleave(function () {
        $(this).css('display', 'none');
    });

    //输入框
    $('.input_class').focus(function () {
        $('.search_class').css('border-color', '#4791ff');
    }).blur(function () {
        $('.search_class').css('border-color', '#b6b6b6');
    });
});