$(document).ready(function() {
    // 课程视频hover
    $(".lessonList ul li").hover(function() {
        var index = $(this).index();
        $(".lessonList ul li").eq(index).find(".lessonPlay").css("opacity", "1");
        $(".lessonList ul li").eq(index).find(".lesson-info>p").css("opacity", "1");
        $(".lessonList ul li").eq(index).find(".lesson-info").css("height", "175px");
        $(".lessonList ul li").eq(index).find(".time-android").css("bottom", "-11px");
        $(".lessonList ul li").eq(index).find(".time-lesson").removeClass("time-lesson-style");
    }, function() {
        $(".lessonList ul li").find(".lessonPlay").css("opacity", "0");
        $(".lessonList ul li").find(".lesson-info>p").css("opacity", "0");
        $(".lessonList ul li").find(".lesson-info").css("height", "88px");
        $(".lessonList ul li").find(".time-android").css("bottom", "80px");
        $(".lessonList ul li").find("time-lesson").removeClass("time-lesson-style");
    });

    $(".lessonList2 ul li").hover(function() {
        var index = $(this).index();
        $(".lessonList2 ul li").eq(index).find(".lessonPlay").css("opacity", "1");
    }, function() {
        $(".lessonList2 ul li").find(".lessonPlay").css("opacity", "0");
    });

    $(".block-icon").click(function() {
        $(".lessonList").css("opacity", "1");
        $(".lessonList2").css("opacity", "0");
    });
    $(".list-icon").click(function() {
            $(".lessonList2").css("opacity", "1");
            $(".lessonList").css("opacity", "0");
        })
        // 搜索动画
    $("#search-icon-click").click(function() {
        $(".searchbox").css("display", "block").addClass("scale");
    });
    $(".close-icon").click(function() {
        $(".searchbox").css("display", "none").removeClass("scale");
    });

});
