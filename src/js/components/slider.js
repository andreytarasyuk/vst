import 'slick-carousel'

$('.js-slider-comments').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: $('.js-slider-next'),
  prevArrow: $('.js-slider-prev'),
  draggable: false,
  responsive: [
  {
    breakpoint: 1161,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false,
      arrows: false,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      arrows: false,
      dots: true
    }
  }
  ]
});

// slider-hero
$('.js-slider-hero').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2800,
  speed: 1000,
  vertical: true,
  draggable: false,
  pauseOnHover: false
});


$(window).on('load resize', function () {
  $('.js-slider').each(function () {
      const responsive =  window.matchMedia('(max-width: 767px)').matches
      const slider = $(this);
      const sliderInit = slider.hasClass('slick-initialized');
      if ( responsive && !sliderInit ) {
        slider.slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      } else if (!responsive && sliderInit) {
       slider.slick('unslick');
      }
  });
});
