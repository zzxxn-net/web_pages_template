// mvp
/**
 * 시안 14: 네오 브루탈리즘 + 카드 분리형 + 포커스 이동 중심 UX
 * Alpine.js 장바구니 + GSAP 포커스 시 카드/버튼 강조
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage14() {
  return {
    cart: [] as number[],

    init() {
      this.setupFocusReactive();
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(`.card-14[data-product="${id}"] .btn-14`);
        if (btn) {
          gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    setupFocusReactive() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-14");
        cards.forEach((el) => {
          el.addEventListener("focusin", () => {
            gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("focusout", () => {
            gsap.to(el, { scale: 1, duration: 0.2 });
          });
        });
        const btns = document.querySelectorAll(".btn-14");
        btns.forEach((el) => {
          el.addEventListener("focus", () => {
            gsap.to(el, { scale: 1.03, duration: 0.15, ease: "power2.out" });
          });
          el.addEventListener("blur", () => {
            gsap.to(el, { scale: 1, duration: 0.15 });
          });
        });
      };
      setTimeout(run, 80);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage14", shopPage14);
}
