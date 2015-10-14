//<![CDATA[
$(function(){
	(function(){
		var curr = 0;
		$(".youku li").each(function(i){
			$(this).click(function(){
				curr = i;
			
				$(".youku  p").eq(i).fadeIn("slow").siblings("p").hide();
				$(this).siblings("li").removeClass("focus").end().addClass("focus");
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true表示前翻， false表示后翻
			if (flag) {
				if (curr == 0) {
					todo = 1;
				} else {
					todo = (curr - 1) % 3;
				}
			} else {
				todo = (curr + 1) % 3;
			}
			$(".youku li").eq(todo).click();
		};
		
		//自动翻
		var timer = setInterval(function(){
			todo = (curr + 1) % 3;
			$(".youku li").eq(todo).click();
		},5000);
		
		//鼠标悬停在触发器上时停止自动翻
		$(".youku p").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
				todo = (curr + 1) % 3;
				$(".youku li").eq(todo).click();
				},5000);			
			}
		);
	})();
});