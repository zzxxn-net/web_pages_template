// mvp
function shopPage14() {
  return {
    cart: [],

    init: function () {
      this.setupFocusReactive();
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.card-14[data-product="' + id + '"] .btn-14');
        if (btn) {
          gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    setupFocusReactive: function () {
      if (typeof gsap === "undefined") return;
      function run() {
        var cards = document.querySelectorAll(".card-14");
        cards.forEach(function (el) {
          el.addEventListener("focusin", function () {
            gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("focusout", function () {
            gsap.to(el, { scale: 1, duration: 0.2 });
          });
        });
        var btns = document.querySelectorAll(".btn-14");
        btns.forEach(function (el) {
          el.addEventListener("focus", function () {
            gsap.to(el, { scale: 1.03, duration: 0.15, ease: "power2.out" });
          });
          el.addEventListener("blur", function () {
            gsap.to(el, { scale: 1, duration: 0.15 });
          });
        });
      }
      setTimeout(run, 80);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage14", shopPage14);
}
