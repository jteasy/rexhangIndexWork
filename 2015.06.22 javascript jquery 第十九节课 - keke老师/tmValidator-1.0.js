(function($){
	$.fn.tmValidator = function(options){
		
		this.each(function(){
			var opts = $.extend({},$.fn.tmDrag.defaults,options,$.fn.tmDrag.parseOptions($(this)));
			opts.target = $(this)
			init(opts);
		});
	};
	
	//初始化
	function init(opts){
		
	};
	
	/*属性参数优先原则*/
	$.fn.tmValidator.parseOptions = function(target) {
		var $target = $(target);
		return {
			handle : $target.attr("handle"),
			arrow : $target.attr("arrow")
		}
	};

	/*默认参数*/
	$.fn.tmValidator.defaults = {
		
	}
})(jQuery);