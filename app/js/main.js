$(document).ready(function(){
	$("td input").mouseover(function(){
		$(this).parent().parent().parent().addClass("hov");
	})
	$("td input").mouseout(function(){
		$(this).parent().parent().parent().removeClass("hov");
	})

	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),		
			top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 750);
	});

	$(window).scroll(function() {
        if($(this).scrollTop() > 15) {
            $('.header').addClass('stickytop');
            
        }
        else{
            $('.header').removeClass('stickytop');
        }
    });

    $(".mob-mnu").on("click", function(){
    	$(this).parent().toggleClass("show");
    })

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    pagination:false,
    responsive:{
        0:{
            items:1
        }
    }

	})

	$("form").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				message: "required"
			},
			messages: {
				name: "Please enter your name",
				email: "Please enter a valid email address",
				message: "Please enter your message"
			}
		});

})