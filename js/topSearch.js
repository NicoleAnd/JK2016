$(function() {
    $('#web_search_header').focus(function() {
        $('.hot_words').html('');

    });
    $('#web_search_header').blur(function() {
        $('.hot_words').html("<a href='http://search.jikexueyuan.com/course/?q=Android'>Android</a><a href='http://search.jikexueyuan.com/course/?q=iOS'>iOS</a><a href='http://search.jikexueyuan.com/course/?q=HTML5'>HTML5</a>");

    });
});
