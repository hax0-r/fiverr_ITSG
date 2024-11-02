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
  spaceBetween: 10,

  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
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
      slidesPerView: 1,
    }
  }
});

document.getElementById("showAddress").addEventListener("click", function() {
  document.getElementById("addressSection").style.display = "block";
  document.getElementById("showAddress").style.color = "#093055";
  document.getElementById("showMap").style.color = "#fff";
  document.getElementById("mapSection").style.display = "none";
});

document.getElementById("showMap").addEventListener("click", function() {
  document.getElementById("showAddress").style.color = "#fff";
  document.getElementById("showMap").style.color = "#093055";
  document.getElementById("addressSection").style.display = "none";
  document.getElementById("mapSection").style.display = "block";
});
