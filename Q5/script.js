$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav ul').slideToggle();
    });
  
    $(window).resize(function(){
        if($(window).width() > 390) {
            $('nav ul').removeAttr('style');
        }
    });
  });