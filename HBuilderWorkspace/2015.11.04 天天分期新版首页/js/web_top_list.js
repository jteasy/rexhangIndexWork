/*
 	=== info ===	 
 	* Filename: web_top_list.js
 	* Decscription: web_top_list
 	* Version: 1.0.0(2015.11.04)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */
$(function(){
	/*悬停li标签的时候显示列表盒子*/
	$("#goods-list-id li").mouseover(function(){
		var liIndex = $(this).index();
		$(".show-lists-box").hide().eq(liIndex).show();
	});
	/*离开盒子的时候隐藏*/
	$(".left-lists").mouseleave(function(){
		$(".show-lists-box").hide();
	});
});