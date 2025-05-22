// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     spaceBetween: 20,
//     enabled: true,

//     breakpoints: {
//         320: {
//             allowTouchMove: true,
//             slidesPerView: 1,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         480: {
//             allowTouchMove: true,
//             slidesPerView: 2,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         768: {
//             allowTouchMove: true,
//             slidesPerView: 3,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         1024: {
//             allowTouchMove: true,
//             slidesPerView: 2,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//         1280: {
//             allowTouchMove: true,
//             slidesPerView: 3,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//         1921: {
//             allowTouchMove: true,
//             slidesPerView: 4,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//     },
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
// });

const swiperClub = new Swiper('.swiper-club', {
    // Optional parameters
    spaceBetween: 20,
    slidesPerView: 1,
    enabled: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-club__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.club__swiper-btn--next',
      prevEl: '.club__swiper-btn--prev',
    },
});
const swiperGallery = new Swiper('.swiper-gallery', {
    // Optional parameters
    spaceBetween: 20,
    slidesPerView: 1,
    enabled: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-gallery__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.gallery__swiper-btn--next',
      prevEl: '.gallery__swiper-btn--prev',
    },
});

var swiperTimeline = new Swiper(".swiper-timeline", {
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(swiperTimeline.realIndex).addClass("active");
      }
    }
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    swiperTimeline.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });