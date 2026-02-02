// mvp
function shopPage41() {
  return {
    cart: [],

    init: function () {
      this.setupInputReactive();
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-41[data-product="' + id + '"]');
        var btn = document.querySelector('.card-41[data-product="' + id + '"] .btn-41');
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 0 0 2px rgba(71, 85, 105, 0.2)" }, { boxShadow: "0 0 0 0 transparent", duration: 0.35, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    setupInputReactive: function () {
      if (typeof gsap === "undefined") return;
      function run() {
        var cards = document.querySelectorAll(".card-41");
        cards.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { opacity: 0.95, scale: 1.02, duration: 0.28, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });
        var btns = document.querySelectorAll(".btn-41");
        btns.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.04, duration: 0.18, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.2 });
          });
        });
      }
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage41", shopPage41);
}
