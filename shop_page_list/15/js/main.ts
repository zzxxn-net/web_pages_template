// mvp
/**
 * 시안 15: 다크 아카이브 + 단계 분할형 + GSAP 기반 부드러운 전환
 * Alpine.js 단계·카테고리·장바구니 + GSAP 단계 전환·카드 등장
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

const categories = [
  { id: "a", label: "전체" },
  { id: "b", label: "추천" },
  { id: "c", label: "신상" },
];

function shopPage15() {
  return {
    step: 1,
    selectedCategory: "a",
    categories,
    cart: [] as number[],

    init() {
      this.runStep1Enter();
    },

    selectCategory(id: string) {
      this.selectedCategory = id;
    },

    goNext() {
      this.step = 2;
      if (typeof gsap !== "undefined") {
        const grid = document.getElementById("shop-grid-15");
        if (grid) {
          gsap.fromTo(grid, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
          const cards = grid.querySelectorAll(".card-15");
          gsap.fromTo(cards, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out", delay: 0.1 });
        }
      }
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(`.card-15[data-product="${id}"] .btn-15`);
        if (btn) {
          gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    runStep1Enter() {
      if (typeof gsap === "undefined") return;
      const step1 = document.querySelector(".shop-page-15__step1");
      if (step1) {
        gsap.fromTo(step1, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage15", shopPage15);
}
