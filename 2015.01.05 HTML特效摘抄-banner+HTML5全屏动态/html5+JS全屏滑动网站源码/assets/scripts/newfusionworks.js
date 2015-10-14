/**
* js操作文件
*/
;(function(){
    var newfusionworks = {};

    /**
    * init 
    */
    newfusionworks._init = function(){
        // 初始化时绑定事件
        newfusionworks._live();

        // 初始化backtotop
        newfusionworks._back_init();

        // 初始化锚点滚动显示
        newfusionworks._anchor_init();

        // 初始化图片抖动
        newfusionworks._jumpimg_init();

        // 加载数据
        data_handle.loading();

        // 初始化绑定作品详细文字显隐
        newfusionworks._works_word_show();

        $(".cantact").hover(function(){
            newfusionworks._concatLoading();
        });
        
        // 延时加载
        newfusionworks.lazyload({evt:'.list_main'});
        newfusionworks.lazyload({evt:'#content4'});
        newfusionworks.lazyload({evt:'#content5'});
        newfusionworks.lazyload({evt:'#content2'});
        newfusionworks.lazyload({evt:'.popup_box'});
        // newfusionworks.lazyload({evt:'#content1'});
    }
    
    // 延时加载
    newfusionworks.lazyload = function(options){
        var opts = {
            evt:null,
            height:-200,
            src:'src0',
            attr:''
        };
        opts = $.extend(opts,options || {});
        var page_top = function(){
            return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop,document.body.scrollTop) - opts.height;
        };
        var ajaxs = $(opts.evt).find(".lazy_ajax");
        var imgs = $(opts.evt).find("img["+opts.src+"]"+opts.attr);
        var lyload = function(){
            imgs.each(function(){
                var img = $(this);
                var src0 = $(this).attr(opts.src);
                if(src0){
                    if (img.offset().top <= page_top()){
                        img.attr("src",src0).removeAttr(opts.src).show();
                    }
                }
            });
            ajaxs.each(function(){
                var frm = $(this);
                if(frm.is(':visible') && frm.hasClass('lazy_ajax')){
                    if (frm.offset().top <= page_top()){
                        $(function(){
                            frm.trigger('click').removeClass('lazy_ajax');
                        });
                    }
                }
            });
        };
        lyload();
        $(window).bind("scroll",function(){
            lyload();
        });
    };

    /**
    * live 
    */
    newfusionworks._live = function(){
        // 初始化loading
        setTimeout(function(){
            newfusionworks._loadingLive();
        },100);

        // 留言开启关闭
        newfusionworks._leavewordLive();

        // 作品展示
        newfusionworks._worksLive();

        //关闭个人展示
        newfusionworks._closeuser_live();

        //关闭提示框
        newfusionworks._close_msg();
    }

    /**
    * 初始化backtotop
    */
    newfusionworks._back_init = function(){
        $("#back_to_top").backToTop();
    }

    /**
    * 作品展示
    */
    newfusionworks._worksLive = function(){
        //$(".works").css("z-index","1");
        //$(".works").css("marginLeft",$(".works").outerWidth());
        $(".works").hide();
        $("#content3 section figure").live("click",function(){
            $("#nav_anchorLink").find("li:eq(2) a").click();
            // 检查现在是第几个
            var _width = $("body").data("_width");
            var Obj = $(this);
            
            // 图片替换成src
            var works_id = Obj.closest("li").attr("works_id");
            var moreImg = $(".worksdetail_"+works_id).find(".works_show img");
            // console.log(moreImg.length);
            if(moreImg && moreImg.length>0){
                
                moreImg.each(function(k,v){
                    $(this).attr("src",$(this).attr("src0"));
                })    
            }
            var index = $("#content3 section figure").index(Obj);

            $("#works_move").css("left",-index*_width+"px");
            $(".works").fadeIn("normal");

            var ulObj = $("#works_move li");
            var liObj = $(ulObj[index]);
            var a_str = "";
            var imgLength = liObj.find("figure img").length;
            for(var i=1;i<=imgLength;i++){
                if(i == 1){
                    a_str += '<li class="nav_on"><a href="###"></a></li>';
                }else{
                    a_str += '<li><a href="###"></a></li>';
                }
            }

            $("#works_detail_num").html(a_str);

            $("body").data("liObj",liObj);

            // 绑定图片轮换
            newfusionworks._show_img_turn(liObj);
            return false;
        })

        $(".works_trun3 a").live("click",function(){
            $(".works").fadeOut("normal");
            return false;
        });

        // 绑定选中

        // 左右选中
        var liObj;
		newfusionworks.content_show = 0;
		newfusionworks.content_show1 = 0;
        $(".works_trun1 a,.works_trun2 a").live("click",function(){
			
			
            var Obj = $(this).closest("span");
            var _class = Obj.attr("class");
            var _width = $("body").data("_width");

            var c="";
            switch(_class){
                case 'works_trun1':
                    if(!Obj.prev("span").hasClass("works_trun2")){
                        Obj.prev("span").addClass("works_trun2");
                    }
				    Obj.removeClass("works_trun1"); 
					if(newfusionworks.content_show == 1){
						return false;
					}
					newfusionworks.content_show = 1;
					//c ="right";
					var curLeft = $("#works_move").css("left");
					curLeft = curLeft.replace("px","");
					//console.log(curLeft);

					if(curLeft >= 0){
                        Obj.addClass("works_trun1");
						return false;
					}
                    
                     
					$("#works_move").animate({
						left:parseInt(curLeft)+_width
					},{duration:1000,easing:'easeOutExpo',complete:function(){
							//liObj.hide();
							newfusionworks.content_show= 0;
							newfusionworks.content_show1=0;
                            Obj.addClass("works_trun1");
					}});

					curLeft = Math.abs(parseInt(curLeft)+_width);

					// 计算是那个一个li
					curLi = Math.round(curLeft/_width);

					var ulObj = $("#works_move li");
					//console.log(ulObj);
					//console.log(curLi);
					var imgLength = $(ulObj[curLi]).find("figure img").length;
					liObj = $(ulObj[curLi]);
                    liObj.find("figure img").each(function(k,v){
                        $(this).attr("src",$(this).attr("src0"));  
                    })
					//console.log(imgLength);
					var a_str = "";
					for(var i=1;i<=imgLength;i++){
						if(i == 1){
							a_str += '<li class="nav_on"><a href="###"></a></li>';
						}else{
							a_str += '<li><a href="###"></a></li>';
						}
					}

					$("#works_detail_num").html(a_str); 
					newfusionworks.content_show= 0;
					newfusionworks.content_show1=0;
					break;
                case 'works_trun2':
                    if(!Obj.next("span").hasClass("works_trun1")){
                        Obj.next("span").addClass("works_trun1");
                    }
                    Obj.removeClass("works_trun2");
                    Obj.addClass("works_trun4");
					if(newfusionworks.content_show1 == 1){
						Obj.addClass("works_trun2");
                        Obj.removeClass("works_trun4");
                        return false;
					}
					
					newfusionworks.content_show1 = 1;
					var ulLength = $("#works_move li").length;
					var curLeft = $("#works_move").css("left");
					curLeft = curLeft.replace("px","");

					if(-curLeft == (ulLength-1)*_width){
                        Obj.addClass("works_trun2");
                        Obj.removeClass("works_trun4");
						return false;
					}
					$("#works_move").animate({
						left:curLeft-_width
					},{duration:1000,easing:'easeOutExpo',complete:function(){
							//liObj.hide();
                            Obj.addClass("works_trun2");
                            Obj.removeClass("works_trun4");
							newfusionworks.content_show1=0;
							newfusionworks.content_show=0;
					}});

					// 计算是那个一个li
					curLeft = Math.abs(parseInt(curLeft)-_width);
					curLi = Math.round(curLeft/_width);

					var ulObj = $("#works_move li");
					//console.log(ulObj);
					//console.log(curLi);
					var imgLength = $(ulObj[curLi]).find("figure img").length;
					liObj = $(ulObj[curLi]);
                    liObj.find("figure img").each(function(k,v){
                        $(this).attr("src",$(this).attr("src0"));  
                    })
					//console.log(imgLength);
					var a_str = "";
					for(var i=1;i<=imgLength;i++){
						if(i == 1){
							a_str += '<li class="nav_on"><a href="###"></a></li>';
						}else{
							a_str += '<li><a href="###"></a></li>';
						}
					}

					$("#works_detail_num").html(a_str);
					//c ="left";
					newfusionworks.content_show1=0;
					newfusionworks.content_show= 0;
					break;
            }

            newfusionworks._show_img_turn(liObj);

            // 放置当前liObj到data
            $("body").data("liObj",liObj);
            return false;
        });

        $("#works_detail_num li a").live("click",function(){
            var index = $("#works_detail_num li a").index($(this));

            // 影藏所有图片
            var liObj = $("body").data("liObj");

            var imgObj = liObj.find("figure img");

            liObj.find("figure img").hide();

            $(imgObj[index]).fadeIn("normal");

            $(this).closest("ul").find("li").removeClass("nav_on");
            $(this).closest("li").addClass("nav_on");

        });

        // 增加鼠标移动到上面显示
		var content3 = 0;
        $("#works_detail_num li a").live("mouseover",function(){
			
			if(window.content3 == 1){
				return;
			}
			window.content3 = 1;
            var index = $("#works_detail_num li a").index($(this));

            // 影藏所有图片
            var liObj = $("body").data("liObj");

            var imgObj = liObj.find("figure img");

            liObj.find("figure img").hide();

			//$(imgObj[index]).show();
			$(this).closest("ul").find("li").removeClass("nav_on");
			$(this).closest("li").addClass("nav_on");
            $(imgObj[index]).fadeIn("normal",function(){
				window.content3= 0;
			});
			
        });
    }

    var intervalId;
    newfusionworks._show_img_turn = function(liObj){
        // 默认第一个选中
        liObj.find("figure img").hide();
        liObj.find("figure img:eq(0)").fadeIn();

        window.clearInterval(window.intervalId);
        var imgLength = liObj.find("figure img").length;
        var aObj;
        window.aObj = $("#works_detail_num li a");
        var i;
        window.i=1;

        window.intervalId = window.setInterval(function(i){

            if(window.i== imgLength-1){
                $(window.aObj[window.i]).click();
                window.i=0;
            }else{
                $(window.aObj[window.i]).click();
                window.i++;
            }
        },4000);
    }

    //初始化绑定作品详细文字显隐
    newfusionworks._works_word_show = function(){
        $(".works_show ._show_works_txt").hover(function(){
            $(this).closest("li").find("._work_words_show").fadeIn("normal");
        },function(){
            $(this).closest("li").find("._work_words_show").fadeOut("normal");
        });
    }

    /**
    *当滚动到联系人那里 执行此方法 1表示可执行 2不可执行
    */
    newfusionworks._concatLoading = function(){	
        if($(".lefthand").css("left") == -255 || $(".lefthand").css("left")=='-255px'){
            return false;
        }

        $(".lefthand").animate({left:-255},{duration:2000,easing:'swing',complete:function(){
                //$(".lefthand").removeClass("lefthand_start");
        }});

        $(".righthand").animate({right:-155},{duration:2000,easing:'swing',complete:function(){
                //$(".righthand").removeClass("righthand_start");
                $(".cantact_main").fadeIn("normal");
                //$(".cantact_main").removeClass("hide");
        }});

        //$(".lefthand").stop();
        //$(".righthand").stop();
    }

    newfusionworks._concatOuting = function(){
        return;
        if($(".lefthand").css("left") == 0){
            return false;
        }
        $("#content5 .cantact_main").fadeOut("normal",function(){

            $(".lefthand").css("left","0");
            $(".righthand").css("right","0");    
        });

    }


    /**
    * 页面预加载后 退出
    */
    newfusionworks._welcomeLoading = function(){
        //$(".welcome").animate({width:'toggle'},{duration:1000,easing:'swing',complete:function(){
        $(".welcome").fadeOut();
        $("#content1").css({scrollTop:$("#content1").offset().top})
        $("#content1,#content2,#content3,#content3,#content4,#content5,footer,.footerpoint").delay(1000).fadeIn("slow");
        //}});
    }

    /**
    * 留言开启关闭
    */
    newfusionworks._leavewordLive = function(){
        $("#leavewordShow").live("click",function(){
            var _weight = window.screen.width;
            $("#leaveword .messages").css("left",((_weight/2)-300)+"px");
            $("#leaveword").slideDown(2000);
            return false;
        });

        // 关闭留言
        $("#lwClose").live("click",function(){
            $("#leaveword").slideUp(1000);
            return false;
        });
    }

    /**
    * 初始化图片抖动效果
    */
    newfusionworks._jumpimg_init = function(){
        //return false;
        $("#content1 figure").hover(function(){
            var Obj = $(this);
            Obj.animate({
                    top:-20
                },{duration:150});
            
            if(navigator.appName.indexOf("Microsoft") != -1){
                //$(this).find("img:eq(0)").css("display","block");
                $(this).find("img:eq(0)").fadeOut(400);
            }else{
                //$(this).find("canvas").css("display","block");   
                $(this).find("canvas").fadeOut(400);   
            }
            
        },function(){
            var Obj = $(this);
            Obj.animate({
                    top:0
                },{duration:250});
            if(navigator.appName.indexOf("Microsoft") != -1){
                //$(this).find("img:eq(0)").css("display","block");    
                $(this).find("img:eq(0)").fadeIn(3000);    
            }else{
                //$(this).find("canvas").css("display","block");    
                $(this).find("canvas").fadeIn(3000);    
            }  
        });
        $("#content3 section figure").each(function(k,v){
            /*-----跳动 begin-----*/
			/*new JumpObj(v,40);
            $(this).css("cursor","pointer");

            //检查是否为个人介绍
            var classN = "menber_hover";
            if($(this).closest("div").hasClass("content3")){
                classN = "content3_hover";
            }
            $(v).hover(
            function(){
                this.className=classN;
                // 黑白蒙版hover
                //$(this).find("canvas").css("display","none");
            },function(){
                this.className="";
                //$(this).find("canvas").css("display","block");
            }
            );*/
			/*----end----*/
        });
		
		$("#content3 ul li figcaption").hover(function(){
			$(this).css("cursor","pointer");
            var Obj = $(this);
			Obj.find(".w_listop").css("top","20px");
			Obj.addClass("content3_hover");
            /*Obj.animate({
                    top:-36
                },{duration:500});*/
				
			Obj.find(".w_listop").animate({top:90},{duration:500,easing:'swing'});
				
            
        },function(){
			$(this).css("cursor","pointer");
            var Obj = $(this);
			
			Obj.find(".w_listop").css("top","20px");
			
			Obj.removeClass("content3_hover");
            /*Obj.animate({
                    top:0
                },{duration:500});*/
				
			
        });
    }

    /**
    *关闭个人展示
    */
    newfusionworks._closeuser_live = function(){
        $("#user_msg a").live("click",function(){
            $("#introduce").fadeOut();
            return false;
        });
    }

    /**
    * 初始化锚点滚动显示
    */
    newfusionworks._anchor_init = function(){
        ANCHOR_SCROLL.UTIL.smoothAnchor('anchorLink',true);
        ANCHOR_SCROLL.UTIL.smoothAnchor('navanchorLink',"nav");
        ANCHOR_SCROLL.UTIL.smoothAnchor('smoothAnchor',true);
    }


    /**
    * 初始化loading
    */
    newfusionworks._loadingLive = function(){
        //console.log('ok');
        newfusionworks.height = 100;
        var _height = document.body.clientHeight;
        var aa = (_height/2)-21;
        $(".welcome .percent_warp").css("top",aa);
        
        //return false;
        newfusionworks.loadingId = window.setInterval(function(){
            $(".welcome .loading").css("height",newfusionworks.height+'%');
            newfusionworks.height=newfusionworks.height-1;
            //$("#percentage").html((100-parseInt(newfusionworks.height)).toString()+"%");
            // 检查是否到同一个地方
            var pp = $(".welcome .loading").height();
            if(pp <=(parseInt(aa)+150)){         //{duration:550,easing:'easeOutExpo'}
                $(".welcome .loading").animate({"height":"0%"},3000);
                //$(".welcome .percent_warp").css("")
                $(".welcome .percent_warp").animate({"top":"-100"},2500,function(){
                    $("body > nav").fadeIn("fast"); 
                    newfusionworks._welcomeLoading();
                });
                
                
                window.clearInterval(newfusionworks.loadingId);
               
               return false; 
            }
            
            
            if(newfusionworks.height <=0){
                // 显示nav
                $("body > nav").fadeIn("fast");
                //$("body > nav").show();

                // 隐藏加载项
                //$(".welcome").fadeOut("slow");
                newfusionworks._welcomeLoading();
                //$(".welcome").hide("normal");
                //$(".welcome .loading").css("height","100%");
                window.clearInterval(newfusionworks.loadingId);
            }
        },50);
    }

    /**
    * 选中导航
    */
    newfusionworks._select_nav=function(navStr){

        // 循环顶部导航
        $(".navanchorLink").each(function(){
            $(this).removeClass("nav_on");

            if($(this).attr("href")==navStr){
                $(this).addClass("nav_on");
            }
        });

        // 循环右边导航
        $(".anchorLink").each(function(){
            $(this).closest("li").removeClass("nav_on");

            if($(this).attr("href") == navStr){
                $(this).closest("li").addClass("nav_on");
            }
        });
    }

    /**
    * 显示信息窗口
    */
    newfusionworks.showmsg = function(msg){
        $("#_tipbox .words_txt p").html(msg);
        $("#_tipbox").show();

        setTimeout(function(){
            $("#_tipbox").fadeOut("normal");
        },2000);
    }

    /**
    *关闭提示框
    */
    newfusionworks._close_msg = function(){
        $("#_tipclose").live("click",function(){
            $("#_tipbox").hide();
        });
    }

    if(window.newfusionworks == undefined){
        window.newfusionworks = newfusionworks;
    }

})();

