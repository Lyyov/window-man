!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    n(1), (e.exports = n(2));
  },
  function (e, t) {
    $(function () {
      !(function () {
        if (document.querySelector(".header")) {
          const r = document.getElementById("burger"),
            o = document.querySelector("body"),
            i = document.getElementById("menu"),
            s = document.querySelectorAll(".header__button"),
            l = document.getElementById("closeMenu"),
            c = document.querySelectorAll(".header__back"),
            a = (t) => {
              t.target.classList.contains("burgerOpen")
                ? e()
                : (r.classList.add("burgerOpen"),
                  o.classList.add("hidden"),
                  (i.style.transform = "translateX(0)"));
            };
          function e() {
            r.classList.remove("burgerOpen"),
              o.classList.remove("hidden"),
              (i.style.transform = "translateX(-110vw)");
          }
          function t() {
            this.nextElementSibling.style.transform = "translateX(0)";
          }
          function n() {
            this.parentNode.style.transform = "translateX(-110vw)";
          }
          s.forEach((e) => e.addEventListener("click", t)),
            c.forEach((e) => e.addEventListener("click", n)),
            r.addEventListener("click", a),
            l.addEventListener("click", e),
            document.addEventListener("click", (t) => {
              let n = i.contains(t.target);
              t.target !== r && !n && r.classList.contains("burgerOpen") && e();
            });
        }
      })(),
        $(".testimonials__slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          centerMode: !0,
          arrows: !1,
          dots: !0,
          mobileFirst: !0,
          responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
          ],
        }),
        $(".portofolio__slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoPlay: !0,
          infinite: !0,
          centerMode: !0,
          arrows: !0,
          dots: !0,
          mobileFirst: !0,
          responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
          ],
        });
    });
  },
  function (e, t, n) {},
]);
//# sourceMappingURL=bundle.js.map
