$(function(){

  $('.pagetop').on('click', function(){
    $('body,html').animate({
      scrollTop: 0
    }, 600, 'easeOutCubic');
  });

  if(location.pathname != "/") {
    $('.menu .menu__item--' + location.pathname.split("/")[1]).addClass('current');
  }

  if(location.pathname != "/") {
    var bgTop1 = $('.label_bg1').offset().top;
    var bgTop2 = $('.label_bg2').offset().top;
  }

  $(window).on('scroll', function(){
    var value = $(this).scrollTop();
    $('.label_bg1').stop().animate({'top': bgTop1 + value / 5 - 140});
    $('.label_bg2').stop().animate({'top': bgTop2 + value / 15 - 140});
  });

});