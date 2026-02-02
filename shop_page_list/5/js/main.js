// mvp - compiled from main.ts
var sets = [
  [
    { id: 1, name: "A1", price: "₩29,000", img: "https://placehold.co/180x180/333/fff?text=A1" },
    { id: 2, name: "A2", price: "₩39,000", img: "https://placehold.co/180x180/333/fff?text=A2" },
    { id: 3, name: "A3", price: "₩49,000", img: "https://placehold.co/180x180/333/fff?text=A3" },
    { id: 4, name: "A4", price: "₩19,000", img: "https://placehold.co/180x180/333/fff?text=A4" },
  ],
  [
    { id: 5, name: "B1", price: "₩35,000", img: "https://placehold.co/180x180/333/fff?text=B1" },
    { id: 6, name: "B2", price: "₩45,000", img: "https://placehold.co/180x180/333/fff?text=B2" },
    { id: 7, name: "B3", price: "₩55,000", img: "https://placehold.co/180x180/333/fff?text=B3" },
    { id: 8, name: "B4", price: "₩25,000", img: "https://placehold.co/180x180/333/fff?text=B4" },
  ],
];

function shopPage5() {
  return {
    tabIndex: 0,
    sets: sets,
    cart: [],

    init: function() {
      this.runMicroEntrance();
      this.setupMicroHover();
    },

    get products() {
      return this.sets[this.tabIndex] || this.sets[0];
    },

    setTab: function(i) {
      if (this.tabIndex === i) return;
      if (typeof gsap !== "undefined") {
        var grid = document.querySelector(".shop-page-5__grid");
        if (grid) {
          gsap.to(grid, { opacity: 0, duration: 0.1 });
          gsap.to(grid, { opacity: 1, duration: 0.2, delay: 0.05 });
        }
      }
      this.tabIndex = i;
    },

    addToCart: function(id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var cards = document.querySelectorAll(".product-card-5");
        cards.forEach(function(el) {
          var btn = el.querySelector(".btn-5");
          if (btn && el.dataset.productId === String(id)) {
            gsap.fromTo(btn, { scale: 1.15 }, { scale: 1, duration: 0.2, ease: "power2.out" });
          }
        });
      }
    },

    setupMicroHover: function() {
      if (typeof gsap === "undefined") return;
      var cards = document.querySelectorAll(".product-card-5");
      cards.forEach(function(el) {
        el.addEventListener("mouseenter", function() {
          gsap.to(el, { scale: 1.02, duration: 0.15, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", function() {
          gsap.to(el, { scale: 1, duration: 0.15 });
        });
      });
    },

    runMicroEntrance: function() {
      if (typeof gsap === "undefined") return;
      var container = document.querySelector(".shop-page-5__container");
      if (container) {
        gsap.fromTo(container, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage5", shopPage5);
}
