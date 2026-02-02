// mvp
/**
 * 시안 47: 실험적 인터페이스 + 카드 분리형 레이아웃 + GSAP 기반 부드러운 전환
 * Alpine.js 장바구니 + GSAP 카드 등장·호버·클릭 부드러운 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage47() {
  return {
    cart: [] as number[],

    init() {
      this.setupGsapTransitions();
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(
          '.card-47[data-product="' + id + '"]'
        );
        const btn = document.querySelector(
          '.card-47[data-product="' + id + '"] .btn-47'
        );
        if (card) {
          gsap.fromTo(
            card,
            { boxShadow: "0 0 0 3px rgba(238, 111, 87, 0.5)" },
            { boxShadow: "0 0 0 0 transparent", duration: 0.5, ease: "power2.out" }
          );
        }
        if (btn) {
          gsap.fromTo(
            btn,
            { scale: 1.08 },
            { scale: 1, duration: 0.4, ease: "power2.out" }
          );
        }
      }
    },

    setupGsapTransitions() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-47");
        cards.forEach((el, i) => {
          gsap.from(el, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: i * 0.08,
            ease: "power2.out",
          });
          el.addEventListener("mouseenter", () => {
            gsap.to(el, {
              scale: 1.04,
              rotation: 0,
              duration: 0.35,
              ease: "power2.out",
            });
          });
          el.addEventListener("mouseleave", () => {
            const isLeft = (el as HTMLElement).classList.contains("card-47--tilt-left");
            gsap.to(el, {
              scale: 1,
              rotation: isLeft ? -1.5 : 1.5,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        });
        const btns = document.querySelectorAll(".btn-47");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.05, duration: 0.25, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.28 });
          });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage47", shopPage47);
}
