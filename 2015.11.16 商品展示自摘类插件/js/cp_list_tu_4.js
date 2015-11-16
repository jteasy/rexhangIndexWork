	$(function(){			
		$("#spec-list").jdMarquee({
			deriction:"left",
			width:300,
			height:56,
			step:2,
			speed:4,
			delay:10,
			control:true,
			_front:"#spec-right",
			_back:"#spec-left"
		});
		$("#spec-list img").bind("mouseover",function(){
			var src=$(this).attr("src");
			$("#spec-n1 img").eq(0).attr({
				src:src.replace("\/n5\/","\/n1\/"),
				jqimg:src.replace("\/n5\/","\/n0\/")
			});
			$(this).css({
				"border":"2px solid #ffcc00",
				"padding":"1px"
			});
		}).bind("mouseout",function(a){
			$(this).css({
				"border":"1px solid #ccc",
				"padding":"2px"
			});
		});				
	})