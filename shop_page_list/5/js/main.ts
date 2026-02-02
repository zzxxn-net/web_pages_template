// mvp
/**
 * 시안 5: 마이크로 인터랙션 + 스크롤 없는 고정 플로우
 * Alpine.js 탭·장바구니 + GSAP 탭 전환·호버 연출
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

const sets = [
  [
    { id: 1, name: "A1", price: "₩29,000", img: "https://placehold.co/180x180/333/fff?text=A1" },
    { id: 2, name: "A2", price: "₩39,000", img: "https://placehold.co/180x180/333/fff?text=A2" },
    { id: 3, name: "A3", price: "₩49,000", img: "https://placehold.co/180x180/333/fff?text=A3" },
    { id: 4, name: "A4", price: "₩19,000", img: "https://placehold.co/180x180/333/fff?text=A4" },
  ],
  [
    { id: 5, name: "B1", price: "₩35,000", img: "https://placehold.co/180x180/333/fff?text=B1" },
    { id: 6, name: "B2", price: "₩45,000", img: "https://placehold.co/180x180/333/fff?text=B2" },
    { id: 7, name: "B3", price: "₩55,000", img: "https://placehold.co/180x180/333/fff?text=B3" },
    { id: 8, name: "B4", price: "₩25,000", img: "https://placehold.co/180x180/333/fff?text=B4" },
  ],
];

function shopPage5() {
  return {
    tabIndex: 0,
    sets,
    cart: [] as number[],

    init() {
      this.runMicroEntrance();
      this.setupMicroHover();
    },

    get products() {
      return this.sets[this.tabIndex] || this.sets[0];
    },

    setTab(i: number) {
      if (this.tabIndex === i) return;
      if (typeof gsap !== "undefined") {
        const grid = document.querySelector(".shop-page-5__grid");
        if (grid) {
          gsap.to(grid, { opacity: 0, duration: 0.1 });
          gsap.to(grid, { opacity: 1, duration: 0.2, delay: 0.05 });
        }
      }
      this.tabIndex = i;
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const cards = document.querySelectorAll(".product-card-5");
        cards.forEach((el) => {
          const btn = el.querySelector(".btn-5");
          if (btn && (el as HTMLElement).dataset.productId === String(id)) {
            gsap.fromTo(btn, { scale: 1.15 }, { scale: 1, duration: 0.2, ease: "power2.out" });
          }
        });
      }
    },

    setupMicroHover() {
      if (typeof gsap === "undefined") return;
      const cards = document.querySelectorAll(".product-card-5");
      cards.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.02, duration: 0.15, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.15 });
        });
      });
    },

    runMicroEntrance() {
      if (typeof gsap === "undefined") return;
      const container = document.querySelector(".shop-page-5__container");
      if (container) {
        gsap.fromTo(container, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage5", shopPage5);
}
