// mvp
/**
 * 시안 31: 현대 판타지 + 카드 분리형 레이아웃 + 포커스 이동 중심 UX
 * Alpine.js 포커스 상태 + GSAP 포커스 링 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage31() {
  return {
    focusedId: 1 as number,
    cart: [] as number[],

    setFocused(id: number) {
      if (this.focusedId === id) return;
      const prev = document.querySelector(".card-31[data-product=\"" + this.focusedId + "\"]");
      const next = document.querySelector(".card-31[data-product=\"" + id + "\"]");
      if (typeof gsap !== "undefined" && prev && next) {
        gsap.to(prev, { boxShadow: "0 0 0 0 rgba(217, 119, 6, 0)", duration: 0.2, ease: "power2.out" });
        gsap.fromTo(next, { boxShadow: "0 0 0 0 rgba(217, 119, 6, 0.35)" }, { boxShadow: "0 0 0 8px rgba(217, 119, 6, 0)", duration: 0.35, ease: "power2.out" });
      }
      this.focusedId = id;
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-31[data-product=\"" + id + "\"] .btn-31");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage31", shopPage31);
}
