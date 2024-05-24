$(document).ready(function () {
  $("#service-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });
});

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
  $("#category-carousel").owlCarousel({
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
  $("#new-product-carousel").owlCarousel({
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



