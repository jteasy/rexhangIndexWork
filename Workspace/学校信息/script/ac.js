$(function(){
        $("input[name='mima']").focus(function(){
            $("#passwords").css({
                "border-bottom":"1px solid #1B6416",
                "margin-top":"-1px"
            })
        });
        $("input[name='mima']").blur(function(){
            $("#passwords").css({
                "border-bottom":"0px solid #E4D9D9"

            })
        });

        $("input[name='haoma']").focus(function(){
            $("#phoneMum").css({
                "border-bottom":"1px solid #1B6416"
            })
        });
        $("input[name='haoma']").blur(function(){
            $("#phoneMum").css({
                "border-bottom":"1px solid #E4D9D9"
            })
        });
    });