/*
 	=== info ===	 
 	* Filename: scroll_top.js
 	* Decscription: scroll_top
 	* Version: 1.0.2(2015.11.04)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */
window.onload = $(function() {
	// 固定导航的渐入渐出条件
	$(window).scroll(function() {
		/*console.log($(window).scrollTop());*/
		if ($(window).scrollTop() >= 400) {
			$(".navs").addClass("rotatel").fadeIn(1000);
		} else {
			$(".navs").stop(true, true).removeClass("rotatel").fadeOut(1000);
			$(".list").siblings().removeClass("sel list-lines");
		};
	});
	$(window).scroll(function() {
			var scrollLineHeight = $(window).scrollTop();
			console.log(scrollLineHeight);
			if(scrollLineHeight >= 1968 && scrollLineHeight < 2068){
				$(".list").siblings().removeClass("sel list-lines");
				$(".list").eq(0).addClass("sel list-lines");
			} else if(scrollLineHeight >= 2700 && scrollLineHeight < 2868){
				$(".list").siblings().removeClass("sel list-lines");
				$(".list").eq(1).addClass("sel list-lines");
			} else if(scrollLineHeight >= 3600 && scrollLineHeight < 3768){
				$(".list").siblings().removeClass("sel list-lines");
				$(".list").eq(2).addClass("sel list-lines");
			} else if(scrollLineHeight >= 4500){
				$(".list").siblings().removeClass("sel list-lines");
				$(".list").eq(3).addClass("sel list-lines");
			} 
	});
	// 手机scroll高度
	$(".list").eq(0).click(function() {
		$(".list").removeClass("sel");
		$(".list").eq(0).addClass("sel");
		$("html,body").animate({
			scrollTop: 1968
		}, 800);
	});

	// 电脑scroll高度
	$(".list").eq(1).click(function() {
		$(".list").removeClass("sel");
		$(".list").eq(1).addClass("sel");
		$("html,body").animate({
			scrollTop: 2700
		}, 800);
	});
	// 户外scroll高度
	$(".list").eq(2).click(function() {
		$(".list").removeClass("sel");
		$(".list").eq(2).addClass("sel");
		$("html,body").animate({
			scrollTop: 3600
		}, 800);
	});
	// 旅游scroll高度
	$(".list").eq(3).click(function() {
		$(".list").removeClass("sel");
		$(".list").eq(3).addClass("sel");
		$("html,body").animate({
			scrollTop: 4600
		}, 800);
	});
});