$(function(){
    
    'use strict';
    //Smoothly scroll to element
    $('header a').click(function(e){
        e.preventDefault();
//        console.log($(this).data('scroll'));
        $('html,body').animate({
            scrollTop: $('#'+ $(this).data('scroll')).offset().top - $('.navbar').innerHeight() +1 // $('.navbar').height() if the navbar is fixed
        },1000);
    });
});

