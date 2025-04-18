$(function() {

    // burger
    const burger = $('.header__burger');
    const menu = $('.header__menu');
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('burger-close');
        burger.find(".burger__name").fadeToggle();
        menu.toggleClass('open').toggle(300);
        $('html, body').toggleClass('overflow');
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            menu.removeClass('open');
            burger.removeClass('burger-close');
            $('html, body').removeClass('overflow');
        }
    });
    
    
    // submenu
    // $('.header__menu .menu-item-has-children > a').on('click', function(e) {
    // 	e.preventDefault();
    // });
    
    // var submenu =  $('.header__menu .sub-menu');
    // var menuChildren = $('.header__menu .menu-item-has-children');
    
    
    // menuChildren.on('click', function() {
    	
    // 	if ($(this).hasClass('active')){
    // 			$(this).removeClass('active');
    // 			$(this).find('.sub-menu').removeClass('open').slideUp();
    // 	} else {
    //             menuChildren.removeClass('active');
    //             menuChildren.find('.sub-menu').removeClass('open').hide()
    // 			$(this).addClass('active');
    // 			$(this).find('.sub-menu').addClass('open').slideDown();
    // 	}
    // 	// $(this).find('.sub-menu').toggleClass('open').slideToggle();
    // });
    
    // $(document).on('click', function (e) {
     
    // 	if (!$('.header__menu .menu-item-has-children a').is(e.target) ){
    // 			menuChildren.removeClass('active');
    // 			submenu.removeClass('open').hide();
    // 	}
    
    // });
    // goods slider
    $('.goods__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // infinite: true,
        // speed: 500,
        // arrows: false,
        nextArrow: $('.goods .slider__arrow-next'),
        prevArrow: $('.goods .slider__arrow-prev'),
        // cssEase: 'linear',
        // dots: true,
        // fade: true,
        // autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    // feedback slider
    $('.feedback__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // infinite: true,
        // speed: 500,
        // arrows: false,
        nextArrow: $('.feedback-sl .slider__arrow-next'),
        prevArrow: $('.feedback-sl .slider__arrow-prev'),
        // cssEase: 'linear',
        // dots: true,
        // fade: true,
        // autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    // article slider
    $('.article__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // infinite: true,
        // speed: 500,
        // arrows: false,
        nextArrow: $('.articles-sl .slider__arrow-next'),
        prevArrow: $('.articles-sl .slider__arrow-prev'),
        // cssEase: 'linear',
        // dots: true,
        // fade: true,
        // autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    // product slider
    $('.product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    });
    
    // $( window ).on('resize',function() {
    //     productSlider.slick('reinit');
    //   });
    $('.faq__item:first-child').find('.faq__header').addClass('active');
    $('.faq__item:first-child').find('.faq__body').show();
    
    $('.faq__header').on('click', function () {
        const faqBody = $(this).next();
    
        if (!$(this).hasClass('active')){
            $('.faq__header').removeClass('active');
            $('.faq__body').slideUp(300);
            $(this).addClass('active');
            faqBody.slideDown(300);
        } else {
            $(this).removeClass('active');
            faqBody.slideUp(300);
        }
    });
    $('.ba-slider').beforeAfter();
    $('.popup-link').fancybox({
        // thumbs : { autoStart:true },
        toolbar: "auto",
        infobar: true,
        smallBtn: "auto",
        protect: true,
        loop: true,
        iframe : {
            preload : false
        },
        closeExisting : true
    });
    
    $('[data-fancybox]').fancybox({
        // thumbs : { autoStart:true },
        toolbar: "auto",
        infobar: true,
        smallBtn: "auto",
        protect: true,
        loop: true,
        iframe : {
            preload : false
        }
    });

    $('.catalog__select').niceSelect();

});