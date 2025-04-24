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