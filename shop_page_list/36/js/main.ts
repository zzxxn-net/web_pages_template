// mvp
/**
 * 시안 36: 현대 판타지 + 마이크로 인터랙션 중심 + GSAP 기반 부드러운 전환
 * Alpine.js 장바구니 + GSAP 마이크로 인터랙션(호버·포커스·클릭·아이콘)
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage36() {
  return {
    cart: [] as number[],

    init() {
      this.setupMicroInteractions();
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(".card-36[data-product=\"" + id + "\"]");
        const btn = document.querySelector(".card-36[data-product=\"" + id + "\"] .btn-36");
        const icon = document.querySelector(".card-36[data-product=\"" + id + "\"] .btn-36__icon");
        if (card) {
          gsap.fromTo(card, { boxShadow: "0 8px 24px rgba(120, 53, 15, 0.12)" }, { boxShadow: "0 2px 8px rgba(120, 53, 15, 0.06)", duration: 0.45, ease: "power2.out" });
        }
        if (btn) {
          gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
        if (icon) {
          gsap.fromTo(icon, { scale: 1.4, rotation: 12 }, { scale: 1, rotation: 0, duration: 0.35, ease: "back.out(1.2)" });
        }
      }
    },

    setupMicroInteractions() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-36");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { y: -4, duration: 0.25, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { y: 0, duration: 0.22, ease: "power2.out" });
          });
        });
        const btns = document.querySelectorAll(".btn-36");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.03, duration: 0.18, ease: "power2.out" });
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
  Alpine.data("shopPage36", shopPage36);
}
