/**
 * 单例模式
 * 登录页面-->更多产品
 */
var login_moreproduct = {
	init:function(argument){
		var me = this;
		me.render();
		me.bind();
	},
	render:function(){
		var me = this;
		me.MPmouseover = $('.more');
		me.Dmouseleave = $('.details');
		me.DAmouseover = $('.details a[title=na]');
		me.DAmouseleave = $('.details a[title=na]');
	}
	bind:function(){
		var me = this;
		me.MPmouseover.mouseover(function(){
			$('.details').css('display', 'block');
		});
		me.Dmouseleave.mouseleaver(function(){
			$(this).css('display', 'none');
		});
		me.DAmouseover.mouseover(function(){
			$(this).css('text-decoration', 'underline');
		});
		me.DAmouseleave.mouseleaver(function(){
			$(this).css('text-decoration', 'none');
		});
	}
};
index.init();
/**
 * 单例模式
 * 程序开始
 */