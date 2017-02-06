$(document).ready(function(){
	// var $lists = $('article ul');
	// var $list = $('<li></li>').addClass('news-list').prependTo($lists);
	// var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
	// var $img = $('<img>').attr('src','img/12.jpg').appendTo($newsImg);
	// var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
	// var $h1 = $('<h1></h1>').html('新闻标题占位符').appendTo($newsContent);
	// var $p = $('<p></p>').appendTo($newsContent);
	// var $newsTime = $('<span></span>').addClass('newstime').html('新闻时间占位符').appendTo($p);
	// var $newsSrc = $('<span></span>').addClass('newssrc').html('新闻来源占位符').appendTo($p);
	refreshNews('精选');
	// $.ajax({
	// 	url:'../server/getnews.php',
	// 	type:'get',
	// 	datatype:'json',
	// 	success:function(data){
	// 		console.log(data);
	// 	}
	// });
	$('nav a').click(function(e){
		e.preventDefault();
		var type = $(this).text();
		refreshNews(type);
	});

});

function refreshNews(type){

	var $lists = $('article ul');
	$lists.empty();
	$.ajax({
		url:'../server/getnews.php',
		type:'get',
		datatype:'json',
		data:{newstype:type},
		success:function(data){
			// 遍历php中的arr数组 //index页面
			data.forEach(function(item,index,array){

				var $list = $('<li></li>').addClass('news-list').prependTo($lists);
				var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
				var $img = $('<img>').attr('src',item.newsimg).appendTo($newsImg);
				var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
				var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
				var $p = $('<p></p>').appendTo($newsContent);
				var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
				var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);

			});


		}
	});

	
}