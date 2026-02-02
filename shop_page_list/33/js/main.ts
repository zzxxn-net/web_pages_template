// mvp
/**
 * 시안 33: 네오 브루탈리즘 + 단계 분할형 + 스크롤 없는 고정 플로우
 * Alpine.js 단계 전환 + GSAP 패널 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage33() {
  return {
    step: 1 as number,
    cart: [] as number[],

    init() {},

    goStep(next: number) {
      this.step = next;
      if (typeof gsap !== "undefined") {
        const panelId = "panel-33-" + next;
        const el = document.getElementById(panelId);
        if (el) {
          gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-33[data-product=\"" + id + "\"] .btn-33");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage33", shopPage33);
}
