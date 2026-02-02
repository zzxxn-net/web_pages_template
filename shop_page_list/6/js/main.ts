// mvp
/**
 * 시안 6: 단일 포커스 입력 흐름 + GSAP 부드러운 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

const products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/200x200/312e81/a5b4fc?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/200x200/312e81/a5b4fc?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/200x200/312e81/a5b4fc?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/200x200/312e81/a5b4fc?text=4" },
];

function shopPage6() {
  return {
    focusedId: null as number | null,
    searchQuery: "" as string,
    products,
    cart: [] as number[],

    init() {
      this.runSmoothEntrance();
    },

    setFocus(id: number | null) {
      this.focusedId = this.focusedId === id ? null : id;
      if (typeof gsap !== "undefined") {
        const cards = document.querySelectorAll(".product-card-6");
        cards.forEach((el) => {
          const pid = (el as HTMLElement).dataset.productId;
          const numId = pid ? Number(pid) : null;
          const isFocused = this.focusedId === numId;
          gsap.to(el, { scale: isFocused ? 1.03 : 1, duration: 0.35, ease: "power2.out" });
        });
      }
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const sel = ".product-card-6[data-product-id=\"" + id + "\"] .btn-6";
        const btn = document.querySelector(sel);
        if (btn) gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    },

    runSmoothEntrance() {
      if (typeof gsap === "undefined") return;
      const searchWrap = document.querySelector(".shop-page-6__search-wrap");
      const grid = document.querySelector(".shop-page-6__grid");
      if (searchWrap) gsap.fromTo(searchWrap, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
      if (grid) gsap.fromTo(grid, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.08, ease: "power2.out" });
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage6", shopPage6);
}
