// mvp
function shopPage42() {
  return {
    cart: [],

    init: function () {
      this.setupSmoothTransition();
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-42[data-product="' + id + '"]');
        var btn = document.querySelector('.card-42[data-product="' + id + '"] .btn-42');
        if (card) {
          gsap.fromTo(card, { scale: 0.98, opacity: 0.95 }, { scale: 1, opacity: 1, duration: 0.38, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.05 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    setupSmoothTransition: function () {
      if (typeof gsap === "undefined") return;
      function run() {
        var cards = document.querySelectorAll(".card-42");
        cards.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.02, duration: 0.26, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.28, ease: "power2.out" });
          });
        });
        var btns = document.querySelectorAll(".btn-42");
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
  Alpine.data("shopPage42", shopPage42);
}
