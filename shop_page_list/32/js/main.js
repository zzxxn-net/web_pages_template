// mvp
function shopPage32() {
  return {
    cart: [],

    init: function () {
      this.setupInputReactive();
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-32[data-product="' + id + '"]');
        var btn = document.querySelector('.card-32[data-product="' + id + '"] .btn-32');
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 0 0 6px rgba(34, 211, 238, 0.4)" }, { boxShadow: "0 0 0 0 rgba(34, 211, 238, 0)", duration: 0.4, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.12 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    setupInputReactive: function () {
      if (typeof gsap === "undefined") return;
      function run() {
        var cards = document.querySelectorAll(".card-32");
        cards.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
        var btns = document.querySelectorAll(".btn-32");
        btns.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.04, duration: 0.16 });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.16 });
          });
        });
      }
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage32", shopPage32);
}
