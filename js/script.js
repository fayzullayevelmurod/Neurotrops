// intro swiper
var swiper = new Swiper(".intro__swiper", {
  slidesPerview: 1,
  navigation: {
    nextEl: ".next__btn",
    prevEl: ".prev__btn",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 600,
});

// products swiper
var swiper = new Swiper(".products__swiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  // slidesPerColumn: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  allowTouchMove: false,
});
// product__img-swiper
var swiper = new Swiper(".product__img-swiper", {
  // slidesPerview: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // effect: "fade",
  speed: 700,
});
// about__swiper
var swiper = new Swiper(".about__swiper", {
  slidesPerView: 2.8,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// blog__swiper
var swiper = new Swiper(".blog__swiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// events__swiper
var swiper = new Swiper(".events__swiper", {
  slidesPerview: 1,
  navigation: {
    nextEl: ".next__btn2",
    prevEl: ".prev__btn2",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 600,
});
// reviews__swiper
var swiper = new Swiper(".reviews__swiper", {
  slidesPerView: 2.8,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// products
// const products = document.querySelectorAll(".product__img");

// products.forEach((product) => {
//   const productFavouriteBtn = product.querySelector(".product__favourite");
//   productFavouriteBtn.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// });

// fixed question btn
const questionBtn = document.querySelector(".question__box-btn");
const socialMediaBox = document.querySelector(".socail__media");

questionBtn.addEventListener("click", () => {
  socialMediaBox.classList.toggle("show");
});

// accordion
const accordion = document.querySelectorAll('.accordion');

accordion.forEach(item => {
  const accordionBtn = item.querySelector(".accordion__arrow");
  accordionBtn.addEventListener('click', () => {
    item.classList.toggle('is__open')
  })
})