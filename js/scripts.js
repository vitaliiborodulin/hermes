$(function() {

    // nav menu
    const openMenu = $('#menu-open');
    const navMenu = $('.navigation');
    const closeMenu = $('.close-menu');
    const overlay = $('.hidden-overlay');
    
    openMenu.on('click', function(){
        $(this).toggleClass("open");
        navMenu.toggleClass("show");
        $('.hidden-overlay').toggleClass("show");
        $('body').toggleClass("menu-opened")
    });
    
    // search menu
    const openSearch = $('#search-open');
    const searchMenu = $('.search-menu');
    
    openSearch.on('click', function(){
        $(this).toggleClass("open");
        searchMenu.toggleClass("show");
        $('.hidden-overlay').toggleClass("show");
        $('body').toggleClass("menu-opened")
    });
    
    
    
    closeMenu.on('click', function(){
        overlay.removeClass("show");
    
        searchMenu.removeClass("show");
        navMenu.removeClass("show");
    
        openSearch.removeClass("open");
        openMenu.removeClass("open");
    
        $('body').removeClass("menu-opened")
    });
    
    overlay.on('click', function(){
        overlay.removeClass("show");
    
        searchMenu.removeClass("show");
        navMenu.removeClass("show");
    
        openSearch.removeClass("open");
        openMenu.removeClass("open");
    
        $('body').removeClass("menu-opened")
    });
    
    $('.navigation__menu > li > a').on('click', function(){
        overlay.removeClass("show");
    
        searchMenu.removeClass("show");
        navMenu.removeClass("show");
    
        openSearch.removeClass("open");
        openMenu.removeClass("open");
    
        $('body').removeClass("menu-opened")
    });
    
    $('.menu-parent-item').on('click', function(){
        // $(this).addClass("current-menu-item").siblings().removeClass("current-menu-item");
        // $('.sub-menu').hide();
        // $(this).children('.sub-menu').slideToggle();
    
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('.sub-menu').slideUp();
        } else {
                $('.menu-parent-item').removeClass('active');
                $('.menu-parent-item').find('.sub-menu').hide();
                $(this).addClass('active');
                $(this).find('.sub-menu').slideDown();
        }
    });
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
    $('#myfile').change(function() {
        if ($(this).val() != '') $(this).prev().text('Выбрано фото: ' + $(this)[0].files.length);
        else $(this).prev().text('Выберите несколько фото');
    });

    $('.catalog__select').niceSelect();

});