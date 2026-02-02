// mvp
function shopPage31() {
  return {
    focusedId: 1,
    cart: [],

    setFocused: function (id) {
      if (this.focusedId === id) return;
      var prev = document.querySelector('.card-31[data-product="' + this.focusedId + '"]');
      var next = document.querySelector('.card-31[data-product="' + id + '"]');
      if (typeof gsap !== "undefined" && prev && next) {
        gsap.to(prev, { boxShadow: "0 0 0 0 rgba(217, 119, 6, 0)", duration: 0.2, ease: "power2.out" });
        gsap.fromTo(next, { boxShadow: "0 0 0 0 rgba(217, 119, 6, 0.35)" }, { boxShadow: "0 0 0 8px rgba(217, 119, 6, 0)", duration: 0.35, ease: "power2.out" });
      }
      this.focusedId = id;
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.card-31[data-product="' + id + '"] .btn-31');
        if (btn) gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage31", shopPage31);
}
