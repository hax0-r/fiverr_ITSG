// Swiper for ".mySwiper"
var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    // When window width is <= 640px
    640: {
      slidesPerView: 1,
    },
    // When window width is <= 768px
    768: {
      slidesPerView: 2,
    },
    // When window width is <= 1024px
    1024: {
      slidesPerView: 3,
    },
  }
});

// Swiper for ".mySwiper2"
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  }
});

// Swiper for ".mySwiper3"
var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});
