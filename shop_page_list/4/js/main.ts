// mvp
/**
 * 시안 4: 풀스크린 몰입형 + 입력 반응형 애니메이션
 * Alpine.js 현재 상품·썸네일 선택 + GSAP 호버·클릭 반응
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

const products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/420x420/fbcfe8/9d174d?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/420x420/fbcfe8/9d174d?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/420x420/fbcfe8/9d174d?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/420x420/fbcfe8/9d174d?text=4" },
];

function shopPage4() {
  return {
    current: 0,
    products,
    cart: [] as number[],

    init() {
      this.runHeroAnimation();
      this.setupInputReactive();
    },

    selectProduct(index: number) {
      this.current = index;
      if (typeof gsap !== "undefined") {
        const hero = document.querySelector(".shop-page-4__hero");
        if (hero) {
          gsap.fromTo(hero, { scale: 0.98, opacity: 0.9 }, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".shop-page-4__hero .btn-4");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    setupInputReactive() {
      if (typeof gsap === "undefined") return;
      const thumbs = document.querySelectorAll(".product-thumb-4");
      thumbs.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.03, duration: 0.2, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.2 });
        });
      });
      const hero = document.querySelector(".shop-page-4__hero");
      if (hero) {
        hero.addEventListener("mouseenter", () => {
          gsap.to(hero, { scale: 1.02, duration: 0.25, ease: "power2.out" });
        });
        hero.addEventListener("mouseleave", () => {
          gsap.to(hero, { scale: 1, duration: 0.25 });
        });
      }
    },

    runHeroAnimation() {
      if (typeof gsap === "undefined") return;
      const hero = document.querySelector(".shop-page-4__hero");
      const strip = document.querySelector(".shop-page-4__strip");
      if (hero) {
        gsap.fromTo(hero, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
      }
      if (strip) {
        gsap.fromTo(strip, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.1, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage4", shopPage4);
}
