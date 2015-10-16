/*打开touch事件，解决移动端active类失效问题*/
document.addEventListener('touchstart', function() {}, false);

var sH = document.body.clientHeight;
$(".go_bg").click(function() {
	$(".plus").show().css({
		"height": sH + "px"
	});
	$(".redbag , .redbag-btn").show(400).css({
		"transform":"rotate(360deg) scale(1)",
		"-webkit-transform":"rotate(360deg) scale(1)"
	});
});

$(".redbag-btn").click(function() {
	$(".plus").hide().css({
		"height": sH + "px"
	});
	$(".redbag , .redbag-btn").hide(400).css({
		"transform":"rotate(0deg) scale(.3)",
		"-webkit-transform":"rotate(0deg) scale(.3)"
	});
});