// Document Ready
$(document).ready(function() {
	$('.custom-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.prev-slide'),
  nextArrow: $('.next-slide'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
	
});