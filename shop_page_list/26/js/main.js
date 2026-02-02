// mvp
/**
 * 시안 26: 사이버 미니멀 + 단계 분할형 + 상태 변화 강조
 * Alpine.js step·goStep·focusedId·inCart·setFocus·addToCart + GSAP
 */

function shopPage26() {
  return {
    step: 1,
    focusedId: null,
    cart: [],

    inCart(id) {
      return this.cart.includes(id);
    },

    goStep(next) {
      this.step = next;
      if (typeof gsap !== "undefined") {
        const el = document.getElementById("panel-26-" + next);
        if (el) {
          gsap.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
        }
      }
    },

    setFocus(id) {
      this.focusedId = id;
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-26[data-product=\"" + id + "\"]");
        if (card) {
          gsap.fromTo(card, { scale: 1.02 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    addToCart(id) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-26[data-product=\"" + id + "\"] .btn-26");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage26", shopPage26);
}
