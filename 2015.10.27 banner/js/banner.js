/**
 *
 * @authors rexhang
 * @date    2015-10-27 11:26:47
 * @version v1.0
 */
$(function() {
	//图片自适应
	var con_width = $(".container").width();
	var _height = 1920 * con_width / 1080;
	$(".sel , .container").height(_height);
	//预设索引
	_index = null;
	$("#banner-content").find("li").click(function() {
		$(this).addClass('sel-color').siblings().removeClass('sel-color');
		_index = $(this).data("index");
		if ($(".sel").hasClass('active')) {
			$(".sel").removeClass('active');
		};
		$(".sel").addClass('hide').eq(_index).addClass('active');
	});
});