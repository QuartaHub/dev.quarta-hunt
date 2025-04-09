document.addEventListener("DOMContentLoaded", function () {
  const sliderProgress = document.querySelector(".main-slider__percent");
  const sliderCurrent = document.querySelector(".main-slider__current");
  const swiper = new Swiper(".main-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        sliderProgress.style.width = (1 - progress) * 100 + "%";
      },
      slideChangeTransitionEnd(swiper) {
        let curSlide = document.querySelector(
          ".main-slider__slide.swiper-slide.swiper-slide-active"
        );
        sliderCurrent.textContent =
          +curSlide.getAttribute("data-swiper-slide-index") + 1;
      },
    },
    navigation: {
      nextEl: ".main-slider__right",
      prevEl: ".main-slider__left",
    },
  });

  if (window.innerWidth < 1000) {
    let sliderItems = document.querySelectorAll('.main-slider__slide.swiper-slide');

    if (sliderItems) {
      sliderItems.forEach(item => {
        let mobilePicture = item.dataset.mobileImage;

        if (mobilePicture) {
          item.style.backgroundImage = 'url(".' + mobilePicture + '")';
        }
      });
    }
  }
});
