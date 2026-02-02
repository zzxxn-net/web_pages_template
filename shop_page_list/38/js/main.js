// mvp
function shopPage38() {
  return {
    cart: [],
    focusedId: 1,
    prices: { 1: "₩29,000", 2: "₩39,000", 3: "₩49,000", 4: "₩19,000" },

    init: function () {},

    setFocus: function (id) {
      if (this.focusedId === id) return;
      var main = document.getElementById("main-38");
      if (typeof gsap !== "undefined" && main) {
        gsap.fromTo(main, { opacity: 0.7, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.28, ease: "power2.out" });
      }
      this.focusedId = id;
    },

    addToCart: function (id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      var main = document.getElementById("main-38");
      if (typeof gsap !== "undefined" && main) {
        gsap.fromTo(main, { boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.4)" }, { boxShadow: "0 0 0 0 transparent", duration: 0.5, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage38", shopPage38);
}
