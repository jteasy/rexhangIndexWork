//function($)$符号不要忘记写了
//结尾的(jQuery)必须严格区分大小写
(function($){
	//插件入口
	$.fn.tmLoading = function(options){
		this.each(function(){
			var opts = $.extend({},$.fn.tmLoading.methods,$.fn.tmLoading.defaults,options);
			$(this).on("click",function(){
				opts.init($(this),opts);
			});
		});
	};

	/*提供一系列的封装方法*/
	$.fn.tmLoading.methods = {
		init : function($this,opts){//初始化
			var emptyFlag = $("#tm_loading").html();
			if(!emptyFlag){
				//获取模板
				var $divBox = this.template(opts);
				this.showAnimate($divBox,opts);
				if(opts.width)$divBox.width(opts.width);
				if(opts.width)$divBox.height(opts.height);
				if(opts.closeFlag)this.bindEvent($divBox,opts);
				//模板追加到body
				$("body").append($divBox,opts);
				//给div定位
				this._position($divBox);
				this._resize($divBox,opts);
			}else{
				$("#tm_loading").hide().find("#tm_loading_content").html(opts.content);
				this.showAnimate($("#tm_loading"),opts);
			}
			//事件的回调
			if(opts.callback)opts.callback($this,$divBox);
		},
		showAnimate : function($divBox,opts){
			if(opts.animate=='fade'){
				$divBox.fadeIn("slow");
			}else if(opts.animate=="slide"){
				$divBox.slideDown("slow");
			}else{
				$divBox.show();
			}
		},
		bindEvent:function($divBox,opts){//事件绑定
			$divBox.on("click",function(){
				if(opts.animate=='fade'){
					$(this).fadeOut("slow",function(){
						$(this).remove();
					});
				}else if(opts.animate=="slide"){
					$(this).slideUp("slow",function(){
						$(this).remove();
					});
				}else{
					$(this).remove();
				}
			});
		},
		_position : function($divBox){//div定位元素的定位
			//loading自身的宽度和高度
			var width = $divBox.width();
			var height = $divBox.height();
			//这里是窗体的宽度和高度
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var left = (windowWidth - width)/2;
			var top = (windowHeight - height)/2;
			$divBox.css({"left":left,"top":top});
		},
		//窗体自适应
		_resize : function($divBox,opts){
			$(window).resize(function(){
				opts._position($divBox);
			});
		},
		template : function(opts){//模板
			return $("<div id='tm_loading'><span id='tm_loading_content'>"+opts.content+"</span></div>");//这个就是动态创建一个元素
		}
	};

	//默认参数定义
	$.fn.tmLoading.defaults = {
		width:"",
		height:"	",
		closeFlag :true,	
		content:"数据拼命加载中...",
		animate:"fade",
		callback:function($this){
			
		}
	}
})(jQuery);