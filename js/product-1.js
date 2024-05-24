$(document).ready(function () {
  $("#product-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
        loop: false,
      },
    },
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 30,
    items: 1,
    responsive: {
      400: {
        items: 4,
      },
    },
  });
});
