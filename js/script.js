// intro swiper
try {
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
} catch (error) {}

try {
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
} catch (error) {}
try {
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
} catch (error) {}
try {
  // about__swiper
  var swiper = new Swiper(".about__swiper", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    el: ".swiper-pagination",
    pagination: {
      clickable: true,
    },
  });
} catch (error) {}

try {
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
} catch (error) {}
try {
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
} catch (error) {}

try {
  // reviews__swiper
  var swiper = new Swiper(".reviews__swiper", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} catch (error) {}
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
const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item) => {
  const accordionBtn = item.querySelector(".accordion__arrow");
  accordionBtn.addEventListener("click", () => {
    item.classList.toggle("is__open");
  });
});

// counter
const countNumber = document.querySelector(".count__number");
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");

const MAX_COUNT = 3;
const MIN_COUNT = 1;

decrement.addEventListener("click", () => {
  let count = parseInt(countNumber.textContent);
  if (count > MIN_COUNT) {
    count--;
    countNumber.textContent = count;
  }
  if (count <= MIN_COUNT) {
    decrement.classList.add("disabled");
  }
  if (count < MAX_COUNT) {
    increment.classList.remove("disabled");
  }
});

increment.addEventListener("click", () => {
  let count = parseInt(countNumber.textContent);
  if (count < MAX_COUNT) {
    count++;
    countNumber.textContent = count;
  }
  if (count >= MAX_COUNT) {
    increment.classList.add("disabled");
  }
  if (count > MIN_COUNT) {
    decrement.classList.remove("disabled");
  }
});

try {
  // tabs
  const tabItems = document.querySelectorAll(".tab__item");
  const tabContent = document.querySelectorAll(".tab__content");

  function hideTabs() {
    tabItems.forEach((item) => item.classList.remove("active"));
    tabContent.forEach((content) => content.classList.remove("show"));
    tabContent.forEach((content) => content.classList.add("hide"));
  }
  function showTabs(idx = 0) {
    tabItems[idx].classList.add("active");
    tabContent[idx].classList.remove("hide");
    tabContent[idx].classList.add("show");
  }

  hideTabs();
  showTabs();

  tabItems.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      hideTabs();
      showTabs(idx);
    });
  });
} catch (error) {
  throw error;
}
