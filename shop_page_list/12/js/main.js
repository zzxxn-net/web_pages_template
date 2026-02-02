// mvp
var categories = [
  { id: "a", label: "전체" },
  { id: "b", label: "추천" },
  { id: "c", label: "신상" },
];

function shopPage12() {
  return {
    step: 1,
    selectedCategory: "a",
    categories: categories,
    cart: [],

    init: function () {
      this.setupInputReactive();
    },

    selectCategory: function (id) {
      this.selectedCategory = id;
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector(".shop-page-12__category--selected");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.05 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    goNext: function () {
      this.step = 2;
      if (typeof gsap !== "undefined") {
        var grid = document.getElementById("shop-grid-12");
        if (grid) {
          gsap.fromTo(grid, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
        }
      }
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var cards = document.querySelectorAll(".product-card-12");
        var card = Array.from(cards).find(function (c) {
          return c.dataset.product === String(id);
        });
        if (card) {
          gsap.fromTo(card, { scale: 1.03 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    setupInputReactive: function () {
      if (typeof gsap === "undefined") return;
      var self = this;
      function runAfterRender() {
        var cats = document.querySelectorAll(".shop-page-12__category");
        cats.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.03, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.2 });
          });
        });
        var cards = document.querySelectorAll(".product-card-12");
        cards.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.02, duration: 0.22, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
        var btns = document.querySelectorAll(".btn-12");
        btns.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.02, duration: 0.18 });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.18 });
          });
        });
      }
      setTimeout(runAfterRender, 50);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage12", shopPage12);
}
