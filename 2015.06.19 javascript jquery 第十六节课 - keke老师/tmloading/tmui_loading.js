/*
CTRL+S:保存
ctrl+z:撤销
ctrl+x:剪切 
ctrl+y:回滚	
*/
(function($){


	$.fn.tmLoading = function(options){
		$(this).each(function(){//为什么要用循环
			var opts = $.extend({},$.fn.tmLoading.defaults,options);//参数的继承
		});
	};

	//默认参数
	$.fn.tmLoading.defaults = {


	}
})(jQuery);