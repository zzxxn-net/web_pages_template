// mvp
/**
 * 시안 7: 실험적 인터페이스 + 상태 변화 강조
 * Alpine.js 장바구니·좋아요 + GSAP 상태 변화 피드백
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

const products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/220x220/3f3f46/a8a29e?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/220x220/3f3f46/a8a29e?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/220x220/3f3f46/a8a29e?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/220x220/3f3f46/a8a29e?text=4" },
];

function shopPage7() {
  return {
    addedIds: new Set<number>(),
    likes: new Set<number>(),
    products,
    cart: [] as number[],

    init() {
      this.runEntrance();
    },

    addToCart(id: number) {
      if (this.addedIds.has(id)) return;
      this.addedIds.add(id);
      this.addedIds = new Set(this.addedIds);
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".product-card-7[data-product-id=\"" + id + "\"]");
        if (card) {
          gsap.fromTo(card, { scale: 1.05 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    toggleLike(id: number) {
      if (this.likes.has(id)) this.likes.delete(id);
      else this.likes.add(id);
      this.likes = new Set(this.likes);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".product-card-7[data-product-id=\"" + id + "\"] .btn-7:not(.btn-7--cart)");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.2 }, { scale: 1, duration: 0.2, ease: "power2.out" });
        }
      }
    },

    runEntrance() {
      if (typeof gsap === "undefined") return;
      const cards = document.querySelectorAll(".product-card-7");
      gsap.fromTo(cards, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" });
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage7", shopPage7);
}
