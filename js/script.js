// input phone mask
const iMaskInput = document.querySelectorAll("#ImaskInput");
iMaskInput.forEach((maskedInput) => {
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  const mask = IMask(maskedInput, maskOptions);
});

function validation() {
  let forms = document.querySelectorAll(".feedback__form");

  if (!forms || forms.length === 0) {
    console.error(
      "Xato: `.feedback__form` klassiga ega bo'lgan elementlar topilmadi yoki array bo'sh!"
    );
    return;
  }

  forms.forEach((form) => {
    let emails = form.querySelectorAll(".input-email");
    let text = form.querySelector(".check__status");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let validateLabel = form.querySelector(".validate__label");
    let isValid = true;

    emails.forEach((email) => {
      let emailValue = email.value.trim();
      if (!emailValue.match(pattern)) {
        isValid = false;
      }
    });

    if (isValid) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.style.display = "none";
      validateLabel.classList.remove("invalid");
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      validateLabel.classList.add("invalid");
      text.innerHTML = "Введите корректные данные";
      text.style.display = "block";
      text.style.color = "#EA13EE";
    }

    if (
      emails.length > 0 &&
      [...emails].every((email) => email.value.trim() === "")
    ) {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.innerHTML = "";
      text.style.color = "#00ff00";
    }
  });
}

// intro swiper
try {
  var swiper = new Swiper(".intro__swiper", {
    slidesPerview: 1,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".next__btn",
      prevEl: ".prev__btn",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 800,
    breakpoints: {
      1024: {
        spaceBetween: 0,
      },
      0: {
        spaceBetween: 30,
      },
    },
  });
} catch (error) {}

try {
  // products swiper
  var swiper = new Swiper(".products__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grid: {
      rows: 2,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    allowTouchMove: true,
    breakpoints: {
      1024: {
        grid: {
          rows: 2,
        },
      },
      744: {
        grid: {
          rows: 1,
        },
        slidesPerView: 2,
      },
      0: {
        grid: {
          rows: 1,
        },
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}
try {
  var swiper = new Swiper(".product__img-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 700,
  });
} catch (error) {}
try {
  var swiper = new Swiper(".about__swiper", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.8,
      },
      600: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}

try {
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
    breakpoints: {
      1024: {
        grid: {
          rows: 2,
        },
      },
      744: {
        slidesPerView: 2,
        grid: {
          rows: 1,
        },
      },
      0: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
    },
  });
} catch (error) {}
try {
  var swiper = new Swiper(".events__swiper", {
    slidesPerview: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".next__btn2",
      prevEl: ".prev__btn2",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 700,
    breakpoints: {
      1025: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2.8,
      },
      744: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
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
    breakpoints: {
      1024: {
        slidesPerView: 2.8,
      },
      744: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}
try {
  // reviews__swiper
  var swiper = new Swiper(".reviews__swiper2", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.8,
      },
      744: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}
try {
  // media__swiper
  var swiper = new Swiper(".media__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
      744: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  const mediaSwiper = document.querySelector(".media__swiper");
  const reviewsTab = document.querySelector(".tabslide");
  if (window.innerWidth < 1024) {
    mediaSwiper.classList.add("swiper");
    reviewsTab.classList.add("swiper-wrapper");
    reviewsTab.classList.remove("reviews__tab");
  }
} catch (error) {}

// fixed question btn
const questionBtn = document.querySelector(".question__box-btn");
const socialMediaBox = document.querySelector(".socail__media");

questionBtn.addEventListener("click", () => {
  socialMediaBox.classList.toggle("show");
});

try {
  // counter
  const countNumber = document.querySelector(".count__number");
  const decrement = document.querySelector(".decrement");
  const increment = document.querySelector(".increment");

  const MAX_COUNT = 20;
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
} catch (error) {}

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
  // document.querySelectorAll(".tab__container").forEach((container) => {
  //   const tabItems = container.querySelectorAll(".tab__item");
  //   const tabContent = container.querySelectorAll(".tab__content");

  //   function hideTabs() {
  //     tabItems.forEach((item) => item.classList.remove("active"));
  //     tabContent.forEach((content) => content.classList.remove("show"));
  //     tabContent.forEach((content) => content.classList.add("hide"));
  //   }

  //   function showTabs(idx = 0) {
  //     tabItems[idx].classList.add("active");
  //     tabContent[idx].classList.remove("hide");
  //     tabContent[idx].classList.add("show");
  //   }

  //   hideTabs();
  //   showTabs();

  //   tabItems.forEach((btn, idx) => {
  //     btn.addEventListener("click", () => {
  //       hideTabs();
  //       showTabs(idx);
  //     });
  //   });
  // });
} catch (error) {}

// menu
const mediaMenu = document.querySelector(".meida__menu");
const closeBtn = document.querySelector(".close__btn");
const openMenu = document.querySelector(".open__menu");
const closeBtnTwo = document.querySelector(".close__media-tab-btn");
const mediaTab = document.querySelector(".media__tab");

openMenu.addEventListener("click", () => {
  mediaMenu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  mediaMenu.classList.remove("active");
});
closeBtnTwo.addEventListener("click", () => {
  mediaTab.classList.remove("show");
});

const showMoreBtn = document.querySelector(".show__more-btn");
if (showMoreBtn) {
  const products = document.querySelectorAll(
    ".products__page .product__tab-content"
  );
  let visibleItemCount = 4;

  function showMore() {
    products.forEach((product) => {
      const productItems = product.querySelectorAll(".product__card");
      for (let i = visibleItemCount; i < productItems.length; i++) {
        productItems[i].style.display = "block";
      }
    });
    showMoreBtn.style.display = "none";
  }

  if (window.innerWidth < 1024) {
    products.forEach((product) => {
      const productItems = product.querySelectorAll(".product__card");
      for (let i = visibleItemCount; i < productItems.length; i++) {
        productItems[i].style.display = "none";
      }
    });
  }

  showMoreBtn.addEventListener("click", showMore);
}

// modal
try {
  const cartModal = document.querySelector(".product__cart");
  const openProductCartModal = document.querySelectorAll(".product__cart-open");
  const closeProductCartModal = document.querySelector(".product__cart-close");

  function hideCartModal() {
    cartModal.classList.remove("show");
  }
  function showCartModal() {
    cartModal.classList.add("show");
  }
  const timeModal = document.querySelectorAll(".time__modal");
  openProductCartModal.forEach((btn) =>
    btn.addEventListener("click", () => {
      showCartModal();
      timeModal.forEach((item) => {
        if (item.classList.contains("show")) {
          setTimeout(() => {
            item.classList.remove("show");
          }, 3000);
        }
      });
    })
  );
  closeProductCartModal.addEventListener("click", hideCartModal);
  cartModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("product__cart")) {
      hideCartModal();
    }
  });
} catch (error) {}

