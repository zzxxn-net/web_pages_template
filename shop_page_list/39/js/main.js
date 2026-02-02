// mvp
function shopPage39() {
  return {
    cart: [],

    init: function () {
      this.setupInputReactive();
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-39[data-product="' + id + '"]');
        var btn = document.querySelector('.card-39[data-product="' + id + '"] .btn-39');
        if (card) {
          gsap.fromTo(card, { boxShadow: "6px 6px 0 #000" }, { boxShadow: "4px 4px 0 #000", duration: 0.35, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.05 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    setupInputReactive: function () {
      if (typeof gsap === "undefined") return;
      function run() {
        var cards = document.querySelectorAll(".card-39");
        cards.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
        var btns = document.querySelectorAll(".btn-39");
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
  Alpine.data("shopPage39", shopPage39);
}
