$(function(){
	var clickCount = 0;
	var _width = $(window).width() / 2 - 450 + "px";
	function oneClick(){
		$(".nav").animate({width:"900px",marginLeft:_width,marginTop:"50px"},500);
	}
	function twoClick(){
		$(".nav").animate({width:"500px",marginLeft:"0px",marginTop:"0px"},500);
	}
	function divClick(){
		if(clickCount == 0)oneClick();
		if(clickCount&1 == 1){
			twoClick();
		} else {oneClick();}
		clickCount++;
	}
	// i&1 = 1; 方法 ---- 按位与运算，取 2进制整数 i 的最低位，如果最低位是1 则得1，如果最低位是0 则得0。 奇数 i 的最低位 是1，偶数i 的最低位 是0。
	/*var i = 1;
	var j = 2;
	var k = 3;
	var m = 4;
	var xx = k&1 == 1;
	alert(xx);*/
	$(".nav").click(divClick);
});

