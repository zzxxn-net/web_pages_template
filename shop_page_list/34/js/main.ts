// mvp
/**
 * 시안 34: 다크 아카이브 + 단일 포커스 입력 흐름 + GSAP 기반 부드러운 전환
 * Alpine.js 포커스 상태 + GSAP 포커스 카드 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

function shopPage34() {
  const products: Product[] = [
    { id: 1, name: "Product 1", price: "₩29,000", image: "https://placehold.co/200x200/1c1917/78716c?text=1" },
    { id: 2, name: "Product 2", price: "₩39,000", image: "https://placehold.co/200x200/1c1917/78716c?text=2" },
    { id: 3, name: "Product 3", price: "₩49,000", image: "https://placehold.co/200x200/1c1917/78716c?text=3" },
    { id: 4, name: "Product 4", price: "₩19,000", image: "https://placehold.co/200x200/1c1917/78716c?text=4" },
  ];

  return {
    products,
    focusId: 1,
    cart: [] as number[],

    init() {
      this.setupFocusTransitions();
    },

    setFocus(id: number) {
      if (this.focusId === id) return;
      if (typeof gsap === "undefined") {
        this.focusId = id;
        return;
      }
      const prevCard = document.querySelector(".focus-card-34[data-product=\"" + this.focusId + "\"]");
      const nextCard = document.querySelector(".focus-card-34[data-product=\"" + id + "\"]");
      if (prevCard && nextCard) {
        gsap.to(prevCard, { opacity: 0, scale: 0.96, duration: 0.2, ease: "power2.in" });
        gsap.fromTo(nextCard, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out", delay: 0.08 });
      }
      this.focusId = id;
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".focus-card-34[data-product=\"" + id + "\"] .btn-34");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    setupFocusTransitions() {
      if (typeof gsap === "undefined") return;
      setTimeout(() => {
        const cards = document.querySelectorAll(".focus-card-34");
        cards.forEach((el) => {
          gsap.set(el, { opacity: 0, scale: 0.96 });
        });
        const active = document.querySelector(".focus-card-34--active");
        if (active) {
          gsap.to(active, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
        }
      }, 50);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage34", shopPage34);
}
