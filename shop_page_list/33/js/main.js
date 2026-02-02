// mvp
function shopPage33() {
  return {
    step: 1,
    cart: [],

    init: function () {},

    goStep: function (next) {
      this.step = next;
      if (typeof gsap !== "undefined") {
        var panelId = "panel-33-" + next;
        var el = document.getElementById(panelId);
        if (el) {
          gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.card-33[data-product="' + id + '"] .btn-33');
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage33", shopPage33);
}
