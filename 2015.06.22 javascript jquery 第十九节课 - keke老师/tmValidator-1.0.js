(function($){
	$.fn.tmValidator = function(options){
		
		this.each(function(){
			var opts = $.extend({},$.fn.tmDrag.defaults,options,$.fn.tmDrag.parseOptions($(this)));
			opts.target = $(this)
			init(opts);
		});
	};
	
	//��ʼ��
	function init(opts){
		
	};
	
	/*���Բ�������ԭ��*/
	$.fn.tmValidator.parseOptions = function(target) {
		var $target = $(target);
		return {
			handle : $target.attr("handle"),
			arrow : $target.attr("arrow")
		}
	};

	/*Ĭ�ϲ���*/
	$.fn.tmValidator.defaults = {
		
	}
})(jQuery);