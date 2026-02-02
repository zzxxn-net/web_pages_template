// mvp
/**
 * 시안 39: 네오 브루탈리즘 + 풀스크린 몰입형 + 입력 반응형 애니메이션
 * Alpine.js 장바구니 + GSAP 호버·포커스·클릭 입력 반응
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage40() {
  return {
    cart: [] as number[],

    init() {
      this.setupInputReactive();
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-40[data-product=\"" + id + "\"]");
        const btn = document.querySelector(".card-40[data-product=\"" + id + "\"] .btn-40");
        if (card) {
          gsap.fromTo(card, { opacity: 0.92, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.04 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    setupInputReactive() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-40");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { opacity: 0.95, scale: 1.02, duration: 0.28, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });
        const btns = document.querySelectorAll(".btn-40");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.03, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage40", shopPage40);
}
