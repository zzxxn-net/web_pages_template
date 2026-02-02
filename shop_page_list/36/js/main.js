// mvp
function shopPage36() {
  return {
    cart: [],

    init: function () {
      this.setupMicroInteractions();
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-36[data-product="' + id + '"]');
        var btn = document.querySelector('.card-36[data-product="' + id + '"] .btn-36');
        var icon = document.querySelector('.card-36[data-product="' + id + '"] .btn-36__icon');
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 8px 24px rgba(120, 53, 15, 0.12)" }, { boxShadow: "0 2px 8px rgba(120, 53, 15, 0.06)", duration: 0.45, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
        if (icon) {
          gsap.fromTo(icon, { scale: 1.4, rotation: 12 }, { scale: 1, rotation: 0, duration: 0.35, ease: "back.out(1.2)" });
        }
      }
    },

    setupMicroInteractions: function () {
      if (typeof gsap === "undefined") return;
      function run() {
        var cards = document.querySelectorAll(".card-36");
        cards.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { y: -4, duration: 0.25, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { y: 0, duration: 0.22, ease: "power2.out" });
          });
        });
        var btns = document.querySelectorAll(".btn-36");
        btns.forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            gsap.to(el, { scale: 1.03, duration: 0.18, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", function () {
            gsap.to(el, { scale: 1, duration: 0.18 });
          });
        });
      }
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage36", shopPage36);
}
