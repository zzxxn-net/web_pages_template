// mvp
/**
 * 시안 17: 미래적 클린 + 단일 포커스 입력 흐름 + 상태 변화 강조
 * Alpine.js focusedId·setFocus·addToCart + GSAP 포커스·담김 상태 강조
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage17() {
  return {
    focusedId: null as number | null,
    cart: [] as number[],

    setFocus(id: number) {
      this.focusedId = id;
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(`.card-17[data-product="${id}"]`);
        if (card) {
          gsap.fromTo(card, { scale: 1.02 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(`.card-17[data-product="${id}"] .btn-17`);
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
