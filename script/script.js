$(document).ready(function(){
    var header = $('nav');
    var sticky = header.offset();
    $(window).scroll(function(){
        if (window.pageYOffset > sticky.top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
});