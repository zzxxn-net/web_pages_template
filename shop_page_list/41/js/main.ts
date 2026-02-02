// mvp
/**
 * 시안 39: 네오 브루탈리즘 + 풀스크린 몰입형 + 입력 반응형 애니메이션
 * Alpine.js 장바구니 + GSAP 호버·포커스·클릭 입력 반응
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage41() {
  return {
    cart: [] as number[],

    init() {
      this.setupInputReactive();
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-41[data-product=\"" + id + "\"]");
        const btn = document.querySelector(".card-41[data-product=\"" + id + "\"] .btn-41");
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 0 0 2px rgba(71, 85, 105, 0.2)" }, { boxShadow: "0 0 0 0 transparent", duration: 0.35, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    setupInputReactive() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-41");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.02, duration: 0.22, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.24 });
          });
        });
        const btns = document.querySelectorAll(".btn-41");
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
  Alpine.data("shopPage41", shopPage41);
}
