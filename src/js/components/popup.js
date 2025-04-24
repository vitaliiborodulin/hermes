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