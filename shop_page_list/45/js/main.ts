// mvp
/**
 * 시안 45: 현대 판타지 + 비대칭 레이아웃 + 상태 변화 강조
 * Alpine.js 장바구니·isInCart·배지 + GSAP 상태 변화 강조(담김 피드백)
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage45() {
  return {
    cart: [] as number[],

    init() {
      this.setupStateEmphasis();
    },

    isInCart(id: number): boolean {
      return this.cart.indexOf(id) !== -1;
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(
          '.card-45[data-product="' + id + '"]'
        );
        const btn = document.querySelector(
          '.card-45[data-product="' + id + '"] .btn-45'
        );
        const badge = document.querySelector(".shop-page-45__badge");
        if (card) {
          gsap.fromTo(
            card,
            { boxShadow: "0 0 0 3px rgba(107, 142, 107, 0.4)" },
            { boxShadow: "0 0 0 0 transparent", duration: 0.5, ease: "power2.out" }
          );
        }
        if (btn) {
          gsap.fromTo(
            btn,
            { scale: 1.1 },
            { scale: 1, duration: 0.35, ease: "back.out(1.2)" }
          );
        }
        if (badge) {
          gsap.fromTo(
            badge,
            { scale: 1.15, opacity: 1 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
          );
        }
      }
    },

    setupStateEmphasis() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-45");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.02, duration: 0.22, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.24 });
          });
        });
        const btns = document.querySelectorAll(".btn-45");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.04, duration: 0.18, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.2 });
          });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage45", shopPage45);
}