try {
  const favouriteModal = document.querySelector(".favourite__modal");
  const favouriteModalClose = document.querySelector(".favourite__modal-close");
  const openFavouriteModal = document.querySelectorAll(".product__favourite");

  const timeModal = document.querySelectorAll(".time__modal");

  function hideFavouriteModal() {
    favouriteModal.classList.remove("show");
  }
  function showFavouriteModal() {
    favouriteModal.classList.add("show");
  }
  openFavouriteModal.forEach((btn) =>
    btn.addEventListener("click", () => {
      btn.classList.add("active");
      showFavouriteModal();
      timeModal.forEach((item) => {
        if (item.classList.contains("show")) {
          setTimeout(() => {
            item.classList.remove("show");
          }, 3000);
        }
      });
    })
  );
  favouriteModalClose.addEventListener("click", hideFavouriteModal);
  favouriteModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("favourite__modal")) {
      hideFavouriteModal();
    }
  });
} catch (error) {}

try {
  const productCards = document.querySelectorAll(".product__card");

  productCards.forEach((card) => {
    const productWeightList = card.querySelectorAll(".product__weight");

    productWeightList.forEach((weight) => {
      weight.addEventListener("click", () => {
        weight.classList.add("active");
        productWeightList.forEach((w) => {
          if (w !== weight) {
            w.classList.remove("active");
          }
        });
      });
    });
  });
} catch (error) {}

// call__back-modal
try {
  const callModal = document.querySelector(".call__back-modal");
  const openCallModal = document.querySelector(".open__call-modal");
  const closeCallModal = document.querySelector(".close__call-modal");

  function showCallModa() {
    callModal.classList.add("show");
    document.body.classList.add("no-scroll");
  }
  function hideCallModal() {
    callModal.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }

  openCallModal.addEventListener("click", showCallModa);
  closeCallModal.addEventListener("click", hideCallModal);

  callModal.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("call__back-modal")) {
      hideCallModal();
    }
  });
} catch (error) {}

