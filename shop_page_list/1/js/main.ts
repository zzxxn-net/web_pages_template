// mvp

/**
 * Alpine.js 데이터 및 GSAP 초기화
 * 쇼핑 페이지 MVP: 장바구니·좋아요 상태 + 카드 등장 애니메이션
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");
declare const ScrollTrigger: unknown;

function shopPage() {
  return {
    cart: [] as number[],
    likes: new Set<number>(),

    init() {
      this.runCardAnimation();
    },

    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        gsap.to("[data-product=\"" + id + "\"]", {
          scale: 1.02,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
        });
      }
    },

    toggleLike(id: number) {
      if (this.likes.has(id)) this.likes.delete(id);
      else this.likes.add(id);
      this.likes = new Set(this.likes);
    },

    runCardAnimation() {
      if (typeof gsap === "undefined") return;
      const cards = document.querySelectorAll(".product-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage", shopPage);
}
