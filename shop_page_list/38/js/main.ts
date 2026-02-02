// mvp
/**
 * 시안 38: 실험적 인터페이스 + 단일 포커스 입력 흐름 + 상태 변화 강조
 * Alpine.js focusedId + 메인 1개 + 리스트, GSAP 상태 변화 강조
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage38() {
  return {
    cart: [] as number[],
    focusedId: 1 as number,
    prices: { 1: "₩29,000", 2: "₩39,000", 3: "₩49,000", 4: "₩19,000" } as Record<number, string>,

    init() {},

    setFocus(id: number) {
      if (this.focusedId === id) return;
      const main = document.getElementById("main-38");
      if (typeof gsap !== "undefined" && main) {
        gsap.fromTo(main, { opacity: 0.7, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.28, ease: "power2.out" });
      }
      this.focusedId = id;
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      const main = document.getElementById("main-38");
      if (typeof gsap !== "undefined" && main) {
        gsap.fromTo(main, { boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.4)" }, { boxShadow: "0 0 0 0 transparent", duration: 0.5, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage38", shopPage38);
}
