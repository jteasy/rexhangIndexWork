(function($){
	$.fn.tmDrag = function(options){
		
		this.each(function(){
			var opts = $.extend({},$.fn.tmDrag.defaults,options,$.fn.tmDrag.parseOptions($(this)));
			opts.target = $(this)
			init(opts);
		});
	};
	var zindex = 3;
	function init(opts){
		var $drag = opts.target;
		var $handle = opts.handle ? $drag.find(opts.handle) : $drag;
		var isDraging = false;
		$drag.css("position","absolute");
		$handle.css("cursor", "move");
		var x =0,y=0,l=0,t=0;
		var boxHeight = $(window).height()+$(window).scrollTop()-($drag.height()/5);
		var boxWidth = $(window).width()-($drag.width()/5);
		$handle.mousedown(function(e){
			zindex++;
			$drag.css("zIndex",zindex);
			x = e.clientX;//鼠标所在的x坐标
			y = e.clientY;//鼠标所在的y坐标
			l = $(this).offset().left;
			t = $(this).offset().top;
			isDraging = true;
		});

		//滑动置顶
		$drag.mousemove(function(){
			zindex++;
			$drag.css("zIndex",zindex);
		});

		$(document).on("mousemove",function(e){
			if(isDraging){
				var newLeft = l + e.clientX - x;//新的左边距
				var newTop = t + e.clientY - y;//新的顶部边距
				if(opts.arrow && opts.arrow=="top")newLeft=l;//控制垂直反向
				if(opts.arrow && opts.arrow=="left")newTop=t;//控制水平方是标题3333向
				if(newLeft<=0)newLeft=2;
				if(newTop<=0)newTop=2;
				if(newLeft>boxWidth)newLeft = boxWidth;
				if(newTop>boxHeight)newTop=boxHeight;
				$drag.css({"left":newLeft,"top":newTop});
			}
		}).on("mouseup",function(){
			isDraging = false;
		});	
	};
	
	/*属性参数优先原则*/
	$.fn.tmDrag.parseOptions = function(target) {
		var $target = $(target);
		return {
			handle : $target.attr("handle"),
			arrow : $target.attr("arrow")
		}
	};

	/*默认参数*/
	$.fn.tmDrag.defaults = {
		handle : "",
		arrow:"",
	}
})(jQuery);