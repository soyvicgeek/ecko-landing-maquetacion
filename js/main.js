$(document).ready(function () {
  $(".carousel__products").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  $(".information__accordion-header").click(function () {
    if (!$(".information__accordion-header").hasClass("active")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});
