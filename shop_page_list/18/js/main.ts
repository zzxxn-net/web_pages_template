// mvp
/**
 * 시안 18: 감성 테크 + 단일 포커스 입력 흐름 + GSAP 기반 부드러운 전환
 * Alpine.js focusedId·setFocus·addToCart + GSAP 부드러운 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage18() {
  return {
    focusedId: null as number | null,
    cart: [] as number[],

    setFocus(id: number) {
      this.focusedId = id;
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(`.card-18[data-product="${id}"]`);
        if (card) {
          gsap.fromTo(card, { scale: 0.98, opacity: 0.92 }, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
        }
      }
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(`.card-18[data-product="${id}"] .btn-18`);
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
