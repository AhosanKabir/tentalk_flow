(function ($) {
  "use strict";

  // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  // ---hero_slider--
  $(".hero_wrapper").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    nav: false,
    dots: true,
  });

  // hero_bottom_content_wrapper
  $(".hero_bottom_content_wrapper").owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    smartSpeed: 500,
    navText: [
      '<img src="assets/img/arrow-left.png" alt="">',
      '<img src="assets/img/arrow-right.png" alt="">',
    ],
    nav: true,
    dots: false,
  });

  // owlCarousel
  $(".uac_wrapper").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    nav: false,
    dots: true,
  });

  // owlCarousel
  $(".gallary_wrapper").owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    smartSpeed: 500,
    navText: [
      '<img src="assets/img/arrow-left.png" alt="">',
      '<img src="assets/img/arrow-right.png" alt="">',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400:{
        items: 5
      },
    },
  });
})(jQuery);
