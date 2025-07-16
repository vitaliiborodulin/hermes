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