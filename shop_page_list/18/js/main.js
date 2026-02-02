// mvp
function shopPage18() {
  return {
    focusedId: null,
    cart: [],

    setFocus: function (id) {
      this.focusedId = id;
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-18[data-product="' + id + '"]');
        if (card) {
          gsap.fromTo(card, { scale: 0.98, opacity: 0.92 }, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
        }
      }
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.card-18[data-product="' + id + '"] .btn-18');
        if (btn) {
          gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.35, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage18", shopPage18);
}
