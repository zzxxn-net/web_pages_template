// mvp
function shopPage40() {
  return {
    cart: [],

    init: function () {
      this.setupInputReactive();
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-40[data-product="' + id + '"]');
        var btn = document.querySelector('.card-40[data-product="' + id + '"] .btn-40');
        if (card) {
          gsap.fromTo(card, { opacity: 0.92, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.04 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    setupInputReactive: function () {
      if (typeof gsap === "undefined") return;
      function run() {
        var cards = document.querySelectorAll(".card-40");
        cards.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { opacity: 0.95, scale: 1.02, duration: 0.28, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });
        var btns = document.querySelectorAll(".btn-39");
        btns.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.03, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
      }
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage40", shopPage40);
}
