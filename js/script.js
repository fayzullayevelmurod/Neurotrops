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
