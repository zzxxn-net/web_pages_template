// mvp
/**
 * 시안 2: 비대칭 레이아웃 + 상태 변화 강조
 * Alpine.js 상태(담김/좋아요) + GSAP로 상태 변경 시 짧은 피드백 애니메이션
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage2() {
  return {
    addedIds: new Set<number>(),
    likes: new Set<number>(),

    init() {
      this.runEntranceAnimation();
    },

    addWithFeedback(id: number) {
      if (this.addedIds.has(id)) return;
      this.addedIds.add(id);
      this.addedIds = new Set(this.addedIds);
      if (typeof gsap !== "undefined") {
        const el = document.querySelector(`[data-product="${id}"]`);
        if (el) {
          gsap.fromTo(el, { scale: 1.02 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    toggleLike(id: number) {
      if (this.likes.has(id)) this.likes.delete(id);
      else this.likes.add(id);
      this.likes = new Set(this.likes);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(`[data-product="${id}"] .btn-2--primary`);
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.2, ease: "power2.out" });
        }
      }
    },

    runEntranceAnimation() {
      if (typeof gsap === "undefined") return;
      const feature = document.querySelector(".shop-page-2__feature .product-card--feature");
      const list = document.querySelectorAll(".shop-page-2__list .product-card--compact");
      if (feature) {
        gsap.fromTo(feature, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      }
      gsap.fromTo(list, { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out", delay: 0.1 });
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage2", shopPage2);
}
