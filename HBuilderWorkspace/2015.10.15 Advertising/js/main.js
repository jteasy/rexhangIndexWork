$(function() {
	/*点击红包按钮淡入红包图层*/
	$(".q1").click(function() {
		$(".ck , .hbbtn , .ylq").show(400).css({
			"transform": "scale(1) rotate(360deg)"
		});
	});
	/*点击领取红包按钮淡出红包图层*/
	$(".ylq").click(function() {
		$(".ck , .hbbtn , .ylq").hide(400).css({
			"transform": "scale(0.3) rotate(0deg)"
		});
	});
})