$(document).ready(function(){
    newfusionworks._init();

    $(".lefthand").css("left",0);
    $(".righthand").css("right",0);
    $("#content5 .cantact_main");

    var _height = document.documentElement.clientHeight;
    //var _height = document.body.scrollHeight;
    //var _height = window.innerHeight;
    //	alert(_height);
    if(_height <=600){
        return;
    }
    $("#introduce .box_align,#leaveword .box_align").css("margin-top",(parseInt(_height)-600)/2);
	
	$(".w_listop").css("top","20px");

    // 获取浏览器宽度 screen.width;
});

/**
* 页面预加载
*/
$(function(){
    $("#content1,#content2,#content3,#content3,#content4,#content5,footer").hide();
});


ph1$ = {
    bindEvt : function() {
        var o = {};
        o.btn_sell_l = $("#wpageLeft");
        if (o.btn_sell_l.length > 0) {
            o.btn_sell_l.bind("click", function() {
                ph1$.scrollLveSell('right');
            });
        }
        o.btn_sell_r = $("#wpageRight");
        if (o.btn_sell_r.length > 0) {
            o.btn_sell_r.bind("click", function() {
                ph1$.scrollLveSell('left');
            });
        }

    },
    scrollLveSell : function(o) {
        if (this.cfg.lv_flag == 0)
            return false;
        var tar = $("#wsell_order");
        var tar2 = $("#wsell_order_t");
        tar.stop();
        tar2.stop();
        
        var width = parseInt(window.screen.width)*0.90*0.94;
        //var outWeight = $("#wsell_order").width();
        //console.log();
        //var max_num = Math.ceil(outWeight/width);
        var max_num;
        var liLength = $("#wsell_order li").length;
        if(window.screen.width>=1680){
            max_num = Math.ceil(liLength/12);
        }else{
            max_num = Math.ceil(liLength/8);
        }
        
        var left = 0;
        var pos = tar.position();
        //alert(pos.left + "|" + width);
        if (o == "left") {
            // 计算向左滚动的屏数
			var left_num = Math.round((Math.abs(parseFloat(tar.css("left").replace("px","")))/width));
			//alert(left_num,max_num);
			if(left_num>(max_num-2)){
			//if (Math.abs(pos.left)+width > width*(max_num-1)) {
                return false;
            }
            left = pos.left - width;
        } else if (o == "right") {
            if (pos.left >= 0) {
                return false;
            }
            left = pos.left + width;
        }
        left = left + "px";
        //alert(left);
        ph1$.cfg.lv_flag = 0;
        tar.animate({
            left: left
        }, {duration:550,easing:'easeOutExpo'});
        tar2.animate({
            left: left
        }, {duration:1000,easing:'easeOutExpo',complete:function() {
            ph1$.cfg.lv_flag = 1;
            //alert(pos.left);
        }});
    },

    cfg : {

    },
    init : function() {
        this.bindEvt();
    }
};

