// mvp
/**
 * 시안 11: 실험적 인터페이스 + 풀스크린 몰입형 + GSAP 기반 부드러운 전환
 * Alpine.js 현재 슬라이드·GSAP 슬라이드 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

const products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/360x360/1e1b4b/a78bfa?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/360x360/1e1b4b/a78bfa?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/360x360/1e1b4b/a78bfa?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/360x360/1e1b4b/a78bfa?text=4" },
];

function shopPage11() {
  return {
    current: 0,
    products,
    cart: [] as number[],

    init() {
      this.runEnterAnimation();
    },

    goTo(index: number) {
      if (index === this.current) return;
      const prev = this.current;
      this.current = index;
      this.runSlideTransition(prev, index);
    },

    next() {
      if (this.current < this.products.length - 1) {
        this.goTo(this.current + 1);
      }
    },

    prev() {
      if (this.current > 0) {
        this.goTo(this.current - 1);
      }
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".btn-11");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.05 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    runSlideTransition(fromIdx: number, toIdx: number) {
      if (typeof gsap === "undefined") return;
      const slides = document.querySelectorAll(".shop-page-11__slide");
      const fromEl = slides[fromIdx];
      const toEl = slides[toIdx];
      if (!fromEl || !toEl) return;
      const dir = toIdx > fromIdx ? 1 : -1;
      gsap.fromTo(fromEl, { opacity: 1 }, { opacity: 0, x: -40 * dir, duration: 0.35, ease: "power2.inOut" });
      gsap.fromTo(toEl, { opacity: 0, x: 40 * dir }, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", delay: 0.05 });
    },

    runEnterAnimation() {
      if (typeof gsap === "undefined") return;
      const active = document.querySelector(".shop-page-11__slide--active");
      if (active) {
        gsap.fromTo(active, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage11", shopPage11);
}
