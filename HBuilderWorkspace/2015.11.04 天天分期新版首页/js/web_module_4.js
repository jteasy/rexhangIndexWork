/*
 	=== info ===	 
 	* Filename: web_module_4.js
 	* Decscription: web_module_4
 	* Version: 1.0.0(2015.11.09)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */
$(function() {
	/*列表切换边框特效*/
	$("#web-module-4-list li").mouseover(function(){
		$(this).addClass("sel-web-module-4-list").siblings().removeClass("sel-web-module-4-list");
		var list__this_index = $(this).index();
		/*切换列表项的炫酷动画效果*/
		$(".web-module-4-contents-right-lists").hide().eq(list__this_index).show().addClass("animated fadeInRight").siblings().removeClass("animated lightSpeedIn");
	});
	/*列表的鼠标悬停动画*/
	$(".sels1").mouseover(function(){
		$(this).stop().addClass("web-module-3-pic-rexhang-active").siblings().removeClass("web-module-3-pic-rexhang-active");
	});
	/*列表的鼠标悬停动画 离开*/
	$(".sels1").mouseleave(function(){
		$(this).removeClass("web-module-3-pic-rexhang-active");
	});
});