$(function () {
  //navbar

  (function () {
    if (document.querySelector(".header")) {
      const burger = document.getElementById("burger"),
        body = document.querySelector("body"),
        menu = document.getElementById("menu"),
        headerButton = document.querySelectorAll(".header__button"),
        closeMenuButton = document.getElementById("closeMenu"),
        headerBack = document.querySelectorAll(".header__back");

      const openMenu = (e) => {
        if (e.target.classList.contains("burgerOpen")) {
          closeMenu();
        } else {
          burger.classList.add("burgerOpen");
          body.classList.add("hidden");
          menu.style.transform = "translateX(0)";
        }
      };

      function closeMenu() {
        burger.classList.remove("burgerOpen");
        body.classList.remove("hidden");
        menu.style.transform = "translateX(-110vw)";
      }

      function openSubmenu() {
        this.nextElementSibling.style.transform = "translateX(0)";
      }

      function closeSubmenu() {
        this.parentNode.style.transform = "translateX(-110vw)";
      }

      headerButton.forEach((e) => e.addEventListener("click", openSubmenu));
      headerBack.forEach((e) => e.addEventListener("click", closeSubmenu));

      burger.addEventListener("click", openMenu);
      closeMenuButton.addEventListener("click", closeMenu);

      // close menu on click outside menu

      document.addEventListener("click", (e) => {
        let isClickInside = menu.contains(e.target);

        if (
          e.target !== burger &&
          !isClickInside &&
          burger.classList.contains("burgerOpen")
        ) {
          closeMenu();
        }
      });
    }
  })();

  // sliders

  $(".testimonials__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".portofolio__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    infinite: true,
    centerMode: true,
    arrows: true,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
