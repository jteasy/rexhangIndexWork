/*
 	=== info ===	 
 	* Filename: bg_auto.js
 	* Decscription: bg_auto
 	* Version: 1.0.0(2015.11.11)
 	* Website: http://www.fenqiday.com
 	* Author: Rexhang (rexhang@outlook.com)
 */
$(function(){
	function setTime(){
		var data_color1 = "#f00";
		var data_color2 = "#333";
		var data_color3 = "#999";
		var data_color4 = "#000";
		var data_color5 = "#FFAD29";
		if($("#centered-btns1_s0").hasClass("centered-btns1_on")){
			$(".web-lists").css("background-color",data_color1);
		} else if($("#centered-btns1_s1").hasClass("centered-btns1_on")){
			$(".web-lists").css("background-color",data_color2);
		} else if($("#centered-btns1_s2").hasClass("centered-btns1_on")){
			$(".web-lists").css("background-color",data_color3);
		} else if($("#centered-btns1_s3").hasClass("centered-btns1_on")){
			$(".web-lists").css("background-color",data_color4);
		} else if($("#centered-btns1_s4").hasClass("centered-btns1_on")){
			$(".web-lists").css("background-color",data_color5);
		};
	};
	setInterval(setTime,0);
});
