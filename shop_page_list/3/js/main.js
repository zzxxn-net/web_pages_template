// mvp - compiled from main.ts
function shopPage3() {
  return {
    step: 1,
    selectedCategory: "",
    categories: [
      { id: "all", label: "전체" },
      { id: "a", label: "카테고리 A" },
      { id: "b", label: "카테고리 B" },
    ],
    cart: [],

    init() {
      this.runStepAnimation();
      this.setupFocusListeners();
    },

    goNext() {
      if (this.step >= 2) return;
      this.step = 2;
      if (typeof gsap !== "undefined") {
        const grid = document.querySelector(".shop-page-3__grid");
        if (grid) {
          gsap.fromTo(grid, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
        }
      }
    },

    selectCategory(id) {
      this.selectedCategory = this.selectedCategory === id ? "" : id;
    },

    addToCart(id) {
      if (!this.cart.includes(id)) this.cart.push(id);
    },

    setupFocusListeners() {
      if (typeof gsap === "undefined") return;
      const categories = document.querySelectorAll(".shop-page-3__category");
      categories.forEach(function(el) {
        el.addEventListener("focus", function() {
          gsap.to(el, { scale: 1.02, duration: 0.15, ease: "power2.out" });
        });
        el.addEventListener("blur", function() {
          gsap.to(el, { scale: 1, duration: 0.15 });
        });
      });
    },

    runStepAnimation() {
      if (typeof gsap === "undefined") return;
      const content = document.querySelector(".shop-page-3__content");
      if (content) {
        gsap.fromTo(content, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage3", shopPage3);
}
