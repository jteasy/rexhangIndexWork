/**
 * 
 * @authors rexhang (rexhang@outlook.com)
 * @date    2015-06-22 18:44:24
 * @version $Id$
 */
(function($){

    //$.fn是jquery内部提供的一个对象
    $.fn.rexhangDrag = function(options){
        //参数的继承
        var opts = $.extend({},$.fn.rexhangDrag.defaults,options);
        this.each(function(){
            opts.box = $(this);
            init(opts);
        });
    };

    //拖拽初始化方法
    function init(opts){
        var $box = opts.box;//获取当前操作的div
        var x = 0;
        var y = 0;
        var left = 0;
        var top = 0;
        // x、y是获取当前鼠标按下去所在的x、y轴坐标
        //left、top是当前元素距离左顶点的左和顶位置

        isDrag = false;//开关控制
        /*表头拖拽*/
        if(opts.heads){
            $heads = $box.find(opts.heads);
        }else{
            $heads = $box;
        }
        $heads.on("mousedown",function(e){
            x = e.pageX;
            y = e.pageY;
            //alert(x + "px" + y + "px");
            var offset = $(this).offset();
            left = offset.left;
            top = offset.top;
            //alert(left+"---"+top);
            isDrag = true;//打开开关
            $(document).on("mousemove",function(e){
                    //如果打开就可以拖动
                    if(isDrag){
                         var nL = e.pageX + left - x;
                        if(nL < 2)nL = 2;
                        var nT = e.pageY +top - y;
                        if(nT < 2)nT = 2;
                        $box.css({
                            "left":nL,
                            "top":nT
                        });
                    }
            });

            $(document).on("mouseup",function(){
                isDrag = false;//关闭开关
            });

        })
    };
    /*属性参数优先原则*/
    $.fn.rexhangDrag.parseOptions = function(target) {
        var $target = $(target);
        return {
            heads : $target.attr("heads"),
            arrow : $target.attr("arrow")
        }
    };

    //默认参数
    $.fn.rexhangDrag.defaults = {
        heads:"",
        arrow:""
    };

})(jQuery)
