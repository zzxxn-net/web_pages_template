// mvp
/**
 * 시안 24: 감성 테크 + 단계 분할형 + 스크롤 없는 고정 플로우
 * Alpine.js 단계 전환 + GSAP 패널 전환
 */

function shopPage24() {
  return {
    step: 1,
    cart: [],

    init() {},

    goStep(next) {
      this.step = next;
      if (typeof gsap !== "undefined") {
        const panelId = "panel-24-" + next;
        const el = document.getElementById(panelId);
        if (el) {
          gsap.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
        }
      }
    },

    addToCart(id) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-24[data-product=\"" + id + "\"] .btn-24--sm");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage24", shopPage24);
}
