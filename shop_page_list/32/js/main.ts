// mvp
/**
 * 시안 32: 사이버 미니멀 + 비대칭 레이아웃 + 입력 반응형 애니메이션
 * Alpine.js 장바구니 + GSAP 호버·포커스·클릭 반응
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage32() {
  return {
    cart: [] as number[],

    init() {
      this.setupInputReactive();
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-32[data-product=\"" + id + "\"]");
        const btn = document.querySelector(".card-32[data-product=\"" + id + "\"] .btn-32");
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 0 0 6px rgba(34, 211, 238, 0.4)" }, { boxShadow: "0 0 0 0 rgba(34, 211, 238, 0)", duration: 0.4, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.12 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    setupInputReactive() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-32");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
        const btns = document.querySelectorAll(".btn-32");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.04, duration: 0.16 });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.16 });
          });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage32", shopPage32);
}
