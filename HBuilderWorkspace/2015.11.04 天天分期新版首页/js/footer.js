/*
 	=== info ===	 
 	* Filename: footer.js
 	* Decscription: footer
 	* Version: 1.0.0(2015.11.10)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */

$(function(){
	/*鼠标悬浮官方微信，淡入出现二维码*/
	$(".official-weixin").mouseover(function(){
	$(".foot_box3 img").stop().removeClass("animated flipOutX").show().addClass("animated flipInX");
});
	/*IE动画兼容*/
	var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";"); 
	var trim_Version=version[1].replace(/[ ]/g,""); 
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
	{ 
		/*鼠标离开官方微信，淡出隐藏二维码*/
		$(".official-weixin").mouseleave(function(){
			$(".foot_box3 img").stop().removeClass("animated flipInX").hide('1000');
		});
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
	{ 
		/*鼠标离开官方微信，淡出隐藏二维码*/
		$(".official-weixin").mouseleave(function(){
			$(".foot_box3 img").stop().removeClass("animated flipInX").hide('1000');
		});
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
	{ 
		/*鼠标离开官方微信，淡出隐藏二维码*/
		$(".official-weixin").mouseleave(function(){
			$(".foot_box3 img").stop().removeClass("animated flipInX").hide('1000');
		});
	} else{
		/*鼠标离开官方微信，淡出隐藏二维码*/
		$(".official-weixin").mouseleave(function(){
			$(".foot_box3 img").stop().removeClass("animated flipInX").addClass("animated flipOutX");
		});
	}
});

