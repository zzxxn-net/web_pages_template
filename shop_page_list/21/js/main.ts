// mvp
/**
 * 시안 21: 다크 아카이브 + 풀스크린 몰입형 + 입력 반응형 애니메이션
 * Alpine.js 장바구니 + GSAP 호버·클릭 입력 반응
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage21() {
  return {
    cart: [] as number[],

    init() {
      this.setupInputReactive();
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-21[data-product=\"" + id + "\"] .btn-21");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.12 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    setupInputReactive() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-21");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => { gsap.to(el, { scale: 1.03, duration: 0.22, ease: "power2.out" }); });
          el.addEventListener("mouseleave", () => { gsap.to(el, { scale: 1, duration: 0.22 }); });
        });
        const btns = document.querySelectorAll(".btn-21");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => { gsap.to(el, { scale: 1.04, duration: 0.18 }); });
          el.addEventListener("mouseleave", () => { gsap.to(el, { scale: 1, duration: 0.18 }); });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage21", shopPage21);
}
