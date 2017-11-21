/*global $, alert, console, mixer */
$(function () {

    'use strict';

    $('header').height($(window).height() - 100);
     $('.who-us, .academy, .dev-lanc, dev-zone').height($(window).height() - 120);

    $('nav .bar i').click(500, function () {

        $('nav .nav ').toggleClass('visibel');
        $('.nav li').toggleClass('list-visibel');
    });

    $('.nav li a').click(function () {
        $('html body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 15
        }, 1200);

    });

    $(function () {
        $(".playlist li").on("click", function () {
            $(".videoarea").attr({
                "src": $(this).attr("movieurl"),
                "poster": "",
                "autoplay": "autoplay",
            });
            
        }); 
        $(".videoarea").attr({
            "src": $(".playlist li").eq(0).attr("movieurl"),
            "poster": $(".playlist li").eq(0).attr("moviesposter")
        });
    });
    
    $('.playlist li .fa-play').on("click", function () {
        
        $(this).toggleClass('fa-pause');
        $(this).siblings().removeClass('fa-pause');

    });
});
