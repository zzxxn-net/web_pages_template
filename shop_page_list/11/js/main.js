// mvp
var products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/360x360/1e1b4b/a78bfa?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/360x360/1e1b4b/a78bfa?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/360x360/1e1b4b/a78bfa?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/360x360/1e1b4b/a78bfa?text=4" },
];

function shopPage11() {
  return {
    current: 0,
    products: products,
    cart: [],

    init: function () {
      this.runEnterAnimation();
    },

    goTo: function (index) {
      if (index === this.current) return;
      var prev = this.current;
      this.current = index;
      this.runSlideTransition(prev, index);
    },

    next: function () {
      if (this.current < this.products.length - 1) {
        this.goTo(this.current + 1);
      }
    },

    prev: function () {
      if (this.current > 0) {
        this.goTo(this.current - 1);
      }
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector(".btn-11");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.05 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    runSlideTransition: function (fromIdx, toIdx) {
      if (typeof gsap === "undefined") return;
      var slides = document.querySelectorAll(".shop-page-11__slide");
      var fromEl = slides[fromIdx];
      var toEl = slides[toIdx];
      if (!fromEl || !toEl) return;
      var dir = toIdx > fromIdx ? 1 : -1;
      gsap.fromTo(fromEl, { opacity: 1 }, { opacity: 0, x: -40 * dir, duration: 0.35, ease: "power2.inOut" });
      gsap.fromTo(toEl, { opacity: 0, x: 40 * dir }, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", delay: 0.05 });
    },

    runEnterAnimation: function () {
      if (typeof gsap === "undefined") return;
      var active = document.querySelector(".shop-page-11__slide--active");
      if (active) {
        gsap.fromTo(active, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage11", shopPage11);
}
