// mvp
/**
 * 시안 22: 네오 브루탈리즘 + 비대칭 레이아웃 + GSAP 기반 부드러운 전환
 * Alpine.js 장바구니 + GSAP 부드러운 등장·호버·클릭 전환
 */

function shopPage22() {
  return {
    cart: [],

    init() {
      this.setupSmoothTransition();
    },

    addToCart(id) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".card-22[data-product=\"" + id + "\"] .btn-22");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.35, ease: "power2.out" });
        }
      }
    },

    setupSmoothTransition() {
      if (typeof gsap === "undefined") return;
      const run = () => {
        const cards = document.querySelectorAll(".card-22");
        gsap.fromTo(cards, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out", delay: 0.1 });
        cards.forEach((el) => {
          el.addEventListener("mouseenter", () => { gsap.to(el, { y: -4, duration: 0.3, ease: "power2.out" }); });
          el.addEventListener("mouseleave", () => { gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" }); });
        });
        const btns = document.querySelectorAll(".btn-22");
        btns.forEach((el) => {
          el.addEventListener("mouseenter", () => { gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" }); });
          el.addEventListener("mouseleave", () => { gsap.to(el, { scale: 1, duration: 0.2 }); });
        });
      };
      setTimeout(run, 60);
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage22", shopPage22);
}
