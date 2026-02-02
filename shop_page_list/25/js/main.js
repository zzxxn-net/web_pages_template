// mvp
/**
 * 시안 25: 현대 판타지 + 풀스크린 몰입형 + 상태 변화 강조
 * Alpine.js focusedId·inCart·setFocus·addToCart + GSAP 상태 강조
 */

function shopPage25() {
  return {
    focusedId: null,
    cart: [],

    inCart(id) {
      return this.cart.includes(id);
    },

    setFocus(id) {
      this.focusedId = id;
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-25[data-product=\"" + id + "\"]");
        if (card) {
          gsap.fromTo(card, { scale: 1.02 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    addToCart(id) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-25[data-product=\"" + id + "\"] .btn-25");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage25", shopPage25);
}
