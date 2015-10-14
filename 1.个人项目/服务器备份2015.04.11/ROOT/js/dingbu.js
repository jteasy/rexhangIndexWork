
(function($){
		$(".ico .ico_top").click(function(){
		$("html,body").animate({
			scrollTop:0
			},1000);
		});

		$(window).scroll(function(){
			// 滚动条距离顶部的距离 大于 200px时
		if($(window).scrollTop()>=200){
		$(".ico").fadeIn(1000);// 开始淡入
		}else{
		$(".ico").stop(true,true).fadeOut(1000);// 如果小于等于 200 淡出
		}
		});
		})(jQuery);