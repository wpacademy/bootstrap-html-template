$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()>=600 && !$('nav').hasClass('sticky')){
            $('nav').addClass('sticky'); 
        }
        else if($(window).scrollTop()<600 && $('nav').hasClass('sticky')){
           $('nav').removeClass('sticky') 
        }
    });
});