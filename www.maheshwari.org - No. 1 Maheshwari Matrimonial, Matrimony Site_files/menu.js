/*
$(document).ready(function () {
    if (parseInt(window.innerWidth) > 800) {
        $('.menu-wrapper').scrollTie({
            property: 'top',
            stopAtValue: -1 * (parseInt($('#guru').css('height')) + parseInt($('#guru').css('paddingLeft'))),
            reverseDirection: true,
        });
    }
});

$(window).resize(function () {
    if (parseInt(window.innerWidth) > 800) {
        $('.menu-wrapper').scrollTie({
            property: 'top',
            stopAtValue: -1 * (parseInt($('#guru').css('height')) + parseInt($('#guru').css('paddingLeft'))),
            reverseDirection: true,
        });
    }
});
*/
jQuery('.toggle-nav').click(function (e) {
    jQuery('.active-menu').slideToggle("slow");
    e.preventDefault();
});
jQuery(window).resize(function () {
    if (parseInt(window.innerWidth) > 800) {
       jQuery('.active-menu').show();
    }
});