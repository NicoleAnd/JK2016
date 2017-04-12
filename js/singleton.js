/**
 * 使用了单例模式
 */
var index = {
	init:function(argument){
		//body
		var me = this;
		me.render();
		me.bind();
	},
	render:function(){
		// 所有元素放入
		var me = this;
		me.btn = $('#btn');
	}
	bind:function(){
		var me = this;
		me.btn.click(function(){
		});
	}
};
index.init();