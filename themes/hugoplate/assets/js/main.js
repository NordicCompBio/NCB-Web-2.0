// main script
(function () {
  "use strict";

  // Testimonial Slider
  // ----------------------------------------
  const testimonialSlider = document.querySelector(".testimonial-slider");
  if (testimonialSlider) {
    new Swiper(testimonialSlider, {
      spaceBetween: 24,
      loop: false,
      rewind: true,
      pagination: {
        el: ".testimonial-slider-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
  }

  // Timeline Slider
  // ----------------------------------------
  const timelineSlider = document.querySelector(".timeline-slider");
  if (timelineSlider) {
    new Swiper(timelineSlider, {
      spaceBetween: 24,
      loop: true,
      slidesPerView: "auto",
      centeredSlides: false,
      speed: 12000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,
        sticky: false,
      },
      allowTouchMove: true,
      loopAdditionalSlides: 4,
    });
  }
})();
