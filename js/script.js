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
  slidesPerview: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // effect: "fade",
  speed: 700,
});

// products
const products = document.querySelectorAll(".product__img");

products.forEach((product) => {
  const productFavouriteBtn = product.querySelector(".product__favourite");
  productFavouriteBtn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// products
// const productFavouriteBtns = document.querySelectorAll(".product__favourite");
// productFavouriteBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.classList.toggle("active"); // Har bir bosgan tugmachaga "active" klassini qo'shish yoki o'chirish
//     productFavouriteBtns.forEach(
//       (item) => item !== btn && item.classList.remove("active")
//     ); // Boshqa tugmalar uchun "active" klassini o'chirish
//   });
// });

// // products.forEach((product) => {
// // });

// fixed question btn 
const questionBtn = document.querySelector(".question__box-btn");
const socialMediaBox = document.querySelector(".socail__media");

questionBtn.addEventListener('click', () => {
  socialMediaBox.classList.toggle('show')
})