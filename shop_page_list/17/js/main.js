// mvp
function shopPage17() {
  return {
    focusedId: null,
    cart: [],

    setFocus: function (id) {
      this.focusedId = id;
      if (typeof gsap !== "undefined") {
        var card = document.querySelector('.card-17[data-product="' + id + '"]');
        if (card) {
          gsap.fromTo(card, { scale: 1.02 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.card-17[data-product="' + id + '"] .btn-17');
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage17", shopPage17);
}