ph$ = {
    bindEvt : function() {
        var o = {};
        o.btn_sell_l = $("#pageLeft");
        if (o.btn_sell_l.length > 0) {
            o.btn_sell_l.bind("click", function() {
                ph$.scrollLveSell('right');
            });
        }
        o.btn_sell_r = $("#pageRight");
        if (o.btn_sell_r.length > 0) {
            o.btn_sell_r.bind("click", function() {
                ph$.scrollLveSell('left');
            });
        }

    },
    scrollLveSell : function(o) {
        if (this.cfg.lv_flag == 0)
            return false;
        var tar = $("#sell_order");
        var tar2 = $("#sell_order_t");
        tar.stop();
        tar2.stop();
        var max_num = $("#sell_order > li").length;
        var width = 130;
    
        var left = 0;
        var pos = tar.position();
        //alert(pos.left + "|" + width);
        if (o == "left") {
            if (Math.abs(pos.left)+width > width*(max_num-4)) {
                return false;
            }
            left = pos.left - width;
        } else if (o == "right") {
            if (pos.left >= 0) {
                return false;
            }
            left = pos.left + width;
        }
        left = left + "px";
        //alert(left);
        ph$.cfg.lv_flag = 0;
        tar.animate({
            left: left
        }, 550);
        tar2.animate({
            left: left
        }, 550, function() {
            ph$.cfg.lv_flag = 1;
            //alert(pos.left);
        });
    },

    cfg : {

    },
    init : function() {
        this.bindEvt();
    }
};

