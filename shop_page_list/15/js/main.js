// mvp
var categories = [
  { id: "a", label: "전체" },
  { id: "b", label: "추천" },
  { id: "c", label: "신상" },
];

function shopPage15() {
  return {
    step: 1,
    selectedCategory: "a",
    categories: categories,
    cart: [],

    init: function () {
      this.runStep1Enter();
    },

    selectCategory: function (id) {
      this.selectedCategory = id;
    },

    goNext: function () {
      this.step = 2;
      if (typeof gsap !== "undefined") {
        var grid = document.getElementById("shop-grid-15");
        if (grid) {
          gsap.fromTo(grid, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
          var cards = grid.querySelectorAll(".card-15");
          gsap.fromTo(cards, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out", delay: 0.1 });
        }
      }
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.card-15[data-product="' + id + '"] .btn-15');
        if (btn) {
          gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    runStep1Enter: function () {
      if (typeof gsap === "undefined") return;
      var step1 = document.querySelector(".shop-page-15__step1");
      if (step1) {
        gsap.fromTo(step1, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage15", shopPage15);
}
