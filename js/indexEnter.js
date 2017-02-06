var totalheight = 0; //定义一个总的高度变量
function dynamicData() {
    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()); //浏览器的高度加上滚动条的高度 

    if ($(document).height() <= totalheight) //当文档的高度小于或者等于总的高度的时候，开始动态加载数据
    {
        $(document.body).css("background-attachment", "fixed");
        $(".news-list").append((($(".news-list-show").show()).clone(true)));
    }
}

$(window).scroll(function() {
    console.log("滚动条到顶部的垂直高度: " + $(document).scrollTop());
    console.log("页面的文档高度 ：" + $(document).height());
    console.log('浏览器的高度：' + $(window).height());
    // 对滚动后搜索位置加值定位
    var data = 190;
    // 对右侧新闻栏滚动后位置加值定位
    var data1 = 260;
    //var offsetTop = $(window).scrollTop() + 80 + "px";　
    　
    if (parseFloat($(document).scrollTop()) > data) {
        $(".fromFloatstyle").show();
        $(".gotop").css("display","block");
        $(".gotop").click(function(){
            var speed=200;//滑动的速度
            $('body,html').animate({ scrollTop: 0 }, speed);
            return false;
        });
        if (parseFloat($(document).scrollTop()) > data1) {}
    } else {
        $(".fromFloatstyle").hide();
        $(".gotop").css("display","none");
    }
    if (parseFloat($(document).scrollTop()) > data1) {
        $(".new-right").css({
            position: 'fixed',
            top: '0px',
            right: '219px',
            width: '300px',
            marginTop: '100px',
            textAlign: 'left'
        })
    } else {
        $(".new-right").css({
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '300px',
            marginTop: '20px',
            textAlign: 'left'
        })

    }
    // 中间左侧新闻滚动
    dynamicData();
    // 顶部i搜索浮动

});

// 右侧换一换

var getChange = jQuery('#newsRightList li').eq(0).width();
(function($) {
    var arartta = window['arartta'] = function(o) {
        return new das(o);
    }
    das = function(o) {
        this.obj = $('#' + o.obj);
        this.bnt = $('#' + o.bnt);
        this.showLi = this.obj.find('li');
        this.current = 0;
        this.myTimersc = '';
        this.init()
    }
    das.prototype = {
        changeWord: function(n) {
            var _this = this;
            for (var i = 0, l = _this.showLi.length; i < l; i++) {
                $('#newsRightList dl:not(:animated)').animate({ left: -(n * getChange) + "px" }, { easing: "easeInOutExpo" }, 1500, function() {});
            }
        },
        rotate: function() {
            var _this = this;
            clearInterval(_this.myTimersc);
            _this.bnt.find(".hot-refresh-icon").css({
                '-webkit-transform': 'rotate(0deg)',
                '-moz-transform': 'rotate(0deg)'
            });
            var tt = 0;
            var getBnts = _this.bnt.find(".hot-refresh-icon");
            _this.myTimersc = setInterval(function() {
                tt += 10;
                if (tt >= 180) {
                    clearInterval(_this.myTimersc);
                }
                rotateElement(getBnts, tt);
            }, 25)
        },
        init: function() {
            var _this = this;
            this.bnt.bind("click", function() {
                _this.current++;
                if (_this.current > 2) {
                    _this.current = 0;
                }
                _this.changeWord(_this.current);
                _this.rotate();
            })
            this.bnt.mouseenter(function() {
                _this.rotate();
            });
        }
    }
})(jQuery)
arartta({
    bnt: 'changeOther',
    obj: 'newsRightList'
});

function rotateElement(element, angle) {
    var rotate = 'rotate(' + angle + 'deg)';
    if (element.css('MozTransform') != undefined)
        element.css('MozTransform', rotate);
    else if (element.css('WebkitTransform') != undefined)
        element.css('WebkitTransform', rotate);
};

$(document).ready(function() {

    $(".topWeather").hover(function() {
        $(".hoverWeather").css("display", "block");
    }, function() {
        $(".hoverWeather").css("display", "none");
    });
    $(".hoverWeather").hover(function() {
        $(".hoverWeather").css("display", "block");
    }, function() {
        $(".hoverWeather").css("display", "none");
    });

    $("#user").hover(function() {
        $(".setting-user").css("display", "block");
    }, function() {
        $(".setting-user").css("display", "none");
    });
    $(".setting-user").hover(function() {
        $(".setting-user").css("display", "block");
    }, function() {
        $(".setting-user").css("display", "none");
    });



});

$(document).ready(function() {
    $("#user").html($.cookie('nak'));
});

var dt = new Date();
dt.setSeconds(dt.getSeconds() + 60);
document.cookie = "cookietest=1; expires=" + dt.toGMTString();
var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
if (!cookiesEnabled) {
    //没有启用cookie   
    alert("没有启用cookie ");
} else {
    //已经启用cookie   
    alert("已经启用cookie ");
}

$(document).ready(function() {
    jQuery.jqtab = function(tabtit, tab_conbox, shijian) {

        $(tab_conbox).find(".tabs li").hide();
        $(tabtit).find("li:eq(1)").addClass("thistab").show();
        $(tab_conbox).find("li:eq(1)").show();

        $(tabtit).find("li").bind(shijian, function() {

            var activeindex = $(tabtit).find("li").index(this);

            $(this).addClass("thistab").siblings("li").removeClass("thistab");
            $(tab_conbox).children().eq(activeindex).show().siblings().hide();

            $(".tab").css("background", "transparent");
            $(".notabbg").removeClass("thistab");

            return false;
        });

    };
    /*调用方法如下：*/
    $.jqtab("#tabs", "#tab_conbox", "click");

    // 我的关注
    $("#firstpane .menu_head").click(function() {

        var triangle = $(".menu_head").find("div:first");
        if (triangle.hasClass("triangle")) {
            triangle.removeClass("triangle").addClass("triangle_down");
        } else {
            triangle.removeClass("triangle_down").addClass("triangle");
        }
        $("div.menu_body").toggle();

    });

    // 换肤
    var i = 1;
    $(".function-skin").click(function() {
        $(".head").animate({
            height: "288px"
        }, 500);
    });
    $(".p2").click(function() {
        $(".head").animate({
            height: "0px"
        }, 500);
    });


    $(".bgcon img").hover(function() {

        i = $(this).index();
        $(".bgyl").css("background", 'url(images/bg' + i + '.jpg)');
        $(".bgyl").css("background-size", "264px 180px");
    });
    $(".bgcon img").click(function() {

        i = $(this).index();
        $("body").css("background", 'url(images/bg' + i + '.jpg)');
        // $.cookie("bgpic",$("body").css("background", 'url(images/bg' + i + '.jpg)'),{ path: '/', expires: 10 });

        // console.log($.cookie("bgpic"));
        $.cookie("bgpic", i, { expires: 7 });
        console.log($.cookie("bgpic"));
        // console.log("获取cookie");
    });
    // i = $(this).index()+ 1;
    if ($.cookie("bgpic")) {
        $("body").css("background", 'url(images/bg' + $.cookie("bgpic") + '.jpg)');
        // $("body").css("background", 'url(images/bg' + i + '.jpg)');
    }

});
