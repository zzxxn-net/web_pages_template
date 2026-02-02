// mvp
/**
 * 시안 20: 실험적 인터페이스 + 단계 분할형 + 포커스 이동 중심 UX
 * Alpine.js 단계 전환 + GSAP 포커스 이동 연출
 */

function shopPage20() {
  return {
    step: 1,
    cart: [],

    init() {
      this.setupFocusTransition();
    },

    goStep(next) {
      const prev = this.step;
      this.step = next;
      if (typeof gsap !== "undefined") {
        const panelId = "panel-" + next;
        const el = document.getElementById(panelId);
        if (el) {
          gsap.fromTo(el, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
        }
        if (next === 2) {
          setTimeout(() => {
            const first = document.querySelector(".card-20[data-product=\"1\"]");
            if (first) first.focus({ preventScroll: false });
          }, 100);
        }
        if (next === 3) {
          setTimeout(() => {
            const btn = document.querySelector(".shop-page-20__panel--cart .btn-20");
            if (btn) btn.focus({ preventScroll: false });
          }, 100);
        }
      }
    },

    addToCart(id) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-20[data-product=\"" + id + "\"] .btn-20--sm");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.2, ease: "power2.out" });
        }
      }
    },

    setupFocusTransition() {
      if (typeof gsap === "undefined") return;
      setTimeout(() => {
        const cards = document.querySelectorAll(".card-20");
        cards.forEach((el) => {
          el.addEventListener("focus", () => {
            gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          el.addEventListener("blur", () => {
            gsap.to(el, { scale: 1, duration: 0.2 });
          });
        });
      }, 200);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage20", shopPage20);
}
