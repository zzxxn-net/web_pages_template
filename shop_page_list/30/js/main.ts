// mvp
/**
 * 시안 30: 미래적 클린 + 풀스크린 몰입형 + 상태 변화 강조
 * Alpine.js 담김 상태 + GSAP 상태 변화 강조
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage30() {
  return {
    cart: [] as number[],

    inCart(id: number) {
      return this.cart.indexOf(id) !== -1;
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) !== -1) return;
      this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-30[data-product=\"" + id + "\"]");
        const btn = document.querySelector(".card-30[data-product=\"" + id + "\"] .btn-30");
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.4)" }, { boxShadow: "0 0 0 8px rgba(34, 197, 94, 0)", duration: 0.5, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage30", shopPage30);
}
