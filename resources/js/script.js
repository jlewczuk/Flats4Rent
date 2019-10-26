$(document).ready(function () {

    $('.js--section-about-us').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

	$('.js-section-features').waypoint(function(direction) {
		if (direction === "down") {
            $('nav').addClass('sticky-nav');
            document.getElementsByClassName('main-nav').style.display = "block";
        } else {
            $('nav').removeClass('sticky-nav');
		}
	}, {offset: '60px;'});
	
	$('.js-scroll-to-signup').click(function() {
		$('html, body').animate({scrollTop: $('.js-section-signup').offset().top}, 1000);
	});
	
	$('.js-scroll-to-features').click(function() {
		$('html,body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
	});

    $('js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('js--section-about-us').offset().top +55}, 1000);
    });
	
	/* --- Animations --- */
	$('.js-wp-1').waypoint(function(direction) {
		$('.js-wp-1').addClass('animated fadeIn');
	}, {offset: '50%'});
	
	$('.js-wp-2').waypoint(function(direction) {
		$('.js-wp-2').addClass('animated fadeInUp');
	}, {offset: '40%'});
	
	$('.js-wp-3').waypoint(function(direction) {
		$('.js-wp-3').addClass('animated fadeIn');
	}, {offset: '50%'});
	
	$('.js-wp-4').waypoint(function(direction) {
		$('.js-wp-4').addClass('animated pulse');
	}, {offset: '40%'});

	$('.js-mobile-nav').click(function() {
		
		var nav = $('.js-main-nav');
		var icon = $('.js-mobile-nav i');
		
		nav.slideToggle(200);
		
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.removeClass('ion-close-round');
			icon.addClass('ion-navicon-round');
		}
		
	});

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-technologies').offset().top -60}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about-us').offset().top -60}, 1000);
    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $(".js--wp-3-1").waypoint(function (direction) {
        $(".js--wp-3-1").addClass("animated fadeInUp");
    }, {
        offset: "80%"
    });

    $(".js--wp-3-2").waypoint(function (direction) {
        $(".js--wp-3-2").addClass("animated fadeInUp");
    }, {
        offset: "80%"
    });

    $(".js--wp-3-3").waypoint(function (direction) {
        $(".js--wp-3-3").addClass("animated fadeInUp");
    }, {
        offset: "80%"
    });

    $(".js--wp-3-4").waypoint(function (direction) {
        $(".js--wp-3-4").addClass("animated fadeInUp");
    }, {
        offset: "80%"
    });

    $(".js--wp-4").waypoint(function (direction) {
        $(".js--wp-4").addClass("animated pulse");
    }, {
        offset: "60%"
    });
    
    $(".js--wp-6").waypoint(function (direction) {
        $(".js--wp-6").addClass("animated fadeIn");
    }, {
        offset: "70%"
    });

    $(".js--nav-icon").click(function () {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");

        nav.slideToggle(200);

        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        } else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
    });

    $('.main-nav').on('click', 'a', function () {
        $('.main-nav').css('display', 'none'); 
        $('.mobile-nav-icon').find('i').removeClass('ion-close-round').addClass('ion-navicon-round');
        });

    $('.js--wp-5').waypoint(function() {
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        this.destroy();
    }, {
        offset: '50%'
    });

});