/**
 * 
 * @authors MaiCong (sb@yxx.me)
 * @date    2015-07-01 04:01:15
 * @version $Id$
 */
//表单验证插件
(function($){
    // 插件入口
    $.fn.chajianName = function(options){
        this.each(function(){
            var opts = $.extend({},$.fn.chajianName.defaults,$.fn.chajianName.methods,options,$.fn.chajianName.parseOptions($(this)));
            opts.init($(this),opts);

        });
    };

    // 方法定义
    $.fn.chajianName.methods = {
            init :function($form){
                $form.find(".tmui_submit").on("click",function(){
                    if($form.find("input[type='text']").val() == "" || $form.find("input[type='text']").val() == 33){
                        $("input[type='text']").css("border","2px solid red").select().css("outline","none");
                        $form.find("span").text(" 请输入用户名");
                        $("input[type='text']").attr("placeholder","要输入中文用户名");
                        $form.find("span").css("color","#409840").css("font-size","12px");
                        return false;
                    }
                });
            }
    };
    // 默认参数
    $.fn.chajianName.defaults = {

    };
    // 属性参数 【最具有优先级】
    $.fn.chajianName.parseOptions = function($input){

    };
})(jQuery);