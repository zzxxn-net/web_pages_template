// mvp
var PRODUCT_IDS = [1, 2, 3, 4];

function shopPage37() {
  return {
    cart: [],
    focusedId: 1,

    init: function () {
      this.setupFocusTransition();
    },

    setFocus: function (id) {
      if (this.focusedId === id) return;
      var prev = document.querySelector('.card-37[data-product="' + this.focusedId + '"]');
      var next = document.querySelector('.card-37[data-product="' + id + '"]');
      if (typeof gsap !== "undefined" && prev && next) {
        gsap.to(prev, { scale: 1, duration: 0.22, ease: "power2.out" });
        gsap.fromTo(next, { scale: 1.02 }, { scale: 1.03, duration: 0.2, ease: "power2.out" });
      }
      this.focusedId = id;
      if (next) next.focus();
    },

    moveFocus: function (delta) {
      var idx = PRODUCT_IDS.indexOf(this.focusedId);
      var nextIdx = (idx + delta + PRODUCT_IDS.length) % PRODUCT_IDS.length;
      this.setFocus(PRODUCT_IDS[nextIdx]);
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.card-37[data-product="' + id + '"] .btn-37');
        if (btn) gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.28, ease: "power2.out" });
      }
    },

    setupFocusTransition: function () {
      var self = this;
      if (typeof gsap === "undefined") return;
      setTimeout(function () {
        var cards = document.querySelectorAll(".card-37");
        cards.forEach(function (el) {
          el.addEventListener("focus", function () {
            var id = parseInt(el.getAttribute("data-product") || "1", 10);
            if (self.focusedId !== id) self.setFocus(id);
          });
        });
      }, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage37", shopPage37);
}
