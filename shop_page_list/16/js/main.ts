// mvp
/**
 * 시안 16: 사이버 미니멀 + 풀스크린 몰입형 + 스크롤 없는 고정 플로우
 * Alpine.js 페이지 인덱스·currentProducts + GSAP 페이지 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

const PER_PAGE = 4;
const products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/180x180/131920/22d3ee?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/180x180/131920/22d3ee?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/180x180/131920/22d3ee?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/180x180/131920/22d3ee?text=4" },
  { id: 5, name: "Product 5", price: "₩35,000", img: "https://placehold.co/180x180/131920/22d3ee?text=5" },
  { id: 6, name: "Product 6", price: "₩45,000", img: "https://placehold.co/180x180/131920/22d3ee?text=6" },
  { id: 7, name: "Product 7", price: "₩55,000", img: "https://placehold.co/180x180/131920/22d3ee?text=7" },
  { id: 8, name: "Product 8", price: "₩25,000", img: "https://placehold.co/180x180/131920/22d3ee?text=8" },
];

function shopPage16() {
  return {
    pageIndex: 0,
    products,
    pageCount: Math.ceil(products.length / PER_PAGE),
    cart: [] as number[],

    get currentProducts() {
      const start = this.pageIndex * PER_PAGE;
      return this.products.slice(start, start + PER_PAGE);
    },

    goPage(index: number) {
      if (index === this.pageIndex) return;
      if (typeof gsap !== "undefined") {
        const grid = document.getElementById("shop-grid-16");
        if (grid) {
          gsap.to(grid, { opacity: 0, duration: 0.2, ease: "power2.in", onComplete: () => { this.pageIndex = index; } });
          setTimeout(() => {
            gsap.to(grid, { opacity: 1, duration: 0.3, ease: "power2.out" });
          }, 50);
        } else {
          this.pageIndex = index;
        }
      } else {
        this.pageIndex = index;
      }
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(`.card-16[data-product-id="${id}"] .btn-16`);
        if (btn) {
          gsap.fromTo(btn, { scale: 1.05 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage16", shopPage16);
}
