
    
    // Scroll page with easing effect
    $('.navbar ul li a, #documentation a').bind('click', function(e) {
        e.preventDefault();
        target = this.hash;
        $.scrollTo(target, 1500, {
        	easing: 'easeOutCubic'
        });

        $(".btn-navbar").click();
   	});

	    // Scroll page with easing effect
    $('#footerMenu a').bind('click', function(e) {
        e.preventDefault();
        target = this.hash;
        $.scrollTo(target, 1500, {
        	easing: 'easeOutCubic'
        });

        $(".btn-navbar").click();
   	});



	// Show/Hide Sticky "Go top" button
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$(".go-top").fadeIn(200);
		}
		else{
			$(".go-top").fadeOut(200);	
		}
	});
	
	// Scroll Page to Top when clicked on "go top" button
	$(".go-top").click(function(event){
		event.preventDefault();

		$.scrollTo('#headerSection', 1500, {
        	easing: 'easeOutCubic'
        });
	});
	
$(function(){
    var mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    
    hljs.initHighlightingOnLoad();
    hljs.configure({useBR: true});
        jQuery('#mainSection').raindrops({color:'white',canvasHeight:100});
        jQuery('#thePlugin').raindrops({color:'#ddb3c2',canvasHeight:100});
        jQuery('#documentation').raindrops({color:'#3b3b3b',canvasHeight:100});

    if (!mobile){
        
        jQuery('#examples').raindrops({color:'#52B9FF',canvasHeight:100});

            jQuery('#examples .thumbnail').click(function(e){
                if (e.target.tagName!="CODE"){
                    jQuery(this).children('.blockDtl').toggleClass('active')
                }
            });
    } else{
        jQuery('#download').raindrops({color:'#b5d5e1',canvasHeight:100});
    }
});


