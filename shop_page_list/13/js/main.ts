// mvp
/**
 * 시안 13: 감성 테크 + 비대칭 레이아웃 + 상태 변화 강조
 * Alpine.js added Set + GSAP 담김/선택 시 상태 강조
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage13() {
  return {
    added: [] as number[],

    addWithFeedback(id: number) {
      if (!this.added.includes(id)) this.added.push(id);
      if (typeof gsap === "undefined") return;
      const card = document.querySelector(`.card-13[data-product="${id}"]`);
      const btn = card ? card.querySelector(".btn-13") : null;
      if (btn) {
        gsap.fromTo(btn, { scale: 1.15 }, { scale: 1, duration: 0.35, ease: "power2.out" });
      }
      if (card) {
        gsap.fromTo(card, { boxShadow: "0 0 0 2px rgba(219, 39, 119, 0.5)" }, { boxShadow: "0 4px 18px rgba(219, 39, 119, 0.08)", duration: 0.4, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage13", shopPage13);
}
