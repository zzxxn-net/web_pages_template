// mvp
/**
 * 시안 37: 감성 테크 + 카드 분리형 레이아웃 + 포커스 이동 중심 UX
 * Alpine.js focusedId + setFocus/moveFocus + GSAP 포커스 링 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

const PRODUCT_IDS = [1, 2, 3, 4];

function shopPage37() {
  return {
    cart: [] as number[],
    focusedId: 1 as number,

    init() {
      this.setupFocusTransition();
    },

    setFocus(id: number) {
      if (this.focusedId === id) return;
      const prev = document.querySelector(".card-37[data-product=\"" + this.focusedId + "\"]");
      const next = document.querySelector(".card-37[data-product=\"" + id + "\"]");
      if (typeof gsap !== "undefined" && prev && next) {
        gsap.to(prev, { scale: 1, duration: 0.22, ease: "power2.out" });
        gsap.fromTo(next, { scale: 1.02 }, { scale: 1.03, duration: 0.2, ease: "power2.out" });
      }
      this.focusedId = id;
      (next as HTMLElement | null)?.focus();
    },

    moveFocus(delta: number) {
      const idx = PRODUCT_IDS.indexOf(this.focusedId);
      const nextIdx = (idx + delta + PRODUCT_IDS.length) % PRODUCT_IDS.length;
      this.setFocus(PRODUCT_IDS[nextIdx]);
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-37[data-product=\"" + id + "\"] .btn-37");
        if (btn) gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.28, ease: "power2.out" });
      }
    },

    setupFocusTransition() {
      if (typeof gsap === "undefined") return;
      setTimeout(() => {
        const cards = document.querySelectorAll(".card-37");
        cards.forEach((el) => {
          el.addEventListener("focus", () => {
            const id = parseInt((el as HTMLElement).getAttribute("data-product") || "1", 10);
            if (this.focusedId !== id) this.setFocus(id);
          });
        });
      }, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage37", shopPage37);
}
