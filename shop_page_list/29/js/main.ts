// mvp
/**
 * 시안 29: 실험적 인터페이스 + 마이크로 인터랙션 중심 + 스크롤 없는 고정 플로우
 * GSAP 마이크로 인터랙션: 호버 기울기·스케일, 포커스 링, 버튼 클릭 바운스
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");

function shopPage29() {
  return {
    cart: [] as number[],

    init() {
      this.setupMicroInteractions();
    },

    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-29[data-product=\"" + id + "\"] .btn-29");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.15 }, { scale: 1, duration: 0.35, ease: "back.out(1.7)" });
        }
      }
    },

    setupMicroInteractions() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-29");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.02, rotation: 0.5, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, rotation: 0, duration: 0.25, ease: "power2.out" });
          });
        });
        const btns = document.querySelectorAll(".btn-29");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.05, duration: 0.15 });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.15 });
          });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage29", shopPage29);
}
