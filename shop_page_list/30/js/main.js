// mvp
function shopPage30() {
  return {
    cart: [],

    inCart: function (id) {
      return this.cart.indexOf(id) !== -1;
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) !== -1) return;
      this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-30[data-product="' + id + '"]');
        var btn = document.querySelector('.card-30[data-product="' + id + '"] .btn-30');
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.4)" }, { boxShadow: "0 0 0 8px rgba(34, 197, 94, 0)", duration: 0.5, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage30", shopPage30);
}
