// mvp
function shopPage28() {
  var products = [
    { id: 1, name: "Product 1", price: "₩29,000", image: "https://placehold.co/200x200/fce8d5/c29264?text=1" },
    { id: 2, name: "Product 2", price: "₩39,000", image: "https://placehold.co/200x200/fce8d5/c29264?text=2" },
    { id: 3, name: "Product 3", price: "₩49,000", image: "https://placehold.co/200x200/fce8d5/c29264?text=3" },
    { id: 4, name: "Product 4", price: "₩19,000", image: "https://placehold.co/200x200/fce8d5/c29264?text=4" },
  ];

  return {
    products: products,
    focusId: 1,
    cart: [],

    init: function () {
      this.setupFocusTransitions();
    },

    setFocus: function (id) {
      if (this.focusId === id) return;
      if (typeof gsap === "undefined") {
        this.focusId = id;
        return;
      }
      var prevCard = document.querySelector('.focus-card-28[data-product="' + this.focusId + '"]');
      var nextCard = document.querySelector('.focus-card-28[data-product="' + id + '"]');
      if (prevCard && nextCard) {
        gsap.to(prevCard, { opacity: 0, scale: 0.96, duration: 0.2, ease: "power2.in" });
        gsap.fromTo(nextCard, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out", delay: 0.08 });
      }
      this.focusId = id;
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector('.focus-card-28[data-product="' + id + '"] .btn-28');
        if (btn) gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    },

    setupFocusTransitions: function () {
      if (typeof gsap === "undefined") return;
      var self = this;
      setTimeout(function () {
        var cards = document.querySelectorAll(".focus-card-28");
        cards.forEach(function (el) {
          gsap.set(el, { opacity: 0, scale: 0.96 });
        });
        var active = document.querySelector(".focus-card-28--active");
        if (active) gsap.to(active, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
      }, 50);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage28", shopPage28);
}