// cookies__modal
try {
  const cookiesModal = document.querySelector(".cookies__modal");
  const closeCookiesModal = document.querySelectorAll(".close__cookies-modal");

  function hideCookiesModal() {
    cookiesModal.classList.remove("show");
    document.body.classList.remove("no-scroll");
    localStorage.setItem("modalShown", "true");
  }

  function showCookiesModal() {
    cookiesModal.classList.add("show");
    document.body.classList.add("no-scroll");
  }

  closeCookiesModal.forEach((btn) =>
    btn.addEventListener("click", hideCookiesModal)
  );

  window.addEventListener("load", () => {
    if (localStorage.getItem("modalShown") !== "true") {
      showCookiesModal();
    }
  });
} catch (error) {}

try {
  const freeze = (status) => {
    status
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  };

  // show modal
  const showModal = (openModal, modal, closeModal) => {
    const openM = document.querySelectorAll(`${openModal}`),
      closeM = document.querySelector(`${closeModal}`),
      m = document.querySelector(`${modal}`);
    openM.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e);
        m.classList.add("show");
        freeze(true);
      });
    });
    // close
    closeM.addEventListener("click", () => {
      m.classList.remove("show");
      freeze(false);
    });
  };
  showModal(".sendDate", ".successfull__modal", ".close__success-modal");
} catch (error) {}

// tabs
try {
  const tabListItem = document.querySelectorAll(".products__list-item");
  const productTab = document.querySelectorAll(".product__tab-content");

  function hideTab() {
    tabListItem.forEach((item) => item.classList.remove("disabled"));
    tabListItem.forEach((item) => item.classList.remove("active"));
    productTab.forEach((el) => el.classList.remove("show"));
  }
  function showTab(idx = 0) {
    tabListItem[idx].classList.add("disabled");
    tabListItem[idx].classList.add("active");
    productTab[idx].classList.add("show");
  }
  hideTab();
  showTab();

  tabListItem.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      hideTab();
      showTab(index);
    });
  });
} catch (error) {}

try {
} catch (error) {}

// tab2
try {
  const tabItemTwo = document.querySelectorAll(".tab__item");
  const tabContentTwo = document.querySelectorAll(".tab__content-two");

  function hideTabContent() {
    tabItemTwo.forEach((item) => item.classList.remove("active"));
    tabContentTwo.forEach((content) => content.classList.remove("show"));
  }
  function showTabContent(idx = 0) {
    tabItemTwo[idx].classList.add("active");
    tabContentTwo[idx].classList.add("show");
  }
  hideTabContent();
  showTabContent(0);
  tabItemTwo.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      hideTabContent();
      showTabContent(idx);
    });
  });
} catch (error) {}
try {
  const tabItemThree = document.querySelectorAll(".tab__item-three");
  const tabContentThree = document.querySelectorAll(".tab__content-three");

  function hideTabContentThree() {
    tabItemThree.forEach((item) => item.classList.remove("active"));
    tabContentThree.forEach((content) => content.classList.remove("show"));
  }
  function showTabContentThree(idx = 0) {
    tabItemThree[idx].classList.add("active");
    tabContentThree[idx].classList.add("show");
  }
  hideTabContentThree();
  showTabContentThree(0);
  tabItemThree.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      hideTabContentThree();
      showTabContentThree(idx);
    });
  });
} catch (error) {}

try {
  const videoModal = document.querySelector(".video__modal");
  const closeVideoModal = document.querySelector(".close__video-modal");
  const openVideoModal = document.querySelectorAll(".open__video-btn");

  openVideoModal.forEach((btn) => {
    btn.addEventListener("click", () => {
      videoModal.classList.add("show");
    });
  });

  closeVideoModal.addEventListener("click", () => {
    videoModal.classList.remove("show");
  });
} catch (error) {}

try {
  const accordions = document.querySelectorAll(".accordion");

  const openAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.add("is__open");
    content.style.maxHeight = content.scrollHeight + "px";
  };

  const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.remove("is__open");
    content.style.maxHeight = null;
  };

  accordions.forEach((accordion) => {
    const intro = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");

    intro.onclick = () => {
      if (content.style.maxHeight) {
        closeAccordion(accordion);
      } else {
        accordions.forEach((accordion) => closeAccordion(accordion));
        openAccordion(accordion);
      }
    };
  });
} catch (error) {}
// footer accordion
const footerTitleBoxes = document.querySelectorAll(".footer__right .box");

const openFooterAccordion = (accordion) => {
  const content = accordion.querySelector(".footer__content");
  accordion.classList.add("is__open");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".footer__content");
  accordion.classList.remove("is__open");
  content.style.maxHeight = null;
};

