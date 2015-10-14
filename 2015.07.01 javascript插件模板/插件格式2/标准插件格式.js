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
                        opts.fangfa($(this),opts);
        });
    };

    // 方法定义
    $.fn.chajianName.methods = {
        fangfa:function($objs){
            var i = $objs.attr("id");
            alert(i);

            
        }
    };
    /*test*/
    $.fn.chajianName = function(opts) {
        //创建一个插件模板
        var $tz_dialog = $("<div id='rexhang'>"+opts.titles+"</div>");
        //向页面写入模板
        $("body").append($tz_dialog);
};
    /*testend*/
    
    // 默认参数
    $.fn.chajianName.defaults = {

    };
    // 属性参数 【最具有优先级】
    $.fn.chajianName.parseOptions = function($input){

    };
})(jQuery);