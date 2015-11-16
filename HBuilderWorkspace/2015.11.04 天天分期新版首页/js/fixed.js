/*
 	=== info ===	 
 	* Filename: fixed.js
 	* Decscription: fixed
 	* Version: 1.0.0(2015.11.10)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */
$(function(){
	/*获取body的高度*/
	var bodyHeight = $(document).height();
	$(".fix").height(bodyHeight);
	$(".fix").css({
		"height":bodyHeight,
		"width":'44px',
		"background-color":"#363636",
		"position":"fixed",
		"right":0,
		"top":0
	});
	//	计算图片高度
	var fixHeight = $(".fix img").height();
	/*上下居中设置*/
	$(".fix img").css("margin-top",- fixHeight / 2 + "px");
	/*悬停鼠标显示app和订阅公众号二维码*/
	$(".app-qrcode").mouseover(function(){
		$(".qrcode-app-pic").stop().show("800");
	});
	/*离开动画*/
	$(".app-qrcode").mouseleave(function(){
		$(".qrcode-app-pic").stop().hide("800");
	});
	/*回到顶部*/
	$(".back-top").click(function(){
		$("html,body").animate({
			scrollTop: 0
		}, 800);
	});
	/*在线客服*/
	$(".feedback").click(function(){
		$("html,body").animate({
			scrollTop: bodyHeight
		}, 800);
	});
	/*在线客服*/
	$(".online-server").click(function(){
		$("html,body").animate({
			scrollTop: bodyHeight
		}, 800);
	});

});
