// mvp
/**
 * 시안 43: 감성 테크 + 풀스크린 몰입형 + 스크롤 없는 고정 플로우
 * Alpine.js 장바구니 + GSAP 부드러운 전환(카드·버튼 호버·클릭)
 */

function shopPage43() {
  return {
    cart: [],

    init() {
      this.setupGsapTransitions();
    },

    addToCart(id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const card = document.querySelector(
          '.card-43[data-product="' + id + '"]'
        );
        const btn = document.querySelector(
          '.card-43[data-product="' + id + '"] .btn-43'
        );
        if (card) {
          gsap.fromTo(
            card,
            { boxShadow: "0 0 0 4px rgba(217, 119, 6, 0.35)" },
            { boxShadow: "0 0 0 0 transparent", duration: 0.4, ease: "power2.out" }
          );
        }
        if (btn) {
          gsap.fromTo(
            btn,
            { scale: 1.08 },
            { scale: 1, duration: 0.3, ease: "power2.out" }
          );
        }
      }
    },

    setupGsapTransitions() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-43");
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, {
              scale: 1.03,
              duration: 0.25,
              ease: "power2.out",
            });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.28 });
          });
        });
        const btns = document.querySelectorAll(".btn-43");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(el, {
              scale: 1.05,
              duration: 0.2,
              ease: "power2.out",
            });
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
  Alpine.data("shopPage43", shopPage43);
}
