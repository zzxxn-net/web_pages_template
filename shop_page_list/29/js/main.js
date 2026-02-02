// mvp
function shopPage29() {
  return {
    cart: [],

    init: function () {
      this.setupMicroInteractions();
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.card-29[data-product="' + id + '"] .btn-29');
        if (btn) gsap.fromTo(btn, { scale: 1.15 }, { scale: 1, duration: 0.35, ease: "back.out(1.7)" });
      }
    },

    setupMicroInteractions: function () {
      if (typeof gsap === "undefined") return;
      function run() {
        var cards = document.querySelectorAll(".card-29");
        cards.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.02, rotation: 0.5, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, rotation: 0, duration: 0.25, ease: "power2.out" });
          });
        });
        var btns = document.querySelectorAll(".btn-29");
        btns.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.05, duration: 0.15 });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.15 });
          });
        });
      }
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage29", shopPage29);
}
