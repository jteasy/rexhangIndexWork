

function objOpenwin(opts) {
        var objOpenwin = $("<div id='zhezhao'>"+
                                "<div class='divpic'>"+
                                    "<div class='hed'>"+
                                        "<img src='../../image/nice.gif' alt='nice' width='50' height='50' />"
                                    +"</div>"
                                    +"<p class='ct_font'>"+opts.detailfonts+"</p>"+
                                    "<div class='fot' tapmode='tapco'>"+opts.surefonts+"</div>"+
                                    "</div>"+
                                "</div>");
        $("body").append(objOpenwin);   
        $('.fot').click(function(){
            api.closeToWin({
                name: 'root',
                reload:true,
                animation: {
                    duration: 0
                }
            });
        });
        /*对位置进行设置*/
        var wH2 = $(window).height() / 2;
        $(".divpic").css("height", wH2);
}
