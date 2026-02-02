// mvp - 시안 48: 사이버 미니멀 + 단계 분할형 + 스크롤 없는 고정 플로우
declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");

function shopPage48() {
  return {
    cart: [] as number[],
    init() {
      this.setupGsapTransitions();
    },
    addToCart(id: number) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector('.card-48[data-product="' + id + '"]');
        const btn = document.querySelector('.card-48[data-product="' + id + '"] .btn-48');
        if (card) gsap.fromTo(card, { boxShadow: "0 0 0 2px rgba(71,85,105,0.3)" }, { boxShadow: "0 0 0 0 transparent", duration: 0.4, ease: "power2.out" });
        if (btn) gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    },
    setupGsapTransitions() {
      if (typeof gsap === "undefined") return;
      setTimeout(() => {
        document.querySelectorAll(".card-48").forEach((el) => {
          el.addEventListener("mouseenter", () => { gsap.to(el, { scale: 1.02, duration: 0.22, ease: "power2.out" }); });
          el.addEventListener("mouseleave", () => { gsap.to(el, { scale: 1, duration: 0.24 }); });
        });
        document.querySelectorAll(".btn-48").forEach((el) => {
          el.addEventListener("mouseenter", () => { gsap.to(el, { scale: 1.04, duration: 0.18, ease: "power2.out" }); });
          el.addEventListener("mouseleave", () => { gsap.to(el, { scale: 1, duration: 0.2 }); });
        });
      }, 60);
    },
  };
}
if (typeof Alpine !== "undefined") Alpine.data("shopPage48", shopPage48);
