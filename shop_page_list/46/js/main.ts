// mvp
/**
 * 시안 46: 네오 브루탈리즘 + 단일 포커스 입력 흐름 + 포커스 이동 중심 UX
 * Alpine.js 단일 focusedId·setFocused·장바구니 + GSAP 포커스 이동 시 부드러운 전환
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage46() {
  return {
    cart: [] as number[],
    focusedId: 0 as number,

    init() {
      this.setupFocusTransition();
    },

    setFocused(id: number) {
      const prev = this.focusedId;
      this.focusedId = id;
      if (typeof gsap !== "undefined" && prev !== id) {
        const prevEl = document.querySelector(
          '.card-46[data-product="' + prev + '"]'
        );
        const nextEl = document.querySelector(
          '.card-46[data-product="' + id + '"]'
        );
        if (prevEl) {
          gsap.to(prevEl, { scale: 1, duration: 0.2, ease: "power2.out" });
        }
        if (nextEl) {
          gsap.fromTo(
            nextEl,
            { scale: 1 },
            { scale: 1.03, duration: 0.25, ease: "power2.out" }
          );
        }
      }
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(
          '.card-46[data-product="' + id + '"] .btn-46'
        );
        if (btn) {
          gsap.fromTo(
            btn,
            { scale: 1.1 },
            { scale: 1, duration: 0.3, ease: "power2.out" }
          );
        }
      }
    },

    setupFocusTransition() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-46");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            const id = Number((el as HTMLElement).dataset.product);
            if (this.focusedId !== id) this.setFocused(id);
          });
          el.addEventListener("focus", () => {
            const id = Number((el as HTMLElement).dataset.product);
            if (this.focusedId !== id) this.setFocused(id);
          });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage46", shopPage46);
}
