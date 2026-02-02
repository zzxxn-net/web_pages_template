// mvp
/**
 * 시안 35: 미래적 클린 + 풀스크린 몰입형 + 입력 반응형 애니메이션
 * Alpine.js 장바구니 + GSAP 호버·포커스·클릭 반응
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage35() {
  return {
    cart: [] as number[],

    init() {
      this.setupInputReactive();
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-35[data-product=\"" + id + "\"]");
        const btn = document.querySelector(".card-35[data-product=\"" + id + "\"] .btn-35");
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 0 0 6px rgba(59, 130, 246, 0.25)" }, { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)", duration: 0.4, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.28, ease: "power2.out" });
        }
      }
    },

    setupInputReactive() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-35");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.22 });
          });
        });
        const btns = document.querySelectorAll(".btn-35");
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
  Alpine.data("shopPage35", shopPage35);
}
