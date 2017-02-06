/**
 * Created by wwtliu on 14/9/5.
 */
$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation();
        var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }] };
        window.onscroll = function() {
            if (scrollside()) {
                $.each(dataImg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    //                    console.log("images/"+$(value).attr("src"));
                    $("<img>").attr("src", "images/" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };
        // 老师补充的
        window.onresize = function(){
            imgLocation();
        }
    });

    $(".userInfo a.username").hover(function() {
        $(".username-menu").css("display", "block");
    }, function() {
        $(".userInfo a.username-menu").css("display", "none");
    });
    $(".userInfo .username-menu").hover(function() {
        $(this).css("display", "block");
    }, function() {
        $(this).css("display", "none");
    });

});


function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    //console.log(lastboxHeight);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    // var searchHeight = $(".search").height();
     var searchHeight = $("#container").offset().top;
    return lastboxHeight < scrollHeight + documentHeight;
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($("#container").width() / boxWidth);
    var boxArr = [];
    // var searchHeight = $(".search").height();
    var searchHeight = $("#container").offset().top;
    //alert(searchHeight);
    box.each(function(index, value) {
        //        console.log(index+"--"+value);
        // 老师更改
        value.style.cssText = '';
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight + searchHeight;
            //            console.log(boxHeight);
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            //            console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            //            console.log(minboxIndex);
            //            console.log(value);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}
