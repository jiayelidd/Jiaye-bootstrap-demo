$(document).ready(function() {
    //在document 准备好之后就会执行
    $('#mycarousel').carousel({interval: 2000});

    //这个方法会找到#mycarousel,然后执行里面的的代码
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
      //if 条件检查这个#carouselButton里的<span>是不是pause
      if ($('#carouselButton').children('span').hasClass('fa-pause')) {
        //because it is a pause, so the below code makes the carousel pause
        $('#mycarousel').carousel('pause');
        //change to play icon
        $('#carouselButton').children('span').removeClass('fa-pause')
        $('#carouselButton').children('span').addClass('fa-play')
      }
      else if ($('#carouselButton').children('span').hasClass('fa-play')) {
        //because it is a pause, so the below code makes the carousel pause
        $('#mycarousel').carousel('cycle');
        //change to play icon
        $('#carouselButton').children('span').removeClass('fa-play')
        $('#carouselButton').children('span').addClass('fa-pause')
      }
    });

    $('#reserveButton').click(function() {
      $('#reservationModal').modal();
    });

  })
  $('#loginButton').click(function() {
    $('#loginModal').modal();
  });