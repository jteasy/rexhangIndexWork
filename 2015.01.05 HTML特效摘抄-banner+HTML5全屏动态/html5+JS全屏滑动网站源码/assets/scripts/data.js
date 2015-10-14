(function(undefined){
    var data_handle = {};

    data_handle._init = function(){
        data_handle._live();
		
		setTimeout(function(){
			data_handle._load_worksdetail();
		},3000);
		
		// 初始化控制li宽度
		data_handle._user_init();
    }
	
	//初始化控制li宽度
	data_handle._user_init = function(index){
		var _weight = window.screen.width;
		var liWidth = ((((_weight/2)-300)/2)+300)*2;
		var liLeft = (_weight-600)/2;
		
		// 放置数据
		$("body").data("liLeft",liLeft);
		$("body").data("liWidth",liWidth);
		
		$(".messages_move li").css("width",liWidth+"px");
		//liObj.css("left",liLeft+"px");
		var moveLeft = liLeft-(liWidth*index);
		$(".messages_move").css("left",moveLeft+"px");
	}

    data_handle._live = function(){
        data_handle._lv_submit();
		
		data_handle._user_live();
		
		data_handle._usera_live();
		
		// 留言分页
		data_handle._lvpage_live();
    }
	
	/**
	*留言分页
	*/
	data_handle._lvpage_live = function(){
		$("#load_leaveword .page").live("click",function(){
			var cur_page = $("body").data("lpage");
			var Obj = $(this);
			var html = Obj.html();
			var handle = 'p';
			
			if(html != 'Previous'){
				handle = 'n';
			}
			
			// 加载数据
			data_handle.loading(handle,cur_page);
			
			return false;
		});
	}

    /**
    * 提交
    */
    data_handle._lv_submit = function(){
        
		// 留言
		$("#lv_submit").live("click",function(){
            var user_name = $("#user_name").val(); 
            var email = $("#email").val(); 
            var content = $("#content").val();
			if(!content || !$.trim(content)){
				return false;
			}

            $.ajax({type: "POST",url: "/ajax/pottleaveword.html",
                data: "user_name="+user_name+"&email="+email+"&content="+content,
                success: function(data){
                    var data = eval("("+data+")");
                    if(data.flag == true){
                        //重新加载一次  列表
						
                        data_handle.loading();
						
						// 清空数据
						data_handle.clear_val('#user_name,#email,#content');
						
						// 信息提示
						newfusionworks.showmsg("留言成功，我们会尽快与您取得联系。");
						return false;
                    }
                }
            });  
			
			return false;
        });
		
		// 联系人
		$("#contact_submit").live("click",function(){
			var customer_name = $("#customer_name").val();
			var email = $("#email_contact").val();
			var phone = $("#phone").val();
			var qq = $("#qq").val();
			var address = $("#address").val();

			if(!customer_name || !email || !phone || !address){
				return false;
			}
			
			$.ajax({type: "POST",url: "/ajax/pottcontact.html",
                data: "data[customer_name]="+customer_name+"&data[email]="+email+"&data[phone]="+phone+"&data[qq]="+qq+"&data[address]="+address,
                success: function(data){
                    var data = eval("("+data+")");
                    if(data.flag == true){
						// 清空数据
						data_handle.clear_val('#customer_name,#email,#phone,#qq,#address');
						
						// 信息提示
						newfusionworks.showmsg("提交成功，我们会尽快与您取得联系。");
						
						return false;

                    }
                }
            }); 
			
			return false;
			
		});
    }

	
	/**
	* 清空数据
	*/
	data_handle.clear_val = function(str){
		var strArr = str.split(",");
		$.each(strArr,function(){
			$(str).val('');
		});
	}
	
	/**
	* 点击用户显示个人信息
	*/
	data_handle._user_live = function(){
		$("#content1 figure").live("click",function(){
			var figureObj = $(this);
			var uid  = figureObj.attr("uid");
			var liObj = $(this).closest("li");
			var ulObj = liObj.closest("ul");
			var index = ulObj.find("li").index(liObj);
			
			data_handle._user_init(index);
			$("#introduce").show();
			return;
		});
	}
	
	/**
	* 用户信息左右按钮
	*/
	data_handle._usera_live = function(){
		$(".user_right").live("click",function(){
			var liObj = $(this).closest("li");
			var ulObj = liObj.closest("ul");
			var liLength = ulObj.find("li").length;
			var index = ulObj.find("li").index(liObj);
			if(liLength == index+1){
				return false;
			}
			
			
			var liWidth = $("body").data("liWidth");
			var liLeft = $("body").data("liLeft");
			var curLeft = $(".messages_move").css("left");
			curLeft = curLeft.replace("px","");
			
			$(".messages_move").animate({
                left:curLeft-liWidth
            },{duration:1000,easing:'easeOutExpo',complete:function(){
				//liObj.hide();
            }});
			
			return false;
		});
		
		$(".user_left").live("click",function(){
			var liObj = $(this).closest("li");
			var ulObj = liObj.closest("ul");
			var index = ulObj.find("li").index(liObj);
			if(index == 0){
				return false;
			}
			
			var liWidth = $("body").data("liWidth");
			var liLeft = $("body").data("liLeft");
			var curLeft = $(".messages_move").css("left");
			curLeft = curLeft.replace("px","");
			//console.log(curLeft,liWidth);
			
			$(".messages_move").animate({
                left:parseInt(curLeft)+liWidth
            },{duration:1000,easing:'easeOutExpo',complete:function(){
				//liObj.hide();
            }});
			
			return false;
		});
		
		/*return false;
		// 暂时改用js调用
		$("#user_left,#user_right").live("click",function(){
			var Obj = $(this);
			var uid = Obj.attr("uid");
			var href = Obj.attr("id");
			
			var c = "";
			switch(href){
				case 'user_left':
					c = "right";
					break;
				case 'user_right':
					c = "left";
					break;
			}
			
			$.ajax({type: "get",url: "/ajax/uerload.html?uid="+uid+"&c="+c,
				data: "",
				cache: false,
				success: function(data){
					var data = eval("("+data+")");
					if(data){
						$("#user_image img").attr("src",IMAGE_URL+data.top_image);
						$("#user_file").html(data.user_file);
						$("#user_introduce").html(data.user_introduce);
						
						$("#user_left").attr("uid",data.user_id);
						$("#user_right").attr("uid",data.user_id);
					}
				}
			});
		});*/
	}

    /**
    * 数据加载
    */
    data_handle.loading = function(handle,page){
		var t = new Date().getTime();
        $.ajax({type: "get",url: "/ajax/loadleaveword.html?ab="+t,
            data: "handle="+handle+"&page="+page,
            cache: false,
            success: function(data){
                //console.log(data);
                var data = eval("("+data+")");
                if(data.data){
                    var str = "<ul>";
                    $.each(data.data,function(k,v){
                        //console.log(v);
                         str += '<li><article class="clearfix">'+
                                        '<p>姓名：'+v.user_name+' 时间：'+v.create_time+'</p>'+
                                        '<p class="green Mg_10T"><span class="f_L Mg_10R"><div class="msg_Lbtn msg_btn4"></div></span>'+v.content+'</p>'+
                                    '</article></li>'; 
                    });
					str += "</ul>";
					
					//str += data.page_str;
					
					// 放置当前页到数据中
					$("body").data("lpage",data.page);
                    
                    $("#load_leaveword").html(str);
					$("#load_leaveword").append(data.page_str);
                }
            }
        });
    }
	
	/**
	*加载 worksdetail
	*/
	data_handle._load_worksdetail =function(works_id){
		var t = new Date().getTime();
        $.ajax({type: "get",url: "/ajax/getallworkdetail.html?ab="+t,
            data: "page=1",
            cache: false,
            success: function(data){
                var data = eval("("+data+")");
				
				var out_str = "";
				$.each(data,function(k,v){
					var img_str = "";
					$.each(v,function(kk,vv){
						if(!vv.works_image){
							return true;
						}
						img_str +='<a href="#"><img style="'+(kk!=0?"display:none;":"")+'" src0="'+(IMAGE_URL+vv.works_image)+'" width="800" height="445" /></a>';
					});
					out_str += '<li class="worksdetail_'+v.works_id+'">'+
                            '<div class="works_movect">'+
                                '<aside class="works_share clearfix fixpng"> <a href="#" class="works_share01"></a> <a href="#" class="works_share02"></a> <a href="#" class="works_share03"></a> <a href="#" class="works_share04"></a> <a href="#" class="works_share05"></a> </aside>'+
                                '<div class="works_show">'+
                                    '<hgroup class="_show_works_txt">'+
                                        '<figure>'+
                                            '<figcaption class="_work_words_show" style="display:none;">'+
                                                '<p class="works_showbg"></p>'+
                                                '<article class="works_show_txt white">'+
												''+v.introduce+''+
                                                '</article>'+
                                            '</figcaption>'+
                                        ''+img_str+''+
										'</figure>'+
                                    '</hgroup>'+
                                '</div>'+
                                '<u class="autoHeight"></u>'+
                            '</div>'+
                        '</li>';
				});
				
				$("#works_move").append(out_str);
				var _width = window.screen.width;
				
				$("body").data("_width",_width);
				
				$("#works_move li").css("width",_width+"px");
				
				// 绑定图片上面的文字显示
				newfusionworks._works_word_show();
				
            }
        });
	}
	
    $(document).ready(function(){
        data_handle._init();    
    });
	
    if(window.data_handle == undefined){
        window.data_handle = data_handle;
    }
})();