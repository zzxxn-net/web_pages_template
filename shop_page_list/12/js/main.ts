// mvp
/**
 * 시안 12: 현대 판타지 + 단계 분할형 + 입력 반응형 애니메이션
 * Alpine.js 단계·카테고리·장바구니 + GSAP 호버·클릭 반응
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

function shopPage12() {
  return {
    step: 1,
    selectedCategory: "a",
    categories,
    cart: [] as number[],

    init() {
      this.setupInputReactive();
    },

    selectCategory(id: string) {
      this.selectedCategory = id;
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".shop-page-12__category--selected");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.05 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    goNext() {
      this.step = 2;
      if (typeof gsap !== "undefined") {
        const grid = document.getElementById("shop-grid-12");
        if (grid) {
          gsap.fromTo(grid, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
        }
      }
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const cards = document.querySelectorAll(".product-card-12");
        const card = Array.from(cards).find((c) => (c as HTMLElement).dataset.product === String(id));
        if (card) {
          gsap.fromTo(card, { scale: 1.03 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    setupInputReactive() {
      if (typeof gsap === "undefined") return;
      const runAfterRender = () => {
        const cats = document.querySelectorAll(".shop-page-12__category");
        cats.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.03, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.2 });
          });
        });
        const cards = document.querySelectorAll(".product-card-12");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.02, duration: 0.22, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
        const btns = document.querySelectorAll(".btn-12");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.02, duration: 0.18 });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.18 });
          });
        });
      };
      setTimeout(runAfterRender, 50);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage12", shopPage12);
}
