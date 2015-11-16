/*
 	=== info ===	 
 	* Filename: banner_action.js
 	* Decscription: banner_action
 	* Version: 1.0.0(2015.11.04)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */
$(function(){
	$('#right-banner-ul').responsiveSlides({
		pager: true,
		nav: true,
		namespace: 'centered-btns',
		pause: true,
		pauseControls: true,
		speed: 1000,
		timeout: 3500
	});
	$(".right-banner").mouseover(function(){
		$(".centered-btns_nav").show();
	}).mouseleave(function(){
		$(".centered-btns_nav").hide();
	});
});
