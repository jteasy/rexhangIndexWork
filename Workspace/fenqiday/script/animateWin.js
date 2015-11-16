

function objOpenwin(opts) {
        var objOpenwin = $("<div id='zhezhao'>"+
                                                    "<div class='divpic'>"+
                                                        "<div class='hed'>"+
                                                            "<img src='../../image/nice.gif' alt='nice' width='100' height='100' />"
                                                        +"</div>"
                                                        +"<p class='ct_font'>"+opts.detailfonts+"</p>"+
                                                        "<div class='fot' tapmode='tapco'>"+opts.surefonts+"</div>"+
                                                        "</div>"+
                                                    "</div>");
        $("body").append(objOpenwin);   
        /*对位置进行设置*/
        var wH2 = $(window).height() / 2;
        $(".divpic").css("height", wH2);
}
