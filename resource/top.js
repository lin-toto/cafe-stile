$(function(){

  $('#modal_movie').colorbox({
    iframe:true,
    innerWidth:960,
    innerHeight:540,
  });

  $(window).on('scroll', function(){
    var value = $(this).scrollTop();
    $('.mainbg--01').stop().animate({'top': 150 + value / 10 - 230});
    $('.mainbg--02').stop().animate({'top': 150 + value / 50 - 230});
  });

  if(location.hash == "#skip"){
    $('.loading_logo').hide();
    $('.loading').hide();
    $('.main').addClass('active');
  }

  setTimeout('stopload()',10000);

});

$(window).on('load', function () {
  $('.loading_logo').delay(600).fadeOut(400);
  $('.loading').delay(1000).fadeOut(400);
  setTimeout( function(){
    $('.main').addClass('active');
  },1500);
});

function stopload(){
  $('.loading_logo').delay(600).fadeOut(400);
  $('.loading').delay(1000).fadeOut(400);
  setTimeout( function(){
    $('.main').addClass('active');
  },1500);
}