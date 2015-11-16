/*
 	=== info ===	 
 	* Filename: web_module_3.js
 	* Decscription: web_module_3
 	* Version: 1.0.0(2015.11.04)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */
$(function() {
	$("#little-navs-yellow li").mouseover(function() {
		var thisIndex = $(this).index();
		$(this).addClass("sel").siblings().removeClass("sel");
		$(".web-module-3-adv-pic1").hide().eq(thisIndex).fadeIn();
	});
	/*定义全局变量索引*/
	var _index = 0;
	var timer = 3000;
	/*展示方法*/
	function autoshow1() {
		var _length = $(".web-module-3-adv-pic1").length;
		if (_index >= _length) {
			_index = 0;
		};
		$(".web-module-3-adv-pic1").hide().eq(_index).fadeIn();
		$("#little-navs-yellow li").eq(_index).addClass("sel").siblings().removeClass("sel");
		_index++
	};
	/*定时无限循环执行*/
		settimer3000 = setInterval(autoshow1, timer);
	/*鼠标悬停了就取消定时器*/
	$(".web-module-3-adv-left").mouseenter(function() {
		clearInterval(settimer3000);
	});
	/*鼠标离开了就继续定时器*/
	$(".web-module-3-adv-left").mouseleave(function() {
		settimer3000 = setInterval(autoshow1, timer);
	});
	/*列表的鼠标悬停动画*/
	$(".web-module-3-pic1 , .web-module-3-pic2 , .web-module-3-pic3 , .web-module-3-pic4 , .web-module-3-pic5 , .web-module-3-pic6 , .web-module-3-pic7").mouseover(function(){
		$(this).stop().addClass("web-module-3-pic-rexhang-active").siblings().removeClass("web-module-3-pic-rexhang-active");
	});
		$(".web-module-3-pic1 , .web-module-3-pic2 , .web-module-3-pic3 , .web-module-3-pic4 , .web-module-3-pic5 , .web-module-3-pic6 , .web-module-3-pic7").mouseleave(function(){
		$(this).removeClass("web-module-3-pic-rexhang-active");
	});
});