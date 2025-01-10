export default function initSlick () {
  const slickHeroSlider = $(".slick-slider");
  const slickAdvantagesSlider = $(".advantages-slider");
  const slickGallerySlider = $(".gallery-slider");

  slickHeroSlider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  slickAdvantagesSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  });

  // slickGallerySlider.slick({
  //   infinite: false,
  //   slidesToScroll: 3,
  //   dots: false,
  //   arrows: true,
  //   prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-prev"></span></button>',
  //   nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-next"></span></button>',
  //   autoplay: false,
  //   centerMode: true,
  //   variableWidth: true,
  //   focusOnSelect: true,
  // });
}