footerTitleBoxes.forEach((accordion) => {
  const intro = accordion.querySelector(".plus__icon");
  const content = accordion.querySelector(".footer__content");
  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      footerTitleBoxes.forEach((accordion) => closeAccordion(accordion));
      openFooterAccordion(accordion);
    }
  };
});
try {
  // products swiper
  var swiper = new Swiper(".points__swiper", {
    slidesPerView: 6,
    spaceBetween: 40,
  });
} catch (error) {}

// tabs
try {
  const tabItemFour = document.querySelectorAll(".tab__el");
  const tabContentFour = document.querySelectorAll(".tab__content-four");
  function hideTabFour() {
    tabItemFour.forEach((item) => item.classList.remove("active"));
    tabContentFour.forEach((content) => content.classList.remove("show"));
  }
  function showTabFour(index = 0) {
    tabItemFour[index].classList.add("active");
    tabContentFour[index].classList.add("show");
  }
  hideTabFour();
  showTabFour();
  tabItemFour.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      hideTabFour();
      showTabFour(idx);
    });
  });
} catch (error) {}

try {
  const pointLoog = document.querySelector(".point__logo");
  const mapDropdown = document.querySelector(".map__dropdown");
  const closeDropdown = document.querySelector(".dropdown__close");
  pointLoog.addEventListener("click", () => {
    mapDropdown.classList.add("show");
  });
  closeDropdown.addEventListener("click", () => {
    mapDropdown.classList.remove("show");
  });
} catch (error) {}

// delivery type
try {
  function activateElements(elementSelector, callback) {
    const elements = document.querySelectorAll(elementSelector);
    elements.forEach((item) => {
      item.addEventListener("click", () => {
        elements.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
        if (callback) {
          callback(item);
        }
      });
    });
  }
  const deliveryCost = document.querySelector(".delivery__cost");

  activateElements(".delivery__type", (item) => {
    const deliveryPrice = item.querySelector(".delivery__price").textContent;
    deliveryCost.textContent = deliveryPrice;
    if (deliveryPrice.textContent === "Бесплатно") {
      deliveryCost.textContent = "0 руб.";
    }
  });

  activateElements(".payment__method-type");
} catch (error) {
  console.log(error);
}

// enter__destination
try {
  const enterDestinationInput = document.querySelector(
    ".enter__destination-input"
  );
  const destinationsList = document.querySelector(".destinations__list");
  const destinationsItem = destinationsList.querySelectorAll(
    ".destinations__item"
  );
  const resetSearch = document.querySelector(".reset__search");
  enterDestinationInput.addEventListener("click", () => {
    enterDestinationInput.value = "Населённый пункт";
    destinationsList.classList.toggle("show");

    destinationsItem.forEach((item) => {
      item.addEventListener("click", () => {
        enterDestinationInput.value = item.textContent;
        destinationsList.classList.remove("show");
      });
    });
  });
  resetSearch.addEventListener("click", () => {
    destinationsList.classList.remove("show");
    enterDestinationInput.value = "";
  });
} catch (error) {}

try {
  const selectBoxes = document.querySelectorAll(".select__box");

  selectBoxes.forEach((item) => {
    const select = item.querySelector(".select");
    const optionList = item.querySelector(".option__list");
    const optionListItems = item.querySelectorAll(".option__item");
    const selectedTextElement =
      item.querySelector(".selected__text") || select.querySelector("span");

    optionListItems.forEach((el) => {
      el.addEventListener("click", () => {
        selectedTextElement.textContent = el.textContent;
        optionList.classList.remove("show");
        optionListItems.forEach((item) => item.classList.remove("active"));
        el.classList.add("active");
      });
    });

    select.addEventListener("click", () => {
      optionList.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!item.contains(e.target)) {
        optionList.classList.remove("show");
      }
    });
  });
} catch (error) {
  console.log(error);
}

// more__details
try {
  const moreDetailsText = document.querySelector(".more__details");
  const moreDetails = document.querySelector(".more__details-box");

  moreDetailsText.addEventListener("click", () => {
    moreDetails.classList.toggle("show");

    if (moreDetailsText.textContent === "Подробнее") {
      moreDetailsText.textContent = "Скрыть";
    } else {
      moreDetailsText.textContent = "Подробнее";
    }
  });
} catch (error) {
  console.log(error);
}

// filter modal
try {
  const filterModal = document.querySelector(".filter__modal");
  const openFilterModal = document.querySelector(".open__filter-btn");
  const closeFilterModal = document.querySelector(".close__modal-btn");

  closeFilterModal.addEventListener("click", () => {
    filterModal.classList.remove("show");
    document.body.style.overflow = "";
  });
  openFilterModal.addEventListener("click", () => {
    filterModal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
} catch (error) {
  console.log(error);
}
