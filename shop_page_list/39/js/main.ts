// mvp
/**
 * 시안 39: 네오 브루탈리즘 + 풀스크린 몰입형 + 입력 반응형 애니메이션
 * Alpine.js 장바구니 + GSAP 호버·포커스·클릭 입력 반응
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage39() {
  return {
    cart: [] as number[],

    init() {
      this.setupInputReactive();
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-39[data-product=\"" + id + "\"]");
        const btn = document.querySelector(".card-39[data-product=\"" + id + "\"] .btn-39");
        if (card) {
          gsap.fromTo(card, { boxShadow: "6px 6px 0 #000" }, { boxShadow: "4px 4px 0 #000", duration: 0.35, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.05 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    setupInputReactive() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-39");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
        const btns = document.querySelectorAll(".btn-39");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.04, duration: 0.16 });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.18 });
          });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage39", shopPage39);
}