jQuery(function($) {
    var Width = window.screen.width;
    var liLength = $(".content3 .content3_list li").length;
    var total_page =1;
    var new_width=0;
    if(Width>=1680){
        var w = (Width*0.9*0.98)/6;
        new_width = w*6;
        w = w-10;
        $(".content3 .content3_list li").css("width",w+"px");
        total_page = Math.ceil(liLength/12);

    }else{
        var w = (Width*0.9*0.98)/4;
        new_width = w*4;
        w = w-10;
        $(".content3 .content3_list li").css("width",w+"px");
        
        total_page = Math.ceil(liLength/8);
        
    }
    
    // 计算宽度
    $(".content3_list_warp ul").css("width",total_page*new_width);
    
    ph$.init();
    ph1$.init();
});

/*
JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo
Demo: Recreating the Nikebetterworld.com Parallax Demo
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(document).ready(function() { //when the document is ready...
    //save selectors as variables to increase performance
    var $window = $(window);
    $content1 = $("#content1");
    $content2 = $("#content2 > section");
    $content3 = $("#content3 > section");
    $content4 = $("#content4 > section");

    $content5 = $("#content5 > .lefthand");
    var $homeBG = $content1;
    var $designBG = $content3;
    var t = $("#content1 > section");
    var $technikBG = $content4;
    var $labBG = $content5;
    var $projectsBG = $content2;

    var windowHeight = $window.height(); //get the height of the window


    //apply the class "inview" to a section that is in the viewport
    $("#content1, #content2 > section, #content3 > section, #content4 > section, #content5 > .lefthand").bind("inview", function (event, visible) {
        if (visible) {
            $(this).addClass("inview");
        } else {
            $(this).removeClass("inview");
        }
    });


    //function that places the navigation in the center of the window
    function RepositionNav(){
        var windowHeight = $window.height(); //get the height of the window
        var navHeight = $('nav').height() / 2;
        var windowCenter = (windowHeight / 2); 
        var newtop = windowCenter - navHeight;
        //$('nav').css({"top": newtop}); //set the new top position of the navigation list
    }

    //function that is called for every pixel the user scrolls. Determines the position of the background
    /*arguments: 
    x = horizontal position of background
    windowHeight = height of the viewport
    pos = position of the scrollbar
    adjuster = adjust the position of the background
    inertia = how fast the background moves in relation to scrolling
    */
    function newPos(x, windowHeight, pos, adjuster, inertia){
        return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
    }

    //function to be called whenever the window is scrolled or resized
    function Move(){ 
        var pos = $window.scrollTop(); //position of the scrollbar

        // Ausgabe: Position, Window height
        //$("#meta").html("pos: "+pos+" windowHeight: "+windowHeight);

        // home: 0
        if($homeBG.hasClass("inview")){
            //call the newPos function and change the background position
            $homeBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 945, 0.3)}); 
            //$projectsBG.css('display',"block"); 
            //call the newPos function and change the secnond background position
            t.css({'backgroundPosition': newPos(50, windowHeight, pos, 970, 0.3)});
        }

        // projects: 1000
        if($projectsBG.hasClass("inview")){
            //call the newPos function and change the background position
            $projectsBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1800, 0.6)});
            //$projectsBG.css('display',"block");
            //content2_child.css({'backgroundPosition': newPos(50, windowHeight, pos, 3640, 0.6)});
        }

        // design: 2000
        if($designBG.hasClass("inview")){
            //call the newPos function and change the background position
            $designBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2800, 0.3)}); 
            //call the newPos function and change the secnond background position
            //designsprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 3640, 0.6)});
        }

        // technik: 3000
        if($technikBG.hasClass("inview")){
            //call the newPos function and change the background position
            $technikBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 3850, 0.3)}); 
            //call the newPos function and change the secnond background position
            //techniksprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 3660, -0.6)});
        }

        // lab: 4000
        if($labBG.hasClass("inview")){
            //call the newPos function and change the background position
            $labBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 4800, 0.3)}); 
            //call the newPos function and change the secnond background position
            //labsprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 5300, 0.6)});
        }

        // about: 5000
        /*if($aboutBG.hasClass("inview")){
        //call the newPos function and change the background position
        $aboutBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 5800, 0.3)}); 
        //call the newPos function and change the secnond background position
        //aboutsprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 6350, 0.6)});
        }*/

        // jobs: 6000
        /*if($jobsBG.hasClass("inview")){
        //call the newPos function and change the background position
        $jobsBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 6800, 0.3)}); 
        }*/

        //$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
    }

    RepositionNav(); //Reposition the Navigation to center it in the window when the script loads

    $window.resize(function(){ //if the user resizes the window...
        Move(); //move the background images in relation to the movement of the scrollbar
        //RepositionNav(); //reposition the navigation list so it remains vertically central
    });		

    $window.bind('scroll', function(){ //when the user is scrolling...
        // 比例
        var bl = (window.screen.height)/768;
        // 这个时候的滚动高度 937
        var scrollTop = 937;

        //
        //var bl = 1/12;
        //bl = 1.2;

        var _top = $(window).scrollTop();
        var content5_height = 3000;//$("#content5").offset().top;

        if(_top <($("#content2").offset().top)){
            newfusionworks._select_nav("#content1");
        }

        // 检查是否滑动到制定位置 选中游标
        if(_top >=($("#content2").offset().top-40) && _top<($("#content3").offset().top-40)){
            newfusionworks._select_nav("#content2");
        }

        if(_top >=($("#content3").offset().top-40) && _top<($("#content4").offset().top-40)){
            newfusionworks._select_nav("#content3");
        }

        if(_top >=($("#content4").offset().top-40) && _top<($("#content5").offset().top-40)){
            newfusionworks._select_nav("#content4");
            //newfusionworks._concatOuting();  
        }

        if(_top >=($("#content5").offset().top-40)){
            newfusionworks._select_nav("#content5");
            //newfusionworks._concatLoading();
        }

        Move(); //move the background images in relation to the movement of the scrollbar
    });

});
